const sidebar = document.querySelector('.sidebar');
const menuBtn = document.querySelector('#icon');
const exitBar = document.querySelector("#exitBar");

menuBtn.addEventListener("click", function(){
  if (sidebar.style.display === 'none') {
    console.log("CLICKED");
    sidebar.style.display = 'block';
  } else {
    sidebar.style.display = "none";
  }
});
exitBar.addEventListener("click", function(){
  if (sidebar.style.display === 'block') {
    console.log("CLICKED");
    sidebar.style.display = 'none';
  } else {
    sidebar.style.display = "block";
  }
});
