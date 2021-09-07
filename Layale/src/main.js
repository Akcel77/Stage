const card = document.getElementById(".card__inner");

card.addEventListener("click", function (e) {
  console.log("Test");
  card.classList.toggle('is-flipped');
});


