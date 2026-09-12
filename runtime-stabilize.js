import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFile, writeFile } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function patchFile(relativePath, patcher) {
  const filePath = path.join(__dirname, relativePath);
  const before = await readFile(filePath, 'utf8');
  const after = patcher(before);
  if (after !== before) {
    await writeFile(filePath, after, 'utf8');
    console.info(`[stabilize] patched ${relativePath}`);
  } else {
    console.info(`[stabilize] verified ${relativePath}`);
  }
}

function replaceOrKeep(text, from, to, label) {
  if (text.includes(to)) return text;
  if (!text.includes(from)) {
    throw new Error(`[stabilize] expected pattern not found: ${label}`);
  }
  return text.replace(from, to);
}

await patchFile('public/local.html', (source) => {
  let text = source;

  text = text.replace(
    /<meta name="description" content="[^"]*"\s*\/?>/,
    '<meta name="description" content="SMU.Link는 상명대학교 서울캠퍼스 학생과 종로 지역사회가 전공·경험을 연결해 공동 프로젝트를 만드는 지역 공동제작 플랫폼입니다." />',
  );
  text = text.replace(
    /<title>[^<]*<\/title>/,
    '<title>SMU.Link | 상명대 × 종로 지역 공동제작 플랫폼</title>',
  );

  if (!text.includes('__smulinkPrebootFailsafe')) {
    text = replaceOrKeep(
      text,
      "<script>document.documentElement.classList.add('smulink-preboot');</script>",
      `<script>\n    document.documentElement.classList.add('smulink-preboot');\n    window.__smulinkPrebootFailsafe = window.setTimeout(() => {\n      document.documentElement.classList.remove('smulink-preboot');\n      document.getElementById('smulinkPreBootStyle')?.remove();\n      console.warn('[SMU.Link] preboot fail-safe released the page');\n    }, 6500);\n  </script>`,
      'local.html preboot script',
    );
  }

  text = text.replace(
    /<footer><div class="shell footer-row"><div><b>[^<]*<\/b><br>[^<]*<\/div><div>Hackathon Prototype · 2026<\/div><\/div><\/footer>/,
    '<footer><div class="shell footer-row"><div><b>SMU.Link</b><br>상명대학교 서울캠퍼스 기반 · 지역사회 공동 프로젝트 제안</div><div>Hackathon Prototype · 2026</div></div></footer>',
  );

  text = text.replace(
    /<div class="saved-toast" id="savedToast">[^<]*<\/div>/,
    '<div class="saved-toast" id="savedToast">SMU.Link 프로젝트에 저장했습니다.</div>',
  );

  text = text.replace(
    /<script src="local\.js\?v=[^"]+"><\/script>/,
    '<script src="local.js?v=20260913-stable-final-1"></script>',
  );

  return text;
});

await patchFile('public/local.js', (source) => {
  if (source.includes('__smulinkPrebootFailsafe')) return source;
  return replaceOrKeep(
    source,
    `  function releasePreboot() {\n    document.documentElement.classList.remove(PREBOOT_CLASS);\n    document.getElementById(PREBOOT_STYLE_ID)?.remove();\n  }`,
    `  function releasePreboot() {\n    if (window.__smulinkPrebootFailsafe) {\n      window.clearTimeout(window.__smulinkPrebootFailsafe);\n      window.__smulinkPrebootFailsafe = null;\n    }\n    document.documentElement.classList.remove(PREBOOT_CLASS);\n    document.getElementById(PREBOOT_STYLE_ID)?.remove();\n  }`,
    'local.js releasePreboot',
  );
});

await patchFile('public/copy-edit.js', (source) => source.replace(
  '상명대학교 서울캠퍼스 기반 · 종로구 세대 공동 프로젝트 제안',
  '상명대학교 서울캠퍼스 기반 · 지역사회 공동 프로젝트 제안',
));

await patchFile('server.js', (source) => {
  if (source.includes("no-store, max-age=0, must-revalidate")) return source;
  return replaceOrKeep(
    source,
    `  setHeaders(res, filePath) {\n    if (filePath.endsWith('index.html')) res.setHeader('Cache-Control', 'no-cache');\n  },`,
    `  setHeaders(res, filePath) {\n    const fileName = path.basename(filePath);\n    if (filePath.endsWith('.html') || fileName === 'local.js') {\n      res.setHeader('Cache-Control', 'no-store, max-age=0, must-revalidate');\n      res.setHeader('Pragma', 'no-cache');\n      res.setHeader('Expires', '0');\n    }\n  },`,
    'server static cache headers',
  );
});

console.info('[stabilize] SMU.Link runtime stabilization complete');
