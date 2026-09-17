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
        file: "whernside-3.jpg",
        alt: "Whernside",
        caption: "Whernside, 2024",
    },
    {
        file: "whernside-2.jpg",
        alt: "Whernside",
        caption: "Whernside, 2024",
    },
    {
        file: "whernside.jpg",
        alt: "Whernside",
        caption: "Whernside, 2024",
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

const selectedWork = [
    {
        label: "Research",
        title: "NOCI-QMC",
        description:
            "Stochastic approaches to correlation in nonorthogonal determinant spaces.",
        href: "/research/#noci-qmc",
        image: "/figures/NOCIQMC.svg",
        alt: "NOCI-QMC schematic",
        ariaLabel: "NOCI-QMC research",
        logo: false,
    },
    {
        label: "Research",
        title: "NOCI-PT2",
        description:
            "Second-order perturbation theory applied to nonorthogonal configuration interaction.",
        href: "/research/#noci-pt2",
        image: "/figures/NOCIPT2.svg",
        alt: "NOCI-PT2 schematic",
        ariaLabel: "NOCI-PT2 research",
        logo: false,
    },
    {
        label: "Research",
        title: "Finite-size correction",
        description:
            "Finite-size corrections for periodic stochastic electronic-structure calculations.",
        href: "/research/#finite-size-correction",
        image: "/figures/SGCorrection.svg",
        alt: "Transition structure factor finite-size correction schematic",
        ariaLabel: "Finite-size correction research",
        logo: false,
    },
    {
        label: "Software",
        title: "noci-rs",
        description:
            "High-performance software for nonorthogonal electronic-structure calculations, written in Rust.",
        href: "/research/#noci-rs",
        image: "/figures/noci-rs-logo.png",
        alt: "noci-rs logo",
        ariaLabel: "noci-rs software",
        logo: true,
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

function setHomepageWorkItem(element, work) {
    const label = element.querySelector("[data-home-work-label]");
    const title = element.querySelector("[data-home-work-title]");
    const description = element.querySelector(
        "[data-home-work-description]",
    );
    const figure = element.querySelector("[data-home-work-figure]");
    const image = element.querySelector("[data-home-work-image]");

    if (
        label === null ||
        title === null ||
        description === null ||
        figure === null ||
        image === null
    ) {
        return;
    }

    label.textContent = work.label;

    title.textContent = work.title;
    title.href = work.href;

    description.textContent = work.description;

    figure.href = work.href;
    figure.setAttribute("aria-label", work.ariaLabel);
    figure.classList.toggle(
        "home-work-figure--logo",
        work.logo,
    );

    image.src = work.image;
    image.alt = work.alt;
}

function randomizeHomepageWork() {
    const workItems = document.querySelectorAll("[data-home-work]");

    if (workItems.length === 0) {
        return;
    }

    const selectedItems = shuffle(selectedWork).slice(
        0,
        workItems.length,
    );

    for (let index = 0; index < workItems.length; index += 1) {
        setHomepageWorkItem(
            workItems[index],
            selectedItems[index],
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
randomizeHomepageWork();
setupLightbox();
