document.addEventListener("DOMContentLoaded", e => {
  const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // http://emailregex.com/
  let inputs = document.querySelectorAll("input, textarea");
  for (let i = inputs.length; i--;) {
    if (inputs[i].value) inputs[i].classList.add("filled");
    inputs[i].addEventListener("input", e => {
      if (inputs[i].classList.contains("filled")) {
        if (!inputs[i].value) inputs[i].classList.remove("filled");
      } else {
        if (inputs[i].value) inputs[i].classList.add("filled");
      }
      if (inputs[i].type === "email") {
        let validEmail = emailValidator.test(inputs[i].value);
        if (inputs[i].classList.contains("invalid")) {
          if (validEmail) inputs[i].classList.remove("invalid");
        } else {
          if (!validEmail) inputs[i].classList.add("invalid");
        }
      }
    }, false);
  }

  let scrollDown = document.querySelector(".scroll-prompt .scroll-down"),
  autoScrolling = false;
  function autoScroll() {
    if (!autoScrolling) return;
    let scrollDist = (window.innerHeight - (window.pageYOffset || document.documentElement.scrollTop || 0));
    if (Math.abs(scrollDist) < 1) {
      window.scrollTo(0, window.innerHeight);
      autoScrolling = false;
    } else {
      window.scrollBy(0, Math.ceil(scrollDist / 5));
      window.requestAnimationFrame(autoScroll);
    }
  }
  scrollDown.addEventListener("click", e => {
    autoScrolling = true;
    autoScroll();
    e.preventDefault();
  }, false);
  window.addEventListener("wheel",e=>{
    if (autoScrolling) autoScrolling = false;
  },false);
}, false);
