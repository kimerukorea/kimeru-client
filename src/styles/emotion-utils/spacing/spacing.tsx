import { memo } from "react";
import type { AxisDirection, CSSPixelValue, ExtendHTMLProps } from "../types";
import { coerceCssPixelValue } from "../utils";

type SpacingProps = ExtendHTMLProps<
  HTMLDivElement,
  {
    children?: never;
    direction?: AxisDirection;
    size: CSSPixelValue;
  }
>;

const Spacing = ({ direction = "vertical", size, ...props }: SpacingProps) => {
  const { style, ...otherProps } = props;

  return (
    <div
      style={{
        flex: "none",
        width:
          direction === "horizontal" ? coerceCssPixelValue(size) : undefined,
        height:
          direction === "vertical" ? coerceCssPixelValue(size) : undefined,
        ...style
      }}
      {...otherProps}
    />
  );
};

export default memo(Spacing);
