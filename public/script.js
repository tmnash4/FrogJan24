async function startAudio() {  //This code starts the audio 
  await Tone.start()
  console.log("ready")
}

let audioCtx = new Tone.Context()
audioCtx.destination.channelcount = audioCtx.destination.maxChannelCount
var channels = audioCtx.destination.channelCount;
var frameCount = audioCtx.sampleRate * 0.5;
var myArrayBuffer = audioCtx.createBuffer(audioCtx.destination.channelCount, frameCount, audioCtx.sampleRate);
let mainGain = new Tone.Gain(0).toDestination()
mainGain.gain = 1

let frogBackBuffer = new Tone.Buffer("media/background3.mp3")
let frogBack = new Tone.Player(frogBackBuffer)
frogBack.connect(mainGain);
frogBack.loop = true;	

frogBack.toDestination()

async function playBackground() {
  await Tone.start()
  console.log("ready") 
  Tone.loaded().then(() => {
  frogBack.start();

});  
original.style.opacity = "1";
original.style.animation = "fadeIn 10s"
}
var socketName = "default";
var socket = io();  

let frogMainArray = []
let name = document.getElementById("name"); 
let name1 = document.getElementById("name1"); 
let name2 = document.getElementById("name2")
let name3 = document.getElementById("name3")
let name4 = document.getElementById("name4")
let name5 = document.getElementById("name5")
let name6 = document.getElementById("name6")

let para = document.getElementById("para")
let myInput = document.getElementById("myInput");
let myInputLabel = document.getElementById("myInputLabel")
let submit = document.querySelector("#submit")
let localArray;
let mainButton = document.getElementById("mainButton")

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  // mainButton.addEventListener("click", () => {
  //   // socket.emit("main_display", true);
  //   mainButton.style.visibility = "hidden"
  //   frogRoomLimit = 5;
  //   console.log("Hello")
  //   startAudio()
  //   playBackground()
  //   startPiece()
  //   original.style.visibility = "visible"

   
  // })



} else {

  $(".full-landing-image").ripples({
    resolution: 256,
    perturbance: 0.01,
  });
  myInput.style.display = "none"
  myInputLabel.style.display = "none"
  submit.style.display = "none"
  name.style.display = "none"
  name1.style.display = "none"
  name2.style.display = "none"
  name3.style.display = "none"
  name4.style.display = "none"
  name5.style.display = "none"
  name6.style.display = "none"
  mainButton.addEventListener("click", () => {
    socket.emit("main_display", true);
    mainButton.style.visibility = "hidden"
    frogRoomLimit = 20;
    console.log("Hello")
    startAudio()
    playBackground()
    startPiece()
    original.style.visibility = "visible"

   
  })

}

let moveAway = 100

let body = document.querySelector("body");


let panner = new Tone.Panner(0).connect(mainGain); //This is the panner, it sends ALL the audio to its output. 
let randNum1 = (Math.random() * 10) + 5 //creates random number

let original = document.getElementById("originalFrog"); //This stores the element with the id original. At this point, it has the class of "frogStart", the onclick "duplicate" and the onmouseover "moveFrog"
original.moving = false;
let originalImg = document.getElementById("originalImg");
let original1 = document.getElementById("original1"); //This stores the element with the id original. At this point, it has the class of "frogStart", the onclick "duplicate" and the onmouseover "moveFrog"
let original2 = document.getElementById("original2");
let original3 = document.getElementById("original3");
let original4 = document.getElementById("original4"); //This needs to be 
let original5 = document.getElementById("original5")
let original6 = document.getElementById("original6")


let frogLimit = 10;
let frogRoomLimit = 3;
let roomNumber = 0;


// $("body").ripples({
//   resolution: 124,
//   perturbance: 0.01,
// });
function nameFrog() {
  myInput.style.visibility = "visible";
  submit.style.visibility = "visible"
  myInputLabel.style.visibility = "visible";
  mainButton.style.display = "none";
  para.style.display = "none"
}

// myInput.addEventListener('keydown', (e) => {
//   if (e.key == "Enter") {
 
//   }
// })

function enterName() {
   //console.log(myInput.value)
   myInput.style.visibility = "hidden"
   myInputLabel.style.visibility = "hidden";
   original.style.visibility = "visible"
   startPiece()
   name1.innerHTML = myInput.value
   name2.innerHTML = myInput.value
   name3.innerHTML = myInput.value
   name4.innerHTML = myInput.value
   name5.innerHTML = myInput.value
   name6.innerHTML = myInput.value
   name.innerHTML = myInput.value
   submit.style.visibility = "hidden"
}


function startPiece() {
  mainButton.style.opacity = "0";
  if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
    socket.emit("main_display", true);
    console.log("hello")
   
  }
  // duplicateSection()
  playBackground();
  mainGain.gain.rampTo(1, 3);
  para.style.opacity = "0"
}

