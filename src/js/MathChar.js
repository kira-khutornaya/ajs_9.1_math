import Character from './Character';

export default class MathChar extends Character {
  set stoned(bool) {
    this.withStoned = bool;
  }

  get stoned() {
    return this.withStoned;
  }

  set newAttack(distance) {
    this.distance = distance;
    let coefficientAttack;

    if (this.withStoned) {
      coefficientAttack = 100 - (this.distance - 1) * 10 - Math.log2(this.distance) * 5;
    } else {
      coefficientAttack = 100 - (this.distance - 1) * 10;
    }

    this.newAttackValue = Math.round(this.attack * (coefficientAttack / 100));
    if (this.newAttackValue < 0) this.newAttackValue = 0;
  }

  get newAttack() {
    return this.newAttackValue;
  }
}
