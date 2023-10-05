export default class Widget {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  static get markup() {
    return `
        <div class="widget-title">
            <h3>Check your credit card number</h3>
        </div>
        <div class="widget-cards">
            <ul class="cards">
                <li class="card mir"><span class="card_tittle visually_hidden">Мир</span></li>
                <li class="card diners_club"><span class="card_tittle visually_hidden">Diners Club</span></li>
                <li class="card jcb"><span class="card_tittle visually_hidden">JCB</span></li>
                <li class="card amex"><span class="card_tittle visually_hidden">American Express</span></li>
                <li class="card visa"><span class="card_tittle visually_hidden">Visa</span></li>
                <li class="card master"><span class="card_tittle visually_hidden">Mastercard</span></li>
                <li class="card discover"><span class="card_tittle visually_hidden">Discover</span></li>
            </ul>
        </div>
        <form class="widget-form">
            <input class="input" type="number" placeholder="Enter the card number">
            <button class="button" type="submit">Click to Validate</button>
        </form>`;
  }

  redrawWidget() {
    this.parentEl.innerHTML = Widget.markup;
  }
}
