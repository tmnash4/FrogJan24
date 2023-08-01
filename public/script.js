async function startAudio() {  //This code starts the audio 
  await Tone.start()
  console.log("ready")
}

let mainGain = new Tone.Gain(0).toDestination()
mainGain.gain = 0

let frogBackBuffer = new Tone.Buffer("media/background3.mp3")
let frogBack = new Tone.Player(frogBackBuffer)
frogBack.connect(mainGain);
frogBack.loop = true;	

async function playBackground() {
  await Tone.start()
  console.log("ready") 
  Tone.loaded().then(() => {
  frogBack.start();
  // setTimeout(endPiece, frogBackBuffer.duration * 1000)
  // console.log(frogBackBuffer.duration * 1000 )
});  
original.style.opacity = "1";
original.style.animation = "fadeIn 10s"
}
var socketName = "default";
var socket = io();  

let frogMainArray = []

let moveAway = 100

let body = document.querySelector("body");


let panner = new Tone.Panner(0).connect(mainGain); //This is the panner, it sends ALL the audio to its output. 
let randNum1 = (Math.random() * 10) + 5 //creates random number

let original = document.getElementById("originalFrog"); //This stores the element with the id original. At this point, it has the class of "frogStart", the onclick "duplicate" and the onmouseover "moveFrog"
original.moving = false;
let original1 = document.getElementById("secondFrog"); //This stores the element with the id original. At this point, it has the class of "frogStart", the onclick "duplicate" and the onmouseover "moveFrog"
let original2 = document.getElementById("fifthFrog");
let original3 = document.getElementById("fourthFrog");
let original4 = document.getElementById("thirdFrog"); //This needs to be 
let original5 = document.getElementById("sixthFrog")
let original6 = document.getElementById("seventhFrog")
let frogLimit = 10;
let frogRoomLimit = 3;


// $("body").ripples({
//   resolution: 124,
//   perturbance: 0.01,
// });



let mainButton = document.getElementById("mainButton");
let para = document.getElementById("para")



function startPiece() {
  mainButton.style.opacity = "0";
  playBackground();
  mainGain.gain.rampTo(1, 3);
  para.style.opacity = "0"
}

if (mainButton.innerHTML = "Click for Frog") {
  mainButton.addEventListener("click", startPiece)
  mainButton.addEventListener("touchstart", startPiece)
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
  original.style.opacity = "0"
  original4.style.opacity = "0"
  body.style.opacity = "1"
  body.style.backgroundColor = "white";
  mainButton.innerHTML = "Click for Frog"
}


this.onload = () => {
  original.style.opacity = "0"
}

body.addEventListener("touchstart", detectTouch)
body.addEventListener("mousemove", detectTouch)

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
    let randNum3 = (Math.random() * 40) + 1
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
  
   // let randNum = (Math.random() * 10) + 5
    //console.log(randNum)
    let randNum2 = (Math.random() * 60) + 1
    let randNum3 = (Math.random() * 40) + 1
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


