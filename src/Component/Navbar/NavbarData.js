export function setupNavbar() {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (!hamburger || !navLinks) return;

  const toggleMenu = () => {
    const isOpen = navLinks.classList.toggle("open");

    hamburger.classList.toggle("active", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen);
  };

  const closeMenu = () => {
    navLinks.classList.remove("open");
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  };

  hamburger.addEventListener("click", toggleMenu);

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  const handleResize = () => {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  };

  window.addEventListener("resize", handleResize);

  return () => {
    hamburger.removeEventListener("click", toggleMenu);
    window.removeEventListener("resize", handleResize);

    navLinks.querySelectorAll("a").forEach((link) => {
      link.removeEventListener("click", closeMenu);
    });
  };
}