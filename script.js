const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxClose = document.getElementById("lightbox-close");

const galleryLinks = document.querySelectorAll(".gallery a");

function openLightbox(link) {
    const image = link.querySelector("img");

    lightboxImage.src = link.href;
    lightboxImage.alt = image.alt;

    lightboxCaption.textContent = link.dataset.caption ?? "";

    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");

    document.body.classList.add("lightbox-open");
}

function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");

    document.body.classList.remove("lightbox-open");

    lightboxImage.src = "";
}

for (const link of galleryLinks) {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        openLightbox(link);
    });
}

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("open")) {
        closeLightbox();
    }
});
