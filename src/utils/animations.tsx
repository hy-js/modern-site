export const staggerChildren = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1
    }
  }
}

export const wordAnimation = {
  initial: {
    y: 100
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1
    }
  }
}

export const riseWithFade = {
  initial: {
    y: 100,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 0.7
    }
  }
}
export const fallWithFade = {
  initial: {
    y: 0,
    opacity: 0
  },
  animate: {
    y: 100,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 0.7
    }
  }
}

export const videoAnimation = {
  initial: {
    y: 100,
    opacity: 0,
    scale: 0.8
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1
    }
  }
}

export const transforms = [
  {
    x: -0.8,
    y: -0.6,
    rotationZ: -29
  },
  {
    x: -0.2,
    y: -0.4,
    rotationZ: -6
  },
  {
    x: -0.05,
    y: 0.1,
    rotationZ: 12
  },
  {
    x: -0.05,
    y: -0.1,
    rotationZ: -9
  },
  {
    x: -0.1,
    y: 0.55,
    rotationZ: 3
  },
  {
    x: 0,
    y: -0.1,
    rotationZ: 9
  },
  {
    x: 0,
    y: 0.15,
    rotationZ: -12
  },
  {
    x: 0,
    y: 0.15,
    rotationZ: -17
  },
  {
    x: 0,
    y: -0.65,
    rotationZ: 9
  },
  {
    x: 0.1,
    y: 0.4,
    rotationZ: 12
  },
  {
    x: 0,
    y: -0.15,
    rotationZ: -9
  },
  {
    x: 0.2,
    y: 0.15,
    rotationZ: 12
  },
  {
    x: 0.8,
    y: 0.6,
    rotationZ: 20
  }
]

export const disperse = {
  open: (i: number) => ({
    x: transforms[i].x + "em",
    y: transforms[i].y + "em",
    rotateZ: transforms[i].rotationZ,
    transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1] },
    zIndex: 1
  }),
  closed: {
    x: 0,
    y: 0,
    rotateZ: 0,
    transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1] },
    zIndex: 0
  }
}
