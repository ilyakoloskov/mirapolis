var toggler = document.getElementsByClassName("folder__subfolder-name");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".folder__subfolder-nested").classList.toggle("folder__subfolder-nested_active");
  });
}

