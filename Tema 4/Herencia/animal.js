class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  startRunning(speed) {
    this.speed = speed;
    return `The ${this.name} runs with speed of ${this.speed}km per hour.`;
  }
  stopRunning() {
    this.speed = 0;
    console.log(`The ${this.name} stopped running and now sits still.`);
  }
}

export { Animal };
