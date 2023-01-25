const cacheNames = 'v1';
const dynamicCache = 'd-v1';

const staticFiles = [
    '/static/js/bundle.js'
]

self.addEventListener('install', async e => {
    const cache = await caches.open(cacheNames);
    await cache.addAll(staticFiles);
})


self.addEventListener('activate', async e => {
    const cacheKeys = await caches.keys();
    await Promise.all(
        cacheKeys.filter(name => ![cacheNames, dynamicCache].includes(name) )
            .map(name => caches.delete(name))
    );
})

self.addEventListener('fetch', e => {
    const { request } = e;

    const url = new URL(request.url);
    if (url.origin === location.origin) {
        e.respondWith(cacheFirst(request));
    } else {
        e.respondWith(networkFirst(request));
    }
});


async function cacheFirst(request) {
    const cached = await caches.match(request);
    return cached ?? await fetch(request);
}

async function networkFirst(request) {
    const cache = await caches.open(dynamicCache);
    try {
        const response = await fetch(request);
        await cache.put(request, response.clone());
        return response;
    } catch (e) {
        const cached = await cache.match(request);
        return cached ?? await caches.match('/offline.html');
    }
}