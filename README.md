Now Playing
==============

Sets the HTML document title to the current song. The song should be an object with the properties:

```js
{
  'title': 'Song title',
  'artist': 'Some artist'
}
```

Connects to [PlayQueue](https://www.npmjs.com/package/playqueue). 


## Install

```
npm install now-playing
```


## Usage

```js
  import {NowPlaying} from 'now-playing';
    
  const nowPlaying = new NowPlaying({
    'pageTitle': 'Now Playing Example',
    'playQueue': playQueue
  });
```

View the [example](example) to see how it is used.  