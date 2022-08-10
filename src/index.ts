import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';
import getRandomInt from './utils';

const player1 = new Character('Eduardo');
const player2 = new Character('Saul Goodman');
const player3 = new Character('Ron Swanson');

// player1.levelUp();
// player1.levelUp();
// player1.levelUp();
// player1.levelUp();
// player1.levelUp();
// player1.levelUp();
// player1.levelUp();
// player1.levelUp();
// player1.levelUp();

for (let index = 0; index < getRandomInt(3, 8); index += 1) {
  player1.levelUp();
}

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

const runBattles = (battles: Battle[]): void => {
  battles.forEach((battle) => {
    battle.fight();
  });
};

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };