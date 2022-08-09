import Race from './Race';

export default class Elf extends Race {
  private static _counter = 0;
  private _maxLifePoints = 99;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    Elf._counter += 1;
  }

  static createdRacesInstances(): number {
    return Elf._counter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}