if (mainButton.innerHTML = "Click for Frog") {
 mainButton.addEventListener('click', nameFrog)
}




function endPiece() {
  body.style.visibility = "hidden";
  body.style.opacity = "0";
  body.style.backgroundColor = "black";
  body.style.backgroundBlendMode = "multiply";
  mainGain.gain.rampTo(0, 5);
  mainButton.visibility = "hidden";
}

function restartPiece() {
  mainButton.style.opacity = "1";
  mainButton.style.visibiltiy = "visibile"
  mainGain.gain.rampTo(1, 5);
  for (i=0; i<frogMainArray.length; i++) {
    frogMainArray[i].remove()
  }
  original4.style.opacity = "0"
  body.style.opacity = "1"
  body.style.backgroundColor = "white";
  mainButton.innerHTML = "Click for Frog"
}


this.onload = () => {
  original.style.opacity = "0"
}

// body.addEventListener("touchstart", detectTouch)
// body.addEventListener("mousemove", detectTouch)

let outsideX;
let outsideY;

function detectTouch(e) {
if(e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel'){
  var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
  x = touch.pageX;
  y = touch.pageY;
  outsideX = x;
  outsideY = y;
  //console.log(x, y)
} else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover'|| e.type=='mouseout' || e.type=='mouseenter' || e.type=='mouseleave') {
  x = e.clientX;
  y = e.clientY;
  outsideX = x;
  outsideY = y;
  //console.log(x, y)
}

}

// function getLocation() {

// var rect = original.getBoundingClientRect();
//  if (rect.top < outsideY && rect.top > outsideY -moveAway && rect.left < outsideX && rect.left > outsideX - moveAway) {
// //  if (rect.left < outsideX && rect.left > outsideX - 30) {

//   moveFrog()
//   console.log("liftoff")
// } else {
  
// }

// }

function getTouchLocation() {
  frogMainArray.forEach((clone) => {
    getCloneLocation(clone)
  })
}



//body.addEventListener("mouseover", getLocation)
body.addEventListener("click", getTouchLocation)

function moveFrog() {
  if (!original.moving) {
    original.moving = true;
    original.timer = setTimeout(() => {
      original.moving = false
    }, 500)
  
   // let randNum = (Math.random() * 10) + 5
    //console.log(randNum)
    let randNum2 = (Math.random() * 60) + 1
    let randNum3 = (Math.random() * 50) + 1
    // original.style.setProperty('--frogWidth', (randNum) + "vw"); 
    original.style.setProperty('--frogTop', (randNum3) + "vh");
    original.style.setProperty('--frogLeft', randNum2 + "vw");
    original.style.setProperty('--animationTime', randNum1 + "s"); //Sets the variables for the frog movement (to the class "frogLook")
    let randAudio = Math.floor(Math.random() * audioArray.length)
    let myFrog1 = new Tone.Player(audioArray[randAudio]).connect(panner); //Creates a new tone player every time the function is run
    panner.pan.rampTo(getScaledValue(randNum2, 0, 100, -1, 1), (randNum1)) //Moves the panner around
    Tone.loaded().then(() => {
    myFrog1.start(); //plays the tone
    })

    // function addClass() {
    //   original.classList.add("frogMoveAgain")
    // }
    if (original.classList.length == 1) {
      original.classList.add("frogLook")
     // original.classList.remove("frogMoveAgain")
       // original.addEventListener("transitionend", printTest)  //If the class is 1, frogLook will be added. This overrides the duplicate position

      //myFrog.classList.add("blank")
    } else if (original.classList.contains("frogLook")) {
      original.classList.remove("frogLook")
     
    } 

  

    //socket.emit("frogHover", randNum2)
  }
 
}


function moveFrog4() {
  if (!original4.moving) {
    original4.moving = true;
    original4.timer = setTimeout(() => {
      original4.moving = false
    }, 500)
    let randNum = (Math.random() * 6) + 5
    let randNum2 = (Math.random() * 60) + 1
    let randNum3 = (Math.random() * 50) + 1
    original4.style.setProperty('--frogWidth', (randNum) + "em"); 
    original4.style.setProperty('--frogTop', (randNum3) + "vh");
    original4.style.setProperty('--frogLeft', randNum2 + "vw");
    original4.style.setProperty('--animationTime', randNum1 + "s"); //Sets the variables for the frog movement (to the class "frogLook")
    let myFrog1 = new Tone.Player(frogAudio1).connect(panner); //Creates a new tone player every time the function is run
    panner.pan.rampTo(getScaledValue(randNum2, 0, 100, -1, 1), (randNum1)) //Moves the panner around
    Tone.loaded().then(() => {
    myFrog1.start(); //plays the tone
    })
    if (original4.classList.length == 1) {
      original4.classList.add("frogLook")
    } else if (original4.classList.contains("frogLook")) {
      original4.classList.remove("frogLook")
     
    } 
  }
}

