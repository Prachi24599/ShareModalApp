const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//Open Modal Funcation
const openModal = () => {
  console.log("Modal is open");
  modal.classList.add("active");
  overlay.classList.add("overlayactive");
};

//Close Modal Funcation
const closeModal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
};
