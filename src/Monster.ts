import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._lifePoints;
    let lifePoints = this._lifePoints;

    if (damage > 0) {
      lifePoints -= damage;
    }
    if (lifePoints <= 0) {
      lifePoints = -1;
    }
    return lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    const attackPoints = this._strength;
    enemy.receiveDamage(attackPoints);
  }
}