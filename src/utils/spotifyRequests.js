/* eslint-disable import/prefer-default-export */
import spotify from '../config/spotify';

export async function getTracksFromRef(playlistRef) {
  // get array items from previously call
  const { items } = await spotify.request(playlistRef);
  return items;
}
