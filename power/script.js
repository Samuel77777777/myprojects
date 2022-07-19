// let navbar = document.querySelector('.header .navbar');

// let contactInfo = document.querySelector('.contact-info');

// document.querySelector('#menu-btn').onclick = () =>{
//    navbar.classList.toggle('active');
//    searchForm.classList.remove('active');
//    loginForm.classList.remove('active');
// };

// document.querySelector('#info-btn').onclick = () =>{
//    contactInfo.classList.add('active');
// }

// document.querySelector('#close-contact-info').onclick = () =>{
//    contactInfo.classList.remove('active');
// }

// window.onscroll = () =>{
//    navbar.classList.remove('active');
//    searchForm.classList.remove('active');
//    loginForm.classList.remove('active');
//    contactInfo.classList.remove('active');
// }

var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// var swiper = new Swiper(".reviews-slider", {
//    loop:true,
//    grabCursor:true,
//    spaceBetween: 20,
//    breakpoints: {
//       640: {
//         slidesPerView: 1,
//       },
//       768: {
//         slidesPerView: 2,
//       },
//       991: {
//         slidesPerView: 3,
//       },
//    },
// });

// var swiper = new Swiper(".blogs-slider", {
//    loop:true,
//    grabCursor:true,
//    spaceBetween: 20,
//    breakpoints: {
//       640: {
//         slidesPerView: 1,
//       },
//       768: {
//         slidesPerView: 2,
//       },
//       991: {
//         slidesPerView: 3,
//       },
//    },
// });
// //
// var swiper = new Swiper(".logo-slider", {
//    loop:true,
//    grabCursor:true,
//    spaceBetween: 20,
//    breakpoints: {
//       450: {
//          slidesPerView: 2,
//        },
//       640: {
//         slidesPerView: 3,
//       },
//       768: {
//         slidesPerView: 4,
//       },
//       1000: {
//         slidesPerView: 5,
//       },
//    },
// });

// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {

//     this.classList.toggle("active");

//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }

const faqItemHead = document.querySelectorAll(".faq-item-head");

faqItemHead.forEach((head, index) => {
  head.addEventListener("click", () => {
    let icon = head.querySelector(".faq-item-icon").firstElementChild;
    if (icon.className == "fa fa-chevron-down") {
      head.nextElementSibling.classList.add("show-para");
      icon.className = "fa fa-chevron-up";
    } else if (icon.className == "fa fa-chevron-up") {
      head.nextElementSibling.classList.remove("show-para");
      icon.className = "fa fa-chevron-down";
    }
  });
});

function initParadoxWay() {
  "use strict";

  if ($(".testimonials-carousel").length > 0) {
    var j2 = new Swiper(".testimonials-carousel .swiper-container", {
      preloadImages: false,
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      grabCursor: true,
      mousewheel: false,
      centeredSlides: true,
      pagination: {
        el: ".tc-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".listing-carousel-button-next",
        prevEl: ".listing-carousel-button-prev",
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }

  // bubbles -----------------

  setInterval(function () {
    var size = randomValue(sArray);
    $(".bubbles").append(
      '<div class="individual-bubble" style="left: ' +
        randomValue(bArray) +
        "px; width: " +
        size +
        "px; height:" +
        size +
        'px;"></div>'
    );
    $(".individual-bubble").animate(
      {
        bottom: "100%",
        opacity: "-=0.7",
      },
      4000,
      function () {
        $(this).remove();
      }
    );
  }, 350);
}

//   Init All ------------------
$(document).ready(function () {
  initParadoxWay();
});
