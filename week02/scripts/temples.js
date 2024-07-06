document.querySelector("#currentyear").innerHTML = `${new Date().getFullYear()}`;

const hamburgerbutton = document.querySelector("#hamburger-menu")
const navigation = document.querySelector(".navigation-wrap")

hamburgerbutton.addEventListener("click", function(){ 
    navigation.classList.toggle('open');
    hamburgerbutton.classList.toggle('open');
})