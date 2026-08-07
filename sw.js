// Minimal service worker — required by Chrome/Android for the site to be installable.
// Deliberately does no caching: pricing, menu data, and email sending must always
// come fresh from the network, never from a stale cached copy.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
