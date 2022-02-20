let heart = document.getElementsByClassName("heart");
let remove = document.getElementsByClassName("remove");
let itemDiv = document.getElementsByClassName("item-div");
let reduce = document.getElementsByClassName("fa-chevron-circle-left");
let increase = document.getElementsByClassName("fa-chevron-circle-right");
let count = document.getElementsByClassName("count");
let price = document.getElementsByClassName("price-span");
let total = document.getElementsByClassName("total-span");
let grandTotal = document.querySelector(".cart-total");

for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", () => {
    heart[i].classList.toggle("clicked-heart");
  });
}

for (let i = 0; i < remove.length; i++) {
  remove[i].addEventListener("click", () => {
    itemDiv[i + 1].classList.add("removed");
  });
}

for (let i = 0; i < reduce.length; i++) {
  reduce[i].addEventListener("click", () => {
    if (count[i].innerHTML == 0) {
      itemDiv[i + 1].classList.add("removed");
    } else {
      count[i].innerHTML--;
      total[i].innerHTML = +count[i].innerHTML * +price[i].innerHTML;
      grandTotal.innerHTML = +grandTotal.innerHTML - +price[i].innerHTML;
    }
  });
}

for (let i = 0; i < increase.length; i++) {
  increase[i].addEventListener("click", () => {
    console.log(count[i]);
    count[i].innerHTML++;
    total[i].innerHTML = +count[i].innerHTML * +price[i].innerHTML;
    grandTotal.innerHTML = +grandTotal.innerHTML + +price[i].innerHTML;
  });
}
