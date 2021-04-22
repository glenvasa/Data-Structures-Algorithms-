let emojis = document.getElementById("emojis");

function toggleVisibility() {
  if(emojis.style.display = "none"){
      emojis.style.display = "flex"
  }

  if(emojis.style.display = "flex"){
    emojis.style.display = 'none'
  }
    console.log(emojis.style.display);
}

let button = document.querySelector('.show-hide')

button.addEventListener('click', toggleVisibility)