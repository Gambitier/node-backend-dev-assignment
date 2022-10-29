import get from '../common/get';
import { ApiResponse, Character, Episode, Info } from './interfaces';

export async function getAllEpisodes(): Promise<Episode[]> {
  let apiResponse: ApiResponse<Info<Episode[]>> = (await get(
    'episode'
  )) as ApiResponse<Info<Episode[]>>;

  const episodes = [];
  episodes.push(apiResponse.data.results);

  while (apiResponse.data.info?.next) {
    const next = apiResponse.data.info.next;
    const slug = next.split('/').pop() as string;
    apiResponse = (await get(slug)) as ApiResponse<Info<Episode[]>>;
    episodes.push(apiResponse.data.results);
  }

  return episodes.flat() as unknown as Episode[];
}
export async function getCharacters(episode: Episode) {
  const characterIdList = episode.characters.map((char) => {
    const characterId = char.split('/').pop() as string;
    return characterId;
  });

  const apiResponse: ApiResponse<Character[]> = (await get(
    `character/${characterIdList.toString()}`
  )) as ApiResponse<Character[]>;

  const characters = apiResponse.data ?? ([] as Character[]);

  return characters;
}
