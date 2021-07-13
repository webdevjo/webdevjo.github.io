const scrollToTopButton = document.getElementById('scroll-to-top-btn');

window.onscroll = function () {
   scrollFunction();
}

function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopButton.classList.add("show-btn");
      scrollToTopButton.classList.remove("hide-btn");
   } else {
      scrollToTopButton.classList.add("hide-btn");
      scrollToTopButton.classList.remove("show-btn");
   }
}

function scrollToTop() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
}