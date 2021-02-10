const l1 = document.querySelector('.l1');
const titreSpans = document.querySelectorAll('main span');

window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(titreSpans, 1.5, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    .from(l1, 1, {width: 0, ease: "power2.out"}, '-=2')

    TL.play();
})