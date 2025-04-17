class Iris {
//constructor
constructor(x, y, color, sepalLenght, sepalWidth, petalLenght, petalWidth, species) {

this.x = x
this.y = y
this.color = color;
this.sepalLenght = sepalLenght * 8;
this.sepalWidth = sepalWidth * 300;
this.petalLenght = petalLenght;
this.petalWidth = petalWidth;
this.species = species;


this.irisSepalDiv = document.createElement("div");
this.irisPetalDiv = document.createElement("div");

let self = this;

this.irisSepalDiv.addEventListener("click", changeColor);
        function changeColor(e) {
          console.log(e.target);
          console.log(this);
          console.log(self);

          self.color = `rgb(${Math.random()*200+50}, ${Math.random()*200+50}, ${Math.random()*200+50})`
          
      
          //update the actual div...
          self.irisSepalDiv.style.background = self.color;
         
    
          // and also the petal element needs to change color
          self.irisPetalDiv.style.background = self.color
         
       }
}


renderIris() {
    
this.irisSepalDiv.classList.add("flower");
this.irisSepalDiv.style.height = this.sepalLenght+"px";
this.irisSepalDiv.style.width = this.sepalWidth+"px";
this.irisSepalDiv.style.background = this.color;
this.irisSepalDiv.style.left = this.x+"px";
this.irisSepalDiv.style.top = this.y+"px";


//add to the Dom
document.body.appendChild(this.irisSepalDiv);

this.irisPetalDiv.classList.add("petal");
this.irisPetalDiv.style.height = this.petalLenght;
this.irisPetalDiv.style.width = this.petalWidth;
this.irisPetalDiv.style.background = this.color;
this.irisPetalDiv.style.left = this.x+"px";
this.irisPetalDiv.style.top = this.y-this.sepalLenght + "px"
//add to the Dom
document.body.appendChild(this.irisPetalDiv);

}

}