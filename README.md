# ![WebTorrent](img/wordmark.png)

[![Gitter][webtorrent-gitter-image]][webtorrent-gitter-url]
[![Build Status][webtorrent-ti]][webtorrent-tu]
[![NPM Version][webtorrent-ni]][webtorrent-nu]
[![NPM Downloads][webtorrent-downloads-image]][webtorrent-downloads-url]

[![Sauce Test Status][webtorrent-sauce-image]][webtorrent-sauce-url]

### Streaming torrent client for node & the browser

**WebTorrent** is a streaming torrent client for **node.js** and the **browser**. YEP,
THAT'S RIGHT. THE BROWSER. It's written completely in JavaScript – the language of the web
– so the same code works in both runtimes.

In node.js, this module is a simple torrent client, using TCP and UDP to talk to
other torrent clients.

In the browser, WebTorrent uses **WebRTC** (data channels) for peer-to-peer transport.
It can be used **without** browser plugins, extensions, or installations. It's Just
JavaScript&trade;.

Simply include the
[`webtorrent.min.js`](https://cdn.jsdelivr.net/webtorrent/latest/webtorrent.min.js) script
on your page to start fetching files over WebRTC using the BitTorrent protocol, or
`require('webtorrent')` with [browserify](http://browserify.org/). See [demo apps
](#webtorrent-in-production) and [code examples](#usage) below.

To make BitTorrent work over WebRTC (which is the only p2p transport that works on the
web) we made some protocol changes. Therefore, a browser-based WebTorrent client can only
connect to other clients that support WebTorrent (and WebRTC).

The WebTorrent node.js module will soon gain the ability to connect to web peers using
WebRTC, making it the first "hybrid" client. We hope established torrent clients
(uTorrent, Transmission, Vuze, etc.) will also add support for WebTorrent (and WebRTC) so
they can connect to both normal *and* web peers.

![Network](img/network.png)

> Warning: This is pre-alpha software. **Watch/star to follow along with progress.**

### Features

- **Torrent client for node.js & the browser** (same npm module!)
- **Insanely fast**
- Download **multiple torrents** simultaneously, efficiently
- **Pure Javascript** (no native dependencies)
- Exposes files as **streams**
  - Fetches pieces from the network on-demand so seeking is supported (even before torrent is finished)
  - Seamlessly switches between sequential and rarest-first piece selection strategy
- Supports advanced torrent client features
  - **magnet uri** support via **[ut_metadata](https://github.com/feross/ut_metadata)**
  - **peer discovery** via **[dht](https://github.com/feross/bittorrent-dht)**,
    **[tracker](https://github.com/feross/bittorrent-tracker)**, and
    **[ut_pex](https://github.com/fisch0920/ut_pex)**
  - **[protocol extension api](https://github.com/feross/bittorrent-protocol#extension-api)**
    for adding new extensions
- **Comprehensive test suite** (runs completely offline, so it's reliable and fast)

#### Browser-only features

- **WebRTC data channels** for lightweight peer-to-peer communication with **no plugins**
- **No silos.** WebTorrent is a P2P network for the **entire web.** WebTorrent clients
  running on one domain can connect to clients on any other domain.
- Stream video torrents into a `<video>` tag (`webm (vp8, vp9)` or `mp4 (h.264)`)
- Supports Chrome, Firefox, and Opera.

#### Node-only features

- Stream to **AirPlay**, **Chromecast**, **VLC player**, and many other devices/players
