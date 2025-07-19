const staticDevCoffee = "dequeCCA";

self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('dequeCCA').then((cache) => cache.addAll([
        '/',
        '/index.html',
        '/JS/contrast.js',
        '/JS/deque-widgets.min.js',
        '/JS/dqu2019.min.js',
        '/JS/highlight.js',
        '/JS/jquery.min.js',
        '/JS/picker.js',
        '/CSS/contrast.css',
        '/CSS/deque-widgets.min.css',
        '/CSS/dqu2019.min.css',
        '/CSS/fontawesome-all.min.css',
        '/CSS/railscasts.css',
        '/CSS/ruleHelp.css',
        '/images/eyedropper.png',
        '/images/logo.png',
      ])),
    );
  });
  
  self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
  });
