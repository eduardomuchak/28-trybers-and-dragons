export default abstract class Race {
  private static _counter = 0;

  constructor(readonly _name: string, readonly _dexterity: number) { }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}