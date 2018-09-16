<script type='text/javascript'>
this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
  );
});
</script>
