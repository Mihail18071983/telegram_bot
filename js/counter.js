class Counter {
  constructor(rootSelector, initialValue = 0, step = 1) {
    this.value = initialValue;
    this.step = step;
    this.refs = this.getRefs(rootSelector);
    this.bindEvent();
    this.updateValueUI();
  }

  getRefs(rootSelector) {
    const refs = {};
    refs.container = document.querySelector(rootSelector);
    refs.incrementBtn = refs.container.querySelector("[data-increment]");
    refs.decrementBtn = refs.container.querySelector("[data-decrement]");
    refs.value = refs.container.querySelector("[data-value]");
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
      this.refs.value.textContent = "01";
    }
    else if (this.value >= 1 && this.value < 10) {
      this.refs.value.textContent = "0" + this.value;
    }
    else this.refs.value.textContent = this.value;
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
}

const counter1 = new Counter("#counter-1");

const counter2 = new Counter("#counter-2");

const counter3 = new Counter("#counter-3");
