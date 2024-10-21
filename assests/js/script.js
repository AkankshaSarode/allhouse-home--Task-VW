jQuery(".main-slider.owl-carousel").owlCarousel({
   loop: true,
   margin: 10,
   nav: true,
   dot: true,
   autoplay: 3000,
   responsive: {
      0: {
         items: 1
      },
      600: {
         items: 1
      },
      1000: {
         items: 1
      },
   }
});


jQuery(".main-sliders.owl-carousel").owlCarousel({
   loop: true,
   margin: 10,
   nav: true,
   dot: true,
   autoplay: 3000,
   responsive: {
      0: {
         items: 1
      },
      600: {
         items: 3
      },
      1000: {
         items: 3
      },
   }
});



function myFunction() {
   var x = document.getElementById("myTopnav");
   if (x.className === "topnav") {
      x.className += " responsive";
   } else {
      x.className = "topnav";
   }
}


    function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
  
