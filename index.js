class NowPlaying {
  
  constructor(opts) {
    if (opts.pageTitle) {
      this.pageTitle = opts.pageTitle;
    }
    if (opts.playQueue) {
      opts.playQueue.on('playing', this.onStart.bind(this));
      opts.playQueue.on('stop', this.onStop.bind(this));
    }
  }
  
  onStart(obj) {
    this.start(obj.song);
  }
  
  start(song) {
    this.title = song;
  }
  
  onStop(e) {
    this.reset();
  }
  
  get title() {
    return this._title; 
  }
  
  set title(song) {
    let title = '';
    if (song.title) {
      title = song.title;
    }
    if (song.artist) {
      title += ` by ${song.artist}`;
    }
    if (this.pageTitle) {
      title += ` -  ${this.pageTitle}`;
    }
    title = this.replaceHTMLEncoding(title);
    document.title = title;
    this._title = title; 
  }
  
  reset() {
    if (this.pageTitle) {
      document.title = this.pageTitle;
    }
  }

  replaceHTMLEncoding(str) {
    str = str.replace(/&#8220;/g, '"');
    str = str.replace(/&#8221;/g, '"');
    str = str.replace(/&#8217;/g, "'");
    str = str.replace(/&#8230;/g, "...");
    str = str.replace(/&amp;/g, "&");
    return str;
  }
  
}

export {NowPlaying};