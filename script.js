const photos = [
    {
        file: "perranporth-2.jpg",
        alt: "Perranporth",
        caption: "Perranporth, 2026",
    },
    {
        file: "perranporth.jpg",
        alt: "Perranporth",
        caption: "Perranporth, 2026",
    },
    {
        file: "peak-district.jpg",
        alt: "River Derwent Valley Trail",
        caption: "River Derwent Valley Trail, 2026",
    },
    {
        file: "shepreth-2.jpg",
        alt: "Shepreth Wildlife Park",
        caption: "Shepreth Wildlife Park, 2026",
    },
    {
        file: "shepreth.jpg",
        alt: "Shepreth Wildlife Park",
        caption: "Shepreth Wildlife Park, 2026",
    },
    {
        file: "apple-picking.jpg",
        alt: "Cambridgeshire",
        caption: "Cambridgeshire, 2025",
    },
    {
        file: "jesus.jpg",
        alt: "Jesus College, Cambridge",
        caption: "Jesus College, Cambridge, 2024",
    },
    {
        file: "gairlochy.jpg",
        alt: "Gairlochy",
        caption: "Gairlochy, 2024",
    },
    {
        file: "amsterdam.jpg",
        alt: "Amsterdam",
        caption: "Amsterdam, 2024",
    },
    {
        file: "prague.jpg",
        alt: "Prague",
        caption: "Prague, 2024",
    },
    {
        file: "prague-3.jpg",
        alt: "Prague",
        caption: "Prague, 2024",
    },
    {
        file: "prague-4.jpg",
        alt: "Prague",
        caption: "Prague, 2024",
    },
    {
        file: "prague-5.jpg",
        alt: "Prague",
        caption: "Prague, 2024",
    },
    {
        file: "ingleborough-3.jpg",
        alt: "Ingleborough",
        caption: "Ingleborough, 2024",
    },
    {
        file: "ingleborough-2.jpg",
        alt: "Ingleborough",
        caption: "Ingleborough, 2024",
    },
    {
        file: "ingleborough.jpg",
        alt: "Ingleborough",
        caption: "Ingleborough, 2024",
    },
    {
        file: "the-deep.jpg",
        alt: "The Deep",
        caption: "Hull, 2024",
    },
    {
        file: "hyde-park.jpg",
        alt: "Hyde Park",
        caption: "London, 2024",
    },
    {
        file: "fuerteventura.jpg",
        alt: "Fuerteventura",
        caption: "Fuerteventura, 2022",
    },
    {
        file: "fuerteventura-3.jpg",
        alt: "Fuerteventura",
        caption: "Fuerteventura, 2022",
    },
    {
        file: "fuerteventura-2.jpg",
        alt: "Fuerteventura",
        caption: "Fuerteventura, 2022",
    },
    {
        file: "paris-2.jpg",
        alt: "Paris",
        caption: "Paris, 2022",
    },
    {
        file: "paris.jpg",
        alt: "Paris",
        caption: "Paris, 2022",
    },
];

function shuffle(items) {
    const shuffled = [...items];

    for (let index = shuffled.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));

        [shuffled[index], shuffled[randomIndex]] = [
            shuffled[randomIndex],
            shuffled[index],
        ];
    }

    return shuffled;
}

function setPreviewImage(image, photo) {
    image.src = `/photos/preview/${photo.file}`;
    image.alt = photo.alt;
}

function randomizeHomepagePhotos() {
    const heroImage = document.getElementById("home-hero-image");
    const heroCaption = document.getElementById("home-hero-caption");
    const selectedImages = document.querySelectorAll("[data-home-photo]");

    if (
        heroImage === null ||
        heroCaption === null ||
        selectedImages.length === 0
    ) {
        return;
    }

    const selectedPhotos = shuffle(photos).slice(
        0,
        selectedImages.length + 1,
    );

    const heroPhoto = selectedPhotos[0];

    setPreviewImage(heroImage, heroPhoto);
    heroCaption.textContent = heroPhoto.caption;

    for (let index = 0; index < selectedImages.length; index += 1) {
        setPreviewImage(
            selectedImages[index],
            selectedPhotos[index + 1],
        );
    }
}

function setupLightbox() {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const lightboxClose = document.getElementById("lightbox-close");

    if (
        lightbox === null ||
        lightboxImage === null ||
        lightboxCaption === null ||
        lightboxClose === null
    ) {
        return;
    }

    const galleryLinks = document.querySelectorAll(".gallery a");

    function openLightbox(link) {
        const image = link.querySelector("img");

        if (image === null) {
            return;
        }

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
        if (
            event.key === "Escape" &&
            lightbox.classList.contains("open")
        ) {
            closeLightbox();
        }
    });
}

randomizeHomepagePhotos();
setupLightbox();
