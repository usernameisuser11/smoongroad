const majors = [
  {id:'history',name:'역사콘텐츠전공',college:'인문사회과학대학',group:'인문콘텐츠학부',color:'#8a6b49',desc:'역사 지식을 문화콘텐츠로 해석하고 기획하는 전공',interests:['인문','콘텐츠','문화'],styles:['읽기·쓰기','기획·창작'],scores:{logic:52,creative:78,people:48,practical:58},courses:['역사학 기초','문화유산 이해','역사콘텐츠 기획','디지털 아카이빙'],careers:['문화콘텐츠 기획','박물관·아카이브','출판·미디어'],fit:'자료를 깊이 읽고 이야기를 구조화하는 일을 좋아하는 학생',url:'https://history.smu.ac.kr/'},
  {id:'ip',name:'지적재산권전공',college:'인문사회과학대학',group:'인문콘텐츠학부',color:'#6f7a9d',desc:'법·산업·콘텐츠를 잇는 지식재산 전문가를 준비하는 전공',interests:['법·정책','비즈니스','콘텐츠'],styles:['읽기·쓰기','분석·토론'],scores:{logic:78,creative:54,people:55,practical:69},courses:['법학 기초','저작권 이해','산업재산권','IP 비즈니스'],careers:['지식재산 실무','법무·특허 지원','콘텐츠 권리관리'],fit:'규칙과 사례를 분석하고 논리적으로 판단하는 것을 선호하는 학생',url:'https://cr.smu.ac.kr/'},
  {id:'library',name:'문헌정보학전공',college:'인문사회과학대학',group:'인문콘텐츠학부',color:'#5b8876',desc:'정보를 수집·분류·보존하고 사람에게 연결하는 전공',interests:['정보','인문','사람'],styles:['정리·분석','서비스·소통'],scores:{logic:68,creative:47,people:67,practical:67},courses:['정보조직','정보검색','도서관경영','디지털 아카이브'],careers:['사서','정보관리','기록·아카이브'],fit:'정보를 체계적으로 정리하고 필요한 사람에게 안내하는 일을 좋아하는 학생',url:'https://libinfo.smu.ac.kr/'},
  {id:'japan',name:'한일문화콘텐츠전공',college:'인문사회과학대학',group:'인문콘텐츠학부',color:'#b26b7a',desc:'일본어와 한일 문화를 바탕으로 콘텐츠를 탐구하는 전공',interests:['언어','문화','콘텐츠'],styles:['읽기·쓰기','발표·소통'],scores:{logic:42,creative:73,people:63,practical:55},courses:['일본어 기초','한일문화 비교','대중문화 분석','문화콘텐츠 기획'],careers:['문화교류','콘텐츠 기획','관광·무역'],fit:'언어를 배우고 문화의 차이를 콘텐츠로 풀어내는 데 흥미가 있는 학생',url:'https://kjc.smu.ac.kr/'},
  {id:'space',name:'공간환경학부',college:'인문사회과학대학',group:'학부 및 학과',color:'#4b807e',desc:'도시·환경·공간 데이터를 통해 삶의 터전을 분석하는 학부',interests:['도시·환경','데이터','정책'],styles:['현장·프로젝트','분석·설계'],scores:{logic:74,creative:62,people:47,practical:78},courses:['공간환경 기초','도시계획','GIS','환경정책'],careers:['도시계획','공간정보','환경·지역개발'],fit:'지도와 공간을 통해 사회 문제를 분석하고 해결안을 설계하는 학생',url:'https://space.smu.ac.kr/'},
  {id:'public',name:'행정학부',college:'인문사회과학대학',group:'학부 및 학과',color:'#57739a',desc:'공공문제와 정책을 분석하고 조직 운영을 배우는 학부',interests:['법·정책','사회','조직'],styles:['읽기·쓰기','분석·토론'],scores:{logic:73,creative:40,people:67,practical:61},courses:['행정학 원론','정책학','조직론','재무행정'],careers:['공공기관','행정·정책','공기업'],fit:'사회문제와 제도를 논리적으로 살피고 공공의 해결책을 고민하는 학생',url:'https://public.smu.ac.kr/'},
  {id:'family',name:'가족복지학과',college:'인문사회과학대학',group:'학부 및 학과',color:'#b77d73',desc:'개인과 가족의 삶을 이해하고 복지 실천을 배우는 학과',interests:['사람','복지','상담'],styles:['서비스·소통','현장·프로젝트'],scores:{logic:45,creative:48,people:94,practical:78},courses:['가족학','사회복지개론','상담 기초','복지실천'],careers:['사회복지','가족상담','복지기관'],fit:'사람의 상황을 공감하고 실제적인 도움을 만드는 데 보람을 느끼는 학생',url:'https://smfamily.smu.ac.kr/'},
  {id:'security',name:'국가안보학과',college:'인문사회과학대학',group:'학부 및 학과',color:'#576b55',desc:'국가안보·군사·국제정세를 종합적으로 탐구하는 학과',interests:['안보','정책','국제'],styles:['분석·토론','조직·실행'],scores:{logic:72,creative:35,people:65,practical:79},courses:['국가안보론','군사학','국제정세','리더십'],careers:['군 장교','안보·공공기관','국방 분야'],fit:'조직과 책임을 중시하고 국제정세와 안보 문제를 분석하는 학생',url:'https://ns.smu.ac.kr/'},
  {id:'koredu',name:'국어교육과',college:'사범대학',group:'학과',color:'#9a644c',desc:'국어와 문학을 깊이 이해하고 가르치는 역량을 기르는 학과',interests:['교육','언어','문학'],styles:['읽기·쓰기','발표·소통'],scores:{logic:55,creative:70,people:86,practical:65},courses:['국어학','한국문학','국어교육론','교과교재연구'],careers:['중등교사','교육콘텐츠','출판·교육'],fit:'언어와 문학을 좋아하고 다른 사람의 배움을 돕는 데 관심 있는 학생',url:'https://koredu.smu.ac.kr/'},
  {id:'engedu',name:'영어교육과',college:'사범대학',group:'학과',color:'#6b739e',desc:'영어 의사소통과 언어교육 전문성을 함께 기르는 학과',interests:['교육','언어','국제'],styles:['발표·소통','읽기·쓰기'],scores:{logic:55,creative:59,people:88,practical:68},courses:['영어학','영미문학','영어교육론','영어교수법'],careers:['중등교사','영어교육','국제교육'],fit:'언어로 소통하고 학습자의 성장을 이끄는 일을 좋아하는 학생',url:'https://engedu.smu.ac.kr/'},
  {id:'education',name:'교육학과',college:'사범대학',group:'학과',color:'#7f6794',desc:'학습·상담·교육제도와 에듀테크를 폭넓게 탐구하는 학과',interests:['교육','사람','정책'],styles:['분석·토론','서비스·소통'],scores:{logic:65,creative:57,people:90,practical:62},courses:['교육학개론','교육심리','교육과정','교육공학'],careers:['교육기획','상담·HRD','교육연구'],fit:'사람이 배우는 과정과 더 나은 교육환경을 설계하는 데 관심 있는 학생',url:'https://learning.smu.ac.kr/'},
  {id:'mathedu',name:'수학교육과',college:'사범대학',group:'학과',color:'#3f7193',desc:'수학적 사고와 효과적인 수학교육 방법을 함께 배우는 학과',interests:['교육','수학','논리'],styles:['문제풀이','설명·소통'],scores:{logic:96,creative:48,people:76,practical:57},courses:['해석학','대수학','수학교육론','수학교재연구'],careers:['중등교사','교육콘텐츠','수학 교육연구'],fit:'논리적 문제 해결을 즐기고 풀이 과정을 설명하는 데 보람을 느끼는 학생',url:'https://mathed.smu.ac.kr/'},
  {id:'economics',name:'경제금융학부',college:'경영경제대학',group:'학부 및 학과',color:'#476f8e',desc:'경제현상과 금융시장을 데이터와 이론으로 분석하는 학부',interests:['경제·금융','데이터','정책'],styles:['수리·분석','읽기·토론'],scores:{logic:91,creative:37,people:43,practical:68},courses:['경제학원론','미시경제','거시경제','금융시장론'],careers:['금융기관','경제분석','공공·정책'],fit:'수치와 사회현상을 연결해 원인과 결과를 분석하는 학생',url:'https://econo.smu.ac.kr/'},
  {id:'business',name:'경영학부',college:'경영경제대학',group:'학부 및 학과',color:'#4b6f72',desc:'조직·마케팅·재무·생산 등 기업 활동 전반을 배우는 학부',interests:['비즈니스','조직','마케팅'],styles:['팀프로젝트','분석·발표'],scores:{logic:70,creative:65,people:73,practical:82},courses:['경영학원론','마케팅','재무관리','경영전략'],careers:['기업 경영지원','마케팅','재무·기획'],fit:'여러 사람과 협업해 현실적인 문제를 해결하고 성과를 만드는 학생',url:'https://smubiz.smu.ac.kr/'},
  {id:'globalbiz',name:'글로벌경영학과',college:'경영경제대학',group:'학부 및 학과',color:'#5879a1',desc:'국제 비즈니스와 외국어·문화 이해를 결합한 학과',interests:['비즈니스','국제','언어'],styles:['발표·소통','팀프로젝트'],scores:{logic:62,creative:60,people:80,practical:78},courses:['국제경영','글로벌마케팅','무역실무','비즈니스 커뮤니케이션'],careers:['글로벌 기업','무역·유통','해외영업'],fit:'다른 문화의 사람들과 소통하며 비즈니스 기회를 찾는 학생',url:'https://gbiz.smu.ac.kr/'},
  {id:'convergencebiz',name:'융합경영학과',college:'경영경제대학',group:'학부 및 학과',color:'#667e68',desc:'일과 학습을 연결해 실무형 경영 역량을 기르는 학과',interests:['비즈니스','조직','실무'],styles:['현장·프로젝트','조직·실행'],scores:{logic:61,creative:55,people:70,practical:93},courses:['경영기초','조직관리','현장문제해결','경영프로젝트'],careers:['기업 실무','조직관리','창업·사업운영'],fit:'현장의 경험을 이론과 연결하고 바로 적용하는 학습을 선호하는 학생',url:'https://imgmt.smu.ac.kr/'},
  {id:'humanai',name:'휴먼지능정보공학전공',college:'융합공과대학',group:'지능·데이터융합학부',color:'#3979a8',desc:'AI와 인간 중심 기술을 함께 설계하는 융합 공학 전공',interests:['AI·소프트웨어','사람','데이터'],styles:['코딩·구현','프로젝트'],scores:{logic:89,creative:68,people:57,practical:86},courses:['프로그래밍','인공지능 기초','데이터분석','휴먼컴퓨터상호작용'],careers:['AI 개발','데이터 분석','UX·지능형서비스'],fit:'기술을 사람의 문제에 적용하고 직접 구현하는 것을 좋아하는 학생',url:'https://hi.smu.ac.kr/'},
  {id:'fintech',name:'핀테크전공',college:'융합공과대학',group:'지능·데이터융합학부',color:'#3f7890',desc:'금융과 소프트웨어·데이터 기술을 결합하는 전공',interests:['AI·소프트웨어','경제·금융','데이터'],styles:['코딩·구현','수리·분석'],scores:{logic:94,creative:48,people:35,practical:88},courses:['프로그래밍','금융공학 기초','데이터베이스','핀테크 서비스'],careers:['핀테크 개발','금융데이터','디지털금융'],fit:'수치와 기술을 함께 다루고 금융 서비스를 구현하고 싶은 학생',url:'https://fbs.smu.ac.kr/'},
  {id:'bigdata',name:'빅데이터융합전공',college:'융합공과대학',group:'지능·데이터융합학부',color:'#4f6f9c',desc:'다양한 분야의 데이터를 수집·분석해 의미를 찾는 전공',interests:['데이터','AI·소프트웨어','분석'],styles:['코딩·구현','수리·분석'],scores:{logic:97,creative:45,people:30,practical:84},courses:['통계 기초','데이터구조','머신러닝','데이터 시각화'],careers:['데이터 분석','AI·ML','비즈니스 인텔리전스'],fit:'복잡한 자료에서 패턴을 찾고 근거를 바탕으로 판단하는 학생',url:'https://fbs.smu.ac.kr/'},
  {id:'smartprod',name:'스마트생산전공',college:'융합공과대학',group:'지능·데이터융합학부',color:'#557c72',desc:'생산 시스템을 데이터와 자동화 기술로 개선하는 전공',interests:['공학','AI·소프트웨어','산업'],styles:['현장·프로젝트','수리·분석'],scores:{logic:88,creative:45,people:39,practical:95},courses:['생산관리','산업데이터','자동화 시스템','스마트팩토리'],careers:['스마트팩토리','생산·품질관리','산업데이터'],fit:'시스템의 효율을 높이고 실제 공정을 개선하는 데 흥미가 있는 학생',url:'https://fbs.smu.ac.kr/'},
  {id:'cs',name:'컴퓨터과학전공',college:'융합공과대학',group:'SW융합학부',color:'#246ba2',desc:'소프트웨어·시스템·알고리즘을 설계하고 구현하는 전공',interests:['AI·소프트웨어','데이터','시스템'],styles:['코딩·구현','문제풀이'],scores:{logic:98,creative:67,people:30,practical:95},courses:['프로그래밍','자료구조','알고리즘','운영체제','소프트웨어공학'],careers:['소프트웨어 개발','백엔드·프론트엔드','시스템·AI'],fit:'문제를 쪼개 논리적으로 해결하고 결과물을 직접 만드는 학생',url:'https://cs.smu.ac.kr/'},
  {id:'electrical',name:'전기공학전공',college:'융합공과대학',group:'SW융합학부',color:'#4d6f91',desc:'전기·전자 시스템과 제어·에너지 기술을 배우는 전공',interests:['공학','에너지','하드웨어'],styles:['수리·분석','실험·제작'],scores:{logic:95,creative:48,people:27,practical:94},courses:['회로이론','전자기학','제어공학','전력시스템'],careers:['전기·전자 엔지니어','전력·에너지','제어·설비'],fit:'수학과 물리 원리를 실제 장치와 시스템에 적용하는 학생',url:'https://electric.smu.ac.kr/'},
  {id:'aiot',name:'지능IOT융합전공',college:'융합공과대학',group:'SW융합학부',color:'#347a83',desc:'센서·네트워크·AI로 연결된 지능형 기기를 만드는 전공',interests:['AI·소프트웨어','하드웨어','네트워크'],styles:['코딩·구현','실험·제작'],scores:{logic:92,creative:67,people:28,practical:96},courses:['프로그래밍','임베디드시스템','네트워크','IoT 프로젝트'],careers:['IoT 개발','임베디드','스마트디바이스'],fit:'소프트웨어와 하드웨어를 연결해 실제로 작동하는 것을 만들고 싶은 학생',url:'https://aiot.smu.ac.kr/'},
  {id:'game',name:'게임전공',college:'융합공과대학',group:'SW융합학부',color:'#695a9b',desc:'게임 기획·프로그래밍·그래픽의 협업 제작을 배우는 전공',interests:['게임','AI·소프트웨어','콘텐츠'],styles:['코딩·구현','기획·창작'],scores:{logic:82,creative:95,people:56,practical:94},courses:['게임기획','게임프로그래밍','컴퓨터그래픽스','게임프로젝트'],careers:['게임 개발','게임 기획','테크니컬 아트'],fit:'기술과 창작을 함께 쓰며 팀으로 완성도 있는 결과물을 만드는 학생',url:'https://game.smu.ac.kr/'},
  {id:'animation',name:'애니메이션전공',college:'융합공과대학',group:'SW융합학부',color:'#a26072',desc:'스토리와 움직임을 시각적으로 표현하는 콘텐츠 전공',interests:['콘텐츠','예술','스토리'],styles:['기획·창작','실습·제작'],scores:{logic:40,creative:99,people:43,practical:90},courses:['드로잉','스토리보드','2D·3D 애니메이션','졸업작품'],careers:['애니메이터','콘텐츠 제작','모션·캐릭터'],fit:'이미지와 움직임으로 이야기를 만들고 반복 제작을 즐기는 학생',url:'https://animation.smu.ac.kr/'},
  {id:'biotech',name:'생명공학전공',college:'융합공과대학',group:'생명화학공학부',color:'#4e886a',desc:'생명현상을 공학적으로 이해하고 바이오 기술에 적용하는 전공',interests:['생명','공학','연구'],styles:['실험·제작','수리·분석'],scores:{logic:87,creative:51,people:28,practical:91},courses:['일반생물학','생화학','분자생물학','생명공학실험'],careers:['바이오 연구','제약·식품','품질·생산'],fit:'생명현상을 관찰하고 실험으로 가설을 검증하는 과정을 좋아하는 학생',url:'https://biotechnology.smu.ac.kr/'},
  {id:'chemenergy',name:'화학에너지공학전공',college:'융합공과대학',group:'생명화학공학부',color:'#587d8c',desc:'화학 원리를 에너지·환경 기술에 적용하는 공학 전공',interests:['화학','에너지','공학'],styles:['실험·제작','수리·분석'],scores:{logic:92,creative:45,people:24,practical:94},courses:['일반화학','물리화학','에너지공학','화학공정실험'],careers:['에너지 산업','화학공정','환경·소재'],fit:'화학과 수학을 활용해 에너지 문제의 기술적 해법을 찾는 학생',url:'https://energy.smu.ac.kr/'},
  {id:'materials',name:'화공신소재전공',college:'융합공과대학',group:'생명화학공학부',color:'#6c7890',desc:'화학공정과 새로운 소재의 설계·제조를 배우는 전공',interests:['화학','소재','공학'],styles:['실험·제작','수리·분석'],scores:{logic:91,creative:53,people:23,practical:95},courses:['화공양론','유기화학','재료공학','공정설계'],careers:['화학·소재 산업','반도체 소재','공정·품질'],fit:'물질의 특성과 제조 과정을 이해하고 성능을 개선하는 학생',url:'https://ichem.smu.ac.kr/'},
  {id:'food',name:'식품영양학전공',college:'융합공과대학',group:'생명화학공학부',color:'#7d8a54',desc:'식품과 영양을 과학적으로 이해하고 건강에 적용하는 전공',interests:['식품','건강','생명'],styles:['실험·제작','서비스·소통'],scores:{logic:73,creative:55,people:72,practical:88},courses:['식품학','영양학','조리과학','급식경영'],careers:['영양사','식품 연구·품질','건강·급식'],fit:'과학적 지식을 일상 식생활과 사람의 건강에 적용하고 싶은 학생',url:'https://food.smu.ac.kr/'},
  {id:'fashion',name:'의류학과',college:'문화예술대학',group:'의류학과',color:'#a36f7b',desc:'패션 디자인·소재·산업을 함께 이해하는 학과',interests:['패션','예술','비즈니스'],styles:['기획·창작','실습·제작'],scores:{logic:43,creative:96,people:56,practical:89},courses:['패션디자인','의복구성','텍스타일','패션마케팅'],careers:['패션디자인','MD·브랜딩','소재·생산'],fit:'미적 감각을 실제 제품으로 구현하고 트렌드를 산업과 연결하는 학생',url:'https://fashionindustry.smu.ac.kr/'},
  {id:'sports',name:'스포츠건강관리전공',college:'문화예술대학',group:'스포츠무용학부',color:'#4e817a',desc:'운동과 건강을 과학적으로 관리하는 실천형 전공',interests:['스포츠','건강','사람'],styles:['신체·현장','서비스·소통'],scores:{logic:58,creative:45,people:84,practical:96},courses:['운동생리학','스포츠지도','건강관리','트레이닝론'],careers:['스포츠지도','건강관리','운동처방'],fit:'몸을 움직이고 사람의 건강 변화를 현장에서 돕는 학생',url:'https://smpe.smu.ac.kr/'},
  {id:'dance',name:'무용예술전공',college:'문화예술대학',group:'스포츠무용학부',color:'#9b6a92',desc:'신체 움직임을 예술적 표현과 공연으로 발전시키는 전공',interests:['무용','공연','예술'],styles:['신체·현장','기획·창작'],scores:{logic:25,creative:99,people:62,practical:96},courses:['전공실기','안무법','공연제작','무용이론'],careers:['무용수·안무가','공연기획','문화예술교육'],fit:'신체로 표현하고 반복 연습을 통해 공연을 완성하는 학생',url:'https://dance.smu.ac.kr/'},
  {id:'finearts',name:'조형예술전공',college:'문화예술대학',group:'미술학부',color:'#8f6a55',desc:'다양한 재료와 매체로 시각적 아이디어를 표현하는 전공',interests:['미술','예술','콘텐츠'],styles:['기획·창작','실습·제작'],scores:{logic:34,creative:100,people:35,practical:88},courses:['기초조형','회화·조각','현대미술론','작품제작'],careers:['작가','전시·문화기획','시각예술'],fit:'정해진 답보다 자신만의 관점과 표현 방식을 탐구하는 학생',url:'https://finearts.smu.ac.kr/'},
  {id:'livingarts',name:'생활예술전공',college:'문화예술대학',group:'미술학부',color:'#88755a',desc:'공예와 생활 속 디자인을 실용적 결과물로 만드는 전공',interests:['공예','디자인','생활'],styles:['실습·제작','기획·창작'],scores:{logic:38,creative:98,people:42,practical:95},courses:['기초디자인','공예재료','생활제품디자인','작품제작'],careers:['공예·제품디자인','문화상품','창작 스튜디오'],fit:'손으로 만들고 재료를 탐구해 일상에서 쓰이는 작품을 완성하는 학생',url:'https://smulad.smu.ac.kr/'},
  {id:'music',name:'음악학부',college:'문화예술대학',group:'음악학부',color:'#6d6799',desc:'연주·창작·음악 이론을 깊이 있게 훈련하는 학부',interests:['음악','공연','예술'],styles:['실기·반복','기획·창작'],scores:{logic:42,creative:99,people:55,practical:95},courses:['전공실기','음악이론','앙상블','공연실습'],careers:['연주·창작','음악교육','공연·문화기획'],fit:'꾸준한 개인 연습과 협연을 통해 음악적 완성도를 높이는 학생',url:'https://music.smu.ac.kr/'}
];

