const cacheName = "smiles-cache-v1";

const assets = [
  "./",
  "./index.html",
  "./manifest.json",
  "./smileslogo.jpg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assets))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(res => {
      return res || fetch(event.request);
    })
  );
});
