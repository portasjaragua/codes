if ('serviceWorker' in navigator) {
	self.addEventListener('fetch', (event) => {});
  navigator.serviceWorker.register('https://raw.githubusercontent.com/portasjaragua/codes/master/sw.js');
}
