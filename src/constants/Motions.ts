import type { Variants } from "framer-motion";

export const defaultEasing = [0.6, -0.05, 0.01, 0.99];

export type TransformOrigin = "top" | "right" | "bottom" | "left";

export const staggerOne: Variants = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export const staggerHalf: Variants = {
  animate: { transition: { staggerChildren: 0.05 } },
};

export const defaultFadeInVariants: Variants = {
  initial: {
    opacity: 0,
    transition: { duration: 0.3, ease: defaultEasing },
    willChange: "opacity",
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.3, ease: defaultEasing },
    willChange: "opacity",
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: defaultEasing },
    willChange: "opacity",
  },
};

export const fadeInVariants: (duration: number) => Variants = (
  duration: number
) => ({
  initial: {
    opacity: 0,
    transition: { duration, ease: defaultEasing },
    willChange: "opacity",
  },
  animate: {
    opacity: 1,
    transition: { duration, ease: defaultEasing },
    willChange: "opacity",
  },
  exit: {
    opacity: 0,
    transition: { duration, ease: defaultEasing },
    willChange: "opacity",
  },
});

export const defaultScaleChangeVariants: Variants = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
  },
};

const generateVariantFromTransformOrigin = (origin: TransformOrigin) => {
  switch (origin) {
    case "top":
      return {
        y: "-100%",
      };
    case "right":
      return {
        x: "100%",
      };
    case "bottom":
      return {
        y: "100%",
      };
    case "left":
      return {
        x: "-100%",
      };
  }
};

export const defaultSlideFadeInVariants = (
  origin: TransformOrigin
): Variants => {
  const originVariant = generateVariantFromTransformOrigin(origin);

  return {
    initial: {
      ...defaultFadeInVariants.initial,
      ...originVariant,
    },
    animate: {
      ...defaultFadeInVariants.animate,
      // x or y
      [Object.keys(originVariant)[0]]: 0,
    },
    exit: {
      ...defaultFadeInVariants.exit,
      ...originVariant,
    },
  };
};

export const bottomSlideByBottomProperty = {
  initial: {
    opacity: 0,
    bottom: 0,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: "opacity",
  },
  animate: {
    opacity: 1,
    bottom: 40,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: "opacity",
  },
  exit: {
    opacity: 0,
    bottom: 0,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: "opacity",
  },
};

export const framerMocker = {
  initial: "initial",
  animate: "animate",
  exit: "exit",
} as const;