function moveFrog() {
  if (!original.moving) {
    original.moving = true;
    original.timer = setTimeout(() => {
      original.moving = false
    }, 500)
    let randNum2 = (Math.random() * 60) + 1
    let randNum3 = (Math.random() * 50) + 1
    original.style.setProperty('--frogTop', (randNum3) + "vh");
    original.style.setProperty('--frogLeft', randNum2 + "vw");
    original.style.setProperty('--animationTime', randNum1 + "s"); //Sets the variables for the frog movement (to the class "frogLook")
    let randAudio = Math.floor(Math.random() * audioArray.length)
    let myFrog1 = new Tone.Player(audioArray[randAudio]).connect(panner); //Creates a new tone player every time the function is run
    panner.pan.rampTo(getScaledValue(randNum2, 0, 100, -1, 1), (randNum1)) //Moves the panner around
    Tone.loaded().then(() => {
    myFrog1.start(); 
    })
    if (original.classList.length == 1) {
      original.classList.add("frogLook")
    } else if (original.classList.contains("frogLook")) {
      original.classList.remove("frogLook")
    } 
  }
}


function touchFrog() {
  if (!original.moving) {
    original.moving = true;
    original.timer = setTimeout(() => {
      original.moving = false
    }, 500)


    let randNum = (Math.random() * 6) + 5
    let randNum2 = (Math.random() * 60) + 1
    let randNum3 = (Math.random() * 50) + 1
    //original4.style.setProperty('--frogWidth', (randNum) + "em"); 
    original4.style.setProperty('--frogTop', (randNum3) + "vh");
    original4.style.setProperty('--frogLeft', randNum2 + "vw");
    original4.style.setProperty('--animationTime', randNum1 + "s"); //Sets the variables for the frog movement (to the class "frogLook")
    let myFrog1 = new Tone.Player(frogAudio1).connect(panner); //Creates a new tone player every time the function is run
    panner.pan.rampTo(getScaledValue(randNum2, 0, 100, -1, 1), (randNum1)) //Moves the panner around
    Tone.loaded().then(() => {
    myFrog1.start(); //plays the tone
    })
    if (original4.classList.length == 1) {
      original4.classList.add("frogLook")
    } else if (original4.classList.contains("frogLook")) {
      original4.classList.remove("frogLook")
     
    } 
  }
}

var offset = [0,0];
var isDown = false;

// original.addEventListener('touchmove', function(e) {
// isDown = true;
// offset = [
//     original.offsetLeft - e.clientX,
//     original.offsetTop - e.clientY
//  ];
// }, true);



original.addEventListener('touchmove', function(event) {
  // If there's exactly one finger inside this element
  if (event.targetTouches.length == 1) {
    var touch = event.targetTouches[0];
    // Place element where the finger is
    original.style.left = (touch.pageX) + 'px';
    original.style.top = (touch.pageY) + 'px';
  }
  event.preventDefault()
  console.log("Its working")
}, false);

original1.addEventListener('touchmove', function(event) {
  // If there's exactly one finger inside this element
  if (event.targetTouches.length == 1) {
    var touch = event.targetTouches[0];
    // Place element where the finger is
    original1.style.left = (touch.pageX) + 'px';
    original1.style.top = (touch.pageY) + 'px';
  }
  event.preventDefault()
  console.log("Its working")
}, false);

original2.addEventListener('touchmove', function(event) {
  // If there's exactly one finger inside this element
  if (event.targetTouches.length == 1) {
    var touch = event.targetTouches[0];
    // Place element where the finger is
    original2.style.left = (touch.pageX* 1.2) + 'px';
    original2.style.top = (touch.pageY*1.2) + 'px';
  }
  event.preventDefault()
  console.log("Its working")
}, false);

original3.addEventListener('touchmove', function(event) {
  // If there's exactly one finger inside this element
  if (event.targetTouches.length == 1) {
    var touch = event.targetTouches[0];
    // Place element where the finger is
    original3.style.left = (touch.pageX) + 'px';
    original3.style.top = (touch.pageY) + 'px';
  }
  event.preventDefault()
  console.log("Its working")
}, false);

original4.addEventListener('touchmove', function(event) {
  // If there's exactly one finger inside this element
  if (event.targetTouches.length == 1) {
    var touch = event.targetTouches[0];
    // Place element where the finger is
    original4.style.left = (touch.pageX) + 'px';
    original4.style.top = (touch.pageY) + 'px';
  }
  event.preventDefault()
  console.log("Its working")
}, false);

original5.addEventListener('touchmove', function(event) {
  // If there's exactly one finger inside this element
  if (event.targetTouches.length == 1) {
    var touch = event.targetTouches[0];
    // Place element where the finger is
    original5.style.left = (touch.pageX) + 'px';
    original5.style.top = (touch.pageY) + 'px';
  }
  event.preventDefault()
  console.log("Its working")
}, false);

