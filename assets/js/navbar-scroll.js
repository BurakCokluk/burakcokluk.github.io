/**
 * Scroll Direction-based Navbar Hide/Show
 * Hides navbar on scroll down, shows on scroll up for modern UX
 */

(function() {
  let lastScrollTop = 0;
  let scrollThreshold = 5; // Minimum scroll distance to trigger
  let navbar = null;
  let isScrolling = null;

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', function() {
    navbar = document.getElementById('navbar');
    if (!navbar) return;

    let ticking = false;

    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    });
  });

  function handleScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Ignore small scroll movements (reduce jitter)
    if (Math.abs(currentScroll - lastScrollTop) < scrollThreshold) {
      return;
    }

    // At top of page - always show navbar
    if (currentScroll <= 100) {
      navbar.classList.remove('navbar-hidden');
      navbar.classList.add('navbar-visible');
      lastScrollTop = currentScroll;
      return;
    }

    // Scrolling down - hide navbar
    if (currentScroll > lastScrollTop && currentScroll > 150) {
      navbar.classList.add('navbar-hidden');
      navbar.classList.remove('navbar-visible');
    } 
    // Scrolling up - show navbar
    else if (currentScroll < lastScrollTop) {
      navbar.classList.remove('navbar-hidden');
      navbar.classList.add('navbar-visible');
      navbar.classList.add('navbar-scrolled');
    }

    lastScrollTop = currentScroll;
  }
})();
