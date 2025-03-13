class FreeStyleObj {
    constructor(x, y, length, f_color, s_color, x_speed, angularSpeed, context) {
      // We write instructions to set up a Flower here
      // Position and size information
      this.x = x - (length - 400);
      this.y = y;
      this.fill_color = f_color;
      this.stroke_color = s_color;
      this.theta = 0;
      this.length = length;
      this.x_speed = x_speed
      this.yOffset = 20;
      this.angularSpeed = angularSpeed;
      // this.soundVariable = soundVariable;
      this.context =context;

    }
  
    display() {
      
      // this.x_speed = soundVariable

      // this.angularSpeed = soundVariable

      this.theta =0; //reset everytime
      this.context.fillStyle = this.fill_color; // change the color we are using
      this.context.strokeStyle = this.stroke_color; // change the color we are using
      this.context.beginPath();
      this.context.moveTo(this.x,this.y)
      for(let i =this.x; i< this.x+this.length; i++){
      this.context.lineTo(i,(Math.sin(this.theta)*5)+this.y)
      this.context.lineTo(i,(Math.sin(this.theta)*5)+this.y+this.yOffset)
      this.theta+=this.angularSpeed;
      }
      this.context.stroke(); //set the stroke
    }

    update(){
        //update freestyle
       console.log("free style update")
       this.x+= this.x_speed;
    }
  }
  