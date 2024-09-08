(function () {
  const carouselContent = document.querySelector("#carouselContent");
  const carouseLeftBtn = document.querySelector("#carouseleftBtn");
  const carouseRightBtn = document.querySelector("#carouserightBtn");

  let carouselLeftValue = 0;
  let totalWidth = carouselContent.getBoundingClientRect().width;
  let widthToMove = 90 + 8 + 90 + 8;
  let arrowBtnWidth = 50;
  let noOfSlides = totalWidth / widthToMove;
  let currentSlide = 1;

  carouseLeftBtn.addEventListener("click", moveCarouselRight);
  carouseRightBtn.addEventListener("click", moveCarouselLeft);

  manageButtons();

  function moveCarouselLeft() {
    if (currentSlide == 1){
      carouselLeftValue -= widthToMove - arrowBtnWidth;
    }
    else{
      carouselLeftValue -= widthToMove;
    }
    currentSlide++;
    manageButtons();
    carouselContent.style.left = `${carouselLeftValue}px`;
    carouselLeftValue;
  }

  function moveCarouselRight() {
    if (currentSlide == 2){
      
      carouselLeftValue = 8;
    }
    
    else{
        carouselLeftValue += widthToMove;
      }

    currentSlide--;
    manageButtons();
    carouselContent.style.left = `${carouselLeftValue}px`;
  }

  function manageButtons() {
    if (currentSlide == noOfSlides - 1){
        carouseRightBtn.classList.remove("show");

      }
    else{
      carouseRightBtn.classList.add("show");
     }
    

    if (currentSlide == 1){
        carouseLeftBtn.classList.remove("show");
      }
    
    else{
        carouseLeftBtn.classList.add("show");
      }
    
  }
})();

//shorts video --------

$(document).ready(function () {
  $("#light-slider").lightSlider();
});

//======dark theme====
 let icon = document.getElementById('icon');

 icon.onclick = function (){
  document.body.classList.toggle('dark_theme');
   if(document.body.classList.contains('dark_theme')){
    icon.classList.add("fa-sun")
   }else{
    icon.classList.remove("fa-sun")
   };
 }

 
 let icon_footer = document.getElementById('icon-footer');

 icon_footer.onclick = function (){
  document.body.classList.toggle('dark_theme');
   if(document.body.classList.contains('dark_theme')){
    icon_footer.classList.add("fa-sun")
   }else{
    icon_footer.classList.remove("fa-sun")
   };
 }
