const l1 = document.querySelector('.l1');
const medias = document.querySelectorAll('.bulle');

window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 0.4)
    .from(l1, 1, {width: 0, ease: "power2.out"}, )

    TL.play();
})