original6.addEventListener('touchmove', function(event) {
  // If there's exactly one finger inside this element
  if (event.targetTouches.length == 1) {
    var touch = event.targetTouches[0];
    // Place element where the finger is
    original6.style.left = (touch.pageX) + 'px';
    original6.style.top = (touch.pageY) + 'px';
  }
  event.preventDefault()
  console.log("Its working")
}, false);

document.addEventListener('mouseup', function() {
   isDown = false;
}, true);

document.addEventListener('mousemove', function(e) {
    event.preventDefault();
    if (isDown) {
        original.style.left = (e.clientX + offset[0]) + 'px';
        original.style.top  = (e.clientY + offset[1]) + 'px';
   }
}, true);

socket.on(('connectToRoom', function(data) {
  document.body.innerHTML = data;
}))


original.addEventListener("touchstart", moveFrog);
original.addEventListener("mouseover", moveFrog);
original4.addEventListener("mouseover", moveFrog4);
original4.addEventListener("mouseover", moveFrog4)
let guestFrogName = myInput.value

let frogAudio = new Tone.Buffer("media/frog_8.mp3");let frogAudio1 = new Tone.Buffer("media/frog_6.wav");let frogAudio2 = new Tone.Buffer("media/frog_5.mp3");let frogAudio3 = new Tone.Buffer("media/frog_4.mp3");let frogAudio4 = new Tone.Buffer("media/frog_3.mp3");let frogAudio5 = new Tone.Buffer("media/frog1.mp3");
let frogAudio6 = new Tone.Buffer("media/frogs_2.mp3");let frogAudio7 = new Tone.Buffer("media/frog_7.mp3");let frogAudio8 = new Tone.Buffer("media/frog_9.mp3");let frogAudio9 = new Tone.Buffer("media/frog_10.mp3");let frogAudio10 = new Tone.Buffer("media/frog_11.mp3");let frogAudio11 = new Tone.Buffer("media/frog_12.mp3");
let frogAudio12 = new Tone.Buffer("media/frog_13.mp3");let frogAudio13 = new Tone.Buffer("media/indi_frog1.mp3");let frogAudio14 = new Tone.Buffer("media/indi_frog2.mp3");let frogAudio15 = new Tone.Buffer("media/indi_frog3.mp3");let frogAudio16 = new Tone.Buffer("media/indi_frog4.mp3");let frogAudio17 = new Tone.Buffer("media/indi_frog5.mp3");
let frogAudio18 = new Tone.Buffer("media/indi_frog6.mp3");let frogAudio19 = new Tone.Buffer("media/novfrog.mp3");let frogAudio20 = new Tone.Buffer("media/novfrog_1.mp3");let frogAudio21 = new Tone.Buffer("media/novfrog_2.mp3");let frogAudio22 = new Tone.Buffer("media/novfrog_3.mp3");let frogAudio23 = new Tone.Buffer("media/novfrog_4.mp3");
let frogAudio24 = new Tone.Buffer("media/novfrog_5.mp3");let frogAudio25 = new Tone.Buffer("media/novfrog_6.mp3");let frogAudio26 = new Tone.Buffer("media/novfrog_7.mp3");let frogAudio27 = new Tone.Buffer("media/novfrog_8.mp3");let frogAudio28 = new Tone.Buffer("media/novfrog_9.mp3");let frogAudio29 = new Tone.Buffer("media/novfrog_10.mp3");
let frogAudio30 = new Tone.Buffer("media/novfrog_11.mp3");let frogAudio31 = new Tone.Buffer("media/ar5_1.mp3");let frogAudio32 = new Tone.Buffer("media/ar5_2.mp3");let frogAudio33 = new Tone.Buffer("media/ar5_3.mp3");let frogAudio34 = new Tone.Buffer("media/ar5_4.mp3");let frogAudio35 = new Tone.Buffer("media/ar5_5.mp3");let frogAudio36 = new Tone.Buffer("media/ar5_6.mp3");let frogAudio37 = new Tone.Buffer("media/ar5_7.mp3");

let frogImage1 = "media/froggo4.png";let frogImage2 = "media/froggy3_new.png";let frogImage3 = "media/frog_6.png";let frogImage4 = "media/froggo5.png";let frogImage5 = "media/froggy2_s.png";let frogImage6 = "media/frog_51.png";

