var btns = document.getElementsByClassName('menu__burger');
var par = document.getElementsByClassName('burger-element-01');
var par1 = document.getElementsByClassName('burger-element-02');
var par2 = document.getElementsByClassName('burger-element-03');
btns[0].onclick = function() {
  par[0].classList.toggle("active-burger-element");
  par[0].classList.toggle("active-burger-element-01");
  par1[0].classList.toggle("active-burger-element");
  par1[0].classList.toggle("active-burger-element-02");
  par2[0].classList.toggle("active-burger-element");
  par2[0].classList.toggle("active-burger-element-03");
}