class Walls extends GameObject {
    constructor(x, y, destructible = true) {
      super(x, y);
      this.destructible = destructible;
      this.destroyed = false;
    }
    disintegrate() {
      if (this.destructible) {
        this.destroyed = true;
      }
    }
  }