let audioArray = [frogAudio, frogAudio1, frogAudio37, frogAudio3, frogAudio29, frogAudio6, frogAudio31, frogAudio32, frogAudio33, frogAudio35, frogAudio35, frogAudio36];
let audioArrayOrig = [frogAudio, frogAudio1,frogAudio37, frogAudio3, frogAudio29, frogAudio6, frogAudio31, frogAudio32, frogAudio33, frogAudio35, frogAudio35, frogAudio36];
let audioArray1 = [frogAudio7, frogAudio8, frogAudio9, frogAudio10, frogAudio11, frogAudio12, frogAudio13, frogAudio14, frogAudio15, frogAudio16, frogAudio17, frogAudio18];
let audioArray2 = [frogAudio13, frogAudio14, frogAudio15, frogAudio16, frogAudio17, frogAudio18, frogAudio19, frogAudio20, frogAudio21, frogAudio22, frogAudio23, frogAudio24];
let audioArray3 = [frogAudio19, frogAudio20, frogAudio21, frogAudio22, frogAudio23, frogAudio24,frogAudio14, frogAudio15,frogAudio3, frogAudio29]; //Check this one out for volume
let audioArray4 = [frogAudio25, frogAudio26, frogAudio27, frogAudio28, frogAudio29, frogAudio30, frogAudio16, frogAudio17, frogAudio18, frogAudio19, frogAudio20];
let audioArray5 = [frogAudio31, frogAudio32, frogAudio33, frogAudio35, frogAudio35, frogAudio36,frogAudio, frogAudio1, frogAudio37, frogAudio3, frogAudio29, frogAudio6, frogAudio31];

let audioArrayFav = [frogAudio34, frogAudio8, frogAudio12, frogAudio5, frogAudio13, frogAudio16, frogAudio27]
let audioArrayAll = [frogAudio, frogAudio1, frogAudio2, frogAudio3, frogAudio4,frogAudio5,frogAudio6,frogAudio7,frogAudio8,frogAudio9,frogAudio10,frogAudio11,frogAudio12,frogAudio13,frogAudio14,frogAudio15,frogAudio16,frogAudio17,frogAudio18,frogAudio19,frogAudio20,frogAudio21,frogAudio22,frogAudio23,frogAudio24,frogAudio25,frogAudio26,frogAudio27,frogAudio28,frogAudio29,frogAudio30,frogAudio31,frogAudio32,frogAudio33,frogAudio34,frogAudio35,frogAudio36,frogAudio37];


let frogImageArray = [frogImage1, frogImage2, frogImage3, frogImage4, frogImage5, frogImage6];

function getScaledValue(value, sourceRangeMin, sourceRangeMax, targetRangeMin, targetRangeMax) {
    var targetRange = targetRangeMax - targetRangeMin;
    var sourceRange = sourceRangeMax - sourceRangeMin;
    return (value - sourceRangeMin) * targetRange / sourceRange + targetRangeMin;
}