const storage={
  get(key,fallback){try{return localStorage.getItem(key)??fallback}catch{return fallback}},
  set(key,value){try{localStorage.setItem(key,value)}catch{}}
};

const state={
  route:'home',
  saved:new Set(JSON.parse(storage.get('smoongroad_saved','[]'))),
  compare:JSON.parse(storage.get('smoongroad_compare','[]')).slice(0,3),
  filters:{colleges:new Set(),interests:new Set(),styles:new Set(),search:'',sort:'default'},
  fit:{step:0,answers:Array(8).fill(null)},
  activeSemester:'3-2',
  roadmap:JSON.parse(storage.get('smoongroad_roadmap','{}'))
};

const colleges=[...new Set(majors.map(m=>m.college))];
const interestOptions=['AI·소프트웨어','데이터','콘텐츠','교육','사람','비즈니스','예술','공학','법·정책','건강'];
const styleOptions=['코딩·구현','수리·분석','기획·창작','실습·제작','발표·소통','현장·프로젝트'];
const scoreLabels={logic:'논리·분석',creative:'창작·표현',people:'사람·소통',practical:'실행·실습'};
const typeLabels={course:'전공 수업',project:'프로젝트',activity:'비교과·활동',career:'진로·자격증',personal:'개인 목표'};
const typeColors={course:'#276ca4',project:'#8465a8',activity:'#3b8870',career:'#b37935',personal:'#8c6570'};

const fitQuestions=[
  {q:'과제를 시작할 때 더 끌리는 모습은?',opts:[{t:'복잡한 문제를 단계별로 나눈다',s:'규칙과 구조를 먼저 찾는 편',v:{logic:3}},{t:'새로운 관점과 표현부터 떠올린다',s:'나만의 아이디어를 만드는 편',v:{creative:3}},{t:'누구에게 도움이 되는지 생각한다',s:'사용자와 관계를 먼저 보는 편',v:{people:3}},{t:'일단 작은 결과물을 만들어본다',s:'직접 해보며 배우는 편',v:{practical:3}}]},
  {q:'수업을 듣고 가장 뿌듯한 순간은?',opts:[{t:'원리를 정확히 이해했을 때',s:'왜 그런지 설명할 수 있다',v:{logic:3}},{t:'내 생각을 작품으로 표현했을 때',s:'결과물에 개성이 드러난다',v:{creative:3}},{t:'상대가 이해하거나 변화했을 때',s:'사람에게 긍정적 영향을 준다',v:{people:3}},{t:'배운 것을 실제로 적용했을 때',s:'현실에서 작동하는 결과가 생긴다',v:{practical:3}}]},
  {q:'팀프로젝트에서 자연스럽게 맡는 역할은?',opts:[{t:'자료와 문제를 분석하는 역할',s:'근거를 모아 방향을 정한다',v:{logic:2,practical:1}},{t:'아이디어와 콘셉트를 만드는 역할',s:'차별점을 구상하고 표현한다',v:{creative:3}},{t:'의견을 듣고 조율하는 역할',s:'팀 분위기와 소통을 관리한다',v:{people:3}},{t:'일정과 결과물을 완성하는 역할',s:'해야 할 일을 끝까지 추진한다',v:{practical:3}}]},
  {q:'오래 집중할 수 있는 활동은?',opts:[{t:'퍼즐 코딩 수치 분석',s:'명확한 문제를 해결하는 활동',v:{logic:3,practical:1}},{t:'그리기 글쓰기 기획 창작',s:'새로운 것을 만드는 활동',v:{creative:3}},{t:'상담 설명 교육 협업',s:'사람과 상호작용하는 활동',v:{people:3}},{t:'실험 제작 운동 현장활동',s:'몸과 도구를 사용하는 활동',v:{practical:3}}]},
  {q:'모호한 문제를 만났을 때 나는?',opts:[{t:'조건과 자료부터 정리한다',s:'판단 기준을 명확히 만든다',v:{logic:3}},{t:'여러 가능성을 자유롭게 펼친다',s:'의외의 연결을 시도한다',v:{creative:3}},{t:'당사자의 이야기를 먼저 듣는다',s:'상황과 감정을 이해한다',v:{people:3}},{t:'작게 시험해보고 수정한다',s:'행동과 피드백으로 좁힌다',v:{practical:3}}]},
  {q:'선호하는 평가 방식은?',opts:[{t:'정답과 논리가 분명한 시험',s:'이해와 정확성을 확인한다',v:{logic:3}},{t:'작품 포트폴리오 발표',s:'개성과 완성도를 보여준다',v:{creative:3}},{t:'토론 협업 관찰평가',s:'과정과 소통을 중요하게 본다',v:{people:3}},{t:'실습 프로젝트 수행평가',s:'실제 수행 능력을 보여준다',v:{practical:3}}]},
  {q:'진로에서 가장 중요한 가치는?',opts:[{t:'전문성과 문제 해결',s:'깊은 기술과 지식을 쌓는다',v:{logic:3}},{t:'창의성과 자기표현',s:'새로운 결과와 관점을 만든다',v:{creative:3}},{t:'사람과 사회에 미치는 영향',s:'누군가의 삶을 더 낫게 한다',v:{people:3}},{t:'현실적인 성과와 실행력',s:'눈에 보이는 변화를 만든다',v:{practical:3}}]},
  {q:'새로운 분야를 배울 때 편한 방식은?',opts:[{t:'개념과 체계를 먼저 공부한다',s:'전체 구조를 이해한 뒤 연습한다',v:{logic:3}},{t:'사례를 보며 아이디어를 확장한다',s:'다양한 결과에서 영감을 얻는다',v:{creative:3}},{t:'사람과 대화하며 이해한다',s:'질문하고 설명하며 배운다',v:{people:3}},{t:'도구를 만지며 바로 따라 한다',s:'시행착오 속에서 익힌다',v:{practical:3}}]}
];

const $=(s,root=document)=>root.querySelector(s);
const $$=(s,root=document)=>[...root.querySelectorAll(s)];

function persist(){
  storage.set('smoongroad_saved',JSON.stringify([...state.saved]));
  storage.set('smoongroad_compare',JSON.stringify(state.compare));
  storage.set('smoongroad_roadmap',JSON.stringify(state.roadmap));
}
function toast(message){const el=$('#toast');el.textContent=message;el.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>el.classList.remove('show'),1800)}
function majorById(id){return majors.find(m=>m.id===id)}
function routeTo(route){
  state.route=route;
  $$('.view').forEach(v=>v.classList.toggle('active-view',v.id===route));
  $$('[data-route]').forEach(b=>b.classList.toggle('active',b.dataset.route===route));
  $$('.nav-link').forEach(b=>b.classList.toggle('active',b.dataset.route===route));
  window.scrollTo({top:0,behavior:'smooth'});
  history.replaceState(null,'',`#${route}`);
  if(route==='compare') renderCompare();
  if(route==='roadmap') renderRoadmap();
}

