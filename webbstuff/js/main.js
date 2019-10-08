const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');




var opacity = 0.4;

imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
    let el = document.querySelector(e.target);
    if(el.nodeName == "IMG"){
        imgs.forEach(img => (img.style.opacity = 1));

        //Btyder bilden till bilden man har klickat på
        current.src = e.target.src;
    
        current.classList.add('fade-in');
    
        setTimeout(() => current.classList.remove('fade-in'),500);
    
        //btyder opacitin
        e.target.style.opacity = opacity;

        console.log(e.target);
    }
}



  




