function setup() {
  createCanvas(400, 400);
  // initialising 4 ducks
  duck1 = new Duck(random(width),random(height));
  duck2 = new Duck(random(width),random(height));
  duck3 = new Duck(random(width),random(height));
  duck4 = new Duck(random(width),random(height));
}

class Duck {
  constructor(x,y){
    this.x = y;
    this.y = x;
    this.t = random(10);
    this.u = random(10);
    this.r = 255;
    this.g = 255;
    this.b = 0;
    this.l = 50;// unit length to standardise the size of the ducks
  }
  show(){
    // body
    stroke(this.r,this.g,this.b);
    fill(this.r,this.g,this.b);
    circle(this.x,this.y,this.l);
    circle(this.x+(4.5*this.l/5),this.y+(4*this.l/5),this.l);
    ellipse(this.x+(2*this.l/5),this.y+this.l,this.l*2,this.l+(this.l/5));
  
    //bill
    stroke(this.g, this.b, abs(this.r+100));
    fill(this.g, this.b, abs(this.r+100));
    ellipse(this.x-(2*this.l/5),this.y,(3*this.l/5),this.l/5);
    ellipse(this.x-(1.5*this.l/5),this.y-(this.l/10),(1.5*this.l/5),this.l/10);
  
    //eye white
    stroke(0,0,0);
    fill(0,0,0);
    circle(this.x+(this.l/5),this.y-(this.l/10),(1.1*this.l/5));
    // eye black
    stroke(255,255,255);
    fill(255,255,255);
    circle(this.x+(1.2*this.l/5),this.y-(1*this.l/5),this.l/10);
    //print("wuavk!");
  }
  move(){
    this.x += this.t;
    if (this.x > width || this.x < 0){
      this.t = this.t * -1;
    }
    this.y += this.u;
    if ((this.y > height || this.y < 0)){ 
      this.u = this.u * -1;
    }
   }
  colour(){
    if ((this.x > width || this.x < 0) || (this.y > height || this.y < 0)){ 
      this.r = random(255);
      this.g = random(255);
      this.b = random(255);
    } 
  }
}

function draw(){  
  background(0,0,0);
  //duck 1 control
  duck1.move();
  duck1.show();
  duck1.colour();
  //duck 2 control
  duck2.move();
  duck2.show();
  duck2.colour();
  //duck 3 control
  duck3.move();
  duck3.show();
  duck3.colour();
  //duck 4 control
  duck4.move();
  duck4.show();
  duck4.colour();
}

