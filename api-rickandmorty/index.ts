import { writeFile } from 'fs/promises';
import path from 'path';
import { getAllEpisodes, getCharacters } from './rickandmortyapi/api';

const start = async () => {
  const episodes = await getAllEpisodes();

  await writeFile(
    path.join(process.cwd(), 'output-files', 'episodes.json'),
    JSON.stringify(episodes)
  );

  const promises = episodes.map(async (episode) => {
    const episodeCharacters = await getCharacters(episode);
    const output = {
      ...episode,
      characters: episodeCharacters
    };
    return output;
  });

  const output = await Promise.all(promises);

  await writeFile(
    path.join(process.cwd(), 'output-files', 'output.json'),
    JSON.stringify(output)
  );

  console.dir(output, { depth: null });
};

function printError(error: any) {
  console.log('====================ERROR========================\n');
  console.error('%s', error);
}

process.on('uncaughtException', function (err) {
  if ((err as any).code === 'ENOTFOUND') {
    printError('Internet Connection Lost!\n');
  } else {
    printError(err);
  }
});

process.on('unhandledRejection', function (err) {
  printError(err);
});

try {
  start();
} catch (err: any) {
  printError(err);
}
