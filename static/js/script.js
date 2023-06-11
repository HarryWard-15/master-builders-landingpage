const spanCycle = document.getElementById('spanCycle');
const blinker = document.getElementById('blinker');
const loadMore = document.getElementById('loadMore');
const hiddenBenefits = document.getElementById('hiddenBenefits');

const cycleValues = ["Builders.","Apprentices.","Subbies.","Sparkies.","Chippies.","Managers.","Draftsmen.","Painters.","Welders.","Brickies."];

setInterval(function() {
  if (blinker.style.display === "none") {
    blinker.style.display = "inline";
  }
  else blinker.style.display = "none";
},650);



function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function displayWord() {
  let wordString = "";
  let cycleCounter = 8;
  let indexCounter = 0;
  setInterval(() => {
    spanCycle.innerHTML = wordString;
  },100);

  function removeWord() {
    if (wordString == "") {
      if (cycleCounter >= 9 ) {
        cycleCounter = 0;
      } else cycleCounter++;
      indexCounter = 0;
      setTimeout(typeWord(), 250);
    } else {
      wordString = wordString.substring(0,wordString.length-1);
      setTimeout(removeWord,100);
    }
  }

  function typeWord () {
    if (indexCounter < cycleValues[cycleCounter].length) {
    wordString += cycleValues[cycleCounter][indexCounter];
    indexCounter++;
    setTimeout(typeWord,100);
    } else setTimeout(removeWord,1500);
  }
  typeWord();
}

function loadMoreBenefits() {
  if (hiddenBenefits.style.display == 'none') {
    hiddenBenefits.style.display = 'inline-block';
    loadMore.innerHTML = "Hide More Benefits";
  } else {
    hiddenBenefits.style.display = 'none';
    loadMore.innerHTML = "Load More Benefits";
  }
}

loadMore.addEventListener('click', loadMoreBenefits);
displayWord()

