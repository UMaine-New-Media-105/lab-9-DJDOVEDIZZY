https://editor.p5js.org/cyprian.dove/sketches/fh0rNrkWh
var A = Math.floor(Math.random() * 256);
var B = Math.floor(Math.random() * 180);
var C = Math.floor(Math.random() * 236);


function setup() {
  createCanvas(500, 400);
  bubbles = []
  sprouts = []
  tilesPerRow=5//growth.length
  tilesPerColumn = 10
   for (let bubblesDrawn = 0; bubblesDrawn < 50; bubblesDrawn++ ) {
     let thisX = random(width);
     let thisY = random(height);
     let thisHue = random(360);
     bubbles[bubblesDrawn]=new Bubble(thisX, thisY, thisHue);
   }
  for (let sproutsDrawn = 0; sproutsDrawn < 50; sproutsDrawn++ ) {
     let thisX = random(width);
     let thisY = random(height);
     let thisHue = random(360);
     sprouts[sproutsDrawn]=new Sprout(thisX, thisY, thisHue);
   }
}


function draw() { 
  let randomClr = "rgb(" + A + "," + B + "," + C + ")";
  background(randomClr);
   for (let bubblesShown = 0; bubblesShown < bubbles.length; bubblesShown++) {
   bubbles[ bubblesShown ].move();
   bubbles[ bubblesShown ].show();
   }
  for (let sproutsShown = 0; sproutsShown < sprouts.length; sproutsShown++) {
   sprouts[ sproutsShown ].move();
   sprouts[ sproutsShown ].show();
  }
}


class Bubble {
	constructor(x, y, r) {
		this.x = x;
		this.y = y;
		this.r = r;
	}
	move() {
		this.x = this.x+ random(-15,15);
        this.y = this.y+random(-15,15);
    let bubbleIsTooFarLeft = (this.x < 0);
    let bubbleIsTooFarRight = (this.x > width);
       let bubbleIsTooLow = (this.y < 0);
    let bubbleIsTooHigh = (this.y > height);
    if (bubbleIsTooFarLeft || bubbleIsTooFarRight ) {
      this.x = - this.x;
       if (bubbleIsTooLow || bubbleIsTooHigh ) {
      this.y = - this.y;
	}
	}   
    }
	show() {
      push();
  translate(this.x,this.y);
  scale(.2);
   fill("darkseagreen");
  for (let petalsDrawn = 0; petalsDrawn < 12; petalsDrawn++) {
    rotate(30);
    rect(0, 0, random(20), random(50, 90));
  }
  fill("palegreen");
  for (let petalsDrawn = 0; petalsDrawn < 12; petalsDrawn++) {
    rotate(40);
    rect(0, 0, random(10, 20), random(30, 80));
  }
  fill("darkolivegreen");
  for (let petalsDrawn = 0; petalsDrawn < 12; petalsDrawn++) {
    rotate(30);
    rect(0, 0, random(15, 30), random(20,50));
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


class Sprout {
	constructor(x, y, r) {
		this.x = x;
		this.y = y;
		this.r = r;
	}
	move() {
		this.x = this.x+ random(-5,5);
        this.y = this.y+random(-5,5);
    let bubbleIsTooFarLeft = (this.x < 0);
    let bubbleIsTooFarRight = (this.x > width);
       let bubbleIsTooLow = (this.y < 0);
    let bubbleIsTooHigh = (this.y > height);
    if (bubbleIsTooFarLeft || bubbleIsTooFarRight ) {
      this.x = - this.x;
       if (bubbleIsTooLow || bubbleIsTooHigh ) {
      this.y = - this.y;
	}
	}   
    }
	show() {
     push();
  translate(this.x,this.y);
  stroke("indigo");
  scale(-.15);
  strokeWeight(1);
  fill("teal");
  for (let petalsDrawn = 0; petalsDrawn < 24; petalsDrawn++) {
    rotate(35);
    rect(0, 0, random(70, 90), random(120, 240));
  }
  fill("aquamarine");
  for (let petalsDrawn = 0; petalsDrawn < 12; petalsDrawn++) {
    rotate(45);
    rect(0, 0, random(20,50), random(100, 170));
  }
  fill("lightseagreen");
  for (let petalsDrawn = 0; petalsDrawn < 12; petalsDrawn++) {
    rotate(30);
    rect(0, 0, random(40), random(80, 130));
  }
  fill("turquoise");
  for (let petalsDrawn = 0; petalsDrawn < 24; petalsDrawn++) {
    rotate(30);
    rect(0, 0, random(35), random(12,35));
  }
  noStroke();
  fill("ivory");
  for (let petalsDrawn = 0; petalsDrawn < 12; petalsDrawn++) {
    rotate(30);
    rect(0, 0, 2, 30);
  }
  fill("goldenrod");
  for (let ballsDrawn = 0; ballsDrawn < 12; ballsDrawn++) {
    rotate(40);
    ellipse(30, 5, 15, 15);
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
