// Animate smooth scroll

$("#home-btn").on("click", function () {
  const home = $("#welcome-section").position().top;

  $("html, body").animate(
    {
      scrollTop: home
    },
    900
  );
});
$("#projects-btn").on("click", function () {
  const projects = $("#projects").position().top;

  $("html, body").animate(
    {
      scrollTop: projects
    },
    900
  );
});
$("#contact-btn").on("click", function () {
  const contact = $("#contact").position().top;

  $("html, body").animate(
    {
      scrollTop: contact
    },
    900
  );
});

//Modal Form
// Get modal elements
var modal = document.getElementById("simpleModal");
var modalBtn = document.getElementById("modalBtn");
var closeBtn = document.getElementById("closeBtn");

//Listen for click
modalBtn.addEventListener("click", openModal);

function openModal() {
  modal.style.display = "block";
}

//Listen for click to close
closeBtn.addEventListener("click", closeModal);

function closeModal(e) {

  e.preventDefault();
  modal.style.display = "none";
}

//Listen for outside click
window.addEventListener("click", clickOutside);

function clickOutside(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}


