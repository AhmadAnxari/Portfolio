let navmenu=document.querySelector(".navbar-nav");
let btn=document.querySelector(".navbtn");
btn.addEventListener('click',()=>{
    navmenu.classList.toggle('active');
});

let typed= new Typed('.text-type',{
    strings:['Frontend Developer.','Web Designer.'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true,
});

document.addEventListener("DOMContentLoaded", () => {
    const spans = document.querySelectorAll('.progress-bar');
  
    spans.forEach((span) => {
      const targetWidth = parseInt(span.dataset.width, 10); 
      let currentWidth = 0;
  
      const incrementWidth = () => {
        if (currentWidth < targetWidth) {
          currentWidth++;
          span.style.width = currentWidth + '%';          
          span.setAttribute('aria-valuenow', currentWidth); 
          span.innerHTML = currentWidth + '%';           
        } else {
          clearInterval(intervalId);                     
        }
      };
  
      
      const intervalId = setInterval(incrementWidth, 15);
    });
  });
  
  ScrollReveal({
    distance: '50px',
    duration: 2000,
    delay:200,
  });

  ScrollReveal().reveal('.home-content', { origin:'top'});
  ScrollReveal().reveal('.home-img', { origin:'bottom'});
  ScrollReveal().reveal('.ac', { origin:'bottom'});
  ScrollReveal().reveal('.pc', { origin:'left'});
