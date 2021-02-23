import fs from 'fs';
import path from 'path';

class Player {
  nick: string;
}


const newChallPlayers: Player[] = [];

const oldChallPlayers: Player[] = [];


export const compareAndSaveNewPlayers = async (oldChallList: Player[], newChallList: Player[]) => { 
  newChallList.map((player) => { 
    const found = oldChallList.find(oldChall => oldChall.nick == player.nick);
    if (!found) {
      newChallPlayers.push(player);
    }
  });

  fs.writeFileSync(path.join(__dirname, '..', 'data', 'Players', 'newChallPlayers.json'), JSON.stringify(newChallPlayers, null, 2));
}

export const compareAndSaveOldPlayers = async (oldChallList: Player[], newChallList: Player[]) => {
  oldChallList.map((player) => {
    const found = newChallList.find(newChall => newChall.nick == player.nick);
    if(!found) {
      oldChallPlayers.push(player);
    }
  });

  fs.writeFileSync(path.join(__dirname, '..', 'data', 'Players', 'oldChallPlayers.json'), JSON.stringify(oldChallPlayers, null, 2));
}
