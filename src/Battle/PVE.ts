import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

type MonstersTypes = SimpleFighter[] | Fighter[];

export default class PVE extends Battle {
  public player: Fighter;
  private _monsters: MonstersTypes;
  constructor(player: Fighter, monsters: MonstersTypes) {
    super(player);
    this.player = player;
    this._monsters = monsters;
  }

  public fight(): number {
    const { player } = this;
    const monsters = this._monsters;

    monsters.forEach((monster) => {
      while (player.lifePoints > 0 && monster.lifePoints > 0) {
        player.attack(monster);
        monster.attack(player);
      }
    });
    return super.fight();
  }
}