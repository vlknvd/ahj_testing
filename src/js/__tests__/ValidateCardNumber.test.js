import ValidateCardNumber from '../ValidateCardNumber';
import systemPayCard from '../systemPayCard';

test('card number true', () => {
  const validate = new ValidateCardNumber(systemPayCard);
  const value = 2221003418797463;
  expect(validate.checkNumber(value)).toBeTruthy();
});

test('card number false', () => {
  const validate = new ValidateCardNumber(systemPayCard);
  const value = 2221003418797464;
  expect(validate.checkNumber(value)).toBeFalsy();
});
