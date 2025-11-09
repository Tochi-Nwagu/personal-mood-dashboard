'use strict';
const nameInput = document.getElementById('nameInput');
const greetings = document.getElementById('greetings');
const btnSubmit = document.getElementById('btnSubmit');
const moodBox = document.getElementById('moodBox');
const btnGrow = document.getElementById('btnGrow');
const btnShrink = document.getElementById('btnShrink');
const toggleModeBtn = document.getElementById('toggleBtn');
const showSecretBtn = document.getElementById('showSecretBtn');
const secretMessage = document.getElementById('secret');
//enter name and displkay greeting
btnSubmit.addEventListener('click', () => {
  const name = nameInput.value.trim();

  //Display greetings
  greetings.style.display = 'block';

  if (name) {
    greetings.innerText = `Hello, ${name}!`;
    greetings.style.color = 'green';
    greetings.style.fontWeight = 'bold';
    greetings.style.fontSize = '32px';
  } else {
    greetings.innerText = 'Hello, friend!';
    greetings.style.color = '#333';
    greetings.style.fontWeight = 'normal';
    greetings.style.fontSize = '18px';
  }

  //Clear input field
  nameInput.value = '';
});

//mood box
let boxSize = 150;

//growbox on button click
btnGrow.addEventListener('click', () => {
  boxSize += 20;
  moodBox.style.width = boxSize + 'px';
  moodBox.style.height = boxSize + 'px';
  //.style.margin = '20px auto';
});

//shrink box
btnShrink.addEventListener('click', () => {
  if (boxSize >= 100) {
    boxSize -= 20;
    moodBox.style.width = boxSize + 'px';
    moodBox.style.height = boxSize + 'px';
    moodBox.style.backgroundColor = '#246384df';
  }
});
//toggle dark and light mode
let isdarkMode = false;

toggleModeBtn.addEventListener('click', () => {
  isdarkMode = !isdarkMode;

  if (isdarkMode) {
    document.body.style.backgroundColor = '#00008b'; //dark blue
    btnGrow.style.backgroundColor = '#01b2f3ff'; //light blue
    btnShrink.style.backgroundColor = '#01b2f3ff'; //light blue
    btnSubmit.style.backgroundColor = '#01b2f3ff'; //light blue
    moodBox.style.backgroundColor = '#db6868ff'; //light red
    toggleModeBtn.style.backgroundColor = '#01b2f3ff'; //light blue
    showSecretBtn.style.backgroundColor = '#01b2f3ff'; //light blue
    document.body.style.color = '#fff';
  } else {
    document.body.style.backgroundColor = '#ffffff'; //white
    btnGrow.style.backgroundColor = '#dad6d6';
    btnShrink.style.backgroundColor = '#dad6d6';
    btnSubmit.style.backgroundColor = '#dad6d6';
    moodBox.style.backgroundColor = '#db6868ff'; //light red
    toggleModeBtn.style.backgroundColor = '#dad6d6';
    showSecretBtn.style.backgroundColor = '#dad6d6';
    document.body.style.color = '#000';
  }
});
//Show secret mmessage
// showSecretBtn.addEventListener('click', () => {
//   alert('Javascript is awesome!');
//   secretMessage.style.display = 'block';
// });

let secretVisible = false;

showSecretBtn.addEventListener('click', () => {
  secretVisible = !secretVisible; // toggle value
  secret.style.display = secretVisible ? 'block' : 'none';
  showSecretBtn.innerText = secretVisible ? 'Hide Secret' : 'Show Secret';
});

/**
 *The Difference Between
innerHTML, and innerText 
1. The innerHTML property returns:
The text content of the element, including all spacing and inner HTML tags.
2. The innerText property returns:
Just the text content of the element and all its children, without CSS hidden text spacing and tags, except <script> and <style> elements.
 */
