
//creates a variable for the bomb
let bomb = {
    x: 100,
    y: 100,
    r: 150,
    g: 140 ,
    b: 130,
    w: 30,
    h: 70,
    originalX: 100,
    originalY: 100,
    state: "shooting",
    initialSpeed: 0.1,
    speed: 0.1,
    gravity: 0.01,
    shooting: {
        micSpeed: undefined,
        direction: "none",
        acceleration: 0.44,
    },
}

//counts which platform the loop is at
let counter = 0

//counts how many explosions happened as of now
let deathCounter = 0



try {

    getMicrophoneInput();

      async function getMicrophoneInput() {
   
     window.AudioContext = window.AudioContext || window.webkitAudioContext;
     let audioContext = new AudioContext(); //using the web audio library
   
      //returns a MediaStreamAudioSourceNode.
    let audioStream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    });
    console.log("microphone on")


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

  
    //calls the animateSound function
    requestAnimationFrame(animateSound);

      /**
    * Asks for the website to access the microphone and records it's frequency
    */
      function animateSound() {

        analyser.getByteFrequencyData(frequencyData);
        // console.log(frequencyData)

        //creates a variable to nmerize the frequency
        let soundVariable = 0;
        //creates a variable to sum all of the frequency data
        let sum = 0;
   
        //goes through each element of the frequency data and adds them together
        for (let i = 0; i < frequencyData.length; i++) {
          sum += frequencyData[i];
        }
        //creates an average of the frequency data
        soundVariable = sum / frequencyData.length;

        //multiply the average so that it can be used for the gameplay
        bomb.shooting.micSpeed = soundVariable * 8

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
    bombSpeed();
    micBombSway();
    constrainBombInsideCanvas();
    
}


/**
 * Draws the bomb
 */
function drawBomb() {
    push();
    noStroke();
    fill(bomb.r, bomb.g, bomb.b);
    ellipse(bomb.x, bomb.y, bomb.w, 70)
    pop();

    //the main body
    push();
    noStroke();
    fill(bomb.r, bomb.g, bomb.b);
    rect(bomb.x, bomb.y - 15, 30, 30);
    pop();

    push();
    noStroke();
    fill(bomb.r, bomb.g, bomb.b);
    ellipse(bomb.x, bomb.y - 30, bomb.w, 10)
    pop();

    //the orange line
    push();
    noStroke();
    fill(180, 100, 20);
    rect(bomb.x, bomb.y + 10, 29, 5);
    pop();

}

/**
 * Makes the bomb sway depending on the amount of frequencies (of the microphone)
 */
function micBombSway() {

    //makes the bomb jitter less if the volume is low
    if (bomb.shooting.micSpeed < 80){
        //do nothing
    } else if (bomb.shooting.micSpeed >= 80){
    //makes the bomb go more to the right the more you speak loudly
    bomb.x = bomb.originalX + bomb.shooting.micSpeed
    }
}


/**
 * makes the bomb spped accelerate overtime
 */
function bombSpeed() {
    
        bomb.speed += bomb.gravity
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
 * makes the bomb explose and reset at the top of the canvas
 */
function bombExplosion() {
    
    deathCounter += 1
    
    //resets everything to it's initial state
    bomb.shooting.direction = "none"
    bomb.x = bomb.originalX;
    bomb.speed = bomb.initialSpeed
    bomb.state = "shooting"
}
