// alert("Have a go, mate!");

function randomDicee(doggyDoo) {
  let randomNumber = (Math.random() * 6) + 1;
  var finalResult = Math.floor(randomNumber);
  console.log(finalResult);
  let fileName = "images/dice" + finalResult + ".png"
  console.log(fileName);
  document.querySelector(doggyDoo).setAttribute("src", fileName);
  return finalResult;
}