let cloneArray = []
let i = 0;
function duplicate() {
  let clone = original3.cloneNode(true); //make a clone
  let randomValue3 = Math.floor(Math.random() * 8) + 5; //Check these random values 
  let randomPos = Math.random() * 95
  let randomPos1 = Math.random() * (100 - randomValue3)
    clone.id = "originalFrog" + ++i; //Give the clone a new id (adding 1 every time)
    original3.parentNode.appendChild(clone);
    clone.style.visibility = "visible"
    //clone.style.setProperty("--frogWidth", randomValue3 + "vw");
    clone.style.setProperty("--startLeft", randomPos1 + "vw");
    clone.style.setProperty("--startTop", randomPos + "vh");
  //randomize starting position and size
  let randomImage = Math.floor(Math.random() * frogImageArray.length)
  originalImg.src = frogImageArray[randomImage];
  cloneArray.push(clone); 
  frogMainArray.push(clone)
  let panner1 =  new Tone.Panner(getScaledValue(randomPos1, 0, 100, -1, 1)).connect(mainGain)
  let randAudio = Math.floor(Math.random() * (audioArrayAll.length))

  // if (frogMainArray.length > 10 && frogMainArray.length < 20) {
  //   audioArray = audioArray2
  // } else if (frogMainArray.length >= 20 && frogMainArray.length < 30) {
  //   audioArray = audioArray3
  // } else if (frogMainArray.length >= 30 && frogMainArray.length < 40) {
  //   audioArray = audioArray4
  // } else if (frogMainArray.length >=40 && frogMainArray.length < 50) {
  //   audioArray = audioArray5
  // } else if (frogMainArray.length >=50 && frogMainArray.length < 60) {
  //   audioArray = audioArray1
  // } else {
  //   audioArray = audioArrayOrig

  // }
  clone.myFrog1 = new Tone.Player(audioArrayAll[randAudio]).connect(panner1); //choose random audio 
  
  clone.myFrog1.fadeIn = 0.5; 
  clone.myFrog1.fadeOut = 0.5; //put a fade on the audio to reduce clicks if it restarts 
  Tone.loaded().then(() => {
      clone.myFrog1.start(); //start the audio 
   })
  //  clone.addEventListener('touchmove', function(event) {
  //   // If there's exactly one finger inside this element
  //   if (event.targetTouches.length == 1) {
  //     var touch = event.targetTouches[0];
  //     // Place element where the finger is
  //     clone.style.left = (touch.pageX) + 'px';
  //     clone.style.top = (touch.pageY) + 'px';
  //   }
  //   event.preventDefault()
  //   console.log("Its working")
  // }, false);
   function moveFrog1() {
      let randNum = (Math.random() * 10) + 5
      //console.log(randNum)
      clone.onmouseover = function moveFrog1() {
      let randNum2 = (Math.random() * 60) + 1
      let randNum3 = (Math.random() * 50) + 1
      let randNum4 = (Math.random() * 20) + 10
      clone.style.setProperty('--frogTop1', (randNum2) + "vh");
      clone.style.setProperty('--frogLeft1', randNum3 + "vw");
      clone.style.setProperty('--animationTime', randNum4 + "s");
      clone.myFrog1.start();
      panner1.pan.rampTo(getScaledValue(randNum3, 0, 100, -1, 1), (randNum4))
      if (!clone.classList.contains("frogLook1")) {
         clone.classList.add("frogLook1")
    
        //  clone.style.setProperty('--startLeft', randNum2 + "vw");
        //  clone.style.setProperty('--startTop', randNum3 + "vh");
      } else if (clone.classList.contains("frogLook1")) {
        clone.classList.remove("frogLook1")
        
        // clone.style.setProperty('--startLeft', randNum2 + "vw");
        // clone.style.setProperty('--startTop', randNum3 + "vh");
      
  }
  
      clone.classList.remove("frogDissapear")

}
}
// function getLocation1() {

//   var rect = clone.getBoundingClientRect();
//    if (rect.top < outsideY && rect.top > outsideY - moveAway && rect.left < outsideX && rect.left > outsideX - moveAway) {
//   //  if (rect.left < outsideX && rect.left > outsideX - 30) {
  
//   moveFrog1()
//     console.log("liftoff")
//   } else {
//     //console.log(rect.left, outsideX, rect.top, outsideY)
//   }
  
//   }

  //clone.addEventListener("mouseover", getLocation1);
  //clone.addEventListener("touch", getLocation1)
  clone.addEventListener("mouseover", moveFrog1)
  clone.addEventListener("touch", moveFrog1)
  //body.addEventListener("touch", getLocation1)


  //     } else if (clone.classList.contains("frogLook1")) {
  //       clone.classList.remove("frogLook1")
  //     }
  //     clone.classList.remove("frogDissapear")
  //   }
  // }
}
function moveCloneFrog(clone) {
  let randNum2 = (Math.random() * 60) + 1
  let randNum3 = (Math.random() * 50) + 1
  let randNum4 = (Math.random() * 20) + 10
  clone.style.setProperty('--frogTop1', (randNum2) + "vh");
  clone.style.setProperty('--frogLeft1', randNum3 + "vw");
  clone.style.setProperty('--animationTime', randNum4 + "s");
  clone.myFrog1.start();
  //panner1.pan.rampTo(getScaledValue(randNum3, 0, 100, -1, 1), (randNum4))
  if (!clone.classList.contains("frogLook1")) {
     clone.classList.add("frogLook1")
  } else if (clone.classList.contains("frogLook1")) {
    clone.classList.remove("frogLook1")
}
  clone.classList.remove("frogDissapear")
}

function getCloneLocation(clone) {
  var rect = clone.getBoundingClientRect();
  let x = rect.left - outsideX;
  let y = rect.top - outsideY;
  let dist = Math.sqrt(x * x) + (y * y);


   if (dist < 2000) {
    moveCloneFrog(clone)
    console.log("liftoff_clone")
  } else {
    //console.log(dist)
  }
 }

  
////END

  document.addEventListener("keyup", (e) => {
    let idNum = Math.floor(Math.random() * cloneArray.length);
    let cl = cloneArray[idNum]
    let randAnTime = (Math.random() * 10) + 5;
    let randAnTime1 = (Math.random() * 20) + 10;
    for (i;i<cloneArray.length;i++){
    cloneArray[i].addEventListener("mouseover", () => {
      console.log(cloneArray[i])
      //cloneArray[i].style.opacity = 1
    })
  }
    if (e.key == "ArrowDown" || e.key == "ArrowLeft") {
      cloneArray.shift().remove()
    } else if (e.key == "5") {
      cl.classList.remove("moveAgain")
    } else if (e.key == "6") {
      cl.style.setProperty('--animationTime', randAnTime + "s");
      cl.classList.add("moveAgain1")
    } else if (e.key == "7") {
      cl.classList.remove("moveAgain1")  
    } else if (e.key == "8") {
      cl.classList.add("frogDissapear");
     } else if (e.key == "9") {
      cl.classList.remove("frogDissapear")
     } else if (e.key == "d") {
      // let indClone = document.getElementById(`originalFrog${l}`);
      for(l=0;l<frogMainArray.length;l++) {
        frogMainArray[l].style.animation = "fadeOut 1s"
        frogMainArray[l].classList.add("frogDissapear");
      }
     } else if (e.key == "+") {
      frogLimit++
      frogRoomLimit++
      // console.log("hello!")

     } else if (e.key == "-") {
      frogLimit--
      frogRoomLimit--
     }
  });


  ///////////////DUPLCATE TWO////////////////
