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
    "revision": "77c1c5f01f3431d0d68ae98d6160a4d8"
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
    "url": "assets/css/0.styles.f9150d2a.css",
    "revision": "98105fa46e6b70b231f4d7eec86296f9"
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
    "url": "assets/js/2.7e48f9e0.js",
    "revision": "4fee85c7d25334abe4cfbe0af6e46786"
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
    "url": "assets/js/app.37c2eddd.js",
    "revision": "b6e8145ebcdd1c2e714baf6a11bb22f1"
  },
  {
    "url": "edicoes/1-vuefloripa.html",
    "revision": "a57ce9b249d1e0f274d9e32aa6b92597"
  },
  {
    "url": "edicoes/2-vuefloripa.html",
    "revision": "460a2c9821f10dd5751bd44a9c0947d1"
  },
  {
    "url": "edicoes/3-vuefloripa.html",
    "revision": "d087c357af5e7241a8c51ab6f76841dd"
  },
  {
    "url": "edicoes/index.html",
    "revision": "95a61572794065a5617bf2ceaa7ac63f"
  },
  {
    "url": "index.html",
    "revision": "d6cc119e6cd466155db1ff04331cc81b"
  },
  {
    "url": "logo.png",
    "revision": "11d3b3e842bb3a1f2ca1e6e90fd7d234"
  },
  {
    "url": "sobre/index.html",
    "revision": "8438d525ce7d4709850132313c8611f8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
