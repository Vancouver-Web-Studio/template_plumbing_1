(() => {
  function initialize_slideshow(slideshow_root) {
    let slides = slideshow_root.getElementsByClassName("slideshow-slide");
    slides[0].style.display = "block";
  }

  function advance_slide(slideshow_root) {
    let slides = slideshow_root.getElementsByClassName("slideshow-slide");

    for (let i = 0; i < slides.length; i++) {
      if (slides[i].style.display !== "none") {
        slides[i].style.display = "none";
        slides[i].classList.remove("fade");
        slides[(i + 1) % slides.length].classList.add("fade");
        slides[(i + 1) % slides.length].style.display = "block";
        break;
      }
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    let slideshows = document.getElementsByClassName("slideshow");

    for (let show of slideshows) {
      initialize_slideshow(show);

      window.setInterval(() => advance_slide(show), 6000);
    }
  });
})();
