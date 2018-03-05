import slamLogo from '../assets/summer-slam-logo.png';
import liveSaturday from '../assets/live-saturday.png';
import downArrow from '../assets/down-arrow.png';

const slamLogoImg = document.getElementById('summer-slam-logo');
slamLogoImg.src = slamLogo;

const liveSaturdayImg = document.getElementById('live-saturday');
liveSaturdayImg.src = liveSaturday;

const downArrowImg = document.getElementById('down-arrow');
downArrowImg.src = downArrow;

document.querySelector( "#menu-toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
    let isActive = document.querySelector("#menu-toggle").classList.contains('active');
    
    if(isActive) {
        document.querySelector("header nav ul").classList.add("active");
    }    
    else {
        document.querySelector("header nav ul").classList.remove("active");
    }
  });

