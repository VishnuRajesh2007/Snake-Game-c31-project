class Snake {
    constructor() {
      this.len = 0;
      this.body = []
      this.body[0] = createVector(1, 1)
      this.xDir = 0;
      this.yDir = 0;
    }
  
    update() {
      var head = this.body[this.body.length - 1].copy();
      this.body.shift();
      head.x += this.xDir;
      head.y += this.yDir;
      this.body.push(head);
      //this.body[0].x += this.xDir;
      //this.body[0].y += this.yDir;
    }
  
    display() {
      for (var i = 0; i < this.body.length; i++) {
        rectMode(CENTER);
        noStroke();
        fill(0, 0, 255);
        rect(this.body[i].x, this.body[i].y, 1, 1);
      }
    }
  
    setDir(x, y) {
      this.xDir = x;
      this.yDir = y;
    }
  
    eat(pos) {
      var x = this.body[this.body.length - 1].x;
      var y = this.body[this.body.length - 1].y;
      if (x == pos.x && y == pos.y) {
        return true;
      }
      return false;
    }
    grow() {
      var head = this.body[this.body.length - 1].copy();
  
      this.len++;
      this.body.push(head);
    }
    gameOver() {
      var x = this.body[this.body.length - 1].x;
      var y = this.body[this.body.length - 1].y;
      if (x > w - 1 || x < 0 || y > h - 1 || y < 0) {
        return true;
      }
      for (var i = 0; i < this.body.length - 1; i++) {
        var part = this.body[i];
        if (part.x == x && part.y == y) {
          return true;
        }
      }
      return false;
    }
  
  }