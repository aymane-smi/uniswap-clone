// eslint-disable-next-line no-undef
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

// eslint-disable-next-line no-undef
workbox.routing.registerRoute(
    ({request})=> request.destination === "image",
    // eslint-disable-next-line no-undef
    new workbox.startegies.networkFirst(),
)