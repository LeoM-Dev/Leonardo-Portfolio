const proyectos = document.querySelectorAll(".proyecto");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeModal = document.querySelector(".close");

proyectos.forEach((proyecto) => {
proyecto.addEventListener("click", () => {
    const imgSrc = proyecto.querySelector("img").src;
    const title = proyecto.querySelector("h4").textContent;
    const description = proyecto
    .querySelector("img")
    .getAttribute("data-description");

    modalImg.src = imgSrc;
    modalTitle.textContent = title;
    modalDescription.textContent = description;

    modal.style.display = "block";
});
});

closeModal.addEventListener("click", () => {
modal.style.display = "none";
});

window.addEventListener("click", (event) => {
if (event.target === modal) {
    modal.style.display = "none";
}
});
