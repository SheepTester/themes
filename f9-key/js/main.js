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

  let scrollDown = document.querySelector(".scroll-prompt .scroll-down");
  scrollDown.addEventListener("click", e => {
    // TODO: ADD SCROLL ANIMATION
    // e.preventDefault();
  }, false);
}, false);
