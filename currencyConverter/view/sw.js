// version number of the cache
let cacheVersion = "cache-v1";

self.addEventListener("install", event => {
    const urlsToCache = [
        //urls to cache
        'index.html',
        'css/index.css',
        'js/api.js'
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