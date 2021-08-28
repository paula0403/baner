const slideList=[
  {img:"images/img1.jpg",
text:"Zakhyntos"},
{img:"images/img2.jpg",
text:"Pier"},
{img:"images/img3.jpg",
text:"Maldives"}
];
let active=0;
const image=document.querySelector('img.slider');
const title=document.querySelector('h1.slider');
const dots=[...document.querySelectorAll('.dots span')];
// console.log(image, title);
const changeDot=()=>{
  const activeDot=dots.findIndex(dot=>dot.classList.contains('active'));
  dots[activeDot].classList.remove('active');
  dots[active].classList.add('active');
}
const changeSlide=()=>{
// console.log("zmiana");
active++;
if(active===slideList.length){
  active=0;
}
image.src=slideList[active].img;
title.textContent=slideList[active].text;
changeDot();
}
setInterval(changeSlide, 3000);
