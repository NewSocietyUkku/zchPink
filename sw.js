const CACHE_NAME = 'zchPink';
const urlsToCache = [
  '/zchPink/',
  '/zchPink/index.html',
  '/zchPink/manifest.json',
  '/zchPink/sw.js',
  '/zchPink/icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
