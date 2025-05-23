window.onload = go_all_stuff;

function go_all_stuff(){
console.log("go");

/* for loading the video */
let videoEl = document.getElementById("video-birds");
window.addEventListener("click", function(){
    if(videoEl.currentTime ===0){
        videoEl.play()
    }
})


videoEl.loop = true;

let theCanvases = document.querySelectorAll(".canvases");
let theContexts =[];
//add a context for each canvas and put into an array

for(let i =0; i<theCanvases.length; i++){
    let context = theCanvases[i].getContext("2d");
    theContexts.push(context);
}

let drawingBoardA = new DrawingBoard(theCanvases[0],theContexts[0],theCanvases[0].id);
//add a circular object to canvas A
drawingBoardA.addObj(new CircularObj(100,100,20,"#FFC300","#E6E6FA", drawingBoardA.context))
drawingBoardA.display();



let drawingBoardB = new DrawingBoard(theCanvases[1],theContexts[1],theCanvases[1].id);
//add a rectangular object to canvas B
drawingBoardB.addObj(new RectangularObj(100,100,50,70,"#FF5733","#E6E6FA",drawingBoardB.context))
drawingBoardB.display();


//code I added
let x = 10;
let y = 100;
let lenght = 10000;
let fillColor = "#CF9FFF";
let strokeColor = "#CF9FFF";
let x_speed = 1; 
let angularSpeed = 0.07;

// let soundVariable = DrawingBoard.soundVariable
//10,100,300,"#CF9FFF","#CF9FFF"




//end of the code I added



let drawingBoardC = new DrawingBoard(theCanvases[2],theContexts[2],theCanvases[2].id);
//add a freestyle object to canvas C
drawingBoardC.addObj(new FreeStyleObj(x, y,lenght, fillColor, strokeColor, x_speed, angularSpeed, drawingBoardC.context))
drawingBoardC.display();



let drawingBoardD = new DrawingBoard(theCanvases[3],theContexts[3],theCanvases[3].id);
drawingBoardD.addObj(new VideoObj(0,0,400,300,videoEl,drawingBoardD.context))
drawingBoardD.display();

// document.querySelector("#" + fillColor)
// document.querySelector('#${fillColor}')
/*** RUN THE ANIMATION LOOP  */
window.requestAnimationFrame(animationLoop);

function animationLoop(){
    /*** CALL THE EACH CANVAS TO ANIMATE INSIDE  */
    drawingBoardA.animate();
    drawingBoardB.animate();
    // drawingBoardC.animate();
    drawingBoardD.run(videoEl)
    window.requestAnimationFrame(animationLoop);
}




/** TASK 1:(Drawing Board A) - 
 *  1: animate the circle object(s) somehow/anyhow.. (there may be more than one)
 * You can use the mouse coordinates - the canvas ALREADY has event listeners for mouse click and mouse move
 * implemeneted, as well as the proper mouseX and mouseY (NO need to add)
 * -> ensure that any properties that are changed by the circle object occur in the update method already provided,
 * and use the member properties provided (you may add new ones ... or not :)
 * 
 * 2: add new circle objects (different sizes, positions, colors) to the canvas (board A) using some form of user interaction
 * 3: remove new circle objects from the canvas (board A) using some other form of user interaction 
 * Please for this exercise - do not add any new shapes other than the circular object...
 * 
 */


/** TASK 2:(Drawing Board B) - 
 *  1: Affect the rectangle by input from the microphone somehow, in real time...
 *  at least two properties of the rectangle need to update and change...
 *  2: apply some arbitrary animation to the rectangle obj (change the properties in the update method provided)
 * -> the code for the microphone has NOT been added  - you need to implement it correctly...
 *  
 */


/** TASK 3:(Drawing Board C) - 
 *  1: Affect the free-style shape by input from the microphone somehow, in real time...
 *  at least two properties of the free-style shape need to update and change...
 *  2: apply some arbitrary animation to the free-style shape (change the properties in the update method provided)
 * -> the code for the microphone has NOT been added  - you need to implement it correctly...
 *  
 */




// async function getMicrophoneInput(average) {
//     console.log("here we are ");
   
//     window.AudioContext = window.AudioContext || window.webkitAudioContext;
//     let audioContext = new AudioContext(); //using the web audio library
   
//     try {
//       //returns a MediaStreamAudioSourceNode.
//       let audioStream = await navigator.mediaDevices.getUserMedia({
//         audio: true,
//       });
//       // console.log(audioStream)
//       //pass the microphone input to the web audio API
//       let microphoneIn = audioContext.createMediaStreamSource(audioStream);
//       ///const filter = audioContext.createBiquadFilter();
//       const analyser = audioContext.createAnalyser();
//       // microphone -> filter ->  analyzer->destination
//       microphoneIn.connect(analyser);
//       //use the analyzer object to get some properties ....
//       //filter.connect(analyser);
//       analyser.fftSize = 32;
//       let frequencyData = new Uint8Array(analyser.frequencyBinCount);
   
//       //call loop ...
//       requestAnimationFrame(animateFrequencies);
   
//       /****our looping callback function */
//       function animateFrequencies() {
//         context.clearRect(0, 0, canvas.width, canvas.height);
//         analyser.getByteFrequencyData(frequencyData);
//         let average = 0;
//         let sum = 0;
   
//         for (let i = 0; i < frequencyData.length; i++) {
//           sum += frequencyData[i];
//         }
//         average = sum / frequencyData.length;
//         //console.log(average);
//         context.fillStyle = "#FF0000";
//         //use the average frequency
//         context.fillRect(canvas.width / 2, canvas.height / 2, average, 30);
//         requestAnimationFrame(animateFrequencies);
//       }
//     } catch (err) {
//       /* handle the error */
//       console.log("had an error getting the microphone");
//     }
//   }




/** TASK 4:(Video - recorded - )
 * // add filters or manipulate the pixels... take user input from the boxes..
 *  1: using thr provided VideoObj class - > 
 * you will see all the code needed for activating  a blur filter on the video - activate it
 * 2: Next: apply the same logic to enable the other 3 possible filters (adding the event listeners etc)
 * -> make sure to look at the input/output ranges for the values
 * 3: -> apply the context filters  to the video for the three filter options (and activate the blur as well)
 * 4: ->  using the mousemove event listener (already applied in the drawing board) - 
 * make the rectangle (over the video) - follow the mouse ... AND change color when you click on the canvas
 * USE & FILL IN THE METHODS ALREADY set out in the VideoObj class...
 * 
 * 
 * PLEASE NOTE: there will be marks taken off if you ignore the instructions ;)
 *  
 */




}