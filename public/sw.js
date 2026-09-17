const CACHE = 'malmoa-pwa-v3';
const PRECACHE = [
  '/',
  '/guardian',
  '/settings',
  '/report',
  '/user',
  '/connect',
  '/guardian.html',
  '/user.html',
  '/style.css',
  '/app.js',
  '/pwa.js',
  '/guardian.webmanifest',
  '/user.webmanifest',
  '/icons/guardian-192.png',
  '/icons/guardian-512.png',
  '/icons/user-192.png',
  '/icons/user-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

function shellFor(pathname) {
  if (pathname.startsWith('/user') || pathname.startsWith('/connect')) return '/user.html';
  if (pathname.startsWith('/guardian') || pathname.startsWith('/settings') || pathname.startsWith('/report')) return '/guardian.html';
  return '/';
}

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin || url.pathname.startsWith('/api/')) return;

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match(event.request).then((hit) => hit || caches.match(shellFor(url.pathname))))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(event.request, copy));
        }
        return response;
      });
    })
  );
});
