$(document).ready(function() {
    // wow animated
    new WOW().init();
    
    // sticky header
    window.onscroll = function() {myFunction()};
    var header = document.getElementById("header");
    var sticky = header.offsetTop;
    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("header-fx");
      } else {
        header.classList.remove("header-fx");
      }
    }

});