async function startAudio() {  //This code starts the audio 
  await Tone.start()
  console.log("ready")
}

  
let panner = new Tone.Panner(0).toDestination(); //This is the panner, it sends ALL the audio to its output. 

let original = document.getElementById("originalFrog"); //This stores the element with the id original. At this point, it has the class of "frogStart", the onclick "duplicate" and the onmouseover "moveFrog"


let randNum1 = (Math.random() * 6) + 1 //creates random number

function moveFrog() {
    let randNum = (Math.random() * 10) + 5
    //console.log(randNum)
    let randNum2 = (Math.random() * 50) + 1
    let randNum3 = (Math.random() * 50) + 1
    original.style.setProperty('--frogWidth', (randNum) + "vw"); 
    original.style.setProperty('--frogTop', (randNum3) + "vh");
    original.style.setProperty('--frogLeft', randNum2 + "vw");
    original.style.setProperty('--animationTime', randNum1 + "s"); //Sets the variables for the frog movement (to the class "frogLook")
    let myFrog1 = new Tone.Player(frogAudio).connect(panner); //Creates a new tone player every time the function is run
    panner.pan.rampTo(getScaledValue(randNum2, 0, 100, -1, 1), (randNum1)) //Moves the panner around
    Tone.loaded().then(() => {
    myFrog1.start(); //plays the tone
    })

    if (original.classList.length == 1) {
      original.classList.add("frogLook")
       // original.addEventListener("transitionend", printTest)  //If the class is 1, frogLook will be added. This overrides the duplicate position

      //myFrog.classList.add("blank")
    } else if (original.classList.length == 2) {
      original.classList.remove("frogLook")
   //   original.addEventListener("transitionend", printTest1)
     // original.addEventListener("transitionend", printTest)

     
    } 
// function printTest() {
//   original.classList.add("moveNoTransition")
// }

//   function printTest1() {
//  // original.classList.remove("moveNoTransition")
// }
  
}




//one onhover = frogs anywhere/
//another onhover = frogs in a specific location

original.addEventListener("mouseover", moveFrog)
original.addEventListener("click", duplicate)

let frogAudio = new Tone.Buffer("https://tmnash4.github.io/frog/media/frog_8.wav");
let frogAudio1 = new Tone.Buffer("https://tmnash4.github.io/frog/media/frog_6.wav");
let frogAudio2 = new Tone.Buffer("https://tmnash4.github.io/frog/media/frog_5.mp3");
let frogAudio3 = new Tone.Buffer("https://tmnash4.github.io/frog/media/frog_4.mp3");
let frogAudio4 = new Tone.Buffer("https://tmnash4.github.io/frog/media/frog_3.mp3");
let frogAudio5 = new Tone.Buffer("https://tmnash4.github.io/frog/media/frog_1.mp3");
let frogAudio6 = new Tone.Buffer("https://tmnash4.github.io/frog/media/frogs_2.mp3");

let audioArray = [frogAudio, frogAudio1, frogAudio2, frogAudio3, frogAudio4, frogAudio5, frogAudio6]

function getScaledValue(value, sourceRangeMin, sourceRangeMax, targetRangeMin, targetRangeMax) {
    var targetRange = targetRangeMax - targetRangeMin;
    var sourceRange = sourceRangeMax - sourceRangeMin;
    return (value - sourceRangeMin) * targetRange / sourceRange + targetRangeMin;
}


function printPosition() {
//document.querySelector("p").innerHTML = frogArray
//myNewArray.push(getScaledValue(element.getBoundingClientRect().left + , 0, window.innerWidth, -1, 1))
  console.log(element.getBoundingClientRect().left, panner.pan.value)
}




