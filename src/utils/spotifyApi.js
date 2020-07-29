import spotify from '../config/spotify';

export default async function spotifyApiPlaylist(musicType) {
  // call the right playlist from spotify
  const responseSpot = await spotify.search({
    type: 'playlist',
    query: musicType,
  });
  return responseSpot.playlists.items[0].tracks.href;
}
