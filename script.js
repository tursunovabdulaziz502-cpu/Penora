var burger = document.getElementById("burger");
var menu = document.getElementById("menu");
var cartCount = document.getElementById("cartCount");
var count = 0;

burger.addEventListener("click", function () {
  menu.classList.toggle("show");
});

document.querySelectorAll(".menu a").forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("show");
  });
});

document.querySelectorAll(".add-btn").forEach(function (button) {
  var defaultHtml = button.innerHTML;
  var timer;

  button.addEventListener("click", function () {
    count = count + 1;
    cartCount.textContent = count;

    button.innerHTML = '<i class="fa-solid fa-check"></i> Added';
    button.classList.add("added");

    clearTimeout(timer);
    timer = setTimeout(function () {
      button.innerHTML = defaultHtml;
      button.classList.remove("added");
    }, 1500);
  });
});
