import * as React from "react";
import { HasComponent } from "../../../types";
import { classNamesString } from "../../../lib/classNames";
import { warnOnce } from "../../../lib/warnOnce";
import classes from "./Caption.module.css";

const weightClasses = {
  semibold: classes["Caption--w-semibold"],
  medium: classes["Caption--w-medium"],
  regular: classes["Caption--w-regular"],
  bold: classes["Caption--w-bold"],
  1: classes["Caption--w-1"],
  2: classes["Caption--w-2"],
  3: classes["Caption--w-3"],
};

const levelClasses = {
  1: classes["Caption--lvl-1"],
  2: classes["Caption--lvl-2"],
  3: classes["Caption--lvl-3"],
  4: classes["Caption--lvl-4"],
};

export interface CaptionProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  /**
   * Задаёт начертание шрифта отличное от стандартного.
   *
   * > ⚠️ Начертания `"bold"`, `"semibold"`, `medium` и `"regular"` устарели и будут удалены в 5.0.0. Используйте значения `"1"`, `"2"` и `"3"`.
   */
  weight?: "regular" | "medium" | "semibold" | "bold" | "1" | "2" | "3";
  level?: "1" | "2" | "3" | "4";
  caps?: boolean;
}

const warn = warnOnce("Caption");

export const Caption: React.FC<CaptionProps> = ({
  children,
  weight,
  level = "1",
  caps,
  Component = "span",
  className,
  ...restProps
}: CaptionProps) => {
  if (process.env.NODE_ENV === "development") {
    if (
      weight &&
      ["heavy", "bold", "semibold", "medium", "regular"].includes(weight)
    )
      warn(
        `Начертание weight="${weight}" устарело и будет удалено в 5.0.0. Используйте значения "1", "2" и "3"`
      );
  }

  return (
    <Component
      {...restProps}
      className={classNamesString(
        className,
        classes.Caption,
        level && levelClasses[level],
        caps && classes["Caption--caps"],
        weight && weightClasses[weight]
      )}
    >
      {children}
    </Component>
  );
};
