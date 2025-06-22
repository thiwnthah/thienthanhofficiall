$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if(window.scrollY>60){
            document.querySelector('#scroll-top').classList.add('active');
        }else{
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
});

const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

srtop.reveal('.experience .timeline',{delay: 400});
srtop.reveal('.experience .timeline .container',{interval: 400}); 

document.onkeydown = function(e) {
  if(e.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}

document.addEventListener('visibilitychange',
function(){
    if(document.visibilityState === "visible"){
        document.title = "PAGE | THIWN THAH";
        $("#favicon").attr("href","/assets/images/favicon.png");
    }
    else {
        document.title = "WEB | THIWN THAH";
        $("#favicon").attr("href","/assets/images/favhand.png");
    }
});

window.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");

  function startMusic() {
    if (music && music.paused) {
      music.volume = 1;
      music.play().then(() => {
        console.log("Âm Thanh Đã Được Mở");
      }).catch((err) => {
        console.error("Lỗi Âm Thanh", err);
      });

      document.body.removeEventListener("click", startMusic);
      document.body.removeEventListener("touchstart", startMusic);
    }
  }
  document.body.addEventListener("click", startMusic);
  document.body.addEventListener("touchstart", startMusic);
});