let cloneArray = []
let i = 0;
function duplicate() {
  let clone = original.cloneNode(true); //make a clone
  let randomPos = Math.random() * 100
  let randomPos1 = Math.random() * 100
 // console.log("This is the random number" + randomPos, randomPos1) 
  let randomValue = Math.floor(Math.random() * 6) + 1; 
  let randomValue1 = Math.floor(Math.random() * 5) + 1;
  let randomValue2 = Math.floor(Math.random() * 5) + 1; 
  let randomValue3 = Math.floor(Math.random() * 8) + 3; //Check these random values 
    clone.id = "originalFrog" + ++i; //Give the clone a new id (adding 1 every time)
   clone.classList.remove("frogStart") 
   clone.classList.add("frogStart1") //Add a new class
    original.parentNode.appendChild(clone);
   //remove the original frog's class
   //console.log(clone.classList)
  clone.style.setProperty("--frogWidth", randomValue3 + "vw") 
 // clone.style.setProperty('--startTop', randomPos + "vh");
 // clone.style.setProperty('--startLeft', randomPos1 + "vw") 
  clone.style.setProperty("--frogLeft", randomPos1 + "vw");
  clone.style.setProperty("--frogTop", randomPos + "vh")
  //randomize starting position and size

  // cloneArray.push(clone); 
  // console.log(clone)
  let randAudio = Math.floor(Math.random() * 7) 
  clone.myFrog1 = new Tone.Player(audioArray[randAudio]).connect(panner); //choose random audio 
  clone.myFrog1.fadeIn = 0.5; 
  clone.myFrog1.fadeOut = 0.5; //put a fade on the audio to reduce clicks if it restarts 
  Tone.loaded().then(() => {
      clone.myFrog1.start(); //start the audio 

   })
  clone.onmouseover = function moveFrog1() {
      let randNum = (Math.random() * 10) + 5
      //console.log(randNum)
      let randNum2 = (Math.random() * 80) + 1
      let randNum3 = (Math.random() * 50) + 1
     // console.log(randNum3)
      clone.style.setProperty('--frogWidth', (randNum) + "em");
      clone.style.setProperty('--frogTop', (randNum3) + "vh");
      clone.style.setProperty('--frogLeft', randNum2 + "vw");
      clone.style.setProperty('--animationTime', randNum1 + "s");
        //let panning = new Tone.Panner().toDestination();
      // panner.pan.value = getScaledValue(randNum2, 0, 100, -1, 1)
        //let myFrog1 = new Tone.Player(audioArray[randAudio]).connect(panner);

        //setInterval(frogPanner, 2000)
        //console.log(setInterval(frogPanner, 2000))

      clone.myFrog1.start();
      panner.pan.rampTo(getScaledValue(randNum2, 0, 100, -1, 1), (randNum1))
     //    panner.pan.setValueCurveAtTime(myNewArray, myFrog1.currentTime, frogAudio.duration)
     // console.log(myNewArray)

     // setInterval(frog)
//       Tone.loaded().then(() => {
//       clone.myFrog1.start();
         clone.classList.add("frogLook")
//       })
      if (clone.classList.length == 2) {
         clone.classList.remove("frogLook")
      } else if (clone.classList.length == 1) {
        clone.classList.add("frogLook")
        
        
      }
  }
    // if (clone.classList.contains = "frog") {
    //   console.log("working!")
    // }
  
  if (clone.classList.contains("frogLook")) {
          console.log("it does!");
        } else {
            console.log("it does not ")
          }
  
  
  document.addEventListener("keydown", (e) => {
    let randAnTime = (Math.random() * 10) + 1
  if (e.key == "a") {
      clone.style.setProperty('--animationTime', randAnTime + "s");
      clone.classList.add("moveAgain")
    } else if (e.key == "s") {
      clone.classList.remove("moveAgain")
    } else if (e.key == "b") {
      clone.style.setProperty('--animationTime', randAnTime + "s");
      clone.classList.add("moveAgain1")
    } else if (e.key == "n") {
      clone.classList.remove("moveAgain1")
    }   
    clone.addEventListener('transitionend', () => {
      console.log("hello")
    });

  });
  
  
}




function spawnFrog() {
  for (i=0;i<200;i++) {
    duplicate()
  }
}


document.addEventListener("keydown", (e) => {
  if (e.key == "d") {
    duplicate()
  }
})