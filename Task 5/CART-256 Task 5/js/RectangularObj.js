class RectangularObj {
  constructor(x, y, w, h, f_color, s_color, context) {
    // We write instructions to set up a Flower here
    // Position and size information
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.fill_color = f_color;
    this.stroke_color = s_color;
    this.context = context;
    this.speed = 2;
    this.isClicked = false;
    this.rotation = 0;
  }

  display() {
    this.context.save();
    this.context.translate(this.x + this.width/2, this.y + this.height/2);
    this.context.rotate((this.rotation * Math.PI)/180);
    this.context.fillStyle = this.fill_color; // change the color we are using
    this.context.fillRect(-this.width/2, -this.height/2,this.width, this.height);
    this.context.strokeStyle = this.stroke_color; // change the color we are using
    this.context.lineWidth = 2; //change stroke
    this.context.strokeRect(-this.width/2, -this.height/2,this.width, this.height);
    this.context.restore();
  }

  update(){
    //update freestyle
  this.rotation += 1;
  if (this.rotation >= 360){
    this.rotation = 0;
  }
  this.x += this.speed;
  if (this.x > this.context.canvas.width) {
    this.x = -this.width;
  }
  }

  handleClick(mouseX, mouseY) {
    if (mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height) {
      this.isClicked = !this.isClicked;
      if (this.isClicked) {
        this.fill_color = "blue";
        this.width *= 1.5;
        this.height *= 1.2;
      }
      else {
        this.fill_color = "red";
        this.width /= 1.5;
        this.height /= 1.2;
      }
    }
  }
}