const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('#icon');
const exitBar = document.querySelector("#exitBar");

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
