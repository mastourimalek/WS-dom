var favs = Array.from(document.querySelectorAll(".fa-heart"));
var cards = Array.from(document.querySelectorAll(".card"));
var deleteBnts = Array.from(document.querySelectorAll(".supprimer"));
var plusBnts = Array.from(document.querySelectorAll(".fa-plus"));
var minusBnts = Array.from(document.querySelectorAll(".fa-minus"));

// read heart
for (let fas of favs) {
  fas.addEventListener("click", function () {
    if (fas.style.color == "black") {
      fas.style.color = "red";
    } else {
      fas.style.color = "black";
    }
  });
}

//remove
for (let i in deleteBnts) {
  deleteBnts[i].addEventListener("click", function () {
    cards[i].remove();
    Total();
  });
}

// Add Button
for (let plus of plusBnts) {
  plus.addEventListener("click", function () {
    plus.nextElementSibling.innerHTML++;
    Total();
  });
}

//Minus Button
for (let minus of minusBnts) {
  minus.addEventListener("click", function () {
    minus.previousElementSibling.innerHTML > 0
      ? minus.previousElementSibling.innerHTML--
      : null;
    Total();
  });
}

//Total price
function Total() {
  let qte = Array.from(document.querySelectorAll(".qute"));
  let price = Array.from(document.querySelectorAll(".unit-price"));
  let s = 0;
  for (i = 0; i < price.length; i++) {
    s = s + price[i].innerHTML * qte[i].innerHTML;
  }
  document.getElementById("total-price").innerHTML = s;
}
