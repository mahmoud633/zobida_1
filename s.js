document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.querySelector('.burger-menu');
  const navLinks = document.querySelector('.nav-links');

  burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
});







var btnMode = document.querySelector('.btn-mode');
btnMode.onclick = function(){
  document.body.classList.toggle("white-theme")

  btnMode.classList.toggle("fa-sun")
  btnMode.classList.toggle("fa-moon")
}









