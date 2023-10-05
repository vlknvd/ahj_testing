import systemPayCard from './systemPayCard';

export default class CheckPaySystem {
  constructor(value) {
    this.value = value;
    this.systemPayCard = systemPayCard;
  }

  checkSystem(value) {
    const num = value.split('');
    const firstNum = num[0] + num[1];
    if (this.systemPayCard[firstNum]) {
      const { name } = this.systemPayCard[firstNum];
      return name;
    }
    if (this.systemPayCard[num[0]]) {
      const { name } = this.systemPayCard[num[0]];
      return name;
    }
    return false;
  }
}
