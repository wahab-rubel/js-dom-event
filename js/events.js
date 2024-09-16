// options 1: default
// <button onclick="console.log(65);">Click me</button>


//  options 2: add onclick function 

function makeRed() {
  document.body.style.backgroundColor = 'red';
}

/// options 3: add onclick function
//  <button onclick="makeRed()">Make Red</button>

const makeBlueButton = document.getElementById('make-blue');
    makeBlueButton.onclick = makeBlue;

    function makeBlue(){
      document.body.style.backgroundColor = 'blue';
    }

    // options 4: add onclick function [ we will use this sometimes ]
    const purpleButton = document.getElementById('make-purple');
    purpleButton.onclick = 
    function makePurple(){
      document.body.style.backgroundColor = 'purple'

      // options 5: add onclick function
      const pinkButton = document.getElementById('make-pink');
    pinkButton.addEventListener('click', makePink)
    function makePink(){
      document.body.style.backgroundColor = 'pink'
    }
    }

    // options 6: add onclick function
    const makeGreenButton = document.getElementById("make-green");
    makeGreenButton.addEventListener('click', function makeGreen() {
      document.body.style.backgroundColor = 'green';
    })

    // options 7: add onclick function
    document.getElementById('make-goldenrod').addEventListener('click', function(){
      document.body.style.backgroundColor = 'goldenrod';
    }) 