var timer = document.querySelector(".timer")
var secounds = document.querySelector(".secounds")
var minutes = document.querySelector(".minuts")
var hours = document.querySelector(".hours")
var btn_green = document.querySelector(".btn-green")
var btn_white = document.querySelector(".btn-white")
var btn_blue= document.querySelector(".btn-blue")
var image_blue= document.querySelector(".image-blue")
var image_white = document.querySelector(".image-white")
var image_green = document.querySelector(".image-green")
var container = document.querySelector(".container") 
var page = document.querySelector(".page")
var price_after = document.querySelector(".price-after") 

btn_blue.onclick = function blue() {
    image_blue.style.display="block"
    image_green.style.display="none"
    image_white.style.display="none"
    container.style.background="rgb(20, 80, 143)"
    page.style.background="rgb(68, 119, 173)"
    price_after.style.color="rgb(38, 131, 230)"
}
btn_green.onclick = function green() {
    image_blue.style.display="none"
    image_green.style.display="block"
    image_white.style.display="none"
    container.style.background="rgb(169, 255, 70)"
    page.style.background="rgb(189, 255, 113)"
    price_after.style.color="rgb(0, 255, 34)"
}
btn_white.onclick = function white() {
    image_blue.style.display="none"
    image_green.style.display="none"
    image_white.style.display="block"
    container.style.background="pink"
    page.style.background="white"
    price_after.style.color="black"
}
var secound =59
var minute =59
var hour =9
secounds.innerHTML=`${secound}`
minutes.innerHTML=minute
hours.innerHTML=`0${hour}`
var q= setInterval(clock,1000)    
 function clock() {
   secound-=q
   console.log(`clock`)
   secounds.innerHTML=secound
   if (secound == 0) {
       secound=59
       minute--
       minutes.innerHTML=minute
   }
   if (minute==0) {
       minute=59
       hour--
       hours.textContent=hour
   }
}
clock()
