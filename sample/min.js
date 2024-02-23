
function updateTime() {
    const now = new Date();
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
    const dateStr = now.toLocaleDateString(undefined, dateOptions);
    const timeStr = now.toLocaleTimeString(undefined, timeOptions);
    document.getElementById("datetime").textContent = `${dateStr} ${timeStr}`;
  }
  updateTime();
  setInterval(updateTime, 1000);
/*....................carousel function...........................*/

document.addEventListener("DOMContentLoaded", function() {
  let slideIndex = 0;
  showSlides(); // Call showSlides initially to display the first slide

  function plusSlides(n) {
      showSlides(slideIndex += n);
  }

  function currentSlide(n) {
      showSlides(slideIndex = n);
  }

  function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");

      if (slideIndex >= slides.length) {
          slideIndex = 0; // Reset to first slide if out of range
      }
      if (slideIndex < 0) {
          slideIndex = slides.length - 1; // Go to last slide if out of range
      }

      // Hide all slides and remove active class from all dots
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }

      // Display the current slide and set active class for the corresponding dot
      slides[slideIndex].style.display = "block";
      dots[slideIndex].className += " active";
  }
});

let slideIndex = 0;
  showSlides(); // Call showSlides initially to display the first slide

  function plusSlides(n) {
      showSlides(slideIndex += n);
  }

  function currentSlide(n) {
      showSlides(slideIndex = n);
  }

  function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");

      if (slideIndex >= slides.length) {
          slideIndex = 0; // Reset to first slide if out of range
      }
      if (slideIndex < 0) {
          slideIndex = slides.length - 1; // Go to last slide if out of range
      }

      // Hide all slides and remove active class from all dots
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }

      // Display the current slide and set active class for the corresponding dot
      slides[slideIndex].style.display = "block";
      dots[slideIndex].className += " active";
  }


  /*...............video container..........................*/
  function playVideo() {
    var iframe = document.getElementById('teaser');
    iframe.src = iframe.src + '?autoplay=1';
}

function subscribe() {
    var email = document.getElementById('email').value;
    if(email) {
        alert('Subscribed with ' + email);
    } else {
        alert('Please enter your email address');
    }
}