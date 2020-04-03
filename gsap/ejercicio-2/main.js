window.addEventListener('load', function () {
  gsap.from(".container img", {duration: 2, x: 100, opacity: 0, scale: 0.8, rotation: 45});
  gsap.from(".container h2", {duration: 2, x: -100, opacity: 0, scale: 0.8, rotation: -45});    
})
