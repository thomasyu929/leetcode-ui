class EventEmitter {
  constructor() {
    this.cache = {};
  }

  on(name, fn) {
    if (this.cache[name]) {
      this.cache[name].push(fn);
    }
    else {
      this.cache = [fn];
    }
  }

  off(name, fn) {
    let tasks = this.cache[name];

    if (tasks) {
      const idx = tasks.findIndex(f => f === fn);

      if (idx >= 0) {
        tasks.splice(idx, 1);
      }
    }
  }

  emit(name, once = false, ...args) {
    if (this.cache[name]) {
      let tasks = this.cache[name].slice();

      for (let fn of tasks) {
        fn(...args);
      }

      if (once) {
        delete this.cache[name];
      }
    }
  }
}