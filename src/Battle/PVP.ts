import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player1: Fighter;
  private _player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  fight(): number {
    const player1 = this._player1;
    const player2 = this._player2;
    let winner = 1;

    while (player1.lifePoints > 0 && player2.lifePoints > 0) {
      player1.attack(player2);
      player2.attack(player1);
    }

    if (player1.lifePoints === -1) {
      winner = -1;
    }

    return winner;
  }
}