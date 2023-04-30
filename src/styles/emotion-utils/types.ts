import type { HTMLProps } from "react";

export type CSSPixelValue = string | number;

export type ExtendHTMLProps<Elem extends HTMLElement, T> = Omit<
  HTMLProps<Elem>,
  keyof T
> &
  T;

export type AxisDirection = "vertical" | "horizontal";
