import Spotify from 'node-spotify-api';

const spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET,
});

export default spotify;
