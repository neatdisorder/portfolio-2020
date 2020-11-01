window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
    document.getElementById('nav-content').style.visibility = "visible";
  } else {
    document.getElementById('nav-content').style.visibility = "hidden";
  }
}