let frogElement;
let j = 0;
let twoLocal = [];
let twoRoom = [];
let threeRoom = []; 
let threeLocal = [];
let fourRoom = []; 
let fourLocal = [];
let fiveRoom = []; 
let fiveLocal = [];
let sixRoom = []; 
let sixLocal = [];
let roomArray = []

function duplicateTwo(limit = frogLimit, frogUnit = localArray) {
  if (roomNumber == 2) {
    frogElement = original1;
    localArray = twoLocal
    roomArray = twoRoom
  } else if (roomNumber == 3) {
    frogElement = original2
    localArray = threeLocal
    roomArray = threeRoom
  } else if (roomNumber == 4) {
    frogElement = original3
    localArray = fourLocal
    roomArray = fourRoom
  } else if (roomNumber == 5) {
    frogElement = original4
    localArray = fiveLocal
    roomArray = fiveRoom
  } else if (roomNumber == 6) {
    frogElement = original5
    localArray = sixLocal
    roomArray = sixRoom
  }
  let clone = frogElement.cloneNode(true); //make a clone
  let randomPos = (Math.random() * 90) + 10
  let randomPos1 = Math.random() * 90
  let randomValue3 = (Math.random() * 6) + 3; //Check these random values 
    clone.id = "originalFrogTwo" + ++j; //Give the clone a new id (adding 1 every time)
    if (frogUnit.length >= limit && frogRoomLimit == 3 && localArray.length > 0) {
        console.log("this is true")
        localArray.shift().remove()
        roomArray.shift().remove()
      } else if (frogUnit.length >= limit && frogRoomLimit == 3 && localArray.length == 0) {
        roomArray.shift().remove()
        console.log("thisss is true")
      } else if (frogUnit.length >= frogRoomLimit && frogRoomLimit > 4) {
        roomArray.shift().remove()
        console.log("thissss is true")
      }
  frogElement.parentNode.appendChild(clone);
  name1.innerHTML = guestFrogName;
  name2.innerHTML = guestFrogName;
  name3.innerHTML = guestFrogName;
  name4.innerHTML = guestFrogName;
  name5.innerHTML = guestFrogName;
  name6.innerHTML = guestFrogName;
  //clone.style.setProperty("--frogWidth", randomValue3 + "em") 
  clone.style.setProperty("--startLeft", randomPos1 + "vw");
  clone.style.setProperty("--startTop", randomPos + "vh");
  //frogElement.style.visibility = "visible"
  clone.style.visibility = "visible"
  let randAudio = Math.floor(Math.random() * (audioArrayAll.length)) 
  clone.myFrog1 = new Tone.Player(audioArrayAll[randAudio]).connect(panner); //choose random audio 
  clone.myFrog1.fadeIn = 0.5; 
  clone.myFrog1.fadeOut = 0.5; //put a fade on the audio to reduce clicks if it restarts 
  Tone.loaded().then(() => {
      clone.myFrog1.start(); //start the audio 
   })
  
  function moveFrog1() {
      let randNum = (Math.random() * 10) + 5
      //console.log(randNum)
      let randNum2 = (Math.random() * 60) + 20
      let randNum3 = (Math.random() * 40) + 1
     // console.log(randNum3)
     // clone.style.setProperty('--frogWidth', (randNum) + "em");
      clone.style.setProperty('--frogTop1', (randNum2) + "vh");
      clone.style.setProperty('--frogLeft1', randNum3 + "vw");
      clone.style.setProperty('--animationTime', randNum1 + "s");

      clone.myFrog1.start();
      panner = new Tone.Panner(getScaledValue(randNum2, 0, 100, -1, 1)).connect(mainGain);
      panner.pan.rampTo(getScaledValue(randNum2, 0, 100, -1, 1), (randNum1))

      if (!clone.classList.contains("frogLook1")) {
        clone.classList.add("frogLook1")
  
     } else if (clone.classList.contains("frogLook1")) {
       clone.classList.remove("frogLook1")
      
      
  }

    clone.classList.remove("frogDissapear")

}
frogUnit.push(clone);
frogMainArray.push(clone)
for (o=0; o<localArray.length; o++) {
  localArray[o].addEventListener("click", emitFrog)
}
// function getLocation() {

//   var rect = clone.getBoundingClientRect();
//    if (rect.top < outsideY && rect.top > outsideY - moveAway && rect.left < outsideX && rect.left > outsideX - moveAway) {
//   //  if (rect.left < outsideX && rect.left > outsideX - 30) {
  
//   moveFrog1()
//     console.log("liftoff")
//   } else {
//     //console.log(rect.left, outsideX, rect.top, outsideY)
//   }
  
//   }

  //clone.addEventListener("mouseover", getLocation);
  //clone.addEventListener("touch", getLocation)
  clone.addEventListener("mouseover", moveFrog1);
  clone.addEventListener("touch", moveFrog1)
  //body.addEventListener("touch", getLocation)

}


