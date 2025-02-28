class Squirrel {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.squirrelHeight = 15
        this.squirrelWidth = this.squirrelHeight
        
        this.squirrelRun = {
            firstR: 1,
            secondR: 2,
            shirdR: 3
          };
          this.squirrelStand = {
            firstS: document.getElementsByTagName("img")[0],
            secondS: document.getElementsByTagName("img")[1],
            thirdS: document.getElementsByTagName("img")[2],
            fourthS: document.getElementsByTagName("img")[3],
          };
          //create a div for the squirrels
        this.squirrelImg = document.createElement("img");
    }


    renderSquirrel() {
       
        this.squirrelImg.classList.add("squirrel");
    this.squirrelImg.style.width = this.squirrelWidth+"px";
    this.squirrelImg.style.height = this.squirrelHeight+"px";
    this.squirrelImg.style.left = this.x+"px";
    this.squirrelImg.style.top = this.y+"px";
     //add to the DOM
     document.getElementsByTagName("grass")[0].appendChild(squirrelImg);

    }

}