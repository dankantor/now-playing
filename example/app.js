import {NowPlaying} from './../index.js';

class App {
  
  constructor() {
    const audio = new Audio();
    audio.src = 'example.m4a';
    const nowPlaying = new NowPlaying({
      'pageTitle': 'Now Playing Example'
    });
    document.querySelector('#play').addEventListener('click', e => {
      audio.addEventListener('ended', e => {
        nowPlaying.reset();
      });
      audio.play();
      nowPlaying.start({
        'title': 'Song',
        'artist': 'Artist'
      });
    });
  }
  
}

window.addEventListener('load', e => {
  new App();
});