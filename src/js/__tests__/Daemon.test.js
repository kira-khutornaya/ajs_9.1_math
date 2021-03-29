import Daemon from '../Daemon';

describe('Daemon:', () => {
  const daemon = new Daemon('Ann');

  test('should throw error', () => {
    expect(() => new Daemon('a')).toThrow();
    expect(() => new Daemon('adkjhfdshfsf')).toThrow();
  });

  test('should return object', () => {
    expect(daemon).toMatchObject({
      name: 'Ann',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    });
  });

  describe('damage method:', () => {
    test('at a damage level of 60 should expect a health level of 64', () => {
      daemon.damage(70);
      expect(daemon.health).toBe(58);
    });

    test('at a damage level of 80 should expect a health level of 0', () => {
      daemon.damage(100);
      expect(daemon.health).toBe(0);
    });
  });

  describe('levelUp method:', () => {
    test('should throw error', () => {
      expect(() => daemon.levelUp()).toThrow();
    });

    test('should work correctly', () => {
      daemon.health = 30;
      daemon.levelUp();
      expect(daemon.level).toBe(2);
      expect(daemon.attack).toBe(12);
      expect(daemon.defence).toBe(48);
      expect(daemon.health).toBe(100);
    });
  });
});