function renderFilters(){
  $('#collegeFilters').innerHTML=colleges.map(c=>`<label><input type="checkbox" value="${c}"><span>${c}</span></label>`).join('');
  $('#interestFilters').innerHTML=interestOptions.map(x=>`<label><input type="checkbox" value="${x}"><span>${x}</span></label>`).join('');
  $('#styleFilters').innerHTML=styleOptions.map(x=>`<label><input type="checkbox" value="${x}"><span>${x}</span></label>`).join('');
  $$('#collegeFilters input').forEach(i=>i.addEventListener('change',()=>{i.checked?state.filters.colleges.add(i.value):state.filters.colleges.delete(i.value);renderMajors()}));
  $$('#interestFilters input').forEach(i=>i.addEventListener('change',()=>{i.checked?state.filters.interests.add(i.value):state.filters.interests.delete(i.value);renderMajors()}));
  $$('#styleFilters input').forEach(i=>i.addEventListener('change',()=>{i.checked?state.filters.styles.add(i.value):state.filters.styles.delete(i.value);renderMajors()}));
}
function matchesFlexible(list,selected){return !selected.size||[...selected].some(s=>list.some(x=>x.includes(s)||s.includes(x)))}
function filteredMajors(){
  let result=majors.filter(m=>{
    const text=`${m.name} ${m.college} ${m.desc} ${m.interests.join(' ')} ${m.careers.join(' ')}`.toLowerCase();
    return (!state.filters.search||text.includes(state.filters.search.toLowerCase()))&&
      (!state.filters.colleges.size||state.filters.colleges.has(m.college))&&
      matchesFlexible(m.interests,state.filters.interests)&&matchesFlexible(m.styles,state.filters.styles);
  });
  if(state.filters.sort==='name') result.sort((a,b)=>a.name.localeCompare(b.name,'ko'));
  if(state.filters.sort==='practice') result.sort((a,b)=>b.scores.practical-a.scores.practical);
  if(state.filters.sort==='creative') result.sort((a,b)=>b.scores.creative-a.scores.creative);
  return result;
}
function renderMajors(){
  const result=filteredMajors();
  $('#resultCount').textContent=result.length;
  $('#majorGrid').innerHTML=result.map(m=>`
    <article class="major-card" style="--card-color:${m.color}">
      <div class="major-card-top"><span class="college-badge">${m.college.replace('대학','')}</span><button class="save-icon ${state.saved.has(m.id)?'saved':''}" data-save="${m.id}" aria-label="저장">${state.saved.has(m.id)?'♥':'♡'}</button></div>
      <h3>${m.name}</h3><p>${m.desc}</p>
      <div class="major-tags">${m.interests.slice(0,3).map(t=>`<span>${t}</span>`).join('')}</div>
      <div class="major-meter">
        <div><span>분석</span><i><b style="width:${m.scores.logic}%"></b></i></div><div><span>실습</span><i><b style="width:${m.scores.practical}%"></b></i></div>
        <div><span>창작</span><i><b style="width:${m.scores.creative}%"></b></i></div><div><span>소통</span><i><b style="width:${m.scores.people}%"></b></i></div>
      </div>
      <div class="major-card-actions"><button data-compare="${m.id}">${state.compare.includes(m.id)?'비교에서 빼기':'비교 담기'}</button><button class="primary-mini" data-detail="${m.id}">자세히 보기</button></div>
    </article>`).join('');
  $('#majorGrid').hidden=!result.length;$('#emptyState').hidden=!!result.length;
  bindMajorActions();
}
function bindMajorActions(root=document){
  $$('[data-save]',root).forEach(b=>b.onclick=()=>toggleSaved(b.dataset.save));
  $$('[data-compare]',root).forEach(b=>b.onclick=()=>toggleCompare(b.dataset.compare));
  $$('[data-detail]',root).forEach(b=>b.onclick=()=>openMajor(b.dataset.detail));
}
function toggleSaved(id){state.saved.has(id)?state.saved.delete(id):state.saved.add(id);persist();updateSavedCount();renderMajors();renderSaved();toast(state.saved.has(id)?'관심 전공에 저장했습니다':'저장을 해제했습니다')}
function toggleCompare(id){
  if(state.compare.includes(id)){state.compare=state.compare.filter(x=>x!==id);toast('비교 목록에서 제외했습니다')}
  else if(state.compare.length>=3){toast('전공은 최대 3개까지 비교할 수 있습니다');return}
  else{state.compare.push(id);toast('비교 목록에 담았습니다')}
  persist();renderMajors();renderCompare();
}
function resetFilters(){state.filters={colleges:new Set(),interests:new Set(),styles:new Set(),search:'',sort:'default'};$('#majorSearch').value='';$('#sortMajors').value='default';$$('.filter-panel input[type=checkbox]').forEach(i=>i.checked=false);renderMajors()}

function openMajor(id){
  const m=majorById(id);if(!m)return;
  $('#majorModalContent').innerHTML=`
    <div class="modal-hero" style="--modal-color:${m.color}"><span>${m.college} · ${m.group}</span><h2>${m.name}</h2><p>${m.desc}</p></div>
    <div class="modal-body">
      <section class="modal-section"><h3>이런 학생에게 잘 맞아요</h3><p style="font-size:12px;color:var(--muted);margin:0">${m.fit}</p></section>
      <section class="modal-section"><h3>핵심 키워드</h3><div class="modal-keywords">${m.interests.map(t=>`<span>${t}</span>`).join('')}${m.styles.map(t=>`<span>${t}</span>`).join('')}</div></section>
      <section class="modal-section"><h3>학습 성격</h3><div class="modal-score-grid">${Object.entries(m.scores).map(([k,v])=>`<div class="modal-score"><span>${scoreLabels[k]}</span><b>${v}</b></div>`).join('')}</div></section>
      <section class="modal-section"><h3>대표 학습 흐름 <small style="color:var(--muted);font-weight:500">탐색용 예시</small></h3><div class="course-flow">${m.courses.map((c,i)=>`${i?'<i></i>':''}<span>${c}</span>`).join('')}</div></section>
      <section class="modal-section modal-lists"><div><h3>연결 가능한 진로</h3><ul>${m.careers.map(c=>`<li>${c}</li>`).join('')}</ul></div><div><h3>서비스 활용 팁</h3><ul><li>관심 전공에 저장해 다시 확인하기</li><li>비슷한 전공과 수업 성격 비교하기</li><li>로드맵에 기초 과목이나 활동 추가하기</li></ul></div></section>
      <div class="modal-actions"><button data-compare="${m.id}">${state.compare.includes(m.id)?'비교 목록에서 빼기':'비교 목록에 담기'}</button><button data-save="${m.id}" style="background:var(--surface-2);color:var(--text)">${state.saved.has(m.id)?'저장 해제':'관심 전공 저장'}</button><a href="${m.url}" target="_blank" rel="noopener">공식 학과 홈페이지 ↗</a></div>
    </div>`;
  bindMajorActions($('#majorModalContent'));$('#majorModal').showModal();
}

function updateSavedCount(){$('#savedCount').textContent=state.saved.size}
function renderSaved(){
  const list=[...state.saved].map(majorById).filter(Boolean);
  $('#savedList').innerHTML=list.length?list.map(m=>`<div class="saved-item"><div><b>${m.name}</b><span>${m.college}</span></div><aside><button data-detail="${m.id}">상세</button><button data-compare="${m.id}">${state.compare.includes(m.id)?'비교 제외':'비교 담기'}</button><button data-save="${m.id}">삭제</button></aside></div>`).join(''):'<div class="saved-empty">아직 저장한 전공이 없습니다<br>전공 탐색에서 ♡ 버튼을 눌러보세요</div>';
  bindMajorActions($('#savedList'));
}

