window.addEventListener('load', function () {
    gsap.to(".box", {duration: 2, x: 300});
    gsap.to(".orange", {duration: 1, scale: 1, opacity: 1, y: 0});    
    gsap.to(".green", {duration: 3, rotation: 360, scale: 0.5});
    gsap.to(".yellow", {backgroundColor: 'purple', duration: 3});
  })
