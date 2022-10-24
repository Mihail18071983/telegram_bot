class Counter {
  constructor(rootSelector, initialValue = 0, step = 1) {
    this.value = initialValue;
    this.step = step;
    this.refs = this.getRefs(rootSelector);
    this.bindEvent();
    this.updateValueUI();
    this.eventClickByBtnBuy();
  }

  getRefs(rootSelector) {
    const refs = {};
    refs.container = document.querySelector(rootSelector);
    refs.incrementBtn = refs.container.querySelector("[data-increment]");
    refs.decrementBtn = refs.container.querySelector("[data-decrement]");
    refs.value = refs.container.querySelector("[data-value]");
    refs.btnBuy = refs.container.querySelector(".btn-buy");
    refs.counterContainer = refs.container.querySelector(".counter-wrapper");
    return refs;
  }

  increment() {
    this.value += this.step;
  }

  decrement() {
    this.value -= this.step;
  }

  updateValueUI() {
    if (this.value < 1) {
      this.refs.btnBuy.classList.remove("is-hidden");
      this.refs.counterContainer.classList.add("is-hidden");
      this.value = 1;
    }
    // else if (this.value >= 1 && this.value < 10) {
    //   this.refs.value.textContent = "0" + this.value;
    // }
    else {
      this.refs.counterContainer.classList.remove('is-hidden');
      this.refs.btnBuy.classList.add('is-hidden');
      this.refs.value.textContent = this.value;
    }
  }

  bindEvent() {
    this.refs.incrementBtn.addEventListener("click", () => {
      this.increment();
      this.updateValueUI();
    });

    this.refs.decrementBtn.addEventListener("click", () => {
      this.decrement();
      this.updateValueUI();
    });
  }

  eventClickByBtnBuy() {
    this.refs.btnBuy.addEventListener("click", () => {
      this.refs.btnBuy.classList.add("is-hidden");
      this.refs.counterContainer.classList.remove("is-hidden");
    });
  }
}

const counter1 = new Counter("#counter-1");
console.log(counter1);
const counter2 = new Counter("#counter-2");

const counter3 = new Counter("#counter-3");
