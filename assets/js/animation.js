gsap.registerPlugin(ScrollSmoother);
gsap.registerPlugin(ScrollTrigger);

//Scroll Smoother
ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1,
  resizePolling: 100,
  touchMultiplier: 2,
  keyboardMultiplier: 1,
  firefoxMultiplier: 40,
});

//Appearance of elements
const blocksAnimate = document.querySelectorAll(".blockAnimate");

blocksAnimate.forEach((e) => {
  gsap.fromTo(
    e,
    {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      easy: "power2.inOut",
      scrollTrigger: {
        trigger: e,
        start: "top bottom",
        end: "bottom center",
        scrub: 1,
        // markers: true,
      },
    }
  );
});
