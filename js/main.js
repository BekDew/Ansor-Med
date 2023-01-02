var elBurgerImg = document.querySelector(".site-header__burger-img");
var elBurgerBox = document.querySelector(".site-header__burger-box");
var elOverlayBox = document.querySelector(".site-header__overlay-box");
var elClose = document.querySelector(".site-header__close-img");

elBurgerImg.addEventListener("click", function(){
    elBurgerBox.classList.toggle("active");
    elOverlayBox.classList.toggle("active");
});
elClose.addEventListener("click", function(){
    elBurgerBox.classList.remove("active");
    elOverlayBox.classList.remove("active");
})