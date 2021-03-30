const Btn = document.querySelector(".submitBtn");
const input = document.querySelector(".numberInput");
const text = document.querySelector(".para");
const caption = document.querySelector(".captions");
///////////////////////////////

Btn.addEventListener("click", check);

/////////////////////////

var randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);
function check() {
  event.preventDefault();
  if (input.value == randomNumber) {
    text.innerHTML = " You Win!!! 😎😍";
    Btn.innerHTML = "Play Again";
    caption.remove();
  } else if (input.value > randomNumber) {
    text.innerHTML = "OOPS SORRY!! TRY A SMALLER NUMBER 😟😟";
    caption.remove();
  } else if (input.value < randomNumber) {
    text.innerHTML = "OOPS SORRY!! TRY A GREATER NUMBER  ☹😥";
    caption.remove();
  } else {
    text.innerHTML = "Alert , Put the number only";
  }
}
