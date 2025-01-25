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

// Navbar Mobile
const hamburger = document.querySelector(".navbar-toggler");
const stickyTop = document.querySelector(".sticky-top");

hamburger.addEventListener("click", function () {
  stickyTop.style.overflow = "visible";
});

const offcanvas = document.querySelector(".offcanvas");

offcanvas.addEventListener("hidden.bs.offcanvas", function () {
  stickyTop.style.overflow = "hidden";
});

// Disable Scrolling
const rootElement = document.querySelector(":root");
const audioIconWrapper = document.querySelector(".audio-icon-wrapper");
const song = document.querySelector("#song");
const audioIcon = document.querySelector(".audio-icon-wrapper i");
let isPlaying = false;

function disableScroll() {
  scrollTop = document.documentElement.scrollTop;
  scrollLeft = document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollTop, scrollLeft);
  };

  rootElement.style.scrollBehavior = "auto";
}

function enableScroll() {
  window.onscroll = function () {};
  rootElement.style.scrollBehavior = "smooth";
  // localStorage.setItem("open", "true");
  playAudio();
}

function playAudio() {
  song.volume = 0.1;
  audioIconWrapper.style.display = "flex";
  song.play();
  isPlaying = true;
}

audioIconWrapper.addEventListener("click", function () {
  if (isPlaying) {
    song.pause();
    audioIcon.classList.remove("bi-disc");
    audioIcon.classList.add("bi-pause-circle");
  } else {
    song.play();
    audioIcon.classList.remove("bi-pause-circle");
    audioIcon.classList.add("bi-disc");
  }

  isPlaying = !isPlaying;
});

// if (!localStorage.getItem("open")) {
//   disableScroll();
// }

disableScroll();

// Submit Spreedshet
window.addEventListener("load", function () {
  const form = document.getElementById("my-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      alert("Konfirmasi Kehadiran berhasil terkirim!");
    });
  });
});

// const urlParams = new URLSearchParams(window.location.search);
// const nama = urlParams.get("n") || "";
// const pronoun = urlParams.get("p") || "Bapak/Ibu/Saudara/i";

// const namaContainer = document.querySelector(".hero h4 span");
// namaContainer.innerText = `${pronoun} ${nama},`.replace(/ ,$/, ",");

// document.querySelector("#nama").value = nama;