function renderCompare(){
  const picker=$('#comparePicker');
  const selected=state.compare.map(majorById).filter(Boolean);
  picker.innerHTML=selected.map(m=>`<div class="compare-selected"><b>${m.name}</b><button data-remove-compare="${m.id}">×</button></div>`).join('')+(selected.length<3?`<div class="compare-add"><input id="compareSearch" placeholder="+ 비교할 전공 검색"><div id="compareSuggestions" class="compare-suggestions" hidden></div></div>`:'');
  $$('[data-remove-compare]',picker).forEach(b=>b.onclick=()=>toggleCompare(b.dataset.removeCompare));
  const search=$('#compareSearch');
  if(search){search.oninput=()=>renderCompareSuggestions(search.value);search.onfocus=()=>renderCompareSuggestions(search.value)}
  $('#compareEmpty').hidden=selected.length>0;$('#compareTableWrap').hidden=selected.length===0;
  if(!selected.length)return;
  const rows=[
    ['한 줄 소개',m=>m.desc],
    ['관심 분야',m=>`<div class="compare-tags">${m.interests.map(x=>`<span>${x}</span>`).join('')}</div>`],
    ['수업 방식',m=>`<div class="compare-tags">${m.styles.map(x=>`<span>${x}</span>`).join('')}</div>`],
    ['학습 성격',m=>Object.entries(m.scores).map(([k,v])=>`<div class="compare-score-row"><span>${scoreLabels[k]}</span><i><b style="width:${v}%"></b></i></div>`).join('')],
    ['대표 흐름',m=>m.courses.join(' → ')],
    ['연결 진로',m=>m.careers.join(' · ')],
    ['추천 성향',m=>m.fit]
  ];
  $('#compareTableWrap').innerHTML=`<table class="compare-table"><thead><tr><th>비교 기준</th>${selected.map(m=>`<th><span class="compare-name">${m.name}</span><span class="compare-college">${m.college}</span></th>`).join('')}</tr></thead><tbody>${rows.map(([label,fn])=>`<tr><td><span class="compare-label">${label}</span></td>${selected.map(m=>`<td>${fn(m)}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
}
function renderCompareSuggestions(q=''){
  const box=$('#compareSuggestions');if(!box)return;
  const candidates=majors.filter(m=>!state.compare.includes(m.id)&&(!q||`${m.name}${m.college}`.toLowerCase().includes(q.toLowerCase()))).slice(0,8);
  box.innerHTML=candidates.map(m=>`<button data-add-compare="${m.id}"><b>${m.name}</b><br><small>${m.college}</small></button>`).join('');
  box.hidden=!candidates.length;
  $$('[data-add-compare]',box).forEach(b=>b.onclick=()=>toggleCompare(b.dataset.addCompare));
}

function startFit(){state.fit={step:0,answers:Array(8).fill(null)};$('#fitIntro').hidden=true;$('#fitResult').hidden=true;$('#fitQuiz').hidden=false;renderFitQuestion()}
function renderFitQuestion(){
  const {step,answers}=state.fit,q=fitQuestions[step];
  $('#fitStep').textContent=step+1;$('#fitProgressBar').style.width=`${((step+1)/fitQuestions.length)*100}%`;
  $('#fitQuestion').innerHTML=`<span>QUESTION ${String(step+1).padStart(2,'0')}</span><h2>${q.q}</h2>`;
  $('#fitOptions').innerHTML=q.opts.map((o,i)=>`<button class="fit-option ${answers[step]===i?'selected':''}" data-fit-option="${i}"><span>${String.fromCharCode(65+i)}</span><div><b>${o.t}</b><small>${o.s}</small></div></button>`).join('');
  $$('[data-fit-option]').forEach(b=>b.onclick=()=>{state.fit.answers[step]=Number(b.dataset.fitOption);renderFitQuestion()});
  $('#fitPrev').style.visibility=step?'visible':'hidden';$('#fitNext').disabled=answers[step]===null;$('#fitNext').textContent=step===fitQuestions.length-1?'결과 보기':'다음';
}
function fitScores(){
  const raw={logic:0,creative:0,people:0,practical:0};
  state.fit.answers.forEach((a,i)=>{const v=fitQuestions[i].opts[a].v;Object.entries(v).forEach(([k,n])=>raw[k]+=n)});
  const max=Math.max(...Object.values(raw),1);Object.keys(raw).forEach(k=>raw[k]=Math.round(35+(raw[k]/max)*65));return raw;
}
function fitMatch(m,s){const keys=Object.keys(s);const diff=keys.reduce((sum,k)=>sum+Math.abs(m.scores[k]-s[k]),0);return Math.max(45,Math.round(100-diff/5.2))}
function showFitResult(){
  const scores=fitScores();
  const topTrait=Object.entries(scores).sort((a,b)=>b[1]-a[1])[0][0];
  const traitMessages={logic:'구조를 이해하고 문제를 푸는 탐구형',creative:'새로운 관점과 결과를 만드는 창작형',people:'사람의 성장과 관계를 중시하는 소통형',practical:'직접 실행하고 결과를 완성하는 실천형'};
  const recommended=majors.map(m=>({...m,match:fitMatch(m,scores)})).sort((a,b)=>b.match-a.match).slice(0,3);
  $('#fitQuiz').hidden=true;$('#fitResult').hidden=false;
  $('#fitResult').innerHTML=`
    <div class="result-top"><span>YOUR LEARNING TYPE</span><h2>${traitMessages[topTrait]}</h2><p>이 결과는 전공의 적합·부적합을 판정하는 것이 아니라 현재 선호하는 학습 환경을 보여주는 탐색 자료입니다</p></div>
    <div class="trait-bars">${Object.entries(scores).map(([k,v])=>`<div class="trait-row"><span>${scoreLabels[k]}</span><i><b style="width:${v}%"></b></i><strong>${v}</strong></div>`).join('')}</div>
    <div class="recommend-title"><div><h3>현재 성향과 가까운 전공</h3><p>학습 성격 데이터 기준 추천</p></div></div>
    <div class="recommend-grid">${recommended.map((m,i)=>`<article class="recommend-card"><span>추천 ${i+1}</span><h4>${m.name}</h4><p>${m.desc}</p><strong>${m.match}%</strong><div class="major-card-actions"><button data-detail="${m.id}">상세 보기</button><button data-compare="${m.id}">비교 담기</button></div></article>`).join('')}</div>
    <div class="result-actions"><button id="restartFit" class="secondary-btn">다시 검사하기</button><button class="primary-btn" data-route="compare">추천 전공 비교하기</button></div>`;
  bindMajorActions($('#fitResult'));$('#restartFit').onclick=startFit;$$('[data-route]',$('#fitResult')).forEach(b=>b.onclick=()=>routeTo(b.dataset.route));
}

function semesterKeys(){return ['1-1','1-2','2-1','2-2','3-1','3-2','4-1','4-2']}
function renderRoadmap(){
  const current=$('#currentYear').value;
  $('#roadmapBoard').innerHTML=semesterKeys().map(key=>{
    const [y,s]=key.split('-');const items=state.roadmap[key]||[];
    return `<section class="semester-col ${y===current?'semester-current':''}"><div class="semester-head"><div><b>${y}학년 ${s}학기</b><span>${items.length}개의 계획</span></div><button data-add-plan="${key}" aria-label="계획 추가">+</button></div><div class="semester-list">${items.length?items.map((p,i)=>`<article class="plan-card" style="--plan-color:${typeColors[p.type]||typeColors.personal}"><span>${typeLabels[p.type]||'계획'}</span><b>${escapeHtml(p.title)}</b>${p.memo?`<p>${escapeHtml(p.memo)}</p>`:''}<button data-delete-plan="${key}:${i}" aria-label="삭제">×</button></article>`).join(''):'<div class="semester-empty">아직 계획이 없습니다<br>+ 버튼으로 추가해보세요</div>'}</div></section>`
  }).join('');
  $$('[data-add-plan]').forEach(b=>b.onclick=()=>openPlanDialog(b.dataset.addPlan));
  $$('[data-delete-plan]').forEach(b=>b.onclick=()=>{const [key,index]=b.dataset.deletePlan.split(':');state.roadmap[key].splice(Number(index),1);persist();renderRoadmap();toast('계획을 삭제했습니다')});
}
function escapeHtml(str=''){return str.replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[c]))}
function openPlanDialog(key){state.activeSemester=key;$('#roadmapDialogTitle').textContent=`${key.replace('-','학년 ')}학기 목표 추가`;$('#roadmapForm').reset();$('#roadmapDialog').showModal()}
function exportRoadmap(){
  const title=$('#roadmapTitle').value.trim()||'나의 상명 로드맵';
  let text=`${title}\n${'='.repeat(title.length*2)}\n\n`;
  semesterKeys().forEach(key=>{text+=`[${key.replace('-','학년 ')}학기]\n`;const items=state.roadmap[key]||[];text+=items.length?items.map(p=>`- ${p.title} (${typeLabels[p.type]})${p.memo?`\n  ${p.memo}`:''}`).join('\n'):'- 계획 없음';text+='\n\n'});
  const blob=new Blob([text],{type:'text/plain;charset=utf-8'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`${title.replace(/[\\/:*?"<>|]/g,'_')}.txt`;a.click();URL.revokeObjectURL(a.href);toast('로드맵 파일을 만들었습니다')
}

function bindGlobal(){
  $$('[data-route]').forEach(b=>b.onclick=()=>routeTo(b.dataset.route));
  $('#themeToggle').onclick=()=>{const dark=document.documentElement.dataset.theme==='dark';document.documentElement.dataset.theme=dark?'light':'dark';storage.set('smoongroad_theme',dark?'light':'dark')};
  $('#openSaved').onclick=()=>{renderSaved();$('#savedModal').showModal()};
  $$('[data-close-modal]').forEach(b=>b.onclick=()=>$('#majorModal').close());
  $$('[data-close-saved]').forEach(b=>b.onclick=()=>$('#savedModal').close());
  $$('[data-close-roadmap]').forEach(b=>b.onclick=()=>$('#roadmapDialog').close());
  $('#majorSearch').oninput=e=>{state.filters.search=e.target.value;renderMajors()};
  $('#sortMajors').onchange=e=>{state.filters.sort=e.target.value;renderMajors()};
  $('#resetFilters').onclick=resetFilters;$('#emptyReset').onclick=resetFilters;
  $('#startFit').onclick=startFit;$('#fitPrev').onclick=()=>{if(state.fit.step){state.fit.step--;renderFitQuestion()}};
  $('#fitNext').onclick=()=>{if(state.fit.answers[state.fit.step]===null)return;if(state.fit.step===fitQuestions.length-1)showFitResult();else{state.fit.step++;renderFitQuestion()}};
  $('#currentYear').onchange=renderRoadmap;
  $('#roadmapForm').onsubmit=e=>{e.preventDefault();const p={title:$('#planTitle').value.trim(),type:$('#planType').value,memo:$('#planMemo').value.trim()};if(!p.title)return;state.roadmap[state.activeSemester]??=[];state.roadmap[state.activeSemester].push(p);persist();$('#roadmapDialog').close();renderRoadmap();toast('로드맵에 추가했습니다')};
  $('#clearRoadmap').onclick=()=>{if(confirm('저장된 로드맵을 모두 비울까요?')){state.roadmap={};persist();renderRoadmap();toast('로드맵을 비웠습니다')}};
  $('#exportRoadmap').onclick=exportRoadmap;
  [$('#majorModal'),$('#savedModal'),$('#roadmapDialog')].forEach(d=>d.addEventListener('click',e=>{if(e.target===d)d.close()}));
  document.addEventListener('click',e=>{const s=$('#compareSuggestions');if(s&&!e.target.closest('.compare-add'))s.hidden=true});
}

function init(){
  document.documentElement.dataset.theme=storage.get('smoongroad_theme','light');
  $('#majorStat').textContent=majors.length;$('#majorStat').closest('div').querySelector('span').textContent='서울캠퍼스 전공·학과';
  updateSavedCount();renderFilters();renderMajors();renderCompare();renderRoadmap();bindGlobal();
  const initial=location.hash.slice(1);if(['home','explore','compare','fit','roadmap'].includes(initial))routeTo(initial);
}

/* ---------------- v3 guest-first onboarding & progressive profile ---------------- */
const onboardingInterestChoices=[
  {id:'AI·소프트웨어',icon:'⌘',label:'AI · 소프트웨어'},
  {id:'데이터',icon:'▥',label:'데이터 · 분석'},
  {id:'콘텐츠',icon:'◈',label:'콘텐츠 · 미디어'},
  {id:'교육',icon:'✎',label:'교육 · 성장'},
  {id:'사람',icon:'♡',label:'사람 · 복지'},
  {id:'비즈니스',icon:'↗',label:'비즈니스 · 경영'},
  {id:'예술',icon:'✦',label:'예술 · 창작'},
  {id:'공학',icon:'⚙',label:'공학 · 환경'}
];
function safeParse(value,fallback){try{return JSON.parse(value)}catch{return fallback}}
state.profile=Object.assign({interests:[],campus:'서울',major:'',year:'',career:'',onboardingDone:false},safeParse(storage.get('smoongroad_profile','{}'),{}));
state.auth=Object.assign({mode:'guest',provider:'',displayName:'게스트'},safeParse(storage.get('smoongroad_auth','{}'),{}));
state.promptedFields=new Set();
state.onboardingDraft=new Set(state.profile.interests||[]);
state.onboardingEditMode=false;
state.pendingProvider='';
state.syncNudgeDismissed=storage.get('smoongroad_sync_nudge_dismissed','false')==='true';

function persist(){
  storage.set('smoongroad_saved',JSON.stringify([...state.saved]));
  storage.set('smoongroad_compare',JSON.stringify(state.compare));
  storage.set('smoongroad_roadmap',JSON.stringify(state.roadmap));
  storage.set('smoongroad_profile',JSON.stringify(state.profile));
  storage.set('smoongroad_auth',JSON.stringify(state.auth));
}

function profileInterestScore(m){
  const selected=state.profile.interests||[];
  if(!selected.length)return 0;
  return selected.reduce((score,s)=>score+(m.interests.some(x=>x.includes(s)||s.includes(x))?1:0),0);
}
function filteredMajors(){
  let result=majors.filter(m=>{
    const text=`${m.name} ${m.college} ${m.desc} ${m.interests.join(' ')} ${m.careers.join(' ')}`.toLowerCase();
    return (!state.filters.search||text.includes(state.filters.search.toLowerCase()))&&
      (!state.filters.colleges.size||state.filters.colleges.has(m.college))&&
      matchesFlexible(m.interests,state.filters.interests)&&matchesFlexible(m.styles,state.filters.styles);
  });
  if(state.filters.sort==='name') result.sort((a,b)=>a.name.localeCompare(b.name,'ko'));
  else if(state.filters.sort==='practice') result.sort((a,b)=>b.scores.practical-a.scores.practical);
  else if(state.filters.sort==='creative') result.sort((a,b)=>b.scores.creative-a.scores.creative);
  else if((state.profile.interests||[]).length) result.sort((a,b)=>profileInterestScore(b)-profileInterestScore(a));
  return result;
}

function updateInterestContext(){
  const box=$('#interestContext');
  if(!box)return;
  const list=state.profile.interests||[];
  box.hidden=!list.length;
  $('#interestContextText').textContent=list.length?`${list.join(' · ')} 관심도를 기준으로 추천순을 조정했습니다`:'';
}

function routeTo(route){
  state.route=route;
  $$('.view').forEach(v=>v.classList.toggle('active-view',v.id===route));
  $$('[data-route]').forEach(b=>b.classList.toggle('active',b.dataset.route===route));
  $$('.nav-link').forEach(b=>b.classList.toggle('active',b.dataset.route===route));
  window.scrollTo({top:0,behavior:'smooth'});
  history.replaceState(null,'',`#${route}`);
  if(route==='explore'){renderMajors();updateInterestContext()}
  if(route==='compare') renderCompare();
  if(route==='roadmap') renderRoadmap();
  setTimeout(()=>maybePromptForRoute(route),420);
}

function renderAccountButton(){
  const account=state.auth.mode==='account';
  const provider=state.auth.provider;
  $('#accountAvatar').textContent=account?(provider==='kakao'?'K':'G'):'게';
  $('#accountLabel').textContent=account?(provider==='kakao'?'카카오 계정':'Google 계정'):'게스트';
  $('#accountSub').textContent=account?'여러 기기 동기화':'이 기기에 저장';
}

function renderOnboardingInterests(){
  const root=$('#onboardingInterests');
  root.innerHTML=onboardingInterestChoices.map(item=>`<button type="button" class="onboarding-interest ${state.onboardingDraft.has(item.id)?'selected':''}" data-onboarding-interest="${item.id}"><span>${item.icon}</span><b>${item.label}</b></button>`).join('');
  $('#onboardingSelectedCount').textContent=state.onboardingDraft.size;
  $$('[data-onboarding-interest]',root).forEach(btn=>btn.onclick=()=>{
    const id=btn.dataset.onboardingInterest;
    state.onboardingDraft.has(id)?state.onboardingDraft.delete(id):state.onboardingDraft.add(id);
    renderOnboardingInterests();
  });
}

function openOnboarding(editMode=false){
  state.onboardingEditMode=editMode;
  state.onboardingDraft=new Set(state.profile.interests||[]);
  const dialog=$('#onboardingDialog');
  dialog.classList.toggle('edit-mode',editMode);
  $('#onboardingStepLabel').textContent=editMode?'MY INTERESTS':'FIRST STEP';
  $('#onboardingTitle').textContent=editMode?'관심 분야를 다시 골라주세요':'어떤 분야가 가장 궁금한가요?';
  $('#onboardingDescription').textContent=editMode?'선택한 분야를 기준으로 전공 탐색의 추천순을 다시 조정합니다.':'정확한 전공이나 진로를 몰라도 괜찮아요. 지금 끌리는 분야만 골라주세요.';
  $('#startAsGuest').querySelector('span').textContent=editMode?'관심 분야 저장':'로그인 없이 시작';
  $('#skipInterest').textContent=editMode?'변경하지 않고 닫기':'아직 모르겠어요 · 그냥 둘러보기';
  renderOnboardingInterests();
  if(!dialog.open)dialog.showModal();
}

function finishInterestStep(mode='guest'){
  state.profile.interests=[...state.onboardingDraft];
  state.profile.onboardingDone=true;
  if(mode==='guest' && state.auth.mode!=='account')state.auth={mode:'guest',provider:'',displayName:'게스트'};
  persist();
  $('#onboardingDialog').close();
  renderAccountButton();
  updateInterestContext();
  renderMajors();
  toast(state.profile.interests.length?'관심 분야를 반영했습니다':'바로 둘러보기를 시작합니다');
}

function beginSocialLogin(provider){
  state.pendingProvider=provider;
  if($('#onboardingDialog').open){
    state.profile.interests=[...state.onboardingDraft];
    state.profile.onboardingDone=true;
    $('#onboardingDialog').close();
  }
  const d=$('#authDemoDialog');
  d.classList.toggle('kakao',provider==='kakao');
  $('#authDemoIcon').textContent=provider==='kakao'?'K':'G';
  $('#authDemoTitle').textContent=provider==='kakao'?'카카오로 계속':'Google로 계속';
  $('#authDemoUserName').textContent=provider==='kakao'?'카카오 데모 사용자':'Google 데모 사용자';
  $('#authDemoUserEmail').textContent=provider==='kakao'?'kakao-demo':'demo.user@gmail.com';
  if($('#accountDialog').open)$('#accountDialog').close();
  if(!d.open)d.showModal();
}

function completeSocialLogin(){
  const provider=state.pendingProvider||'google';
  state.auth={mode:'account',provider,displayName:provider==='kakao'?'카카오 사용자':'Google 사용자'};
  state.profile.onboardingDone=true;
  persist();
  $('#authDemoDialog').close();
  $('#syncNudge').hidden=true;
  renderAccountButton();
  toast(`${provider==='kakao'?'카카오':'Google'} 데모 계정으로 연결했습니다`);
}

function profileValueLabel(field){
  if(field==='interests')return (state.profile.interests||[]).join(' · ')||'아직 선택하지 않음';
  if(field==='major')return majorById(state.profile.major)?.name||'아직 선택하지 않음';
  if(field==='year')return state.profile.year?`${state.profile.year}학년`:'아직 선택하지 않음';
  return '아직 선택하지 않음';
}

function renderAccountDialog(){
  const account=state.auth.mode==='account';
  const providerName=state.auth.provider==='kakao'?'카카오':'Google';
  $('#accountDialogContent').innerHTML=`
    <div class="account-overview">
      <span class="account-avatar">${account?(state.auth.provider==='kakao'?'K':'G'):'게'}</span>
      <div><h2>${account?`${providerName} 계정`:'로그인 없이 이용 중'}</h2><p>${account?'게스트로 만든 데이터까지 계정에 연결되어 있어요':'데이터는 현재 브라우저에 자동 저장되고 있어요'}</p></div>
      <span class="account-status">${account?'SYNC ON':'GUEST'}</span>
    </div>
    <div class="profile-summary">
      <article><span>관심 분야</span><b>${escapeHtml(profileValueLabel('interests'))}</b><button data-edit-profile="interests">수정</button></article>
      <article><span>현재 전공</span><b>${escapeHtml(profileValueLabel('major'))}</b><button data-edit-profile="major">${state.profile.major?'수정':'입력'}</button></article>
      <article><span>현재 학년</span><b>${escapeHtml(profileValueLabel('year'))}</b><button data-edit-profile="year">${state.profile.year?'수정':'입력'}</button></article>
    </div>
    ${account?`<div class="account-login-box"><p><b>${providerName}</b> 계정으로 여러 기기 동기화를 사용하는 상태입니다. 실제 서버 연결 전까지는 현재 브라우저에서만 데모 상태가 유지됩니다.</p></div><div class="account-bottom-actions"><button id="logoutAccount" class="text-danger-btn">계정 연결 해제하고 게스트로 전환</button></div>`:`<div class="account-login-box"><p>로드맵과 저장한 전공을 여러 기기에서 이어보려면 간편 로그인을 연결하세요.</p><div class="account-login-actions"><button class="social-login google" data-social-login="google"><span class="google-g">G</span><b>Google</b></button><button class="social-login kakao" data-social-login="kakao"><span class="kakao-mark">K</span><b>카카오</b></button></div></div>`}
  `;
  $$('[data-edit-profile]',$('#accountDialogContent')).forEach(b=>b.onclick=()=>{
    $('#accountDialog').close();
    b.dataset.editProfile==='interests'?openOnboarding(true):requestProfileField(b.dataset.editProfile,true);
  });
  $$('[data-social-login]',$('#accountDialogContent')).forEach(b=>b.onclick=()=>beginSocialLogin(b.dataset.socialLogin));
  const logout=$('#logoutAccount');if(logout)logout.onclick=()=>{state.auth={mode:'guest',provider:'',displayName:'게스트'};persist();$('#accountDialog').close();renderAccountButton();toast('게스트 이용으로 전환했습니다')};
}

function requestProfileField(field,force=false){
  if(!force){
    if(state.profile[field]||state.promptedFields.has(field))return;
    state.promptedFields.add(field);
  }
  const dialog=$('#profilePromptDialog');
  dialog.dataset.field=field;
  if(field==='major'){
    $('#profilePromptEyebrow').textContent='FOR BETTER COMPARISON';
    $('#profilePromptTitle').textContent='현재 전공을 알려주세요';
    $('#profilePromptDescription').textContent='내 전공과 비교했을 때 어떤 차이가 있는지 더 자연스럽게 보여드릴게요.';
    $('#profilePromptField').innerHTML=`<div class="profile-field"><label for="profileMajorSelect">현재 전공</label><select id="profileMajorSelect" required><option value="">전공 선택</option>${colleges.map(c=>`<optgroup label="${c}">${majors.filter(m=>m.college===c).map(m=>`<option value="${m.id}" ${state.profile.major===m.id?'selected':''}>${m.name}</option>`).join('')}</optgroup>`).join('')}</select></div>`;
  }else{
    $('#profilePromptEyebrow').textContent='FOR YOUR ROADMAP';
    $('#profilePromptTitle').textContent='현재 학년을 알려주세요';
    $('#profilePromptDescription').textContent='지금 학기를 중심으로 로드맵을 보여주기 위해 학년만 먼저 물어볼게요.';
    $('#profilePromptField').innerHTML=`<div class="profile-field"><label for="profileYearSelect">현재 학년</label><select id="profileYearSelect" required><option value="">학년 선택</option>${[1,2,3,4].map(y=>`<option value="${y}" ${String(state.profile.year)===String(y)?'selected':''}>${y}학년</option>`).join('')}</select></div>`;
  }
  if(!dialog.open)dialog.showModal();
}

function maybePromptForRoute(route){
  if(!state.profile.onboardingDone)return;
  if(route==='compare'&&!state.profile.major)requestProfileField('major');
  if(route==='roadmap'&&!state.profile.year)requestProfileField('year');
}

function saveProfilePrompt(){
  const field=$('#profilePromptDialog').dataset.field;
  if(field==='major'){
    const value=$('#profileMajorSelect')?.value||'';if(!value)return false;state.profile.major=value;
  }else{
    const value=$('#profileYearSelect')?.value||'';if(!value)return false;state.profile.year=value;$('#currentYear').value=value;renderRoadmap();
  }
  persist();
  $('#profilePromptDialog').close();
  toast(field==='major'?'현재 전공을 저장했습니다':'현재 학년을 저장했습니다');
  return true;
}

function toggleSaved(id){
  state.saved.has(id)?state.saved.delete(id):state.saved.add(id);
  persist();updateSavedCount();renderMajors();renderSaved();
  toast(state.saved.has(id)?'관심 전공에 저장했습니다':'저장을 해제했습니다');
  if(state.saved.size>=3)maybeShowSyncNudge();
}
function maybeShowSyncNudge(){
  if(state.auth.mode==='account'||state.syncNudgeDismissed)return;
  $('#syncNudge').hidden=false;
}
function dismissSyncNudge(){state.syncNudgeDismissed=true;storage.set('smoongroad_sync_nudge_dismissed','true');$('#syncNudge').hidden=true}

function bindV3(){
  $('#accountButton').onclick=()=>{renderAccountDialog();$('#accountDialog').showModal()};
  $('#editInterests').onclick=()=>openOnboarding(true);
  $('#startAsGuest').onclick=()=>finishInterestStep('guest');
  $('#skipInterest').onclick=()=>{
    if(state.onboardingEditMode){$('#onboardingDialog').close();return}
    state.onboardingDraft.clear();finishInterestStep('guest');
  };
  $$('[data-social-login]').forEach(b=>b.onclick=()=>beginSocialLogin(b.dataset.socialLogin));
  $('#completeDemoLogin').onclick=completeSocialLogin;
  $('#cancelDemoLogin').onclick=()=>{state.auth={mode:'guest',provider:'',displayName:'게스트'};state.profile.onboardingDone=true;persist();$('#authDemoDialog').close();renderAccountButton();toast('로그인 없이 계속 이용합니다')};
  $$('[data-close-auth-demo]').forEach(b=>b.onclick=()=>$('#authDemoDialog').close());
  $$('[data-close-account]').forEach(b=>b.onclick=()=>$('#accountDialog').close());
  $$('[data-close-profile-prompt]').forEach(b=>b.onclick=()=>$('#profilePromptDialog').close());
  $('#profilePromptLater').onclick=()=>$('#profilePromptDialog').close();
  $('#profilePromptForm').onsubmit=e=>{e.preventDefault();saveProfilePrompt()};
  $('#closeSyncNudge').onclick=dismissSyncNudge;$('#keepLocalOnly').onclick=dismissSyncNudge;
  $('#currentYear').onchange=e=>{state.profile.year=e.target.value;persist();renderRoadmap()};
  const originalRoadmapSubmit=$('#roadmapForm').onsubmit;
  $('#roadmapForm').onsubmit=e=>{originalRoadmapSubmit(e);setTimeout(maybeShowSyncNudge,120)};
  [$('#onboardingDialog'),$('#profilePromptDialog'),$('#accountDialog'),$('#authDemoDialog')].forEach(d=>d.addEventListener('cancel',e=>{
    if(d===$('#onboardingDialog')&&!state.profile.onboardingDone){e.preventDefault();return}
  }));
}

function init(){
  document.documentElement.dataset.theme=storage.get('smoongroad_theme','light');
  $('#majorStat').textContent=majors.length;$('#majorStat').closest('div').querySelector('span').textContent='서울캠퍼스 전공·학과';
  updateSavedCount();renderFilters();renderMajors();renderCompare();
  $('#currentYear').value=state.profile.year||'';
  renderRoadmap();bindGlobal();bindV3();renderAccountButton();updateInterestContext();
  const initial=location.hash.slice(1);if(['home','explore','compare','fit','roadmap'].includes(initial))routeTo(initial);
  if(!state.profile.onboardingDone)setTimeout(()=>openOnboarding(false),280);
}



/* ---------------- v4 deployment-readiness refinements ---------------- */
const DATA_UPDATED_AT='2026.07.26';
state.pendingPlanKey='';
state.pendingProfileContext='';
state.reportMajorId='';
state.roadmapTitle=storage.get('smoongroad_roadmap_title','나의 상명 로드맵');

function persist(){
  storage.set('smoongroad_saved',JSON.stringify([...state.saved]));
  storage.set('smoongroad_compare',JSON.stringify(state.compare));
  storage.set('smoongroad_roadmap',JSON.stringify(state.roadmap));
  storage.set('smoongroad_profile',JSON.stringify(state.profile));
  storage.set('smoongroad_auth',JSON.stringify(state.auth));
  storage.set('smoongroad_roadmap_title',state.roadmapTitle||'나의 상명 로드맵');
}
function trackEvent(name,details={}){
  const metrics=safeParse(storage.get('smoongroad_metrics','{}'),{});
  metrics[name]=(metrics[name]||0)+1;
  metrics.last={name,at:new Date().toISOString(),details};
  storage.set('smoongroad_metrics',JSON.stringify(metrics));
}
function routeTo(route){
  state.route=route;
  $$('.view').forEach(v=>v.classList.toggle('active-view',v.id===route));
  $$('[data-route]').forEach(b=>b.classList.toggle('active',b.dataset.route===route));
  $$('.nav-link').forEach(b=>b.classList.toggle('active',b.dataset.route===route));
  window.scrollTo({top:0,behavior:'smooth'});
  history.replaceState(null,'',`#${route}`);
  if(route==='explore'){renderMajors();updateInterestContext()}
  if(route==='compare')renderCompare();
  if(route==='roadmap')renderRoadmap();
  trackEvent(`view_${route}`);
}
function maybePromptForRoute(){/* v4: 화면 진입만으로는 프로필을 묻지 않습니다. */}

function updateOnboardingCTA(){
  const count=state.onboardingDraft.size;
  const main=$('#startAsGuest');
  $('#onboardingSelectedCount').textContent=count;
  if(state.onboardingEditMode){
    main.querySelector('span').textContent='변경 내용 저장';
    main.querySelector('small').textContent=count?`${count}개 관심 분야로 추천순을 조정합니다`:'관심 분야 추천을 사용하지 않습니다';
    $('#skipInterest').querySelector('span').textContent='변경하지 않고 닫기';
    $('#skipInterest').querySelector('small').textContent='기존 설정을 그대로 유지합니다';
  }else if(count){
    main.querySelector('span').textContent='선택한 관심 분야로 시작';
    main.querySelector('small').textContent=`${count}개 분야를 추천순에 반영합니다`;
    $('#skipInterest').querySelector('span').textContent='관심 분야 없이 둘러보기';
    $('#skipInterest').querySelector('small').textContent='나중에 언제든 다시 설정할 수 있어요';
  }else{
    main.querySelector('span').textContent='관심 분야 없이 바로 시작';
    main.querySelector('small').textContent='전공 전체를 자유롭게 둘러볼 수 있어요';
    $('#skipInterest').querySelector('span').textContent='선택 없이 둘러보기';
    $('#skipInterest').querySelector('small').textContent='추천순 개인화 없이 시작합니다';
  }
}
function renderOnboardingInterests(){
  const root=$('#onboardingInterests');
  root.innerHTML=onboardingInterestChoices.map(item=>`<button type="button" class="onboarding-interest ${state.onboardingDraft.has(item.id)?'selected':''}" data-onboarding-interest="${item.id}" aria-pressed="${state.onboardingDraft.has(item.id)}"><span aria-hidden="true">${item.icon}</span><b>${item.label}</b></button>`).join('');
  updateOnboardingCTA();
  $$('[data-onboarding-interest]',root).forEach(btn=>btn.onclick=()=>{
    const id=btn.dataset.onboardingInterest;
    if(state.onboardingDraft.has(id))state.onboardingDraft.delete(id);
    else if(state.onboardingDraft.size>=3){toast('관심 분야는 최대 3개까지 선택할 수 있습니다');return}
    else state.onboardingDraft.add(id);
    trackEvent('interest_toggle',{id,selected:state.onboardingDraft.has(id)});
    renderOnboardingInterests();
  });
}
function openOnboarding(editMode=false){
  state.onboardingEditMode=editMode;
  state.onboardingDraft=new Set((state.profile.interests||[]).slice(0,3));
  const dialog=$('#onboardingDialog');
  dialog.classList.toggle('edit-mode',editMode);
  $('#onboardingStepLabel').textContent=editMode?'MY INTERESTS':'FIRST STEP';
  $('#onboardingTitle').textContent=editMode?'관심 분야를 다시 골라주세요':'어떤 분야가 가장 궁금한가요?';
  $('#onboardingDescription').textContent=editMode?'최대 3개를 선택하면 전공 탐색의 추천순을 다시 조정합니다.':'정확한 전공이나 진로를 몰라도 괜찮아요. 지금 가장 끌리는 분야를 최대 3개만 골라주세요.';
  renderOnboardingInterests();
  if(!dialog.open)dialog.showModal();
  trackEvent(editMode?'interest_edit_open':'onboarding_open');
}
function finishInterestStep(mode='guest'){
  state.profile.interests=[...state.onboardingDraft].slice(0,3);
  state.profile.onboardingDone=true;
  state.auth={mode:'guest',provider:'',displayName:'게스트'};
  persist();
  $('#onboardingDialog').close();
  renderAccountButton();updateInterestContext();renderMajors();
  trackEvent('onboarding_complete',{interestCount:state.profile.interests.length});
  toast(state.profile.interests.length?'관심 분야를 추천순에 반영했습니다':'관심 분야 없이 둘러보기를 시작합니다');
}
function beginSocialLogin(provider){
  state.pendingProvider=provider;
  const d=$('#authDemoDialog');
  d.classList.toggle('kakao',provider==='kakao');
  $('#authDemoIcon').textContent=provider==='kakao'?'K':'G';
  $('#authDemoTitle').textContent=`${provider==='kakao'?'카카오':'Google'} 로그인 연동 준비 중`;
  $('#authDemoDescription').textContent='공개 베타에서는 실제 계정 생성과 서버 동기화를 아직 제공하지 않습니다. 로그인된 것처럼 표시하지 않으며 현재 데이터는 이 브라우저와 백업 파일에만 보관됩니다.';
  if($('#onboardingDialog').open){
    state.profile.interests=[...state.onboardingDraft].slice(0,3);
    state.profile.onboardingDone=true;
    persist();$('#onboardingDialog').close();
  }
  if($('#accountDialog').open)$('#accountDialog').close();
  if(!d.open)d.showModal();
  trackEvent('social_login_status_open',{provider});
}
function renderAccountButton(){
  $('#accountAvatar').textContent='게';
  $('#accountLabel').textContent='게스트';
  $('#accountSub').textContent='이 기기에 저장';
}
function profileValueLabel(field){
  if(field==='interests')return (state.profile.interests||[]).join(' · ')||'아직 선택하지 않음';
  if(field==='major')return majorById(state.profile.major)?.name||'아직 선택하지 않음';
  if(field==='year')return state.profile.year?`${state.profile.year}학년`:'아직 선택하지 않음';
  return '아직 선택하지 않음';
}
function renderAccountDialog(){
  $('#accountDialogContent').innerHTML=`
    <div class="account-overview">
      <span class="account-avatar">게</span>
      <div><h2>로그인 없이 이용 중</h2><p>데이터는 현재 브라우저에 자동 저장되며, 계정 동기화는 정식 OAuth 연동 후 제공됩니다.</p></div>
      <span class="account-status">LOCAL</span>
    </div>
    <div class="profile-summary">
      <article><span>관심 분야</span><b>${escapeHtml(profileValueLabel('interests'))}</b><button data-edit-profile="interests">수정</button></article>
      <article><span>현재 전공</span><b>${escapeHtml(profileValueLabel('major'))}</b><button data-edit-profile="major">${state.profile.major?'수정':'입력'}</button></article>
      <article><span>현재 학년</span><b>${escapeHtml(profileValueLabel('year'))}</b><button data-edit-profile="year">${state.profile.year?'수정':'입력'}</button></article>
    </div>
    <div class="account-data-box"><p><b>브라우저 데이터 보호</b><br>전체 백업을 저장하면 관심 전공, 비교 목록, 프로필과 로드맵을 다시 가져올 수 있어요.</p><div class="account-data-actions"><button id="accountExportData">전체 백업 저장</button><button id="accountImportData">백업 가져오기</button></div></div>
    <div class="account-login-box"><p><b>Google·카카오 로그인은 준비 중이에요.</b><br>실제 서버 동기화가 완성되기 전까지는 계정이 연결된 것처럼 표시하지 않습니다.</p><div class="account-login-actions"><button class="social-login google coming-soon" data-social-login="google"><span class="google-g">G</span><b>Google <small>준비 상태 보기</small></b></button><button class="social-login kakao coming-soon" data-social-login="kakao"><span class="kakao-mark">K</span><b>카카오 <small>준비 상태 보기</small></b></button></div></div>`;
  $$('[data-edit-profile]',$('#accountDialogContent')).forEach(b=>b.onclick=()=>{ $('#accountDialog').close();b.dataset.editProfile==='interests'?openOnboarding(true):requestProfileField(b.dataset.editProfile,true); });
  $$('[data-social-login]',$('#accountDialogContent')).forEach(b=>b.onclick=()=>beginSocialLogin(b.dataset.socialLogin));
  $('#accountExportData').onclick=exportAllData;
  $('#accountImportData').onclick=()=>$('#importDataFile').click();
}

function requestProfileField(field,force=false){
  if(!force){
    if(state.profile[field]||state.promptedFields.has(field))return false;
    state.promptedFields.add(field);
  }
  const dialog=$('#profilePromptDialog');dialog.dataset.field=field;
  if(field==='major'){
    $('#profilePromptEyebrow').textContent='PERSONALIZE WHEN NEEDED';
    $('#profilePromptTitle').textContent='내 전공을 기준으로 비교할까요?';
    $('#profilePromptDescription').textContent='선택한 전공 두 개 이상을 현재 전공과 연결해 보여드리기 위해 지금 한 번만 물어볼게요. 건너뛰어도 기본 비교는 계속 볼 수 있어요.';
    $('#profilePromptField').innerHTML=`<div class="profile-field"><label for="profileMajorSelect">현재 전공</label><select id="profileMajorSelect" required><option value="">전공 선택</option>${colleges.map(c=>`<optgroup label="${c}">${majors.filter(m=>m.college===c).map(m=>`<option value="${m.id}" ${state.profile.major===m.id?'selected':''}>${m.name}</option>`).join('')}</optgroup>`).join('')}</select></div>`;
  }else{
    $('#profilePromptEyebrow').textContent='PERSONALIZE WHEN NEEDED';
    $('#profilePromptTitle').textContent='현재 학년을 알려주실래요?';
    $('#profilePromptDescription').textContent='첫 계획을 추가하는 학기를 더 잘 보이게 표시하기 위해 학년만 물어봅니다. 나중에를 눌러도 계획은 바로 추가할 수 있어요.';
    $('#profilePromptField').innerHTML=`<div class="profile-field"><label for="profileYearSelect">현재 학년</label><select id="profileYearSelect" required><option value="">학년 선택</option>${[1,2,3,4].map(y=>`<option value="${y}" ${String(state.profile.year)===String(y)?'selected':''}>${y}학년</option>`).join('')}</select></div>`;
  }
  if(!dialog.open)dialog.showModal();
  trackEvent(`profile_prompt_${field}`);
  return true;
}
function saveProfilePrompt(){
  const field=$('#profilePromptDialog').dataset.field;
  if(field==='major'){
    const value=$('#profileMajorSelect')?.value||'';if(!value)return false;state.profile.major=value;
  }else{
    const value=$('#profileYearSelect')?.value||'';if(!value)return false;state.profile.year=value;$('#currentYear').value=value;
  }
  persist();$('#profilePromptDialog').close();
  if(field==='major')renderCompare();else renderRoadmap();
  toast(field==='major'?'현재 전공을 비교 기준으로 반영했습니다':'현재 학년을 저장했습니다');
  trackEvent(`profile_saved_${field}`);
  if(field==='year'&&state.pendingPlanKey){const key=state.pendingPlanKey;state.pendingPlanKey='';setTimeout(()=>openPlanDialogNow(key),80)}
  return true;
}
function majorSimilarity(a,b){
  if(!a||!b)return 0;
  const scoreDiff=Object.keys(a.scores).reduce((s,k)=>s+Math.abs(a.scores[k]-b.scores[k]),0)/4;
  const shared=a.interests.filter(x=>b.interests.some(y=>x.includes(y)||y.includes(x))).length;
  return Math.max(35,Math.min(98,Math.round(88-scoreDiff*.48+shared*5)));
}
function sharedMajorKeywords(a,b){
  const keys=[...a.interests,...a.styles].filter(x=>[...b.interests,...b.styles].some(y=>x.includes(y)||y.includes(x)));
  return [...new Set(keys)].slice(0,2).join(' · ')||'서로 다른 학습 성격';
}
function renderCompare(){
  const picker=$('#comparePicker');const selected=state.compare.map(majorById).filter(Boolean);
  picker.innerHTML=selected.map(m=>`<div class="compare-selected"><b>${m.name}</b><button data-remove-compare="${m.id}" aria-label="${m.name} 비교에서 제거">×</button></div>`).join('')+(selected.length<3?`<div class="compare-add"><input id="compareSearch" placeholder="+ 비교할 전공 검색" aria-label="비교할 전공 검색"><div id="compareSuggestions" class="compare-suggestions" hidden></div></div>`:'');
  $$('[data-remove-compare]',picker).forEach(b=>b.onclick=()=>toggleCompare(b.dataset.removeCompare));
  const search=$('#compareSearch');if(search){search.oninput=()=>renderCompareSuggestions(search.value);search.onfocus=()=>renderCompareSuggestions(search.value)}
  const personalize=$('#comparePersonalize');
  if(selected.length>=2){
    const current=majorById(state.profile.major);
    personalize.hidden=false;
    personalize.innerHTML=current?`<div><b>${current.name}을 기준으로 연결점을 표시하고 있어요</b><p>공통 관심 분야와 학습 성격을 기준으로 참고용 유사도를 계산합니다.</p></div><button id="comparePersonalizeButton" type="button">현재 전공 변경</button>`:`<div><b>내 전공과 연결해서 비교해볼까요?</b><p>기본 비교는 그대로 두고, 원할 때만 현재 전공을 한 번 입력합니다.</p></div><button id="comparePersonalizeButton" type="button">내 전공 기준으로 비교</button>`;
    $('#comparePersonalizeButton').onclick=()=>{state.pendingProfileContext='compare';requestProfileField('major',true)};
  }else personalize.hidden=true;
  $('#compareEmpty').hidden=selected.length>0;$('#compareTableWrap').hidden=selected.length===0;if(!selected.length)return;
  const current=majorById(state.profile.major);
  const rows=[];
  if(current)rows.push(['내 전공과의 연결',m=>m.id===current.id?`<div class="compare-link-score"><strong>현재 전공</strong><small>비교 기준으로 선택한 전공입니다</small></div>`:`<div class="compare-link-score"><strong>${majorSimilarity(current,m)}%</strong><small>${sharedMajorKeywords(current,m)}</small></div>`]);
  rows.push(
    ['한 줄 소개',m=>m.desc],
    ['관심 분야',m=>`<div class="compare-tags">${m.interests.map(x=>`<span>${x}</span>`).join('')}</div>`],
    ['수업 방식',m=>`<div class="compare-tags">${m.styles.map(x=>`<span>${x}</span>`).join('')}</div>`],
    ['학습 성격',m=>Object.entries(m.scores).map(([k,v])=>`<div class="compare-score-row"><span>${scoreLabels[k]}</span><i><b style="width:${v}%"></b></i></div>`).join('')],
    ['대표 흐름',m=>m.courses.join(' → ')],['연결 진로',m=>m.careers.join(' · ')],['추천 성향',m=>m.fit]
  );
  $('#compareTableWrap').innerHTML=`<table class="compare-table"><thead><tr><th>비교 기준</th>${selected.map(m=>`<th><span class="compare-name">${m.name}</span><span class="compare-college">${m.college}</span></th>`).join('')}</tr></thead><tbody>${rows.map(([label,fn])=>`<tr><td><span class="compare-label">${label}</span></td>${selected.map(m=>`<td>${fn(m)}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
}
function toggleCompare(id){
  if(state.compare.includes(id)){state.compare=state.compare.filter(x=>x!==id);toast('비교 목록에서 제외했습니다');trackEvent('compare_remove',{id})}
  else if(state.compare.length>=3){toast('전공은 최대 3개까지 비교할 수 있습니다');return}
  else{state.compare.push(id);toast('비교 목록에 담았습니다');trackEvent('compare_add',{id,count:state.compare.length})}
  persist();renderMajors();renderCompare();
}
function toggleSaved(id){
  state.saved.has(id)?state.saved.delete(id):state.saved.add(id);persist();updateSavedCount();renderMajors();renderSaved();
  toast(state.saved.has(id)?'관심 전공에 저장했습니다':'저장을 해제했습니다');trackEvent(state.saved.has(id)?'major_save':'major_unsave',{id});
  if(state.saved.size>=3)maybeShowSyncNudge();
}
function openMajor(id){
  const m=majorById(id);if(!m)return;trackEvent('major_detail',{id});
  $('#majorModalContent').innerHTML=`
    <div class="modal-hero" style="--modal-color:${m.color}"><span>${m.college} · ${m.group}</span><h2>${m.name}</h2><p>${m.desc}</p></div>
    <div class="modal-body">
      <section class="modal-section"><h3>이런 학생에게 잘 맞아요</h3><p>${m.fit}</p></section>
      <section class="modal-section"><h3>핵심 키워드</h3><div class="modal-keywords">${m.interests.map(t=>`<span>${t}</span>`).join('')}${m.styles.map(t=>`<span>${t}</span>`).join('')}</div></section>
      <section class="modal-section"><h3>학습 성격</h3><div class="modal-score-grid">${Object.entries(m.scores).map(([k,v])=>`<div class="modal-score"><span>${scoreLabels[k]}</span><b>${v}</b></div>`).join('')}</div></section>
      <section class="modal-section"><h3>대표 학습 흐름 <small>탐색용 예시</small></h3><div class="course-flow">${m.courses.map((c,i)=>`${i?'<i></i>':''}<span>${c}</span>`).join('')}</div></section>
      <section class="modal-section modal-lists"><div><h3>연결 가능한 진로</h3><ul>${m.careers.map(c=>`<li>${c}</li>`).join('')}</ul></div><div><h3>서비스 활용 팁</h3><ul><li>관심 전공에 저장해 다시 확인하기</li><li>비슷한 전공과 수업 성격 비교하기</li><li>로드맵에 기초 과목이나 활동 추가하기</li></ul></div></section>
      <section class="modal-section source-card"><div><b>공식 정보와 학생용 요약을 구분했어요</b><span>공식 출처: 해당 학과 홈페이지</span><small>서비스 데이터 정리일 ${DATA_UPDATED_AT} · 대표 학습 흐름과 성향 점수는 탐색용 요약입니다</small></div><aside><a href="${m.url}" target="_blank" rel="noopener">공식 정보 확인 ↗</a><button type="button" data-report-major="${m.id}">정보 오류 제보</button></aside></section>
      <div class="modal-actions"><button data-compare="${m.id}">${state.compare.includes(m.id)?'비교 목록에서 빼기':'비교 목록에 담기'}</button><button data-save="${m.id}" style="background:var(--surface-2);color:var(--text)">${state.saved.has(m.id)?'저장 해제':'관심 전공 저장'}</button></div>
    </div>`;
  bindMajorActions($('#majorModalContent'));$('[data-report-major]',$('#majorModalContent')).onclick=()=>openReportDialog(m.id);$('#majorModal').showModal();
}
function openReportDialog(id){
  const m=majorById(id);if(!m)return;state.reportMajorId=id;$('#reportMajorName').textContent=m.name;$('#reportForm').reset();$('#reportDialog').showModal();trackEvent('report_open',{id});
}
async function copyText(text){
  try{await navigator.clipboard.writeText(text);return true}catch{
    const ta=document.createElement('textarea');ta.value=text;document.body.appendChild(ta);ta.select();const ok=document.execCommand('copy');ta.remove();return ok;
  }
}
async function submitReport(e){
  e.preventDefault();const m=majorById(state.reportMajorId);if(!m)return;
  const text=`[수뭉로드 정보 오류 제보]\n전공: ${m.name}\n유형: ${$('#reportType').value}\n내용: ${$('#reportDetail').value.trim()}\n공식 페이지: ${m.url}\n서비스 데이터 정리일: ${DATA_UPDATED_AT}`;
  const ok=await copyText(text);trackEvent('report_copy',{id:m.id,type:$('#reportType').value});if(ok){toast('제보 문구를 복사했습니다');$('#reportDialog').close()}else toast('복사하지 못했습니다. 내용을 직접 선택해 주세요');
}
function openPlanDialogNow(key){state.activeSemester=key;$('#roadmapDialogTitle').textContent=`${key.replace('-','학년 ')}학기 목표 추가`;$('#roadmapForm').reset();$('#roadmapDialog').showModal()}
function openPlanDialog(key){
  if(!state.profile.year&&!state.promptedFields.has('year')){state.pendingPlanKey=key;requestProfileField('year');return}
  openPlanDialogNow(key);
}
function exportRoadmap(){
  const title=($('#roadmapTitle').value||state.roadmapTitle||'나의 상명 로드맵').trim();let text=`${title}\n${'='.repeat(title.length*2)}\n\n`;
  semesterKeys().forEach(key=>{text+=`[${key.replace('-','학년 ')}학기]\n`;const items=state.roadmap[key]||[];text+=items.length?items.map(p=>`- ${p.title} (${typeLabels[p.type]})${p.memo?`\n  ${p.memo}`:''}`).join('\n'):'- 계획 없음';text+='\n\n'});
  downloadBlob(new Blob([text],{type:'text/plain;charset=utf-8'}),`${sanitizeFilename(title)}.txt`);trackEvent('roadmap_text_export');toast('로드맵 텍스트 파일을 만들었습니다');
}
function sanitizeFilename(name){return (name||'수뭉로드_백업').replace(/[\\/:*?"<>|]/g,'_')}
function downloadBlob(blob,filename){const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),500)}
function backupPayload(){return {schema:'smoongroad-backup',version:4,exportedAt:new Date().toISOString(),data:{profile:state.profile,saved:[...state.saved],compare:state.compare,roadmap:state.roadmap,roadmapTitle:state.roadmapTitle,theme:document.documentElement.dataset.theme}}}
function exportAllData(){
  const payload=backupPayload();downloadBlob(new Blob([JSON.stringify(payload,null,2)],{type:'application/json;charset=utf-8'}),`수뭉로드_전체백업_${new Date().toISOString().slice(0,10)}.json`);trackEvent('full_backup_export');toast('전체 백업 파일을 저장했습니다');
}
function mergeRoadmaps(a={},b={}){
  const out={};semesterKeys().forEach(key=>{const seen=new Set();out[key]=[...(a[key]||[]),...(b[key]||[])].filter(item=>{const token=JSON.stringify([item.title,item.type,item.memo]);if(seen.has(token))return false;seen.add(token);return item&&item.title}).map(item=>({title:String(item.title).slice(0,42),type:typeLabels[item.type]?item.type:'personal',memo:String(item.memo||'').slice(0,100)}));if(!out[key].length)delete out[key]});return out;
}
async function importAllDataFile(file){
  if(!file)return;let raw;try{raw=JSON.parse(await file.text())}catch{toast('올바른 JSON 백업 파일이 아닙니다');return}
  const data=raw?.schema==='smoongroad-backup'?raw.data:raw;if(!data||typeof data!=='object'||!data.roadmap){toast('수뭉로드 백업 구조를 확인할 수 없습니다');return}
  if(!confirm('현재 데이터와 백업 데이터를 합칠까요? 같은 계획은 한 번만 유지됩니다.'))return;
  state.saved=new Set([...state.saved,...(Array.isArray(data.saved)?data.saved:[])].filter(id=>majorById(id)));
  state.compare=[...new Set([...state.compare,...(Array.isArray(data.compare)?data.compare:[])])].filter(id=>majorById(id)).slice(0,3);
  state.roadmap=mergeRoadmaps(state.roadmap,data.roadmap);
  const importedProfile=data.profile&&typeof data.profile==='object'?data.profile:{};
  state.profile.interests=[...new Set([...(state.profile.interests||[]),...(Array.isArray(importedProfile.interests)?importedProfile.interests:[])])].slice(0,3);
  state.profile.major=state.profile.major||importedProfile.major||'';state.profile.year=state.profile.year||importedProfile.year||'';state.profile.onboardingDone=true;
  state.roadmapTitle=state.roadmapTitle==='나의 상명 로드맵'&&data.roadmapTitle?String(data.roadmapTitle).slice(0,60):state.roadmapTitle;
  persist();$('#roadmapTitle').value=state.roadmapTitle;$('#currentYear').value=state.profile.year||'';updateSavedCount();renderMajors();renderSaved();renderCompare();renderRoadmap();updateInterestContext();renderAccountButton();trackEvent('full_backup_import');toast('백업 데이터를 현재 내용과 합쳤습니다');
}
function maybeShowSyncNudge(){if(state.syncNudgeDismissed)return;$('#syncNudge').hidden=false}
function dismissSyncNudge(){state.syncNudgeDismissed=true;storage.set('smoongroad_sync_nudge_dismissed','true');$('#syncNudge').hidden=true}
function renderFitQuestion(){
  const {step,answers}=state.fit,q=fitQuestions[step];$('#fitStep').textContent=step+1;$('#fitProgressBar').style.width=`${((step+1)/fitQuestions.length)*100}%`;$('#fitQuestion').innerHTML=`<span>QUESTION ${String(step+1).padStart(2,'0')}</span><h2>${q.q}</h2>`;
  $('#fitOptions').innerHTML=q.opts.map((o,i)=>`<button class="fit-option ${answers[step]===i?'selected':''}" data-fit-option="${i}" aria-pressed="${answers[step]===i}"><span>${String.fromCharCode(65+i)}</span><div><b>${o.t}</b><small>${o.s}</small></div></button>`).join('');
  $$('[data-fit-option]').forEach(b=>b.onclick=()=>{state.fit.answers[step]=Number(b.dataset.fitOption);renderFitQuestion()});$('#fitPrev').style.visibility=step?'visible':'hidden';$('#fitNext').disabled=answers[step]===null;$('#fitNext').textContent=step===fitQuestions.length-1?'결과 보기':'다음';
}
function showFitResult(){
  const scores=fitScores(),topTrait=Object.entries(scores).sort((a,b)=>b[1]-a[1])[0][0];const traitMessages={logic:'구조를 이해하고 문제를 푸는 탐구형',creative:'새로운 관점과 결과를 만드는 창작형',people:'사람의 성장과 관계를 중시하는 소통형',practical:'직접 실행하고 결과를 완성하는 실천형'};const recommended=majors.map(m=>({...m,match:fitMatch(m,scores)})).sort((a,b)=>b.match-a.match).slice(0,3);
  $('#fitQuiz').hidden=true;$('#fitResult').hidden=false;$('#fitResult').innerHTML=`<div class="result-top"><span>YOUR LEARNING TYPE</span><h2>${traitMessages[topTrait]}</h2><p>이 결과는 전공의 적합·부적합을 판정하는 것이 아니라 현재 선호하는 학습 환경을 보여주는 탐색 자료입니다</p></div><div class="trait-bars">${Object.entries(scores).map(([k,v])=>`<div class="trait-row"><span>${scoreLabels[k]}</span><i><b style="width:${v}%"></b></i><strong>${v}</strong></div>`).join('')}</div><div class="recommend-title"><div><h3>현재 성향과 가까운 전공</h3><p>학습 성격 데이터 기준 추천</p></div></div><div class="recommend-grid">${recommended.map((m,i)=>`<article class="recommend-card"><span>추천 ${i+1}</span><h4>${m.name}</h4><p>${m.desc}</p><strong>${m.match}%</strong><div class="major-card-actions"><button data-detail="${m.id}">상세 보기</button><button data-compare="${m.id}">비교 담기</button></div></article>`).join('')}</div><div class="result-actions"><button id="restartFit" class="secondary-btn">다시 검사하기</button><button class="primary-btn" data-route="compare">추천 전공 비교하기</button></div>`;
  bindMajorActions($('#fitResult'));$('#restartFit').onclick=startFit;$$('[data-route]',$('#fitResult')).forEach(b=>b.onclick=()=>routeTo(b.dataset.route));trackEvent('fit_complete',{topTrait});
}
function bindV3(){
  $('#accountButton').onclick=()=>{renderAccountDialog();$('#accountDialog').showModal()};$('#editInterests').onclick=()=>openOnboarding(true);$('#startAsGuest').onclick=()=>finishInterestStep('guest');
  $('#skipInterest').onclick=()=>{if(state.onboardingEditMode){$('#onboardingDialog').close();return}state.onboardingDraft.clear();finishInterestStep('guest')};
  $$('[data-social-login]').forEach(b=>b.onclick=()=>beginSocialLogin(b.dataset.socialLogin));
  $('#authBackupNow').onclick=()=>{exportAllData();$('#authDemoDialog').close()};$('#cancelDemoLogin').onclick=()=>{$('#authDemoDialog').close();renderAccountButton();toast('로그인 없이 계속 이용합니다')};
  $$('[data-close-auth-demo]').forEach(b=>b.onclick=()=>$('#authDemoDialog').close());$$('[data-close-account]').forEach(b=>b.onclick=()=>$('#accountDialog').close());$$('[data-close-profile-prompt]').forEach(b=>b.onclick=()=>{$('#profilePromptDialog').close();if(state.pendingPlanKey){const key=state.pendingPlanKey;state.pendingPlanKey='';openPlanDialogNow(key)}});
  $('#profilePromptLater').onclick=()=>{const field=$('#profilePromptDialog').dataset.field;$('#profilePromptDialog').close();trackEvent(`profile_skip_${field}`);if(field==='year'&&state.pendingPlanKey){const key=state.pendingPlanKey;state.pendingPlanKey='';openPlanDialogNow(key)}};$('#profilePromptForm').onsubmit=e=>{e.preventDefault();saveProfilePrompt()};
  $('#closeSyncNudge').onclick=dismissSyncNudge;$('#keepLocalOnly').onclick=dismissSyncNudge;$('#backupFromNudge').onclick=()=>{exportAllData();dismissSyncNudge()};
  $('#exportAllData').onclick=exportAllData;$('#bannerBackup').onclick=exportAllData;$('#importAllData').onclick=()=>$('#importDataFile').click();$('#importDataFile').onchange=e=>{importAllDataFile(e.target.files?.[0]);e.target.value=''};
  $('#roadmapTitle').value=state.roadmapTitle;$('#roadmapTitle').oninput=e=>{state.roadmapTitle=e.target.value.slice(0,60);persist()};
  $('#currentYear').onchange=e=>{state.profile.year=e.target.value;persist();renderRoadmap()};
  const originalRoadmapSubmit=$('#roadmapForm').onsubmit;$('#roadmapForm').onsubmit=e=>{const before=Object.values(state.roadmap).reduce((n,a)=>n+(a?.length||0),0);originalRoadmapSubmit(e);const after=Object.values(state.roadmap).reduce((n,a)=>n+(a?.length||0),0);if(after>before){trackEvent('roadmap_add',{semester:state.activeSemester});setTimeout(maybeShowSyncNudge,120)}};
  $('#reportForm').onsubmit=submitReport;$$('[data-close-report]').forEach(b=>b.onclick=()=>$('#reportDialog').close());
  [$('#onboardingDialog'),$('#profilePromptDialog'),$('#accountDialog'),$('#authDemoDialog'),$('#reportDialog')].forEach(d=>d.addEventListener('click',e=>{if(e.target===d&&!(d===$('#onboardingDialog')&&!state.profile.onboardingDone))d.close()}));
  [$('#onboardingDialog'),$('#profilePromptDialog'),$('#accountDialog'),$('#authDemoDialog')].forEach(d=>d.addEventListener('cancel',e=>{if(d===$('#onboardingDialog')&&!state.profile.onboardingDone)e.preventDefault()}));
}
function init(){
  document.documentElement.dataset.theme=storage.get('smoongroad_theme','light');
  if(state.auth.mode==='account')state.auth={mode:'guest',provider:'',displayName:'게스트'}; // v3 데모 로그인 상태 제거
  state.profile.interests=(state.profile.interests||[]).slice(0,3);persist();
  $('#majorStat').textContent=majors.length;$('#majorStat').closest('div').querySelector('span').textContent='서울캠퍼스 전공·학과';
  updateSavedCount();renderFilters();renderMajors();renderCompare();$('#currentYear').value=state.profile.year||'';renderRoadmap();bindGlobal();bindV3();renderAccountButton();updateInterestContext();
  const initial=location.hash.slice(1);if(['home','explore','compare','fit','roadmap'].includes(initial))routeTo(initial);else routeTo('home');
  if(!state.profile.onboardingDone)setTimeout(()=>openOnboarding(false),280);
}


/* ---------------- Render + Neon account sync ---------------- */
state.cloud={
  ready:false,
  authenticated:false,
  user:null,
  providers:{google:false,kakao:false,database:false},
  syncing:false,
  applying:false,
  lastSyncedAt:'',
  error:''
};
let cloudSyncTimer=0;

function cloudDataPayload(){
  return {
    version:5,
    profile:{
      interests:[...(state.profile.interests||[])].slice(0,3),
      campus:'서울',
      major:state.profile.major||'',
      year:state.profile.year||'',
      career:state.profile.career||'',
      onboardingDone:Boolean(state.profile.onboardingDone)
    },
    saved:[...state.saved].filter(id=>majorById(id)),
    compare:[...new Set(state.compare)].filter(id=>majorById(id)).slice(0,3),
    roadmap:state.roadmap||{},
    roadmapTitle:String(state.roadmapTitle||'나의 상명 로드맵').slice(0,60),
    theme:document.documentElement.dataset.theme==='dark'?'dark':'light'
  };
}

function normalizeCloudData(data={}){
  const profile=data.profile&&typeof data.profile==='object'?data.profile:{};
  return {
    version:Number(data.version||5),
    profile:{
      interests:Array.isArray(profile.interests)?profile.interests.filter(v=>typeof v==='string').slice(0,3):[],
      campus:'서울',
      major:majorById(profile.major)?profile.major:'',
      year:['1','2','3','4',1,2,3,4].includes(profile.year)?String(profile.year):'',
      career:typeof profile.career==='string'?profile.career.slice(0,80):'',
      onboardingDone:Boolean(profile.onboardingDone)
    },
    saved:Array.isArray(data.saved)?data.saved.filter(id=>majorById(id)):[],
    compare:Array.isArray(data.compare)?[...new Set(data.compare)].filter(id=>majorById(id)).slice(0,3):[],
    roadmap:data.roadmap&&typeof data.roadmap==='object'?data.roadmap:{},
    roadmapTitle:typeof data.roadmapTitle==='string'?data.roadmapTitle.slice(0,60):'나의 상명 로드맵',
    theme:data.theme==='dark'?'dark':'light'
  };
}

function mergeCloudPayload(localData,remoteData){
  const local=normalizeCloudData(localData);
  const remote=normalizeCloudData(remoteData||{});
  return {
    version:5,
    profile:{
      interests:[...new Set([...(local.profile.interests||[]),...(remote.profile.interests||[])])].slice(0,3),
      campus:'서울',
      major:local.profile.major||remote.profile.major||'',
      year:local.profile.year||remote.profile.year||'',
      career:local.profile.career||remote.profile.career||'',
      onboardingDone:local.profile.onboardingDone||remote.profile.onboardingDone
    },
    saved:[...new Set([...(local.saved||[]),...(remote.saved||[])])].filter(id=>majorById(id)),
    compare:[...new Set([...(local.compare||[]),...(remote.compare||[])])].filter(id=>majorById(id)).slice(0,3),
    roadmap:mergeRoadmaps(local.roadmap,remote.roadmap),
    roadmapTitle:local.roadmapTitle!=='나의 상명 로드맵'?local.roadmapTitle:(remote.roadmapTitle||local.roadmapTitle),
    theme:local.theme||remote.theme||'light'
  };
}

function applyCloudPayload(data){
  const value=normalizeCloudData(data);
  state.cloud.applying=true;
  state.profile=Object.assign({},state.profile,value.profile,{interests:value.profile.interests.slice(0,3)});
  state.saved=new Set(value.saved);
  state.compare=value.compare.slice(0,3);
  state.roadmap=value.roadmap;
  state.roadmapTitle=value.roadmapTitle||'나의 상명 로드맵';
  document.documentElement.dataset.theme=value.theme;
  storage.set('smoongroad_theme',value.theme);
  persist();
  state.cloud.applying=false;
  $('#roadmapTitle').value=state.roadmapTitle;
  $('#currentYear').value=state.profile.year||'';
  updateSavedCount();
  renderMajors();
  renderSaved();
  renderCompare();
  renderRoadmap();
  updateInterestContext();
}

async function apiRequest(url,options={}){
  const response=await fetch(url,{credentials:'same-origin',headers:{'content-type':'application/json',...(options.headers||{})},...options});
  let body=null;
  try{body=await response.json()}catch{}
  if(!response.ok){
    const error=new Error(body?.error||`HTTP_${response.status}`);
    error.status=response.status;
    throw error;
  }
  return body;
}

function scheduleCloudSync(){
  if(!state.cloud.authenticated||state.cloud.applying)return;
  clearTimeout(cloudSyncTimer);
  cloudSyncTimer=setTimeout(()=>saveCloudData(),700);
}

async function saveCloudData({silent=true}={}){
  if(!state.cloud.authenticated||state.cloud.syncing)return false;
  state.cloud.syncing=true;
  state.cloud.error='';
  renderAccountButton();
  try{
    const result=await apiRequest('/api/user-data',{method:'PUT',body:JSON.stringify({data:cloudDataPayload()})});
    state.cloud.lastSyncedAt=result.updatedAt||new Date().toISOString();
    if(!silent)toast('계정에 최신 내용을 저장했습니다');
    return true;
  }catch(error){
    state.cloud.error=error.message;
    if(error.status===401){
      state.cloud.authenticated=false;
      state.cloud.user=null;
      state.auth={mode:'guest',provider:'',displayName:'게스트'};
    }
    if(!silent)toast('동기화하지 못했습니다. 이 기기에는 계속 저장됩니다');
    return false;
  }finally{
    state.cloud.syncing=false;
    renderAccountButton();
  }
}

function persist(){
  storage.set('smoongroad_saved',JSON.stringify([...state.saved]));
  storage.set('smoongroad_compare',JSON.stringify(state.compare));
  storage.set('smoongroad_roadmap',JSON.stringify(state.roadmap));
  storage.set('smoongroad_profile',JSON.stringify(state.profile));
  storage.set('smoongroad_auth',JSON.stringify(state.auth));
  storage.set('smoongroad_roadmap_title',state.roadmapTitle||'나의 상명 로드맵');
  scheduleCloudSync();
}

function updateProviderButtons(){
  const divider=$('.start-divider span');
  if(divider)divider.textContent=state.cloud.authenticated?'계정에 연결되어 여러 기기에서 이어볼 수 있어요':'로그인은 선택 사항이며 게스트로도 모든 핵심 기능을 이용할 수 있어요';
  $$('[data-social-login]').forEach(button=>{
    const provider=button.dataset.socialLogin;
    const enabled=Boolean(state.cloud.providers[provider]);
    button.classList.toggle('coming-soon',!enabled);
    button.classList.toggle('provider-loading',!state.cloud.ready);
    button.setAttribute('aria-label',`${provider==='kakao'?'카카오':'Google'}로 계속${enabled?'':' - 관리자 설정 필요'}`);
    const small=button.querySelector('small');
    if(small)small.textContent=state.cloud.ready?(enabled?'계속':'설정 필요'):'연결 확인 중';
    if(button.classList.contains('google-mini')||button.classList.contains('kakao-mini')){
      const text=[...button.childNodes].find(node=>node.nodeType===Node.TEXT_NODE);
      if(text)text.textContent=enabled?' 계정 연결':' 설정 필요';
    }
  });
}

function updateStorageStatus(){
  const title=$('#storageStatusTitle');
  const text=$('#storageStatusText');
  const banner=$('#storageStatusBanner');
  if(!title||!text||!banner)return;
  banner.classList.toggle('cloud-connected',state.cloud.authenticated);
  if(state.cloud.authenticated){
    title.textContent=state.cloud.syncing?'계정에 저장하는 중이에요':'이 기기와 계정에 함께 저장되고 있어요';
    text.textContent=state.cloud.error?'최근 서버 동기화에 실패했습니다. 이 기기에는 안전하게 저장되어 있으며 연결이 회복되면 다시 시도합니다.':'Google 또는 카카오 계정으로 로그인되어 다른 기기에서도 이어볼 수 있습니다.';
    $('#bannerBackup').textContent='백업도 저장';
  }else{
    title.textContent='현재 이 브라우저에만 저장되고 있어요';
    text.textContent='브라우저 데이터를 삭제하거나 다른 기기를 사용하면 내용이 보이지 않을 수 있습니다. 전체 백업 파일을 저장해두면 다시 가져올 수 있어요.';
    $('#bannerBackup').textContent='백업 파일 저장';
  }
}

function renderAccountButton(){
  const account=state.cloud.authenticated&&state.cloud.user;
  const provider=account?state.cloud.user.provider:'';
  $('#accountAvatar').textContent=account?(provider==='kakao'?'K':'G'):'게';
  $('#accountLabel').textContent=account?(state.cloud.user.displayName||`${provider==='kakao'?'카카오':'Google'} 사용자`):'게스트';
  $('#accountSub').textContent=account?(state.cloud.syncing?'저장 중':state.cloud.error?'동기화 확인 필요':'계정 동기화'):'이 기기에 저장';
  updateStorageStatus();
  updateProviderButtons();
  if(account)$('#syncNudge').hidden=true;
}

function finishInterestStep(mode='guest'){
  state.profile.interests=[...state.onboardingDraft].slice(0,3);
  state.profile.onboardingDone=true;
  if(!state.cloud.authenticated)state.auth={mode:'guest',provider:'',displayName:'게스트'};
  persist();
  $('#onboardingDialog').close();
  renderAccountButton();updateInterestContext();renderMajors();
  trackEvent('onboarding_complete',{interestCount:state.profile.interests.length,mode:state.cloud.authenticated?'account':mode});
  toast(state.profile.interests.length?'관심 분야를 추천순에 반영했습니다':'관심 분야 없이 둘러보기를 시작합니다');
}

function showProviderSetupDialog(provider,message=''){
  state.pendingProvider=provider;
  const d=$('#authDemoDialog');
  d.classList.toggle('kakao',provider==='kakao');
  $('#authDemoIcon').textContent=provider==='kakao'?'K':'G';
  $('#authDemoTitle').textContent=`${provider==='kakao'?'카카오':'Google'} 로그인 설정이 필요해요`;
  $('#authDemoDescription').textContent=message||'현재 배포 환경에 OAuth 키가 등록되지 않았습니다. 게스트 이용과 전체 백업은 그대로 사용할 수 있습니다.';
  if($('#onboardingDialog').open){
    state.profile.interests=[...state.onboardingDraft].slice(0,3);
    state.profile.onboardingDone=true;
    persist();$('#onboardingDialog').close();
  }
  if($('#accountDialog').open)$('#accountDialog').close();
  if(!d.open)d.showModal();
}

function beginSocialLogin(provider){
  if($('#onboardingDialog').open){
    state.profile.interests=[...state.onboardingDraft].slice(0,3);
    state.profile.onboardingDone=true;
    persist();
  }
  if(!state.cloud.ready){toast('로그인 연결 상태를 확인하고 있어요');return}
  if(!state.cloud.providers.database){showProviderSetupDialog(provider,'Neon DATABASE_URL이 연결되지 않아 계정 동기화를 시작할 수 없습니다.');return}
  if(!state.cloud.providers[provider]){showProviderSetupDialog(provider);return}
  const returnTo=`${location.pathname}${location.search}${location.hash}`;
  location.href=`/api/auth/${provider}/start?returnTo=${encodeURIComponent(returnTo)}`;
}

function cloudStatusText(){
  if(state.cloud.syncing)return '지금 변경 내용을 계정에 저장하고 있어요.';
  if(state.cloud.error)return '최근 서버 저장에 실패했지만 이 브라우저에는 계속 저장되고 있어요.';
  if(state.cloud.lastSyncedAt){
    const date=new Date(state.cloud.lastSyncedAt);
    return `마지막 동기화 ${Number.isNaN(date.getTime())?'완료':date.toLocaleString('ko-KR',{month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit'})}`;
  }
  return '이 브라우저의 데이터가 계정과 연결되어 있어요.';
}

function renderAccountDialog(){
  const account=state.cloud.authenticated&&state.cloud.user;
  if(account){
    const providerName=state.cloud.user.provider==='kakao'?'카카오':'Google';
    $('#accountDialogContent').innerHTML=`
      <div class="account-overview">
        <span class="account-avatar">${state.cloud.user.provider==='kakao'?'K':'G'}</span>
        <div><h2>${escapeHtml(state.cloud.user.displayName||`${providerName} 사용자`)}</h2><p>${state.cloud.user.email?escapeHtml(state.cloud.user.email):`${providerName} 계정으로 로그인했습니다`}</p></div>
        <span class="account-status">SYNC ON</span>
      </div>
      <div class="profile-summary">
        <article><span>관심 분야</span><b>${escapeHtml(profileValueLabel('interests'))}</b><button data-edit-profile="interests">수정</button></article>
        <article><span>현재 전공</span><b>${escapeHtml(profileValueLabel('major'))}</b><button data-edit-profile="major">${state.profile.major?'수정':'입력'}</button></article>
        <article><span>현재 학년</span><b>${escapeHtml(profileValueLabel('year'))}</b><button data-edit-profile="year">${state.profile.year?'수정':'입력'}</button></article>
      </div>
      <div class="account-data-box cloud-account-box"><p><b>${providerName} 계정 동기화</b><br>${escapeHtml(cloudStatusText())}</p><div class="account-data-actions"><button id="syncAccountNow">지금 동기화</button><button id="accountExportData">전체 백업</button></div></div>
      <div class="account-bottom-actions"><button id="logoutAccount" class="secondary-btn">로그아웃</button><button id="deleteAccount" class="text-danger-btn">계정과 서버 데이터 삭제</button></div>`;
    $('#syncAccountNow').onclick=()=>saveCloudData({silent:false});
    $('#logoutAccount').onclick=logoutCloudAccount;
    $('#deleteAccount').onclick=deleteCloudAccount;
  }else{
    const googleEnabled=Boolean(state.cloud.providers.google);
    const kakaoEnabled=Boolean(state.cloud.providers.kakao);
    $('#accountDialogContent').innerHTML=`
      <div class="account-overview">
        <span class="account-avatar">게</span>
        <div><h2>로그인 없이 이용 중</h2><p>데이터는 이 브라우저에 자동 저장됩니다. 로그인하면 현재 내용을 계정에 합쳐 여러 기기에서 이어볼 수 있어요.</p></div>
        <span class="account-status">LOCAL</span>
      </div>
      <div class="profile-summary">
        <article><span>관심 분야</span><b>${escapeHtml(profileValueLabel('interests'))}</b><button data-edit-profile="interests">수정</button></article>
        <article><span>현재 전공</span><b>${escapeHtml(profileValueLabel('major'))}</b><button data-edit-profile="major">${state.profile.major?'수정':'입력'}</button></article>
        <article><span>현재 학년</span><b>${escapeHtml(profileValueLabel('year'))}</b><button data-edit-profile="year">${state.profile.year?'수정':'입력'}</button></article>
      </div>
      <div class="account-data-box"><p><b>브라우저 데이터 보호</b><br>전체 백업을 저장하면 관심 전공, 비교 목록, 프로필과 로드맵을 다시 가져올 수 있어요.</p><div class="account-data-actions"><button id="accountExportData">전체 백업 저장</button><button id="accountImportData">백업 가져오기</button></div></div>
      <div class="account-login-box"><p><b>간편 로그인은 선택 사항이에요.</b><br>게스트로 만든 데이터는 로그인 직후 계정 데이터와 자동으로 합쳐집니다.</p><div class="account-login-actions"><button class="social-login google ${googleEnabled?'':'coming-soon'}" data-social-login="google"><span class="google-g">G</span><b>Google <small>${googleEnabled?'계속':'설정 필요'}</small></b></button><button class="social-login kakao ${kakaoEnabled?'':'coming-soon'}" data-social-login="kakao"><span class="kakao-mark">K</span><b>카카오 <small>${kakaoEnabled?'계속':'설정 필요'}</small></b></button></div></div>`;
    $('#accountImportData').onclick=()=>$('#importDataFile').click();
  }
  $$('[data-edit-profile]',$('#accountDialogContent')).forEach(b=>b.onclick=()=>{$('#accountDialog').close();b.dataset.editProfile==='interests'?openOnboarding(true):requestProfileField(b.dataset.editProfile,true)});
  $$('[data-social-login]',$('#accountDialogContent')).forEach(b=>b.onclick=()=>beginSocialLogin(b.dataset.socialLogin));
  $('#accountExportData').onclick=exportAllData;
}

async function logoutCloudAccount(){
  if(!confirm('로그아웃할까요? 이 기기의 데이터는 그대로 남아 있습니다.'))return;
  try{await apiRequest('/api/auth/logout',{method:'POST',body:'{}'})}catch{}
  state.cloud.authenticated=false;
  state.cloud.user=null;
  state.cloud.lastSyncedAt='';
  state.auth={mode:'guest',provider:'',displayName:'게스트'};
  persist();
  $('#accountDialog').close();
  renderAccountButton();
  toast('로그아웃했습니다. 이 기기의 데이터는 유지됩니다');
}

async function deleteCloudAccount(){
  if(!confirm('계정과 서버에 저장된 수뭉로드 데이터를 완전히 삭제할까요? 이 기기의 데이터는 삭제하지 않습니다.'))return;
  try{
    await apiRequest('/api/account',{method:'DELETE',body:'{}'});
    state.cloud.authenticated=false;
    state.cloud.user=null;
    state.cloud.lastSyncedAt='';
    state.auth={mode:'guest',provider:'',displayName:'게스트'};
    persist();
    $('#accountDialog').close();renderAccountButton();toast('계정과 서버 데이터를 삭제했습니다');
  }catch{toast('계정 삭제에 실패했습니다. 잠시 뒤 다시 시도해주세요')}
}

function maybeShowSyncNudge(){
  if(state.cloud.authenticated||state.syncNudgeDismissed)return;
  $('#syncNudge').hidden=false;
}

function handleAuthResult(){
  const params=new URLSearchParams(location.search);
  const result=params.get('auth');
  if(!result)return;
  const messages={
    success:'로그인했습니다. 이 기기의 데이터를 계정과 합치는 중이에요',
    cancelled:'로그인을 취소했습니다',
    failed:'로그인 처리 중 오류가 발생했습니다',
    state_mismatch:'로그인 요청을 확인할 수 없어 다시 시작해야 합니다',
    database_required:'데이터베이스 설정이 필요합니다',
    google_not_configured:'Google OAuth 설정이 필요합니다',
    kakao_not_configured:'카카오 로그인 설정이 필요합니다'
  };
  toast(messages[result]||'로그인 상태를 확인했습니다');
  ['auth','provider'].forEach(key=>params.delete(key));
  const query=params.toString();
  history.replaceState(null,'',`${location.pathname}${query?`?${query}`:''}${location.hash}`);
}

async function initializeCloud(){
  handleAuthResult();
  try{
    const providers=await apiRequest('/api/auth/providers');
    state.cloud.providers=Object.assign(state.cloud.providers,providers);
  }catch(error){
    state.cloud.error=error.message;
  }
  state.cloud.ready=true;
  updateProviderButtons();
  try{
    const auth=await apiRequest('/api/auth/me');
    if(!auth.authenticated){
      state.cloud.authenticated=false;
      state.cloud.user=null;
      state.auth={mode:'guest',provider:'',displayName:'게스트'};
      persist();renderAccountButton();return;
    }
    state.cloud.authenticated=true;
    state.cloud.user=auth.user;
    state.auth={mode:'account',provider:auth.user.provider,displayName:auth.user.displayName||'수뭉로드 사용자'};
    const remote=await apiRequest('/api/user-data');
    const merged=mergeCloudPayload(cloudDataPayload(),remote.data||{});
    applyCloudPayload(merged);
    await saveCloudData();
    $('#syncNudge').hidden=true;
    renderAccountButton();
    if(new URLSearchParams(location.search).get('auth')==='success')toast('게스트 데이터를 계정에 안전하게 합쳤습니다');
  }catch(error){
    state.cloud.error=error.message;
    renderAccountButton();
  }
}

async function submitReport(e){
  e.preventDefault();
  const m=majorById(state.reportMajorId);
  if(!m)return;
  const type=$('#reportType').value;
  const detail=$('#reportDetail').value.trim();
  if(detail.length<5){toast('제보 내용을 조금 더 구체적으로 적어주세요');return}
  const button=$('#reportForm button[type="submit"]');
  const original=button.textContent;
  button.disabled=true;button.textContent='보내는 중…';
  try{
    await apiRequest('/api/feedback',{method:'POST',body:JSON.stringify({majorId:m.id,type,detail})});
    trackEvent('report_submit',{id:m.id,type});
    $('#reportDialog').close();$('#reportForm').reset();
    toast('제보를 접수했습니다. 확인 후 반영할게요');
  }catch(error){
    const text=`[수뭉로드 정보 오류 제보]\n전공: ${m.name}\n유형: ${type}\n내용: ${detail}\n공식 페이지: ${m.url}\n서비스 데이터 정리일: ${DATA_UPDATED_AT}`;
    const copied=await copyText(text);
    toast(copied?'서버 접수에 실패해 제보 문구를 대신 복사했습니다':'제보 전송에 실패했습니다. 잠시 뒤 다시 시도해주세요');
  }finally{button.disabled=false;button.textContent=original}
}

init();
initializeCloud();
