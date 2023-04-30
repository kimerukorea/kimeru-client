import { coerceCssPixelValue } from "../utils";
import type { BoxType } from "./boxSpacing.types";

export const boxSerializer = (target: "padding" | "margin", box: BoxType) => {
  return Object.entries(box)
    .filter(([, value]) => value != null)
    .map(([dir, value]) => `${target}-${dir}: ${coerceCssPixelValue(value!)};`)
    .join("");
};
