const btn = document.getElementById("share-button");
const mobileBtn = document.getElementById("share-button-mobile");
const desktopPopup = document.getElementById("desktop");
const mobilePopup = document.getElementById("mobile");

// Detecta se é mobile
function isMobile() {
  return window.innerWidth <= 768;
}

// Fecha todos os popups
function closeAllPopups() {
  if (desktopPopup) {
    desktopPopup.classList.add("hidden");
  }
  if (mobilePopup) {
    mobilePopup.classList.add("hidden");
  }
  if (btn) {
    btn.classList.remove("active");
  }
  if (mobileBtn) {
    mobileBtn.classList.remove("active");
  }
}

// Alterna popup
function togglePopup(button) {
  const isActive = button.classList.contains("active");

  if (isActive) {
    closeAllPopups();
  } else {
    closeAllPopups(); // Fecha os outros antes
    if (isMobile()) {
      if (mobilePopup) {
        mobilePopup.classList.remove("hidden");
      }
    } else {
      if (desktopPopup) {
        desktopPopup.classList.remove("hidden");
      }
    }
    button.classList.add("active");
  }
}

// Event listeners para ambos os botões
[btn, mobileBtn].forEach((button) => {
  if (button) {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      togglePopup(button);
    });
  }
});

// Fecha ao clicar fora
document.addEventListener("click", (e) => {
  const clickedInsidePopup =
    (desktopPopup && desktopPopup.contains(e.target)) ||
    (mobilePopup && mobilePopup.contains(e.target));

  if (
    !clickedInsidePopup &&
    !btn.contains(e.target) &&
    (!mobileBtn || !mobileBtn.contains(e.target))
  ) {
    closeAllPopups();
  }
});

// Fecha com Escape
document.addEventListener("keydown", (e) => {
  if (
    e.key === "Escape" &&
    ((btn && btn.classList.contains("active")) ||
      (mobileBtn && mobileBtn.classList.contains("active")))
  ) {
    closeAllPopups();
  }
});

// Fecha no resize
window.addEventListener("resize", () => {
  if (
    (btn && btn.classList.contains("active")) ||
    (mobileBtn && mobileBtn.classList.contains("active"))
  ) {
    closeAllPopups();
  }
});
