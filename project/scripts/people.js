const navLinks = document.querySelectorAll('.people-nav a');
const figures = document.querySelectorAll('.people figure');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetFigure = document.querySelector(targetId);
    window.scrollTo({
      top: targetFigure.offsetTop,
      behavior: 'smooth'
    });
    console.log("hi");
  });
});