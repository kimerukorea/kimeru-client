import type { SerializedStyles } from "@emotion/react";
import { css } from "@emotion/react";
import type { CSSProperties } from "react";

export interface FlexOptions {
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  direction?: CSSProperties["flexDirection"];
  gap?: CSSProperties["gap"];
}

export function flex(options: FlexOptions): SerializedStyles;
export function flex(
  align: CSSProperties["alignItems"],
  justify?: CSSProperties["justifyContent"],
  direction?: CSSProperties["flexDirection"]
): SerializedStyles;
export function flex(
  alignOrFlexOptions: FlexOptions | CSSProperties["alignItems"],
  justify = "flex-start",
  direction = "row"
) {
  if (typeof alignOrFlexOptions === "object") {
    const {
      align = "stretch",
      direction = "row",
      justify = "flex-start",
      gap = 0
    } = alignOrFlexOptions;

    return css`
      display: flex;
      align-items: ${align};
      flex-direction: ${direction};
      justify-content: ${justify};
      gap: ${gap}px;
    `;
  }

  return css`
    display: flex;
    align-items: ${alignOrFlexOptions};
    flex-direction: ${direction};
    justify-content: ${justify};
  `;
}
