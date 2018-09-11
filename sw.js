if ('serviceWorker' in navigator) {
	self.addEventListener('fetch', (event) => {});
  navigator.serviceWorker.register('/sw.js');
}
