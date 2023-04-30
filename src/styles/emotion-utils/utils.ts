import type { CSSPixelValue } from "./types";

export const coerceCssPixelValue = (value: CSSPixelValue): string => {
  return typeof value === "string" ? value : `${value}px`;
};
