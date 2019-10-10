
//here we setinterval to print time without milliseconds
//we can set milliseconds and it is possible for the timer to
//skip certain seconds if it is high 
setInterval(printTime);
function printTime() {
   
     //here we make a var called today
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    

    //this will add a zero if the nummber is equal to one 
    //it is to mimic a real clock
    if (s.toString().length== 1) {
        s = "0" + s;
    }
    if (m.toString().length == 1) {
        m = "0" + m;
    
    }
    if (h.toString().length == 1) {
        h = "0" + h;
    }

    //here we console log the time for debugging and to see that everything is working fine

    var time =   h + ":"+ m +":"+ s;
    
    //here we print out the time and style the it
    document.getElementById("showtime").style.color="white";
    document.getElementById("showtime").innerHTML = time;
}








const current = document.querySelector('#current');
const imgs = document.querySelector('.imgs');
const img = document.querySelectorAll('.imgs img');
const opacity = 0.6;

// Set first img opacity
img[0].style.opacity = opacity;

imgs.addEventListener('click', imgClick);


function imgClick(e) {
    if(e.target.nodeName == "IMG"){
  // Reset the opacity
  img.forEach(img => (img.style.opacity = 1));

  // Change current image to src of clicked image
  current.src = e.target.src;

  // Add fade in class
  current.classList.add('fade-in');

  // Remove fade-in class after .5 seconds
  setTimeout(() => current.classList.remove('fade-in'), 500);

  // Change the opacity to opacity var
  e.target.style.opacity = opacity;

  console.log(e.target);
    }
}


const btnN = document.querySelector(".btnNature");
const btn4C = document.querySelector(".btn4Chan");
const btnG = document.querySelector(".btnGames");
const all = document.querySelector(".all");


btn4C.addEventListener("click", btnChan);
btnG.addEventListener("click", btnGames);
btnN.addEventListener("click", btnNature);
all.addEventListener("click", showall);




function btnChan(){
   

    document.getElementById("Games1" ).style.display="none";
    document.getElementById("Games2" ).style.display="none";
    document.getElementById("Games3" ).style.display="none";
    document.getElementById("Games4" ).style.display="none";
    document.getElementById("Games5" ).style.display="none";
    document.getElementById("Games6" ).style.display="none";
    document.getElementById("Games7" ).style.display="none";

    document.getElementById("Nature1" ).style.display="none";
    document.getElementById("Nature2" ).style.display="none";
    document.getElementById("Nature3" ).style.display="none";
    document.getElementById("Nature4" ).style.display="none";
    document.getElementById("Nature5" ).style.display="none";
    document.getElementById("Nature6" ).style.display="none";

    document.getElementById("Animal1" ).style.display="block";
    document.getElementById("4Chan2" ).style.display="block";
    document.getElementById("4Chan3" ).style.display="block";
    document.getElementById("4Chan4" ).style.display="block";
    document.getElementById("4Chan5" ).style.display="block";
    document.getElementById("4Chan6" ).style.display="block";
    document.getElementById("4Chan7" ).style.display="block";
}

function btnGames(){
    
    document.getElementById("4Chan1" ).style.display="none";
    document.getElementById("4Chan2" ).style.display="none";
    document.getElementById("4Chan3" ).style.display="none";
    document.getElementById("4Chan4" ).style.display="none";
    document.getElementById("4Chan5" ).style.display="none";
    document.getElementById("4Chan6" ).style.display="none";
    document.getElementById("4Chan7" ).style.display="none";


    document.getElementById("Nature1" ).style.display="none";
    document.getElementById("Nature2" ).style.display="none";
    document.getElementById("Nature3" ).style.display="none";
    document.getElementById("Nature4" ).style.display="none";
    document.getElementById("Nature5" ).style.display="none";
    document.getElementById("Nature6" ).style.display="none";


    
    document.getElementById("Games1" ).style.display="block";
    document.getElementById("Games2" ).style.display="block";
    document.getElementById("Games3" ).style.display="block";
    document.getElementById("Games4" ).style.display="block";
    document.getElementById("Games5" ).style.display="block";
    document.getElementById("Games6" ).style.display="block";
    document.getElementById("Games7" ).style.display="block";
}

function btnNature(){
    
    document.getElementById("Games1" ).style.display="none";
    document.getElementById("Games2" ).style.display="none";
    document.getElementById("Games3" ).style.display="none";
    document.getElementById("Games4" ).style.display="none";
    document.getElementById("Games5" ).style.display="none";
    document.getElementById("Games6" ).style.display="none";
    document.getElementById("Games7" ).style.display="none";

    document.getElementById("4Chan1" ).style.display="none";
    document.getElementById("4Chan2" ).style.display="none";
    document.getElementById("4Chan3" ).style.display="none";
    document.getElementById("4Chan4" ).style.display="none";
    document.getElementById("4Chan5" ).style.display="none";
    document.getElementById("4Chan6" ).style.display="none";
    document.getElementById("4Chan7" ).style.display="none";

    
    document.getElementById("Nature1" ).style.display="block";
    document.getElementById("Nature2" ).style.display="block";
    document.getElementById("Nature3" ).style.display="block";
    document.getElementById("Nature4" ).style.display="block";
    document.getElementById("Nature5" ).style.display="block";
    document.getElementById("Nature6" ).style.display="block";
}

function showall(){
    
    document.getElementById("Games1" ).style.display="block";
    document.getElementById("Games2" ).style.display="block";
    document.getElementById("Games3" ).style.display="block";
    document.getElementById("Games4" ).style.display="block";
    document.getElementById("Games5" ).style.display="block";
    document.getElementById("Games6" ).style.display="block";
    document.getElementById("Games7" ).style.display="block";
    
    document.getElementById("4Chan1" ).style.display="block";
    document.getElementById("4Chan2" ).style.display="block";
    document.getElementById("4Chan3" ).style.display="block";
    document.getElementById("4Chan4" ).style.display="block";
    document.getElementById("4Chan5" ).style.display="block";
    document.getElementById("4Chan6" ).style.display="block";
    document.getElementById("4Chan7" ).style.display="block";

    document.getElementById("Nature1" ).style.display="block";
    document.getElementById("Nature2" ).style.display="block";
    document.getElementById("Nature3" ).style.display="block";
    document.getElementById("Nature4" ).style.display="block";
    document.getElementById("Nature5" ).style.display="block";
    document.getElementById("Nature6" ).style.display="block";
}


