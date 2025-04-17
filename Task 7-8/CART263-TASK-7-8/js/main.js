window.onload = async function(){
    console.log("task 7-8");

    try{
        //1. Fetch the Json with the Fetch API
        let response = await fetch('data/iris.json');
        let data = await response.json();
        //results: array of 150 elements

       
        

        let possibleColor = ["#5d3fd3", "#a73fd3", "#d33fb5", "#d35d3f", "#d3a73f"];

        //2. Use map() to output a new array with a random color
        let irisesWithColor = data.map(addColorToIris);

        console.log(irisesWithColor);
        console.log(irisesWithColor[0]);
        //results: each elements of the array hav a different color everytime we refresh

        function addColorToIris(flower){
            let randomColor = possibleColor [Math.floor(Math.random()*possibleColor.length)];
            return {
                ...flower,
                color: randomColor
                
            };

            
        }

        //3. Use a filter on irisesWithColor

        const filteredIrises = irisesWithColor.filter(function(flower){
            return flower.sepalWidth <4;
        });

        console.log("FilteredIris ", filteredIrises)
        //results:

        //4. calculate the average petalLenght using reduce

        const totalPetalLength = irisesWithColor.reduce(function(sum, flower) {
            return sum + flower.petalLength;

        }, 0);
        const averagePetalLength = totalPetalLength / irisesWithColor.length;

        console.log("Average Petal Lenght = ", averagePetalLength);
        //results: 3.7580000000000027

        //5. Use Find to access an object whose petalWidth is under 1.0

        const findIris = irisesWithColor.find(function(flower){
            return flower.petalWidth >1.0;

        });
        console.log("iris with petalWith > 1 = ", findIris);
        //results: It finds one

        //6. Find an object that has a petal lenght over 10 using some
        const petalOver10 = irisesWithColor.some(function(flower){
            return flower.petalLength >10;

        });
        console.log("flower with petalLength over 10", petalOver10);
        //results: No, it doesn't exist

       //7. Find if there is an Iris with petal Lenght = 4.2
        const petalEqual42 = irisesWithColor.some(function(flower){
            return flower.petalLength === 4.2;

        });
        console.log("iris with petal equal to 4.2", petalEqual42);
        //results: Yes, it does

         //8. Does all objects have a petalWidths over 3
        const allPetalWidthsUnder3 = irisesWithColor.every(function(flower){
            return flower.petalWidth <3;

        });

        console.log("All iris have width under 3? ", allPetalWidthsUnder3);
        //results: Yes, it's true

        //9. Find if all Iris have sepal width over 1.2
        const allSpetalWidthGreaterThen12 = irisesWithColor.every(function(flower){
            return flower.sepalWidth>1.2;
        });
        console.log("irises have sepal Width over 1.2", allSpetalWidthGreaterThen12);
        //results: Yes, it's true

        //10. output an array sorted on the petalWidth field
        const irisesWithColorsSorted = irisesWithColor.toSorted(function(a, b){
            return a.petalWidth - b.petalWidth;

    
    });

    console.log("sorted by petalWidth(smallest to largest)",irisesWithColorsSorted);
    //results:

    //11. Visualize the sorted array

    console.log (irisesWithColorsSorted)

console.log(irisesWithColorsSorted[0].petalWidth)

let flowers = [];
let positionX = 200;
let positionY = 600;



for (iris of irisesWithColorsSorted) {
    

positionX += 6000
positionY += 1000
let newFlower = new Iris ( positionX, positionY, iris.color, iris.sepalLength, iris.sepalWidth, iris.petalLength, iris.petalWidth, iris.species);

flowers.push(newFlower)

}




for (let i = 0; i < flowers.length; i++) {
    // Add the flower to the array of flowers
    
    flowers[i].renderIris();

  }

  

  let body = document.querySelector("body")


  console.log(body)

// console.log(flowers)
       
    } catch(err){
        console.log(err)
    }

};