import {precacheAndRoute} from 'workbox-precaching';
import {registerRoute} from 'workbox-routing';
import {clientsClaim} from 'workbox-core';
import {CacheFirst, NetworkFirst, StaleWhileRevalidate, NetworkOnly} from 'workbox-strategies';
import {ExpirationPlugin} from 'workbox-expiration';


// SETTINGS

// Path prefix to load modules locally
// Updating SW lifecycle to update the app after user triggered refresh
// self.skipWaiting()
clientsClaim();

// PRECACHING

// We inject manifest here using "workbox-build" in workbox-build-inject.js
precacheAndRoute(self.__WB_MANIFEST);

// RUNTIME CACHING

// Google fonts
registerRoute(
    new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
    new StaleWhileRevalidate({
        cacheName: 'googleapis',
        plugins: [
            new ExpirationPlugin({
                maxEntries: 30
            })
        ]
    })
);

// // API with network-first strategy
// workbox.routing.registerRoute(
//     /(http[s]?:\/\/)?([^\/\s]+\/)timeline/,
//     new workbox.strategies.NetworkFirst()
// )

registerRoute(
    ({url}) => {
        return url.pathname.startsWith('/static/');

    },
    new NetworkFirst(),
);

// registerRoute(
//     ({url}) => {
//         console.info('url.pathname', url.pathname)
//         return url.pathname.startsWith('/v1/accounts')
//     },
//     new CacheFirst(),
//     'POST',
// )

// workbox.routing.registerRoute(
//     ({url}) => {
//         return url.pathname.startsWith('/data/2.5/weather');
//     },
//     new workbox.strategies.CacheFirst()
// )

// // API with cache-first strategy
// workbox.routing.registerRoute(
//     /(http[s]?:\/\/)?([^\/\s]+\/)favorites/,
//     new workbox.strategies.CacheFirst()
// )

// OTHER EVENTS

// Receive push and show a notification
self.addEventListener('push', function(event) {
    console.log('[Service Worker]: Received push event', event);
});