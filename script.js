/***** GSAP ANIMATION ******/

var tl = gsap.timeline({defaults:{duration:.7, ease: Back.easeOut.config(2), opacity:0}})

    tl.from(".title",{transformOrigin:'center'},"=.2")
      .from(".subtitle",{transformOrigin:'center'}, "-=.2")
      .from("#men",{delay:1, scale:.8, transformOrigin:'center'},"-=.6")
      .from("#phone",{scale:.8, transformOrigin:'center'},"-=.6")



/***** PHONE CLICK ANIMATION *****/

const phone = document.getElementById('phone');
const hiddenElement = document.querySelectorAll('.hidden-element')

phone.onclick = ()=>{
  for(let i = 0; i<hiddenElement.length;i++){
    hiddenElement[i].style.display = "inline";
  }
  tl.from("#background",{scale:.8, transformOrigin:'center',ease:"none"})
    .from("#planetOne",{scaleX:0.8, transformOrigin:'left',ease:"none",duration:.4})
    .from("#planetTwo",{scaleY:0.8, transformOrigin:'bottom',ease:"none",duration:.4})
    .from("#leftComet",{scale:0, transformOrigin:'left',ease:"none",duration:.4})
    .from("#rightComet",{scale:0, transformOrigin:'right',ease:"none",duration:.4},"-=.6")
    .from("#socialmedia-left",{scale:0, transformOrigin:'left',ease:"none",duration:.4})
    .from("#socialmedia-right",{scale:0, transformOrigin:'right',ease:"none",duration:.4},"-=.6")
    .from("#socialmedia-top",{scale:0, transformOrigin:'top',ease:"none",duration:.4},"-=1.2")
}