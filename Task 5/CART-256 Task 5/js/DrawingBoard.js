class DrawingBoard {
  /* Constructor */
  constructor(canvas, context,drawingBoardId) {
    this.canvas = canvas;
    this.context = context;
    this.objectsOnCanvas = [];
    let self = this;
    this.drawingBoardId = drawingBoardId;
    // this.soundVariable = undefined;
    //each element has a mouse clicked and a mouse over
    this.canvas.addEventListener("click", function (e) {
      self.clickCanvas(e);
    });

    this.canvas.addEventListener("mousemove", function (e) {
      self.overCanvas(e);
      
    });
  }

    //event listener for the microone


  overCanvas(e) {
    //console.log("over");
    this.canvasBoundingRegion = this.canvas.getBoundingClientRect();
    this.mouseOffsetX = parseInt(e.clientX - this.canvasBoundingRegion.x);
    this.mouseOffsetY = parseInt(e.clientY - this.canvasBoundingRegion.y);
    // console.log(this.mouseOffsetX, this.mouseOffsetY);
    //differentiate which canvas
    //you can remove the console.logs /// 
    if(this.drawingBoardId ==="partA"){
      console.log("in A")
    }
    if(this.drawingBoardId ==="partB"){
      console.log("in B")
    }
    if(this.drawingBoardId ==="partC"){
      console.log("in C")

      getMicrophoneInput();

      async function getMicrophoneInput() {
        // console.log("here we are ");
       
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        let audioContext = new AudioContext(); //using the web audio library
       
        try {
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
 
// console.log(frequencyData)

          

          requestAnimationFrame(animateSound);

          function animateSound() {

            analyser.getByteFrequencyData(frequencyData);

            let soundVariable = 0;
            let sum = 0;
       
            for (let i = 0; i < frequencyData.length; i++) {
              sum += frequencyData[i];
            }
            soundVariable = sum / frequencyData.length;

            console.log(soundVariable)

            requestAnimationFrame(animateSound); 

          }

          console.log(soundVariable)

          /****our looping callback function */
          // function animateFrequencies() {
            // context.clearRect(0, 0, canvas.width, canvas.height);
            // analyser.getByteFrequencyData(frequencyData);
            // let average = 0;
            // let sum = 0;
       
            // for (let i = 0; i < frequencyData.length; i++) {
            //   sum += frequencyData[i];
            // }
            // average = sum / frequencyData.length;
            // //console.log(average);
            // context.fillStyle = "#FF0000";
            // //use the average frequency
            // context.fillRect(canvas.width / 2, canvas.height / 2, average, 30);
            // requestAnimationFrame(animateFrequencies);
          // }
        } catch (err) {
          /* handle the error */
          console.log("had an error getting the microphone");
        }
      }

    }
    if(this.drawingBoardId ==="partD"){
      console.log("in D")
   }
  }

  clickCanvas(e) {
   // console.log("clicked");
    this.canvasBoundingRegion = this.canvas.getBoundingClientRect();
    this.mouseOffsetX = parseInt(e.clientX - this.canvasBoundingRegion.x);
    this.mouseOffsetY = parseInt(e.clientY - this.canvasBoundingRegion.y);
    //console.log(this.mouseOffsetX, this.mouseOffsetY);
     
    //differentiate which canvas
   //you can remove the console.logs /// 
     if(this.drawingBoardId ==="partA"){
      console.log("in A")
    }
    if(this.drawingBoardId ==="partB"){
      console.log("in B")
    }
    if(this.drawingBoardId ==="partC"){
      console.log("in C")

      //code ha I added
      console.log (this.objectsOnCanvas[0])
      this.objectsOnCanvas[0].x_speed += 1

      this.objectsOnCanvas[0].angularSpeed += 0.05

    }
    if(this.drawingBoardId ==="partD"){
      console.log("in D")
      }
  }
  /* method to add obj to canvas */
  addObj(objToAdd) {
    this.objectsOnCanvas.push(objToAdd);
  }

  /* method to add display objects on canvas */
  display() {
    for (let i = 0; i < this.objectsOnCanvas.length; i++) {
      this.objectsOnCanvas[i].display();
    }
  }

  /* method to add animate objects on canvas */
  animate() {
    for (let i = 0; i < this.objectsOnCanvas.length; i++) {
     this.context.clearRect(0,0,this.canvas.width,this.canvas.height)
     this.objectsOnCanvas[i].update();
     this.objectsOnCanvas[i].display();
    }
  }

  run(videoElement){
    for (let i = 0; i < this.objectsOnCanvas.length; i++) {
      this.objectsOnCanvas[i].update(videoElement);
      this.objectsOnCanvas[i].display();
    }

  }
}
