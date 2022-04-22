import * as React from "react";
import { HasComponent } from "../../../types";
import { classNamesString } from "../../../lib/classNames";
import { warnOnce } from "../../../lib/warnOnce";
import classes from "./Title.module.css";

const weightClasses = {
  heavy: classes["Title--w-heavy"],
  bold: classes["Title--w-bold"],
  semibold: classes["Title--w-semibold"],
  medium: classes["Title--w-medium"],
  regular: classes["Title--w-regular"],
  1: classes["Title--w-1"],
  2: classes["Title--w-2"],
  3: classes["Title--w-3"],
};

const levelClasses = {
  1: classes["Title--lvl-1"],
  2: classes["Title--lvl-2"],
  3: classes["Title--lvl-3"],
};

export interface TitleProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  /**
   * Задаёт начертание шрифта отличное от стандартного.
   *
   * > ⚠️ Начертания `"heavy"`, `"bold"`, `"semibold"`, `medium` и `"regular"` устарели и будут удалены в 5.0.0. Используйте значения `"1"`, `"2"` и `"3"`.
   */
  weight?:
    | "heavy"
    | "bold"
    | "semibold"
    | "medium"
    | "regular"
    | "1"
    | "2"
    | "3";
  level: "1" | "2" | "3";
}

const warn = warnOnce("Title");
export const Title: React.FC<TitleProps> = ({
  children,
  weight,
  level = "1",
  Component,
  className,
  ...restProps
}) => {
  if (!Component) {
    Component = ("h" + level) as React.ElementType;
  }

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
        classes.Title,
        levelClasses[level],
        weight && weightClasses[weight]
      )}
    >
      {children}
    </Component>
  );
};