function spawnFrog() {
  for (i=0;i<200;i++) {
    duplicate()
  }
}

document.addEventListener("keydown", (e) => {
  if (e.key == "ArrowUp" || e.key == "ArrowRight") {
    duplicate()
  }
})

//onclick="socket.emit('new_frog', true)">
socket.on("the_end", () => {
  duplicateTwo()
})

// let body = document.querySelector("body");
document.body.style.cursor = 'none';


socket.on("hide_button", () => {
 hideButton()
})

function hideButton() {
  mainButton.style.opacity = "0"
}

function buttonVisibiltiy() {
  mainButton.style.visibility = "hidden"
}

socket.on("new_frog2", () => {
  duplicateTwo(frogRoomLimit, roomArray);
})

socket.on("new_frog3", () => {
  duplicateTwo(frogRoomLimit, roomArray);
})


socket.on("new_frog4", () => {
  duplicateTwo(frogRoomLimit, roomArray);
})

socket.on("new_frog5", () => {
  duplicateTwo(frogRoomLimit, roomArray);
})

socket.on("new_frog6", () => {
  duplicateTwo(frogRoomLimit, roomArray);
})


  function emitFrog() {
    socket.emit("testing", true);
    socket.emit("theName", myInput.value)
    duplicateTwo()
  }


   original4.addEventListener("click", emitFrog) 
   
    original4.addEventListener("click", () => {
      mainGain.gain = 1
    })


socket.on("frogVisible", ()=> {
  duplicateSection()
})

socket.on("end_piece", () =>  {
 
})


function duplicateSection() {
  console.log("What is going on")
  // mainButton.style.opacity = "1"
  // mainButton.innerHTML = "Try clicking on a frog!";
  // mainButton.style.fontSize = "6vw"
  // mainButton.style.display = "none";
  original4.style.visibility = "visible";
  original4.style.animation = "fadeIn 5s";
  // mainButton.style.fontSize = "5vw"
  // para.style.visibility = "hidden"

}

document.addEventListener("keyup", (e) => {
  if (e.key == "ArrowUp" || e.key == "ArrowRight") {
    socket.emit("main_display", true);
    mainButton.style.visibility = "hidden"
    frogRoomLimit = 20; //THIS SETS THE NUMBER OF FROGS!!! 
  }
  // } else if (e.key == "h") {
  //   socket.emit("make_show_button", true);
    
  // } else if (e.key == "P") {
  //   socket.emit("make_hide_button", true)

  // } else if (e.key == "R") {
  //   socket.emit("restart_piece", true);
  // } else if (e.key == "Q") {
  //    oneBigFrog()

  // } else if (e.key == "e") {
    
  //   socket.emit("fade_to_black", true);
  //   endPiece()
  //    //make a variable for this 
  // } else if (e.key == "c") {
  //   // console.log(":P")
  //   changeSound();
  //   socket.emit("change_sound", () => {

  //   })
  // }
})

function changeSound() {
  audioArray = audioArrayFav
  audioArray1 =  audioArrayFav
  audioArray2 =  audioArrayFav
  audioArray3 =  audioArrayFav
  audioArray5 =  audioArrayFav
  audioArrayOrig =  audioArrayFav
}

socket.on("set_section", (data) => {
  if (data == "duplicate") {
  duplicateSection();
  } else if (data =="ending") {
  endPiece()
  console.log("Its ending")
  } else if (data =="restart") {
    // console.log("#%^%@$#^%$@")
    restartPiece()
  //call a function that does all the things needed to restart
  } else if (data =="start") {
  console.log(":)")
  } 
})

socket.on("set_section_again", (data) => {
  mainButton.innerHTML = "Click for Frog"
  mainButton.style.visibility = "visible"
  // original4.style.visibility = "hidden";
  }
)

socket.on("set_sound_bank", () => {
  changeSound()
  // console.log(':o)')
})

async function oneBigFrog() {
  original.style.animation = "bigFrog 20s"
  original.style.width = "100vw"
}



socket.on("room", (roomNum) => {
  roomNumber = roomNum
  console.log("Your room number is " + roomNum)
  if (roomNumber == 2) {
    localArray = twoLocal
    console.log("its rooom 2")
  } else if (roomNumber == 3) {
    localArray = threeLocal
  }
  

})

socket.on("input", (input) => {
  guestFrogName = input
  console.log(input)
})

document.addEventListener("keydown", (e) => {
  if (e.key == "1") {
  }
})



