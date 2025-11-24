/**
 * Particles.js Configuration - DevOps Node Cluster Theme
 * Minimal, professional network/cluster animation for hero section
 */

// Detect dark mode
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const particleColor = isDarkMode ? '#60A5FA' : '#2563EB'; // Lighter blue for dark mode
const particleOpacity = isDarkMode ? 0.5 : 0.4;

// Responsive particle count - reduce on mobile for performance
const isMobile = window.innerWidth < 768;
const particleCount = isMobile ? 50 : 80;
const particleSpeed = isMobile ? 1.5 : 2;

particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": particleCount,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": particleColor
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 6
      }
    },
    "opacity": {
      "value": particleOpacity,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": particleColor,
      "opacity": 0.25,
      "width": 1.5
    },
    "move": {
      "enable": true,
      "speed": particleSpeed,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});
