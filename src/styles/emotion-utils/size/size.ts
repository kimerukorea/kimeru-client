import { css } from "@emotion/react";
import type { CSSProperties } from "react";

interface SizeOptions {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
}

const size = ({ width, height }: SizeOptions) => {
  return css({ width, height });
};

size.full = size({ width: "100%", height: "100%" });
size.width100 = size({ width: "100%" });
size.height100 = size({ height: "100%" });

export default size;
