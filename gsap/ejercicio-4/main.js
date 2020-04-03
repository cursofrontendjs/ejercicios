document.getElementById('aparecer').addEventListener('click', function() {
  gsap.to(".box", {
    duration: 2,
    scale: 1, 
    rotation: 0,
    opacity: 1, 
    delay: 0.5, 
    stagger: 0.2,
    ease: "elastic", 
  });
});

document.getElementById("desaparecer").addEventListener('click', function() {
  gsap.to(".box", {
    duration: 0.5, 
    opacity: 0, 
    y: -100, 
    stagger: 0.1,
    ease: "power1"
})});