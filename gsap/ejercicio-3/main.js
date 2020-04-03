window.addEventListener('load', function () {
  gsap.from(".container img", {duration: 1, opacity: 0});   
  /* gsap.from(".container img", {duration: 1, y: -300, scale: 0.8, ease: "bounce"});    */ 
  /* gsap.from(".container img", {duration: 2, y: -300, scale: 0.8, ease: "elastic"});    */
  gsap.from(".container img", {duration: 2, y: -300, scale: 0.8, ease: "power2"});   
})
