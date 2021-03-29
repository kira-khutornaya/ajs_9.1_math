import MathChar from './MathChar';

export default class Magician extends MathChar {
  constructor(name) {
    super(name);
    this.type = 'Magician';
    this.attack = 10;
    this.defence = 40;
  }
}
