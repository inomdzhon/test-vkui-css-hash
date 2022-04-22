import * as React from "react";
import { classNamesString } from "../../../lib/classNames";
import { warnOnce } from "../../../lib/warnOnce";
import { HasComponent, HasRootRef } from "../../../types";
import classes from "./Paragraph.module.css";

const weightClasses = {
  1: classes["Paragraph--w-1"],
  2: classes["Paragraph--w-2"],
  3: classes["Paragraph--w-3"],
};

export interface ParagraphProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement>,
    HasComponent {
  /**
   * Задаёт начертание шрифта, отличное от стандартного.
   */
  weight?: "1" | "2" | "3";
}

const warn = warnOnce("Paragraph");
export const Paragraph: React.FC<ParagraphProps> = ({
  Component = "span",
  getRootRef,
  weight,
  children,
  className,
  ...restProps
}) => {
  if (
    process.env.NODE_ENV === "development" &&
    typeof Component !== "string" &&
    getRootRef
  ) {
    warn("getRootRef может использоваться только с элементами DOM", "error");
  }

  return (
    <Component
      {...restProps}
      ref={getRootRef}
      className={classNamesString(
        className,
        classes.Paragraph,
        weight && weightClasses[weight]
      )}
    >
      {children}
    </Component>
  );
};