function touchFrog() {
  if (!original.moving) {
    original.moving = true;
    original.timer = setTimeout(() => {
      original.moving = false
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
  // document.write(data)
}))


//one onhover = frogs anywhere/
//another onhover = frogs in a specific location
original.addEventListener("touchstart", moveFrog);
original.addEventListener("mouseover", moveFrog);
original4.addEventListener("mouseover", moveFrog4);

let frogAudio = new Tone.Buffer("media/frog_8.mp3");
let frogAudio1 = new Tone.Buffer("media/frog_6.wav");
let frogAudio2 = new Tone.Buffer("media/frog_5.mp3");
let frogAudio3 = new Tone.Buffer("media/frog_4.mp3");
let frogAudio4 = new Tone.Buffer("media/frog_3.mp3");
let frogAudio5 = new Tone.Buffer("media/frog1.mp3");
let frogAudio6 = new Tone.Buffer("media/frogs_2.mp3");
let frogAudio7 = new Tone.Buffer("media/frog_7.mp3");
let frogAudio8 = new Tone.Buffer("media/frog_9.mp3");
let frogAudio9 = new Tone.Buffer("media/frog_10.mp3");
let frogAudio10 = new Tone.Buffer("media/frog_11.mp3");
let frogAudio11 = new Tone.Buffer("media/frog_12.mp3");
let frogAudio12 = new Tone.Buffer("media/frog_13.mp3");
let frogAudio13 = new Tone.Buffer("media/indi_frog1.mp3")
let frogAudio14 = new Tone.Buffer("media/indi_frog2.mp3")
let frogAudio15 = new Tone.Buffer("media/indi_frog3.mp3")
let frogAudio16 = new Tone.Buffer("media/indi_frog4.mp3")
let frogAudio17 = new Tone.Buffer("media/indi_frog5.mp3")
let frogAudio18 = new Tone.Buffer("media/indi_frog6.mp3")
let frogAudio19 = new Tone.Buffer("media/novfrog.mp3")
let frogAudio20 = new Tone.Buffer("media/novfrog_1.mp3")
let frogAudio21 = new Tone.Buffer("media/novfrog_2.mp3")
let frogAudio22 = new Tone.Buffer("media/novfrog_3.mp3")
let frogAudio23 = new Tone.Buffer("media/novfrog_4.mp3")
let frogAudio24 = new Tone.Buffer("media/novfrog_5.mp3")
let frogAudio25 = new Tone.Buffer("media/novfrog_6.mp3")
let frogAudio26 = new Tone.Buffer("media/novfrog_7.mp3")
let frogAudio27 = new Tone.Buffer("media/novfrog_8.mp3")
let frogAudio28 = new Tone.Buffer("media/novfrog_9.mp3")
let frogAudio29 = new Tone.Buffer("media/novfrog_10.mp3")
let frogAudio30 = new Tone.Buffer("media/novfrog_11.mp3")
let frogAudio31 = new Tone.Buffer("media/ar5_1.mp3")
let frogAudio32 = new Tone.Buffer("media/ar5_2.mp3")
let frogAudio33 = new Tone.Buffer("media/ar5_3.mp3")
let frogAudio34 = new Tone.Buffer("media/ar5_4.mp3")
let frogAudio35 = new Tone.Buffer("media/ar5_5.mp3")
let frogAudio36 = new Tone.Buffer("media/ar5_6.mp3")
let frogAudio37 = new Tone.Buffer("media/ar5_7.mp3")
//let frogAudio13 = new Tone.Buffer("media/frog_8.wav")

let frogImage1 = "media/froggo4.png"
let frogImage2 = "media/froggy3_new.png"
let frogImage3 = "media/frog_6.png"
let frogImage4 = "media/froggo5.png"
let frogImage5 = "media/froggy2_s.png"
let frogImage6 = "media/frog_51.png"

//let preAudioArray = [];

let audioArray = [frogAudio, frogAudio1, frogAudio37, frogAudio3, frogAudio29, frogAudio6, frogAudio31, frogAudio32, frogAudio33, frogAudio35, frogAudio35, frogAudio36];
let audioArrayOrig = [frogAudio, frogAudio1,frogAudio37, frogAudio3, frogAudio29, frogAudio6, frogAudio31, frogAudio32, frogAudio33, frogAudio35, frogAudio35, frogAudio36];
let audioArray1 = [frogAudio7, frogAudio8, frogAudio9, frogAudio10, frogAudio11, frogAudio12, frogAudio13, frogAudio14, frogAudio15, frogAudio16, frogAudio17, frogAudio18];
let audioArray2 = [frogAudio13, frogAudio14, frogAudio15, frogAudio16, frogAudio17, frogAudio18, frogAudio19, frogAudio20, frogAudio21, frogAudio22, frogAudio23, frogAudio24];
let audioArray3 = [frogAudio19, frogAudio20, frogAudio21, frogAudio22, frogAudio23, frogAudio24,frogAudio14, frogAudio15,frogAudio3, frogAudio29]; //Check this one out for volume
let audioArray4 = [frogAudio25, frogAudio26, frogAudio27, frogAudio28, frogAudio29, frogAudio30, frogAudio16, frogAudio17, frogAudio18, frogAudio19, frogAudio20];
let audioArray5 = [frogAudio31, frogAudio32, frogAudio33, frogAudio35, frogAudio35, frogAudio36,frogAudio, frogAudio1, frogAudio37, frogAudio3, frogAudio29, frogAudio6, frogAudio31];

let audioArrayFav = [frogAudio34, frogAudio8, frogAudio12, frogAudio5, frogAudio13, frogAudio16, frogAudio27 ]


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
 // console.log("This is the random number" + randomPos, randomPos1) 
    clone.id = "originalFrog" + ++i; //Give the clone a new id (adding 1 every time)
    original3.parentNode.appendChild(clone);
    clone.style.visibility = "visible"
//Add a new class
   //console.log(clone.classList)
   //remove the original frog's class
  clone.style.setProperty("--frogWidth", randomValue3 + "vw");
  clone.style.setProperty("--startLeft", randomPos1 + "vw");
  clone.style.setProperty("--startTop", randomPos + "vh");
  //randomize starting position and size

  let randomImage = Math.floor(Math.random() * frogImageArray.length)
  clone.src = frogImageArray[randomImage];

  cloneArray.push(clone); 
  frogMainArray.push(clone)
  let panner1 =  new Tone.Panner(getScaledValue(randomPos1, 0, 100, -1, 1)).connect(mainGain)
  let randAudio = Math.floor(Math.random() * (audioArray.length))
  console.log(randAudio)

  if (frogMainArray.length > 10 && frogMainArray.length < 20) {
    audioArray = audioArray2
    console.log("g")
  } else if (frogMainArray.length >= 20 && frogMainArray.length < 30) {
    audioArray = audioArray3
    console.log("g1")

  } else if (frogMainArray.length >= 30 && frogMainArray.length < 40) {
    audioArray = audioArray4
    console.log("g2")

  } else if (frogMainArray.length >=40 && frogMainArray.length < 50) {
    audioArray = audioArray5
    console.log("g3")
  } else if (frogMainArray.length >=50 && frogMainArray.length < 60) {
    audioArray = audioArray1
    console.log("g4")
  } else {
    audioArray = audioArrayOrig
    console.log("g5")

  }
  clone.myFrog1 = new Tone.Player(audioArray[randAudio]).connect(panner1); //choose random audio 
  
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
      let randNum2 = (Math.random() * 60) + 1
      let randNum3 = (Math.random() * 50) + 1
      let randNum4 = (Math.random() * 20) + 10
     // console.log(randNum3)
     // clone.style.setProperty('--frogWidth', (randNum) + "em");
      clone.style.setProperty('--frogTop1', (randNum2) + "vh");
      clone.style.setProperty('--frogLeft1', randNum3 + "vw");
      clone.style.setProperty('--animationTime', randNum4 + "s");

      clone.myFrog1.start();
     // let panValue = getScaledValue(randomPos1, 0, 100, -1, 1)
      //panner.pan = panValue
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
    //let cloneId = document.getElementById(`originalFrog${idNum}`);
    let cl = cloneArray[idNum]
    let randAnTime = (Math.random() * 10) + 5;
    let randAnTime1 = (Math.random() * 20) + 10;
    for (i;i<cloneArray.length;i++){
    cloneArray[i].addEventListener("mouseover", () => {
      console.log(cloneArray[i])
      //cloneArray[i].style.opacity = 1
    })
  }
    if (e.key == "ArrowDown") {
      cloneArray.shift().remove()
    } else if (e.key == "s") {
      cl.classList.remove("moveAgain")
    } else if (e.key == "b") {
      cl.style.setProperty('--animationTime', randAnTime + "s");
      cl.classList.add("moveAgain1")
    } else if (e.key == "n") {
      cl.classList.remove("moveAgain1")  
    } else if (e.key == "w") {
      //console.log(cloneId)
      console.log(idNum)
      cl.classList.add("frogDissapear");
      // cl.onmouseover(() => {
      //   cl.style.setProperty.opacity = "1"
      // })
     } else if (e.key == "r") {
      cl.classList.remove("frogDissapear")
     } else if (e.key == "d") {
      // let indClone = document.getElementById(`originalFrog${l}`);
      for(l=0;l<frogMainArray.length;l++) {
        frogMainArray[l].style.animation = "fadeOut 1s"
        frogMainArray[l].classList.add("frogDissapear");
    
        // if (cloneArray.classList.contains(""))
        // cloneArray[l].style.transition = "opacity 5s"
        //cloneArray[l].style.opacity = "0"
        // console.log(cloneArray);
        // console.log(cloneArray[l].classList)
        // cloneArray[l].addEventListener("mouseover", () => {
   
        // })
      }
     } else if (e.key == "+") {
      frogLimit++
      frogRoomLimit++
      console.log("hello!")

     } else if (e.key == "-") {
      frogLimit--
      frogRoomLimit--
     }
  });


  ///////////////DUPLCATE TWO////////////////

