document.addEventListener("DOMContentLoaded", e => {
  let bigImage = document.querySelector(".main-image img.big-image");
  if (bigImage) {
    window.addEventListener("scroll", e => {
      let scrollY = window.pageYOffset || document.scrollTop || 0;
      if (scrollY <= 360) bigImage.style.transform = `translateY(${scrollY / 2}px)`;
    }, false);
  }
}, false);
