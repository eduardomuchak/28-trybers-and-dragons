import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

type MonstersTypes = SimpleFighter[] | Fighter[];

export default class PVE extends Battle {
  private _player: Fighter;
  private _monsters: MonstersTypes;
  constructor(player: Fighter, monsters: MonstersTypes) {
    super(player);
    this._player = player;
    this._monsters = monsters;
  }

  fight(): number {
    const player = this._player;
    const monsters = this._monsters;
    let winner = 1;

    monsters.forEach((monster) => {
      player.attack(monster);
      monster.attack(player);
    });
    if (player.lifePoints === -1) {
      winner = -1;
    }

    return winner;
  }
}