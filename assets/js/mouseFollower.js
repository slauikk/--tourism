// import MouseFollower from "./lib/mouse-follower/mouse-follower.min";
const cursor = new MouseFollower({
  // container: "#smooth-content",
  className: "mouseFollower",
  speed: 0.3,
  skewing: 2,
  skewingDelta: 0.001,
  skewingDeltaMax: 0.15,
  ease: "SlowMo.ease.config(0.70.7,0.7 0.7, false)",
});
