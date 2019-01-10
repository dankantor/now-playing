(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global['audio-controls'] = {})));
}(this, (function (exports) { 'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NowPlaying = function () {
  function NowPlaying(opts) {
    _classCallCheck(this, NowPlaying);

    if (opts.pageTitle) {
      this.pageTitle = opts.pageTitle;
    }
    if (opts.playQueue) {
      opts.playQueue.on('playing', this.onStart.bind(this));
      opts.playQueue.on('stop', this.onStop.bind(this));
    }
  }

  _createClass(NowPlaying, [{
    key: 'onStart',
    value: function onStart(e) {
      this.start(e.target.song);
    }
  }, {
    key: 'start',
    value: function start(song) {
      this.title = song;
    }
  }, {
    key: 'onStop',
    value: function onStop(e) {
      this.reset();
    }
  }, {
    key: 'reset',
    value: function reset() {
      if (this.pageTitle) {
        document.title = this.pageTitle;
      }
    }
  }, {
    key: 'replaceHTMLEncoding',
    value: function replaceHTMLEncoding(str) {
      str = str.replace(/&#8220;/g, '"');
      str = str.replace(/&#8221;/g, '"');
      str = str.replace(/&#8217;/g, "'");
      str = str.replace(/&#8230;/g, "...");
      str = str.replace(/&amp;/g, "&");
      return str;
    }
  }, {
    key: 'title',
    get: function get() {
      return this._title;
    },
    set: function set(song) {
      var title = '';
      if (song.title) {
        title = song.title;
      }
      if (song.artist) {
        title += ' by ' + song.artist;
      }
      if (this.pageTitle) {
        title += ' -  ' + this.pageTitle;
      }
      title = this.replaceHTMLEncoding(title);
      document.title = title;
      this._title = title;
    }
  }]);

  return NowPlaying;
}();

exports.NowPlaying = NowPlaying;

Object.defineProperty(exports, '__esModule', { value: true });

})));
