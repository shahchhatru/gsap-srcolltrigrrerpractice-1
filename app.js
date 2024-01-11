gsap.registerPlugin(ScrollTrigger);

gsap.to(".bg-image",{
    x:700,
    duration:3,
   scrollTrigger:".image-one",
})