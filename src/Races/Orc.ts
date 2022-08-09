import Race from './Race';

export default class Orc extends Race {
  private static _counter = 0;
  private _maxLifePoints = 74;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    Orc._counter += 1;
  }

  static createdRacesInstances(): number {
    return Orc._counter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}