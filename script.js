//your code here

 const btn = document.querySelector("#btn");
  const guess = document.querySelector("#gues");
  const result = document.querySelector("#respond");

  let randomNum =  Math.floor(Math.random() * 41) - 20;
// generates random number between 0 and 100

  btn.addEventListener("click", function() {
    let userGuess = parseInt(guess.value);

    if (Math.abs(userGuess - randomNum) <= 10) {
      result.textContent = "Hot";
    } else {
      result.textContent = "Cold";
    }
  });