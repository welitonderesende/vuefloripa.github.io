/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7d2572fdc2c1ebb05cee414d3a4b5864"
  },
  {
    "url": "apoiadores/code:nation.png",
    "revision": "40f2b49d765296aeef10a162cb47a41a"
  },
  {
    "url": "apoiadores/linx+neemu+chaordic.png",
    "revision": "2d04561e8106e88eeca5a92f558d9372"
  },
  {
    "url": "apoiadores/softplan.png",
    "revision": "7c4a45347c37fbbbe513c7d1967d9a75"
  },
  {
    "url": "apoiadores/stickerdevs.png",
    "revision": "e6dc97e340e9f773497cbc9a5e428a17"
  },
  {
    "url": "apoiadores/valtech.png",
    "revision": "c5d8c9e4879264e13a7e83061f83b211"
  },
  {
    "url": "assets/css/0.styles.957349d2.css",
    "revision": "d58607b333e774798a866cb828e869f5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.65d2e6c3.js",
    "revision": "2537ecb3e755fe6d1559ef387a74478e"
  },
  {
    "url": "assets/js/2.7b3feb7e.js",
    "revision": "7311d576b952c0a7297916dd9a7e047a"
  },
  {
    "url": "assets/js/3.9827cab0.js",
    "revision": "bbe8162668be679cd53f113fa0cdcfc7"
  },
  {
    "url": "assets/js/4.61b2b97e.js",
    "revision": "e4a17634a41cd2ea0839da59bbc51162"
  },
  {
    "url": "assets/js/5.452d0e59.js",
    "revision": "f2578cfdb657997f9f74c69d8656c489"
  },
  {
    "url": "assets/js/6.e17a9787.js",
    "revision": "95e0153aca71b26146aed38d46ec9936"
  },
  {
    "url": "assets/js/app.12828bc3.js",
    "revision": "9733d7cb2fea402b2b44e6be1e845d77"
  },
  {
    "url": "edicoes/1-vuefloripa.html",
    "revision": "aa9166b7449f622b562fc1461d042d6c"
  },
  {
    "url": "edicoes/2-vuefloripa.html",
    "revision": "b9102509604ee5e431ec1c8a76c17fe6"
  },
  {
    "url": "edicoes/3-vuefloripa.html",
    "revision": "f5c8a97ff7b1eaa4d0229eecf7a51f0a"
  },
  {
    "url": "edicoes/index.html",
    "revision": "92eb6b1200bba7114f8bc323f89b9ad7"
  },
  {
    "url": "index.html",
    "revision": "65e13c339cb894f69ac41ec4d055e742"
  },
  {
    "url": "logo.png",
    "revision": "11d3b3e842bb3a1f2ca1e6e90fd7d234"
  },
  {
    "url": "sobre/index.html",
    "revision": "45cc58e55336c4ebb924eea3a8189357"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
