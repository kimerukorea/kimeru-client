import { css } from "@emotion/react";
import { coerceCssPixelValue } from "../utils";
import type { BoxSpacingOption, BoxType } from "./boxSpacing.types";
import { boxSerializer } from "./boxSpacing.utils";

const margin = (option: BoxSpacingOption) => {
  const box: BoxType = {};

  if (option.x !== undefined) {
    box.left = option.x;
    box.right = option.x;
  }
  if (option.y !== undefined) {
    box.top = box.bottom = option.y;
  }
  if (option.top !== undefined) {
    box.top = option.top;
  }
  if (option.right !== undefined) {
    box.right = option.right;
  }
  if (option.bottom !== undefined) {
    box.bottom = option.bottom;
  }
  if (option.left !== undefined) {
    box.left = option.left;
  }

  if (
    box.top != null &&
    box.right != null &&
    box.bottom != null &&
    box.left != null
  ) {
    return css`
      margin: ${coerceCssPixelValue(box.top)} ${coerceCssPixelValue(box.right)}
        ${coerceCssPixelValue(box.bottom)} ${coerceCssPixelValue(box.left)};
    `;
  }

  const style = boxSerializer("margin", box);
  return css(style);
};

export default margin;
