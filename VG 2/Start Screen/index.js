// this for loop is to obtain all the tags that have .btn in their class
for (var i = 0; i < document.querySelectorAll(".btn").length; i++) {

    // go through all the options and "listen" for a click
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
  
      var buttonInnerHTML = this.innerHTML;
      // if there is a click then make the sound
      makeSound(buttonInnerHTML);
  
    });
  
  }

// function to make a new audio and play that audio
function makeSound(key) {

    var click = new Audio("click.mp3");
    click.play(); 
  
  }