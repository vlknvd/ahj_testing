import ValidateCardNumber from './ValidateCardNumber';
import CheckPaySystem from './CheckPaySystem';

export default class AddEventWidget {
  constructor(widget, systemPay) {
    this.widget = widget;
    this.systemPay = systemPay;
    this.input = document.querySelector('.input');
    this.validate = new ValidateCardNumber(this.systemPay);
    this.button = document.querySelector('.button');
    this.form = document.querySelector('.widget-form');
    this.cards = document.querySelector('.cards');
    this.check = new CheckPaySystem();
  }

  addEvent() {
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
      const { value } = this.input;
      if (this.validate.checkLength(value) && ValidateCardNumber.checkNumber(value)) {
        this.clean();
        const name = this.check.checkSystem(value);
        if (name) {
          this.addChecked(name);
        } else {
          this.clean();
          throw new Error('Неверный номер карты');
        }
      } else {
        this.clean();
        throw new Error('Такой карты не существует');
      }
    });
  }

  addChecked(name) {
    this.cards.querySelector(`.${name}`).classList.add('checked');
    this.cards.querySelectorAll('.card').forEach((e) => {
      e.classList.add('transparent');
    });
  }

  clean() {
    this.cards.querySelectorAll('.card').forEach((e) => {
      e.classList.remove('checked', 'transparent');
    });
  }
}
