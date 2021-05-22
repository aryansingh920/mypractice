
$(document).ready(function() {
  alert('Currently the site is under development and is for desktop view only , some of the features may not be same when viewed on smartphones')
  setTimeout(function() {
    $('.spinnn').css("display", "none");
    $('.elementmain').css("display", "block");
  }, 3000);

  $('.pointer').mouseenter(function() {
    setTimeout(function() {
      $('.pointer').css("display", "none");
      $('.social').css("display", "block");
    }, 500);

  });
  $('.social').mouseleave(function() {
    setTimeout(function() {
      $('.pointer').css("display", "block");
      $('.social').css("display", "none");
    }, 500);

  });
  let f = false;
  $('.navbar-toggler').click(function() {
    if (f === false) {
      $('#top-container1').css('margin-top', '7.75rem');
      f = true;
    } else {
      $('#top-container1').css('margin-top', '5.85rem');
      f = false;
    }
  })

  let pointervar, navbvar;
  pointervar = $('.pointnav,.pointnav1');
  navbvar = $('.navbar');
  pointervar.mouseenter(function() {
    $('#clock').css('position', 'fixed');
    $('#clock').css('background-color', 'rgba(0,0,0,0.66)');
    navbvar.removeClass("sticky-top");
    navbvar.addClass("fixed-top");
    navbvar.css("opacity", "0.879");
  })
  navbvar.mouseleave(function() {
    $('#clock').css('position', 'absolute');
    $('#clock').css('background-color', 'rgba(0,0,0,0)');
    navbvar.removeClass("fixed-top");
    navbvar.addClass("sticky-top");
    navbvar.css("opacity", "0.679");
  });

  let name = document.querySelector('#input_name').value;
  let email = document.querySelector('#input_email').value;
  let text = document.querySelector('#input_text').value;


  function currentTime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var day= date.getDay();
    var month = date.getMonth();
    var year = date.getFullYear();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    day = updateTime(day);
    month = updateTime(month);
    year = updateTime(year);
    document.querySelector(".date1").innerText = hour + " : " + min + " : " + sec;
    document.querySelector(".year1").innerText = day + "/" + month + "/" + year;
    var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
  }
  function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  currentTime();

  // function geolocation_api(){
  //   let error,long,lat;
  //   function getLocation() {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(showPosition);
  //     } else {
  //      error = "Geolocation is not supported by this browser.";
  //     }
  //   }
  //
  //   function showPosition(position) {
  //      lat =  position.coords.latitude;
  //      long = position.coords.longitude;
  //     // console.log(lat);
  //     // console.log(long);
  //
  //   }
  //   getLocation();
  //   console.log(error);
  //
  // }
  // geolocation_api();



});
