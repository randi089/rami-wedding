simplyCountdown(".simply-countdown-circle", {
  year: 2025, // Target year (required)
  month: 2, // Target month [1-12] (required)
  day: 3, // Target day [1-31] (required)
  hours: 8, // Target hour [0-23], default: 0
  words: {
    // Custom labels, with lambda for plurals
    days: { root: "hari", lambda: (root, n) => (n > 1 ? root + "" : root) },
    hours: { root: "jam", lambda: (root, n) => (n > 1 ? root + "" : root) },
    minutes: {
      root: "menit",
      lambda: (root, n) => (n > 1 ? root + "" : root),
    },
    seconds: {
      root: "detik",
      lambda: (root, n) => (n > 1 ? root + "" : root),
    },
  },
});

const hamburger = document.querySelector(".navbar-toggler");
const stickyTop = document.querySelector(".sticky-top");

hamburger.addEventListener("click", function () {
  stickyTop.style.overflow = "visible";
});

const offcanvas = document.querySelector(".offcanvas");

offcanvas.addEventListener("hidden.bs.offcanvas", function () {
  stickyTop.style.overflow = "hidden";
});
