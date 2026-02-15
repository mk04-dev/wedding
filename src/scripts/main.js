// Import libraries
import AOS from 'aos';
import 'aos/dist/aos.css';
import FlipDown from 'flipdown';
import 'flipdown/dist/flipdown.css';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet default marker icons path issue with Parcel
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    iconRetinaUrl: iconRetina,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

// ===================================
// INITIALIZATION
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    initAOS();
    initCountdown();
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
        easing: 'ease-in-out'
    });
}

// ===================================
// COUNTDOWN TIMER
// ===================================

function initCountdown() {
    // Wedding date: March 9, 2026 at 16:05 (4:05 PM)
    const weddingDate = new Date('2026-03-09T16:05:00').getTime() / 1000;
    
    // Initialize FlipDown
    const flipdown = new FlipDown(weddingDate, {
        theme: 'light',
        headings: ['Ngày', 'Giờ', 'Phút', 'Giây']
    });
    
    flipdown.start();
    
    // Custom styling for FlipDown
    const style = document.createElement('style');
    style.textContent = `
        .flipdown {
            margin: 2rem auto;
        }
        .flipdown .rotor-group-heading:before {
            color: #FFB6C1 !important;
        }
        .flipdown .rotor-group {
            padding: 0 0.5rem;
        }
        .flipdown .rotor {
            background-color: #FFB6C1;
            border-radius: 8px;
        }
        .flipdown .rotor-leaf-front,
        .flipdown .rotor-leaf-rear {
            color: #FFF;
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
        }
    `;
    document.head.appendChild(style);
}

// ===================================
// PHOTO GALLERY
// ===================================

function initGallery() {
    const lightbox = GLightbox({
        touchNavigation: true,
        loop: true,
        autoplayVideos: false,
        closeButton: true,
        skin: 'clean',
        cssEfects: {
            fade: { in: true, out: true },
            zoom: { in: true, out: true }
        }
    });
}

// ===================================
// SMOOTH SCROLL
// ===================================

function initSmoothScroll() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===================================
// SCROLL INDICATOR
// ===================================

const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        document.querySelector('#boarding-pass').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// ===================================
// PARALLAX EFFECT FOR HERO
// ===================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-section');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});
