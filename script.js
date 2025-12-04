const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close-modal");

// OPEN MODAL
openBtn.addEventListener("click", () => {
  modal.style.display = "block";    // Cypress expects "block"
});

// CLOSE WITH X BUTTON
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// CLOSE WHEN CLICKING OUTSIDE modal-content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
