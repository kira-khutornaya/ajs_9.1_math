import Magician from '../Magician';
import Daemon from '../Daemon';

describe('MathChar:', () => {
  const elena = new Daemon('Elena');
  const maxim = new Magician('Maxim');

  test('should return stoned value of true', () => {
    maxim.stoned = true;
    expect(maxim.stoned).toBeTruthy();
  });

  test('should return stoned value of false', () => {
    expect(elena.stoned).toBeFalsy();
  });

  test('should return attack with stoned correctly', () => {
    maxim.stoned = true;
    maxim.attack = 200;
    maxim.newAttack = 2;
    expect(maxim.newAttack).toBe(170);
  });

  test('should return attack without stoned correctly', () => {
    elena.attack = 120;
    elena.newAttack = 5;
    expect(elena.newAttack).toBe(72);
  });

  test('should return new attack value of 0', () => {
    maxim.attack = 170;
    maxim.newAttack = 12;
    expect(maxim.newAttack).toBe(0);
  });
});
