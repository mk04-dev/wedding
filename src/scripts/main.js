// Import libraries
import AOS from "aos";
import "aos/dist/aos.css";
// FlipDown will be loaded via CDN in HTML
// import FlipDownConstructor from 'flipdown';
import "flipdown/dist/flipdown.css";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import Swiper from "swiper/swiper-bundle.mjs";
import "swiper/swiper-bundle.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet default marker icons path issue with Parcel
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  iconRetinaUrl: iconRetina,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

// ===================================
// INITIALIZATION
// ===================================

document.addEventListener("DOMContentLoaded", function () {
  const search = new URLSearchParams(window.location.search);
  const type =
    search.get("type") ?? window.sessionStorage.getItem("showBridePass");

  if (type === "groom") {
    window.sessionStorage.setItem("type", "bride");
    const bridePass = document.getElementById("boarding-pass-bride");
    if (bridePass) {
      bridePass.style.display = "block";
    }
  } else {
    window.sessionStorage.setItem("type", "groom");
    const groomPass = document.getElementById("boarding-pass-groom");
    if (groomPass) {
      groomPass.style.display = "block";
    }
  }

  initAOS();
  initCountdown(type === "groom");
  initGallery();
  initSmoothScroll();
});

// ===================================
// AOS (Animate On Scroll)
// ===================================

function initAOS() {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: "ease-in-out",
  });
}

// ===================================
// COUNTDOWN TIMER
// ===================================

function initCountdown(isGroom) {
  // Check if flipdown element exists
  const flipdownElement = document.getElementById("flipdown");
  if (!flipdownElement) {
    console.warn("Flipdown element not found");
    return;
  }

  // Wedding date: March 9, 2026 at 16:05 (4:05 PM)
  const weddingDate =
    new Date(
      isGroom ? "2026-03-21T11:00:00" : "2026-03-09T16:05:00",
    ).getTime() / 1000;

  // Initialize FlipDown (loaded from CDN)
  try {
    // Check if FlipDown is available from CDN
    if (typeof FlipDown === "undefined") {
      console.error(
        "FlipDown library not loaded. Please check CDN script tag.",
      );
      return;
    }

    const flipdown = new FlipDown(weddingDate, "flipdown", {
      theme: "light",
      headings: ["Ngày", "Giờ", "Phút", "Giây"],
    });

    flipdown.start();
  } catch (error) {
    console.error("FlipDown initialization error:", error);
  }
}

// ===================================
// PHOTO GALLERY
// ===================================

function initGallery() {
  // Check if gallery carousel exists
  const galleryElement = document.querySelector(".gallery-carousel");
  if (!galleryElement) {
    console.warn("Gallery carousel element not found");
    return;
  }

  // Initialize Swiper Carousel (Ant Design style)
  const swiper = new Swiper(".gallery-carousel", {
    slidesPerView: window.innerWidth < 768 ? 1 : 3, // Adjusted for better responsiveness
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    speed: 600,
    effect: "slide",
    navigation: {
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: false,
    },
    // Prevent Swiper from blocking clicks on lightbox links
    preventClicks: false,
    preventClicksPropagation: false,
    slideToClickedSlide: false,
  });

  console.log("Swiper initialized:", swiper);

  // Initialize GLightbox for popup view with proper configuration
  const lightbox = GLightbox({
    selector: ".glightbox",
    touchNavigation: true,
    loop: true,
    autoplayVideos: false,
    closeButton: true,
    skin: "clean",
    openEffect: "fade",
    closeEffect: "fade",
    slideEffect: "slide",
    moreLength: 0,
  });
}

// ===================================
// SMOOTH SCROLL
// ===================================

function initSmoothScroll() {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// ===================================
// SCROLL INDICATOR
// ===================================

const scrollIndicator = document.querySelector(".scroll-indicator");
if (scrollIndicator) {
  scrollIndicator.addEventListener("click", () => {
    document.querySelector("#boarding-pass").scrollIntoView({
      behavior: "smooth",
    });
  });
}

// ===================================
// PARALLAX EFFECT FOR HERO
// ===================================

window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero-section");
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});
