const init = {
  opacity: 0,
  y: -200,
};
const enter = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 2,
    ease: [0.16, 1, 0.3, 1],
  },
};
const exit = {
  opacity: 0,
  y: -200,
  transition: {
    duration: 2,
    ease: [0.22, 1, 0.36, 1],
  },
};

export const animate_nav_item = { init, enter, exit };
