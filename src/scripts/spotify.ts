export interface LikedTrack {
  title: string;
  artist: string;
  coverUrl: string;
  spotifyUrl: string;
  addedAt: string;
}

export async function getLikedTracks(): Promise<LikedTrack[]> {
  const baseUrl = import.meta.env.SPOTIFY_API_URL;
  const forEmail = import.meta.env.SPOTIFY_EMAIL;
  const url = `${baseUrl}/tracks/liked?email=${forEmail}`;

  const response = await fetch(url);
  const responseJson = await response.json();
  const likedTracks = responseJson as LikedTrack[];

  return likedTracks;
}
