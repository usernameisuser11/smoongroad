# 수뭉로드 — Render + Neon 배포판

상명대학교 서울캠퍼스 전공 탐색·비교·궁합 검사·대학생활 로드맵 서비스입니다.

이 버전은 다음 구조로 작동합니다.

- 로그인 없이 모든 핵심 기능 이용
- 게스트 데이터는 브라우저 `localStorage`에 저장
- Google 또는 카카오 로그인 선택 시 Neon에 계정 데이터 동기화
- 로그인 직후 게스트 데이터와 기존 계정 데이터를 자동 병합
- Render Web Service 한 개가 프런트엔드와 API를 함께 제공
- 서버 시작 시 Neon 테이블을 자동 생성

## 1. 프로젝트 구조

```text
smoongroad/
├─ public/
│  ├─ index.html
│  ├─ styles.css
│  ├─ app.js
│  ├─ privacy.html
│  ├─ terms.html
│  └─ robots.txt
├─ server.js
├─ db.js
├─ schema.sql
├─ package.json
├─ render.yaml
├─ .env.example
└─ README.md
```

## 2. 로컬 실행

Node.js 22 이상이 필요합니다.

```bash
npm install
cp .env.example .env
npm run dev
```

브라우저에서 아래 주소를 엽니다.

```text
http://localhost:10000
```

`DATABASE_URL`을 넣지 않아도 게스트 기능은 실행됩니다. 계정 로그인과 서버 동기화만 비활성화됩니다.

## 3. Neon 준비

1. Neon에서 새 프로젝트를 만듭니다.
2. 프로젝트 대시보드에서 **Connect**를 누릅니다.
3. **Connection pooling**을 켭니다.
4. 호스트 이름에 `-pooler`가 포함된 연결 문자열을 복사합니다.
5. Render 환경변수 `DATABASE_URL`에 그대로 입력합니다.

예시 형식:

```text
postgresql://USER:PASSWORD@HOST-pooler.REGION.aws.neon.tech/DBNAME?sslmode=require
```

서버가 처음 실행될 때 아래 테이블을 자동 생성합니다.

- `users`
- `oauth_accounts`
- `sessions`
- `user_data`
- `feedback`

직접 생성하고 싶을 때만 `schema.sql`을 Neon SQL Editor에서 실행하면 됩니다.

## 4. GitHub에 올리기

```bash
git init
git add .
git commit -m "Deploy Smoongroad with Render and Neon"
git branch -M main
git remote add origin https://github.com/사용자명/저장소명.git
git push -u origin main
```

`.env`는 `.gitignore`에 포함되어 있으므로 GitHub에 올리지 않습니다.

## 5. Render 배포

### 방법 A — Blueprint 사용

1. Render에서 **New > Blueprint**를 선택합니다.
2. GitHub 저장소를 연결합니다.
3. 저장소의 `render.yaml`을 인식시킵니다.
4. 생성된 Web Service의 Environment에 아래 값을 입력합니다.

### 방법 B — Web Service 직접 생성

- Runtime: `Node`
- Build Command: `npm install --no-audit --no-fund`
- Start Command: `npm start`
- Health Check Path: `/api/health`

필수 환경변수:

```text
NODE_ENV=production
DATABASE_URL=<Neon pooled connection string>
APP_BASE_URL=https://서비스이름.onrender.com
SESSION_SECRET=<길고 무작위인 문자열>
```

선택 환경변수:

```text
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
KAKAO_REST_API_KEY=
KAKAO_CLIENT_SECRET=
```

`render.yaml`을 사용하면 `SESSION_SECRET`은 자동 생성됩니다. 직접 Web Service를 만들었다면 충분히 긴 무작위 값을 직접 입력해야 합니다.

배포 후 아래 주소에서 상태를 확인할 수 있습니다.

```text
https://서비스이름.onrender.com/api/health
```

정상 예시:

