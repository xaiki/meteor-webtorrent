var version = '0.27.1';

Package.describe({
  name: 'xaiki:webtorrent',
  version: version,
  // Brief, one-line summary of the package.
  summary: 'Streaming torrent client for node & the browser',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "webtorrent": version
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.addFiles('src/require-webtorrent.js', 'server');
  api.export('WebTorrent', 'server');

  var webtorrentNpmDir = '.npm/package/node_modules/webtorrent/';
  api.addFiles (webtorrentNpmDir + 'webtorrent.min.js' , 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('xaiki:webtorrent');
  api.addFiles('xaiki:webtorrent-tests.js');
});
