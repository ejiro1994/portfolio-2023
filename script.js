const overlay = document.querySelector('.overlay');


let t1 = gsap.timeline()

t1.to(".overlay", { delay: 1.4, duration: 5, top: 100000, ease: Power2.easeInOut });
t1.to(
    ".nav",
    {
        opacity: 1,
        marginBottom: 0,
        duration: 1,
        ease: Power2.easeInOut,
        stagger: 0.3,
    },
    ">-0.5"
);