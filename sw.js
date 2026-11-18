// Palabradex Service Worker: macht die App offline nutzbar.
const CACHE = 'palabradex-v8';
const CORE = [
  './', 'index.html', 'legal.html', 'privacy.html', 'manifest.webmanifest', 'favicon.svg',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-180.png', 'fonts/fonts.css', 'vendor/jspdf.umd.min.js',
  'fonts/bungee-latin-400-normal.woff2',
  'fonts/eb-garamond-latin-400-italic.woff2',
  'fonts/eb-garamond-latin-400-normal.woff2',
  'fonts/eb-garamond-latin-600-normal.woff2',
  'fonts/kalam-latin-400-normal.woff2',
  'fonts/kalam-latin-700-normal.woff2',
  'fonts/literata-latin-400-italic.woff2',
  'fonts/literata-latin-400-normal.woff2',
  'fonts/literata-latin-600-normal.woff2',
  'fonts/nunito-latin-400-italic.woff2',
  'fonts/nunito-latin-400-normal.woff2',
  'fonts/nunito-latin-700-normal.woff2',
  'fonts/outfit-latin-400-normal.woff2',
  'fonts/outfit-latin-500-normal.woff2',
  'fonts/outfit-latin-600-normal.woff2',
  'fonts/outfit-latin-700-normal.woff2',
  'fonts/outfit-latin-800-normal.woff2'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  const isPage = req.mode === 'navigate' || req.destination === 'document';
  if (isPage) {
    // Seiten: zuerst Netz (für Updates), sonst Cache
    e.respondWith(fetch(req).then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res; })
      .catch(() => caches.match(req).then(r => r || caches.match('index.html'))));
  } else {
    // Schriften, Icons: zuerst Cache
    e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res; })));
  }
});
