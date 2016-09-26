var dataCacheName = 'aitorWeb-v1';
var cacheName     = 'aitorPWA-final-1';
var filesToCache  = [
  '/',
  './index.html',
  './src/js/app.js',
  './src/css/style.css',
  './src/img/avatar.jpg',
  './src/img/menu_header.jpg',
  './src/img/default/bg.jpg',
  './src/img/portfolio/aviva_bd.jpg',
  './src/img/portfolio/aviva_mtg.jpg',
  './src/img/portfolio/hoja.jpg',
  './src/img/portfolio/integra.jpg',
  './src/img/portfolio/raccoon.jpg',
  './src/img/portfolio/thortons.jpg',
  './src/img/portfolio/top.jpg',
  './src/img/portfolio/uxdesign.jpg',
  './src/img/portfolio/xwerx.jpg',
];

self.addEventListener('install', function(e) {
  // console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      // console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  // console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName && key !== dataCacheName) {
          // console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
    /*
     * The app is asking for app shell files. In this scenario the app uses the
     * "Cache, falling back to the network" offline strategy:
     * https://jakearchibald.com/2014/offline-cookbook/#cache-falling-back-to-network
     */
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
});
