import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  public player1: Fighter;
  private _player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this.player1 = player1;
    this._player2 = player2;
  }

  public fight(): number {
    const { player1 } = this;
    const player2 = this._player2;

    while (player1.lifePoints > 0 && player2.lifePoints > 0) {
      player1.attack(player2);
      player2.attack(player1);
    }

    return super.fight();
  }
}