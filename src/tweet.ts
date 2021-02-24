import Twit from 'twit';
import config from './secret.js';
import newChallPlayers from './data/Players/oldChallPlayers.json';
import oldChallPLayers from './data/Players/newChallPlayers.json';

var T = new Twit(config);

const newNicks = [];
const oldNicks = [];


oldChallPLayers.map((oldChall) => {
  newNicks.push(oldChall.nick);
});

newChallPlayers.map((newChall) => {
  oldNicks.push(newChall.nick);
});


const newChalls = newNicks.join(',   ');
const oldChalls = oldNicks.join(',   ');

const tamNew = newChalls.length;
const tamOld = oldChalls.length;

if (tamNew < 280 && tamOld < 280) {
  T.post('https://api.twitter.com/1.1/statuses/update.json', {status: `🔴 Sairam do Challenger 🔴\n${oldChalls}`}, (err, data, response) => {
    if (err) {return err};
    T.post('https://api.twitter.com/1.1/statuses/update.json', {status: `🟢 Entraram no Challenger 🟢 \n${newChalls}`}, (err, data, response) => {
      if (err) {return err};
    });
  });
  console.log(`New Challengers: ${newChalls}`);
  console.log(`Old Challengers: ${oldChalls}`);
}
else 
  console.log(`[-] Ultrapassou 280 caracteres\n${tamNew}\n${tamOld}`)


