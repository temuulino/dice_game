var randomNumber1;

randomNumber1 = (Math.floor(Math.random() * 6)) + 1
randomNumber2 = (Math.floor(Math.random() * 6)) + 1


imageSource1 = "images/" + "dice" + randomNumber1 + ".png"
imageSource2 = "images/" + "dice" + randomNumber2 + ".png"

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Won";
} else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Won";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}

document.querySelectorAll("img")[0].setAttribute("src", imageSource1);
document.querySelectorAll("img")[1].setAttribute("src", imageSource2);
