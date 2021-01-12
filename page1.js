const oracle = document.querySelector("header h1")
const titre1 = document.querySelector(".wrapper")
window.addEventListener("load", () => {
    const TL = gsap.timeline({paused:true});
    
    TL.staggerFrom(oracle, 1, {opacity: 0, ease: "power2.out"},0.3)
    TL.staggerFrom(titre1, 1, {top:-50, opacity: 0, ease: "power2.out"},0.3)
    
    TL.play();
})