import Twit from 'twit';
import config from './secret.js';
import newChallPlayers from './data/Players/oldChallPlayers.json';
import oldChallPLayers from './data/Players/newChallPlayers.json';

var T = new Twit(config);

const newNicks = [];
const oldNicks = [];

newChallPlayers.map((newChall) => {
  oldNicks.push(newChall.nick);
});

oldChallPLayers.map((oldChall) => {
  newNicks.push(oldChall.nick);
});

const newChalls = newNicks.join(',   ');
const oldChalls = oldNicks.join(',   ');

T.post('https://api.twitter.com/1.1/statuses/update.json', {status: `🟢 Entraram no Challenger 🟢 \n${newChalls}\n\n🔴 Sairam do Challenger 🔴\n${oldChalls}`}, (err, data, response) => {
  if (err) {return err};
});


console.log(`New Challengers: ${newChalls}`);
console.log(`Old Challengers: ${oldChalls}`);
