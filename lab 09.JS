https://editor.p5js.org/cyprian.dove/sketches/yQMjPS_Tx
let sprites = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 50; i++) {
    sprites.push(new Sprite());
  }
}

function draw() {
  background(220);
  for (let i = 0; i < sprites.length; i++) {
    sprites[i].move();
    sprites[i].display();
  }
}

class Sprite {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(10, 30);
    this.speedX = random(-5, 5);
    this.speedY = random(-5, 5);
    this.color = color(random(255), random(255), random(255));
  }
  
  move() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > width) {
      this.speedX *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.speedY *= -1;
    }
  }
  
  display() {
    push();
    translate(this.x + 40, this.y);
    scale(0.15);
    strokeWeight(1);
    
    // Randomize the color of the sprite
    let colors = ["indigo", "mediumblue", "royalblue", "cornflowerblue", "paleturquoise", "slateblue", "lightskyblue"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    stroke(randomColor);
    fill(randomColor);
    
    for (let petalsDrawn = 0; petalsDrawn < 24; petalsDrawn++) {
      rotate(35);
      rect(0, 0, random(70, 90), random(120, 240));
    }
    fill(randomColor);
    for (let petalsDrawn = 0; petalsDrawn < 12; petalsDrawn++) {
      rotate(30);
      rect(0, 0, random(50, 80), random(130, 210));
    }
    fill(randomColor);
    for (let petalsDrawn = 0; petalsDrawn < 12; petalsDrawn++) {
      rotate(45);
      rect(0, 0, random(20, 50), random(100, 170));
    }
    fill(randomColor);
    for (let petalsDrawn = 0; petalsDrawn < 12; petalsDrawn++) {
      rotate(30);
      rect(0, 0, random(40), random(80, 130));
    }
    fill(randomColor);
    for (let petalsDrawn = 0; petalsDrawn < 12; petalsDrawn++) {
      rotate(40);
      rect(0, 0, random(10, 20), random(70, 90));
    }
    fill(randomColor);
    for (let petalsDrawn = 0; petalsDrawn < 12; petalsDrawn++) {
      rotate(30);
      rect(0, 0, random(15, 30), random(50, 70));
    }
    fill(randomColor);
    for (let petalsDrawn = 0; petalsDrawn < 13; petalsDrawn++) {
      rotate(30);
      rect(0, 0, random(15), random(35));
    }
    noStroke();
    fill("ivory");
    for (let petalsDrawn = 0; petalsDrawn < 12; petalsDrawn++) {
      rotate(30);
      rect(0, 0, 2, 60);
    }
    fill("goldenrod");
    for (let ballsDrawn = 0; ballsDrawn < 12; ballsDrawn++) {
      rotate(40);
      ellipse(50, 5, 15, 15);
    }
    fill("goldenrod");
    for (let ballsDrawn = 0; ballsDrawn < 12; ballsDrawn++) {
      rotate(30);
      rect(0, 5, 7, 10);
    }
    fill("mediumseagreen");
    for (let ballsDrawn = 0; ballsDrawn < 12; ballsDrawn++) {
      rotate(30);
      rect(0, 5, 3, 10);
    }
    pop();
  }
}
