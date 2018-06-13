// version number of the cache
let cacheVersion = "cache-v1";

self.addEventListener("install", event => {
    const urlsToCache = [
        // include the urls you want to cache
        'dist/index.html',
        'css/index.css'
        // make sure to replace this urls with yours if they do not match your needs
    ];

    event.waitUntil(
        caches.open(cacheVersion).
        then( cache => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("activate", event =>{
    event.waitUntil(
        caches.keys().
        then(cahesName => {
            return Promise.all(
                cahesName.filter( cacheName => {
                    return cacheName.startsWith("cache") && cacheName !== cacheVersion;
                }).map(cacheName => {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).
        then(response => {
            if(response){
                return response;
            }

            return fetch(event.request);
        })
    );
});