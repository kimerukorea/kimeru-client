import type { CSSPixelValue } from "../types";

export interface BoxType {
  top?: CSSPixelValue;
  bottom?: CSSPixelValue;
  left?: CSSPixelValue;
  right?: CSSPixelValue;
}

export interface BoxSpacingOption extends BoxType {
  x?: CSSPixelValue;
  y?: CSSPixelValue;
}
