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

 console.log(frequencyData)

      

      requestAnimationFrame(animateSound);

      function animateSound() {

        analyser.getByteFrequencyData(frequencyData);
        console.log(frequencyData)

        let soundVariable = 0;
        let sum = 0;
   
        for (let i = 0; i < frequencyData.length; i++) {
          sum += frequencyData[i];
        }
        soundVariable = sum / frequencyData.length;

        console.log(soundVariable)

        // self.objectsOnCanvas[0].x_speed = soundVariable/200

        // self.objectsOnCanvas[0].angularSpeed = soundVariable/500

        // self.animate();

        requestAnimationFrame(animateSound); 



      }

      console.log(soundVariable)

      

    
  }

} catch (err) {
  /* handle the error */
  console.log("had an error getting the microphone");
}