let j = 0;


let twoLocal = [];
let twoRoom = [];

function duplicateTwo(limit = frogLimit, frogUnit = twoLocal) {
  
  let clone = original1.cloneNode(true); //make a clone
  let randomPos = Math.random() * 90
  let randomPos1 = Math.random() * 90
  let randomValue3 = (Math.random() * 6) + 3; //Check these random values 
    clone.id = "originalFrogTwo" + ++j; //Give the clone a new id (adding 1 every time)
    if (frogUnit.length >= limit && frogRoomLimit == 3 && twoLocal.length > 0) {
        twoLocal.shift().remove()
        twoRoom.shift().remove()
      } else if (frogUnit.length >= limit && frogRoomLimit == 3 && twoLocal.length == 0) {
        twoRoom.shift().remove()
      } else if (frogUnit.length >= frogRoomLimit && frogRoomLimit > 4) {
        twoRoom.shift().remove()
      }
    original1.parentNode.appendChild(clone);
  clone.style.setProperty("--frogWidth", randomValue3 + "em") 
  clone.style.setProperty("--startLeft", randomPos1 + "vw");
  clone.style.setProperty("--startTop", randomPos + "vh")
  //randomize starting position and size
  // let randomImage = Math.floor(Math.random() * 5)
  // clone.src = frogImageArray[randomImage];
  clone.style.visibility = "visible"
  let randAudio = Math.floor(Math.random() * (audioArray1.length)) 
  clone.myFrog1 = new Tone.Player(audioArray1[randAudio]).connect(panner); //choose random audio 
  clone.myFrog1.fadeIn = 0.5; 
  clone.myFrog1.fadeOut = 0.5; //put a fade on the audio to reduce clicks if it restarts 
  Tone.loaded().then(() => {
      clone.myFrog1.start(); //start the audio 
   })
  
  function moveFrog1() {
      let randNum = (Math.random() * 10) + 5
      //console.log(randNum)
      let randNum2 = (Math.random() * 60) + 1
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
    // if (clone.classList.contains = "frog") {
    //   console.log("working!")
    // }
    clone.classList.remove("frogDissapear")

}
frogUnit.push(clone);
frogMainArray.push(clone)
for (o=0; o<twoLocal.length; o++) {
  console.log(twoLocal[o].id)
  twoLocal[o].addEventListener("click", emitFrog)
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




let threeLocal = [];
let threeRoom = [];

////////////////////////////////////DUPLICATE Thr/////////////////////////////////////////
let b = 0;

function duplicateThree(limit = frogLimit, frogUnit = threeLocal) {
  
  let clone = original2.cloneNode(true); //make a clone
  let randomPos = Math.random() * 90
  let randomPos1 = Math.random() * 90
  let randomValue3 = (Math.random() * 6) + 3; //Check these random values 
  clone.id = "originalFrogThree" + ++b; //Give the clone a new id (adding 1 every time)
  if (frogUnit.length >= limit && frogRoomLimit == 3 && threeLocal.length > 0) {
    threeLocal.shift().remove()
    } else if (frogUnit.length >= limit && frogRoomLimit == 3 && threeLocal.length == 0) {
      threeRoom.shift().remove()
   } else if (frogUnit.length >= frogRoomLimit && frogRoomLimit > 4) {
     threeRoom.shift().remove()
   }
  original2.parentNode.appendChild(clone); 
  clone.style.setProperty("--frogWidth", randomValue3 + "em") 
  clone.style.setProperty("--startLeft", randomPos1 + "vw");
  clone.style.setProperty("--startTop", randomPos + "vh")
  clone.style.visibility = "visible"
  let randAudio = Math.floor(Math.random() * (audioArray2.length)) 
  clone.myFrog1 = new Tone.Player(audioArray2[randAudio]).connect(panner); //choose random audio 
  clone.myFrog1.fadeIn = 0.5; 
  clone.myFrog1.fadeOut = 0.5; //put a fade on the audio to reduce clicks if it restarts 
  Tone.loaded().then(() => {
      clone.myFrog1.start(); //start the audio 
   })
   
  function moveFrog1() {
      let randNum = (Math.random() * 10) + 5
      let randNum2 = (Math.random() * 50) + 1
      let randNum3 = (Math.random() * 40) + 1
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
frogMainArray.push(clone);
for (o=0; o<threeLocal.length; o++) {
  console.log(threeLocal[o].id)
  threeLocal[o].addEventListener("click", emitFrog)
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

 // clone.addEventListener("mouseover", getLocation);
  //clone.addEventListener("touch", getLocation)
  clone.addEventListener("mouseover", moveFrog1);
  clone.addEventListener("touch", moveFrog1)
  //body.addEventListener("touch", getLocation)
}

let fourLocal = [];
let fourRoom = [];

//let limitArray = [10, 3];


let c = 0;

////////////////////////////////////DUPLICATE FOUR/////////////////////////////////////////


function duplicateFour(limit = frogLimit, frogUnit = fourLocal) {
  
  let clone = original3.cloneNode(true); //make a clone
  let randomValue3 = Math.floor(Math.random() * 6) + 4; //Check these random values 
  let randomPos = Math.random() * 90
  let randomPos1 = Math.random() * (95- randomValue3)
    clone.id = "originalFrogFour" + ++c; //Give the clone a new id (adding 1 every time)
    if (frogUnit.length >= limit && frogRoomLimit == 3 && fourLocal.length > 0) {
      fourLocal.shift().remove()
      } else if (frogUnit.length >= limit && frogRoomLimit == 3 && fourLocal.length == 0) {
      fourRoom.shift().remove()
    } else if (frogUnit.length >= frogRoomLimit && frogRoomLimit > 4) {
      fourRoom.shift().remove()
    }
    original1.parentNode.appendChild(clone);
   
  clone.style.setProperty("--frogWidth", randomValue3 + "em") 
  clone.style.setProperty("--startLeft", randomPos1 + "vw");
  clone.style.setProperty("--startTop", randomPos + "vh");
 
  //randomize starting position and size

  clone.style.visibility = "visible"

  let randAudio = Math.floor(Math.random() * (audioArray3.length)) 
  clone.myFrog1 = new Tone.Player(audioArray3[randAudio]).connect(panner); //choose random audio 
  clone.myFrog1.fadeIn = 0.5; 
  clone.myFrog1.fadeOut = 0.5; //put a fade on the audio to reduce clicks if it restarts 
  Tone.loaded().then(() => {
      clone.myFrog1.start(); //start the audio 
   })
   

  function moveFrog1() {
      let randNum = (Math.random() * 10) + 5
      //console.log(randNum)
      let randNum2 = (Math.random() * 60) + 1
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
        
       //  clone.style.setProperty('--startLeft', randNum2 + "vw");
       //  clone.style.setProperty('--startTop', randNum3 + "vh");
     } else if (clone.classList.contains("frogLook1")) {
       clone.classList.remove("frogLook1")
       
  }
  clone.classList.remove("frogDissapear")

  

}
frogUnit.push(clone);
frogMainArray.push(clone);
for (o=0; o<fourLocal.length; o++) {
  fourLocal[o].addEventListener("click", emitFrog)
}
clone.classList.remove("frogDissapear")
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


/////////////////////Duplicate Five/////////////////////


let fiveLocal = [];
let fiveRoom = [];


let d = 0;

function duplicateFive(limit = frogLimit, frogUnit = fiveLocal) {
  
  let clone = original5.cloneNode(true); //make a clone
  let randomValue3 = Math.floor(Math.random() * 8) + 5; //Check these random values 
  let randomPos = Math.random() * 90
  let randomPos1 = Math.random() * (90 - randomValue3)
    clone.id = "originalFrogFive" + ++d; //Give the clone a new id (adding 1 every time)
    if (frogUnit.length >= limit && frogRoomLimit == 3 && fiveLocal.length > 0) {
      fiveLocal.shift().remove()
    } else if (frogUnit.length >= limit && frogRoomLimit == 3 && fiveLocal.length == 0) {
        fiveRoom.shift().remove()
    } else if (frogUnit.length >= frogRoomLimit && frogRoomLimit > 4) {
      fiveRoom.shift().remove()
    }
    original5.parentNode.appendChild(clone);
   
  clone.style.setProperty("--frogWidth", randomValue3 + "em") 
  clone.style.setProperty("--startLeft", randomPos1 + "vw");
  clone.style.setProperty("--startTop", randomPos + "vh");
 
  //randomize starting position and size

  clone.style.visibility = "visible"

  // let randomImage = Math.floor(Math.random() * 5)
  // clone.src = frogImageArray[randomImage];
  // console.log(clone)
  let randAudio = Math.floor(Math.random() * (audioArray4.length)) 
  clone.myFrog1 = new Tone.Player(audioArray4[randAudio]).connect(panner); //choose random audio 
  clone.myFrog1.fadeIn = 0.5; 
  clone.myFrog1.fadeOut = 0.5; //put a fade on the audio to reduce clicks if it restarts 
  Tone.loaded().then(() => {
      clone.myFrog1.start(); //start the audio 
   })
  
  function moveFrog1() {
      let randNum = (Math.random() * 10) + 5
      //console.log(randNum)
      let randNum2 = (Math.random() * 60) + 1
      let randNum3 = (Math.random() * 40) + 1
     // console.log(randNum3)
      //clone.style.setProperty('--frogWidth', (randNum) + "em");
      clone.style.setProperty('--frogTop1', (randNum2) + "vh");
      clone.style.setProperty('--frogLeft1', randNum3 + "vw");
      clone.style.setProperty('--animationTime', randNum1 + "s");

      clone.myFrog1.start();
      panner = new Tone.Panner(getScaledValue(randNum2, 0, 100, -1, 1)).connect(mainGain);
      panner.pan.rampTo(getScaledValue(randNum2, 0, 100, -1, 1), (randNum1))

      if (!clone.classList.contains("frogLook1")) {
        clone.classList.add("frogLook1")
        
       //  clone.style.setProperty('--startLeft', randNum2 + "vw");
       //  clone.style.setProperty('--startTop', randNum3 + "vh");
     } else if (clone.classList.contains("frogLook1")) {
       clone.classList.remove("frogLook1")
      
  }
  clone.classList.remove("frogDissapear")

    // if (clone.classList.contains = "frog") {
    //   console.log("working!")
    // }
}
frogUnit.push(clone);
frogMainArray.push(clone)
for (o=0; o<fiveLocal.length; o++) {
  fiveLocal[o].addEventListener("click", emitFrog)
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


/////////////////////Duplicate Six/////////////////////


let sixLocal = [];
let sixRoom = [];

let e = 0;
function duplicateSix(limit = frogLimit, frogUnit = sixLocal) {
  
  let clone = original6.cloneNode(true); //make a clone
  let randomValue3 = Math.floor(Math.random() * 6) + 3; //Check these random values 
  let randomPos = Math.random() * 90
  let randomPos1 = Math.random() * (90 - randomValue3)
    clone.id = "originalFrogSix" + ++e; //Give the clone a new id (adding 1 every tim
    if (frogUnit.length >= limit && frogRoomLimit == 3 && sixLocal.length > 0) {
      sixLocal.shift().remove()
      } else if (frogUnit.length >= limit && frogRoomLimit == 3 && sixLocal.length == 0) {
        sixRoom.shift().remove()
  } else if (frogUnit.length >= frogRoomLimit && frogRoomLimit > 4) {
  sixRoom.shift().remove()
}
    original6.parentNode.appendChild(clone);
   
  clone.style.setProperty("--frogWidth", randomValue3 + "em") 
  clone.style.setProperty("--startLeft", randomPos1 + "vw");
  clone.style.setProperty("--startTop", randomPos + "vh");
 
  //randomize starting position and size

  clone.style.visibility = "visible"

  // let randomImage = Math.floor(Math.random() * 5)
  // clone.src = frogImageArray[randomImage];
  // console.log(clone)
  let randAudio = Math.floor(Math.random() * (audioArray5.length)) 
  clone.myFrog1 = new Tone.Player(audioArray5[randAudio]).connect(panner); //choose random audio 
  clone.myFrog1.fadeIn = 0.5; 
  clone.myFrog1.fadeOut = 0.5; //put a fade on the audio to reduce clicks if it restarts 
  Tone.loaded().then(() => {
      clone.myFrog1.start(); //start the audio 
   })
  
   function moveFrog1() {
      let randNum = (Math.random() * 10) + 5
      //console.log(randNum)
      let randNum2 = (Math.random() * 60) + 1
      let randNum3 = (Math.random() * 40) + 1
     // console.log(randNum3)
      //clone.style.setProperty('--frogWidth', (randNum) + "em");
      clone.style.setProperty('--frogTop1', (randNum2) + "vh");
      clone.style.setProperty('--frogLeft1', randNum3 + "vw");
      clone.style.setProperty('--animationTime', randNum1 + "s");

      clone.myFrog1.start();
      panner = new Tone.Panner(getScaledValue(randNum2, 0, 100, -1, 1)).connect(mainGain);
      panner.pan.rampTo(getScaledValue(randNum2, 0, 100, -1, 1), (randNum1))

      if (!clone.classList.contains("frogLook1")) {
        clone.classList.add("frogLook1")
       
        
       //  clone.style.setProperty('--startLeft', randNum2 + "vw");
       //  clone.style.setProperty('--startTop', randNum3 + "vh");
     } else if (clone.classList.contains("frogLook1")) {
       clone.classList.remove("frogLook1")
       
  }
  clone.classList.remove("frogDissapear")

   
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
 // body.addEventListener("touch", getLocation)
frogUnit.push(clone);
frogMainArray.push(clone);
for (o=0; o<sixLocal.length; o++) {
  sixLocal[o].addEventListener("click", emitFrog)
}
clone.classList.remove("frogDissapear")

}

function spawnFrog() {
  for (i=0;i<200;i++) {
    duplicate()
  }
}


document.addEventListener("keydown", (e) => {
  if (e.key == "ArrowUp") {
    duplicate()
  }
})

//onclick="socket.emit('new_frog', true)">
socket.on("the_end", () => {
  duplicateTwo()
})



 


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
    duplicateTwo(frogRoomLimit, twoRoom);
})

socket.on("new_frog3", () => {
  duplicateThree(frogRoomLimit, threeRoom);
})


socket.on("new_frog4", () => {
  duplicateFour(frogRoomLimit, fourRoom);
})

socket.on("new_frog5", () => {
  duplicateFive(frogRoomLimit, fiveRoom);
})

socket.on("new_frog6", () => {
  duplicateSix(frogRoomLimit, sixRoom);
})


// let frogImage1 = "media/froggo4.png" //fdup5
// let frogImage2 = "media/froggy3_new.png" //dup2
// let frogImage3 = "media/frog_6.png" //Orig4
// let frogImage4 = "media/froggo5.png" //dup4
// let frogImage5 = "media/froggy2_s.png" //dup6
// let frogImage6 = "media/frog_51.png" //dup3




  function emitFrog() {
    socket.emit("testing", true);
   frogFunctionArray[roomNumber]()
   //console.log(frogFunctionArray[roomNumber])
   
  }


   original4.addEventListener("click", emitFrog) 
   
    original4.addEventListener("click", () => {
      mainGain.gain = 1
    })

let frogFunctionArray = [duplicate, duplicate, duplicateTwo, duplicateThree, duplicateFour, duplicateFive, duplicateSix];


socket.on("frogVisible", ()=> {
  duplicateSection()
})


socket.on("end_piece", () =>  {
 
})



// if ()
function duplicateSection() {
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
  if (e.key == "ArrowUp") {
    socket.emit("main_display", true);
    setTimeout(() => {
      socket.emit("make_show_button", true);
    }, 1000)
    // console.log("you are the main")
    // socket.emit("make_hide_button", true);
    mainButton.style.visibility = "hidden"
    frogRoomLimit = 20; //THIS SETS THE NUMBER OF FROGS!!! 
  } else if (e.key == "h") {
    socket.emit("make_show_button", true);
    
  } else if (e.key == "P") {
    socket.emit("make_hide_button", true)

  } else if (e.key == "R") {
    socket.emit("restart_piece", true);
  } else if (e.key == "Q") {
     oneBigFrog()

  } else if (e.key == "e") {
    
    socket.emit("fade_to_black", true);
    endPiece()
     //make a variable for this 
  } else if (e.key == "c") {
    // console.log(":P")
    changeSound();
    socket.emit("change_sound", () => {

    })
  }
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

// setTimeout(oneBigFrog, 50000)




let roomNumber = 0;

socket.on("room", (roomNum) => {
  roomNumber = roomNum
  console.log("Your room number is " + roomNum)
})

