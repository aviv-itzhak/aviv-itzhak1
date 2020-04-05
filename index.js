var array=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var r_array_1=Math.floor(Math.random()*array.length);
document.querySelector(".img1").setAttribute("src",array[r_array_1]);
var r_array_2=Math.floor(Math.random()*array.length);
document.querySelector(".img2").setAttribute("src",array[r_array_2]);

if (r_array_1 > r_array_2){
document.querySelector("h1").textContent="Player 1 WINS!"
}
else if (r_array_1 === r_array_2) {
  document.querySelector("h1").textContent="Drew!"
  }
  else{document.querySelector("h1").textContent="Player 2 WINS!"}
