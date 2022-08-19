export class InitFlights {
  static readonly type = '[Home] InitFlights';
  constructor(public params: { icao24: string; begin: number; end: number }) {}
}
