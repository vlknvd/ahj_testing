import CheckPaySystem from '../CheckPaySystem';

test('pay system name to be true', () => {
  const value = '4354919970927682';
  const check = new CheckPaySystem(value);
  expect(check.checkSystem(value)).toBe('visa');
});

test('pay system name to be false', () => {
  const value = '11111111111111';
  const check = new CheckPaySystem(value);
  expect(check.checkSystem(value)).toBeFalsy();
});
