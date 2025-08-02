const btn = document.getElementById("share-button");
const popup = document.getElementById("share-popup");
const mobile = document.querySelector(".share-container.mobile-hidden");

btn.addEventListener("click", (e) => {
  e.stopPropagation();
  popup.classList.toggle("hidden");
  btn.classList.toggle("active");
});

// Fecha o popup quando clicar fora dele
document.addEventListener("click", (e) => {
  if (!popup.contains(e.target) && !btn.contains(e.target)) {
    popup.classList.add("hidden");
    btn.classList.remove("active");
  }
});

// Fecha o popup quando pressionar a tecla Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !popup.classList.contains("hidden")) {
    popup.classList.add("hidden");
    btn.classList.remove("active");
  }
});

function mobilePopup() {
  if (window.innerWidth <= 768) {
    popup.classList.add("hidden");
    btn.classList.remove("active");
  }
}
window.addEventListener("resize", mobilePopup);
mobilePopup();

mobile.addEventListener("click", (e) => {
  e.stopPropagation();
  popup.classList.toggle("hidden");
  btn.classList.toggle("active");
});
