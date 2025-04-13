
//creates a variable for the bomb
let bomb = {
    x: 200,
    y: 100,
    r: 250,
    g: 250 ,
    b: 250,
    size: 30,
    originalX: 200,
    originalY: 100,
    speed: 0.1,
    gravity: -0.05,
    shooting: {
        initialSpeed: 15,
        speed: 15, 
        micSpeed: undefined,
        direction: "none",
        acceleration: 0.44,
    },
}

let counter = 0

try {

    getMicrophoneInput();

      async function getMicrophoneInput() {
      // console.log("here we are ");
   
     window.AudioContext = window.AudioContext || window.webkitAudioContext;
     let audioContext = new AudioContext(); //using the web audio library
   
    
      //returns a MediaStreamAudioSourceNode.
    let audioStream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    });
    console.log("microphone on")
// console.log(audioStream)
//pass the microphone input to the web audio API
let microphoneIn = audioContext.createMediaStreamSource(audioStream);
const filter = audioContext.createBiquadFilter();
const analyser = audioContext.createAnalyser();
// microphone -> filter ->  analyzer->destination
microphoneIn.connect(filter);
//use the analyzer object to get some properties ....
filter.connect(analyser);
analyser.fftSize = 32;
let frequencyData = new Uint8Array(analyser.frequencyBinCount);

//  console.log(frequencyData)

      

      requestAnimationFrame(animateSound);

      function animateSound() {

        analyser.getByteFrequencyData(frequencyData);
        // console.log(frequencyData)

        let soundVariable = 0;
        let sum = 0;
   
        for (let i = 0; i < frequencyData.length; i++) {
          sum += frequencyData[i];
        }
        soundVariable = sum / frequencyData.length;

        bomb.shooting.micSpeed = soundVariable * 3

        requestAnimationFrame(animateSound); 

       

      }


      

    
  }

} catch (err) {
  /* handle the error */
  console.log("had an error getting the microphone");
}

/**
 * Regroups all of the bomb functions
 */
function createBomb() {
    drawBomb();
    bombDrop();
    micBombSway();
    constrainBombInsideCanvas();
    
}



/**
 * Draws the bomb
 */
function drawBomb() {
    push();
    noStroke();
    fill(bomb.r, bomb.g, bomb.b),
    circle(bomb.x, bomb.y, bomb.size)
    pop();

}

/**
 * Makes the bomb sway depending on the amount of frequencies (of the microphone)
 */
function swayBomb() {


        if (bomb.shooting.direction === "none"){
        //do nothing
        bombComeBack();
        } else if (bomb.shooting.direction === "right"){

        bomb.x += bomb.shooting.speed

        counter += 1

        console.log("counter = " + counter)

        } else if (bomb.shooting.direction === "left"){
       bomb.x -= bomb.shooting.speed

        }
}

/**
 * Makes the bomb sway depending on the amount of frequencies (of the microphone)
 */
function micBombSway() {

    console.log(bomb.shooting.micSpeed)

bomb.x = bomb.originalX + bomb.shooting.micSpeed


//     if (bomb.shooting.direction === "none"){
//     //do nothing
//     bombComeBack();
//     } else if (bomb.shooting.direction === "right"){

//     bomb.x += bomb.shooting.speed

//     counter += 1

//     console.log("counter = " + counter)

//     } else if (bomb.shooting.direction === "left"){
//    bomb.x -= bomb.shooting.speed

//     }
}


/**
 * Makes the initial bomb bounce
 */
function bombDrop() {
    
        bomb.speed -= bomb.gravity
        bomb.y += bomb.speed
}

/**
 * Makes the bomb come back to it's original point
 */
function bombComeBack() {
    if(bomb.x > 200) {
        bomb.x -= bomb.shooting.speed
    }else if(bomb.x < 200) {
        bomb.x += bomb.shooting.speed
    } else {
        //do nothing
    }
}

/**
 * Makes the bomb reset if it goes too far outside the canvas (probably futile in this case but still we're never too precautious)
 */
function constrainBombInsideCanvas() {
    if(bomb.x < -100 || bomb.x > 2100) { //if it goes outside the canvas to the right or the left
        bombExplosion();
    } else if (bomb.y < -100 || bomb.y > 2100) { //if it goes outside the canvas up or down
        bombExplosion();
    }
}

/**
 * makes the bomb reset at the top of the canvas
 */
function bombExplosion() {
    //resets everything to it's initial state
    bomb.shooting.direction = "none"
    bomb.y = bomb.originalY;
    bomb.x = bomb.originalX;
    bomb.shooting.speed = bomb.shooting.initialSpeed
    bomb.speed = 0.1
}

/**
 * makes you win the game if you kill the hero!
 */
function heroDeath() {
    gameState = "gameWon"
} 