//your code here

 const btn = document.querySelector("#btn");
  const guess = document.querySelector("#guess");
  const result = document.querySelector("#respond");

  let randomNum =  Math.floor(Math.random() * 41) - 20;
 

  btn.addEventListener("click", function() {
    let userGuess = parseInt(guess.value);
	  if(isNaN(userGuess)){
		  userGuess=-20;
	  }
  
    if (Math.abs(userGuess - randomNum) <= 10) {
      result.textContent = "Hot";
    } else {
      result.textContent = "Cold";
    }
  });