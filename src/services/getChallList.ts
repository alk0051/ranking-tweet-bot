import axios from "axios";
import cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';


class Player {
  nick: string;
}

const url1 = 'https://www.leagueofgraphs.com/pt/rankings/summoners/br';
const url2 = 'https://www.leagueofgraphs.com/pt/rankings/summoners/br/page-2';

const axiosInstance = axios.create();


export const writeNewList = axiosInstance.get(url1).then(response => {
  const html = response.data;
  const $ = cheerio.load(html);

  const lista = $('#mainContent > div:nth-child(1) > div > div > table > tbody');

  let nicks: string[] = [];

  lista.find('tr > td:nth-child(2) > a > div > div.txt > span.name').each((i, element) => {
    nicks.push($(element).text());
  });

  const players1: Player[] = [];

  nicks.map((nick) => {
    let player: Player = new Player;
    player.nick = nick;

    players1.push(player);
  });
  

  axiosInstance.get(url2).then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
  
    const lista = $('#mainContent > div:nth-child(1) > div > div > table > tbody');
  
    let nicks: string[] = [];
  
    lista.find('tr > td:nth-child(2) > a > div > div.txt > span.name').each((i, element) => {
      nicks.push($(element).text());
    });
  
    const players2: Player[] = [];
  
    nicks.map((nick) => {
      let player: Player = new Player;
      player.nick = nick;
  
      players2.push(player);
    });
    const players: Player[] = players1.concat(players2);
  
    fs.writeFileSync(path.join(__dirname, '..', 'data', 'Lists', 'newList.json'), JSON.stringify(players, null, 2));
  });
});



export const refreshOldList = (newList: Player[]) => {
  fs.writeFileSync(path.join(__dirname, '..', 'data', 'Lists', 'oldList.json'), JSON.stringify(newList, null, 2));
}

