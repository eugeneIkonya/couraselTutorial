var slideIndex,slides,dots,captionText;
function initGallery(){
    slideIndex=0;
    slides=document.getElementsByClassName("imageHolder");
    slides[slideIndex].style.opacity=1;
    //retrieving the caption text along the image and storing it in the variable captionText
    captionText=document.querySelector(".captionHolder .captionText");
    //sets the new value of caption text to the value stored with indivdual div images
    captionText.innerHTML=slides[slideIndex].querySelector( ".captionText").innerHTML;

    dots=[];
    var dotsContainer =document.getElementById("dotsContainer");
    //adding dots coresponding to the nunmber of elements
    for(var i=0;i<slides.length;i++){
        var dot=document.createElement("span");
        dot.classList.add("dots");
        dotsContainer.append(dot);
        dots.push(dot);
    }

    dots[slideIndex].classList.add("active");

   
}
initGallery();
