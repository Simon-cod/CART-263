class Iris {
//constructor
constructor(x, y, color, sepalLenght, sepalWidth, petalLenght, petalWidth, species) {

this.x = x
this.y = y
this.color = color;
this.sepalLenght = sepalLenght;
this.sepalWidth = sepalWidth;
this.petalLenght = petalLenght;
this.petalWidth = petalWidth;
this.species = species;

this.irisSepalDiv = document.createElement("div");
this.irisrPetalDiv = document.createElement("div");
}

renderIris() {
this.irisSepalDiv.classList.add("flower");
this.irisSepalDiv.style.height = this.sepalLenght + "px";
this.irisSepalDiv.style.width = this.sepalWidth + "px";
this.irisSepalDiv.style.color = this.color;
this.irisSepalDiv.left = this.x + "px";
this.irisSepalDiv.top = this.y + "px";
//add to the Dom
document.querySelector("#body").appendchild(this.irisSepalDiv)

}

renderFlower() {
    this.flowerStemDiv.classList.add("flower");
    this.flowerStemDiv.style.width = this.stemThickness+"px";
    this.flowerStemDiv.style.height = this.stemLength+"px";
    this.flowerStemDiv.style.background = `rgb(${this.stemColor.r},${this.stemColor.g},${this.stemColor.b})`;
    this.flowerStemDiv.style.left = this.x+"px";
    this.flowerStemDiv.style.top = this.y-this.stemLength+"px";
     //add to the DOM
     document.getElementsByClassName("grass")[0].appendChild(this.flowerStemDiv);
  
     this.flowerPetalDiv.classList.add("petal");
     this.flowerPetalDiv.style.width = this.size+"px";
     this.flowerPetalDiv.style.height = this.size+"px";
     this.flowerPetalDiv.style.borderRadius = this.size+"px";
     this.flowerPetalDiv.style.background = `rgb(${this.centreColor.r},${this.centreColor.g},${this.centreColor.b})`;
     this.flowerPetalDiv.style.left = (this.x-this.size/2)+"px";
     this.flowerPetalDiv.style.top = (this.y-this.stemLength-this.size/2)+"px";
     this.flowerPetalDiv.style.borderWidth = this.petalThickness+"px";
     this.flowerPetalDiv.style.borderColor =  `rgb(${this.petalColor.r},${this.petalColor.g},${this.petalColor.b})`;
      //add to the DOM
      document.getElementsByClassName("grass")[0].appendChild(this.flowerPetalDiv);
   }

}