```json
{
  "ok": true,
  "database": true,
  "providers": {
    "google": false,
    "kakao": false,
    "database": true
  }
}
```

## 6. Google 로그인 연결

Google Cloud Console에서 OAuth 클라이언트를 **웹 애플리케이션** 유형으로 만듭니다.

승인된 리디렉션 URI:

```text
https://서비스이름.onrender.com/api/auth/google/callback
```

로컬 테스트 URI:

```text
http://localhost:10000/api/auth/google/callback
```

발급받은 값을 Render에 입력합니다.

```text
GOOGLE_CLIENT_ID=<OAuth Client ID>
GOOGLE_CLIENT_SECRET=<OAuth Client Secret>
```

OAuth 동의 화면에는 다음 주소를 등록하는 것이 좋습니다.

```text
홈페이지: https://서비스이름.onrender.com
개인정보처리방침: https://서비스이름.onrender.com/privacy.html
이용약관: https://서비스이름.onrender.com/terms.html
```

## 7. 카카오 로그인 연결

Kakao Developers에서 애플리케이션을 만든 뒤 다음을 설정합니다.

1. 카카오 로그인 활성화
2. Web 플랫폼 사이트 도메인 등록
3. Redirect URI 등록
4. REST API 키 확인
5. Client secret 발급 및 활성화

사이트 도메인:

```text
https://서비스이름.onrender.com
```

Redirect URI:

```text
https://서비스이름.onrender.com/api/auth/kakao/callback
```

로컬 테스트 URI:

```text
http://localhost:10000/api/auth/kakao/callback
```

Render 환경변수:

```text
KAKAO_REST_API_KEY=<REST API 키>
KAKAO_CLIENT_SECRET=<Client secret 코드>
```

## 8. 로그인 이후 데이터 흐름

```text
게스트로 이용
→ 브라우저에 자동 저장
→ Google 또는 카카오 로그인
→ Neon의 기존 데이터 불러오기
→ 게스트 데이터와 중복 제거 후 병합
→ 병합 결과를 Neon에 저장
→ 이후 변경 시 자동 동기화
```

동기화 대상:

- 관심 분야
- 현재 전공과 학년
- 저장한 전공
- 비교 목록
- 로드맵과 로드맵 이름
- 화면 테마

로그아웃해도 이 기기의 데이터는 유지됩니다. 계정 삭제를 선택하면 Neon의 사용자·세션·동기화 데이터가 삭제되며, 이 기기의 로컬 데이터는 남습니다.

## 9. 배포 전 반드시 수정할 부분

`public/privacy.html`과 `public/terms.html`의 문의 항목에 실제 운영자 연락처를 넣어야 합니다.

또한 다음 항목을 확인하세요.

- 공식 학교 서비스가 아니라는 표시 유지
- 전공 데이터의 출처와 확인일 점검
- Google 및 카카오 OAuth 동의 화면의 서비스명·로고·도메인 일치
- 커스텀 도메인을 붙이면 `APP_BASE_URL`과 두 제공자의 Redirect URI도 새 도메인으로 변경
- Render 환경변수에 비밀키를 입력하고 GitHub에는 올리지 않기

## 10. 주요 API

```text
GET    /api/health
GET    /api/auth/providers
GET    /api/auth/me
GET    /api/auth/google/start
GET    /api/auth/google/callback
GET    /api/auth/kakao/start
GET    /api/auth/kakao/callback
POST   /api/auth/logout
GET    /api/user-data
PUT    /api/user-data
POST   /api/feedback
DELETE /api/account
```

전공 정보 오류 제보는 `feedback` 테이블에 저장되며 Neon SQL Editor에서 확인할 수 있습니다.

세션 토큰은 원문을 데이터베이스에 저장하지 않고 SHA-256 해시로 저장합니다. 브라우저에는 `HttpOnly`, `Secure`, `SameSite=Lax` 쿠키로 전달됩니다.
