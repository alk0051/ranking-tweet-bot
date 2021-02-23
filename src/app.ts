import fs from 'fs';
import { compareAndSaveNewPlayers, compareAndSaveOldPlayers } from './services/compareLists';
import { writeNewList, refreshOldList } from './services/getChallList';
import path from 'path';

class Player {
  nick: string;
}

const oldChallList: Player[] = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'Lists', 'oldList.json'), 'utf8'));

const newChallList: Player[] = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'Lists', 'newList.json'), 'utf8'));


async function app() {
  await writeNewList.then(() => {console.log('[+] writed new list')});
  await compareAndSaveNewPlayers(oldChallList, newChallList).then(() => {console.log('[+] saved new players')});
  await compareAndSaveOldPlayers(oldChallList, newChallList).then(() => {console.log('[+] saved old players')});
  refreshOldList(newChallList);
}

app();  