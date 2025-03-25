const navBarContainer = document.querySelector(".navbarContainer");
const menuBtn = document.querySelector('#icon');
const exitBar = document.querySelector("#exitBar");




menuBtn.addEventListener("click", function(){
  if (navBarContainer.style.visibility === 'hidden') {
    console.log("CLICKED");
    navBarContainer.style.visibility = 'visible';
  } else {
    navBarContainer.style.visibility = "hidden";
  }
});

exitBar.onclick = function() {
  if (navBarContainer.style.visibility === 'visible') {
    console.log("CLICKED");
    navBarContainer.style.visibility = 'hidden';
  } else {
    navBarContainer.style.visibility = "visible";
  }
}


const navbar = document.querySelector('.navbar');

menuBtn.addEventListener("click", function(){
  if (navbar.style.display === 'none') {
    console.log("CLICKED");
    navbar.style.display = 'block';
  } else {
    navbar.style.display = "none";
  }
});
exitBar.addEventListener("click", function(){
  if (navbar.style.display === 'block') {
    console.log("CLICKED");
    navbar.style.display = 'none';
  } else {
    navbar.style.display = "block";
  }
});
