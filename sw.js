this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
  );
});
