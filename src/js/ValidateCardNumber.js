export default class ValidateCardNumber {
  constructor(systemPayCard) {
    this.regex1 = new RegExp('^[0-9]{14}$');
    this.regex2 = new RegExp('^[0-9]{15}$');
    this.regex3 = new RegExp('^[0-9]{16}$');
    this.systemPayCard = systemPayCard;
  }

  checkLength(value) {
    return this.regex1.test(value) || this.regex2.test(value) || this.regex3.test(value);
  }

  checkNumber(value) {
    let sum = 0;
    let even = false;
    if (value) {
      const arr = String(value).replace(/[^\d]/g, '');
      for (let i = arr.length - 1; i >= 0; i -= 1) {
        let num = parseInt(arr.charAt(i), 10);
        if (even) {
          num *= 2;
          if (num > 9) {
            num -= 9;
          }
        }
        sum += num;
        even = !even;
      }
      return (sum % 10) === 0;
    }
    return false;
  }
}
