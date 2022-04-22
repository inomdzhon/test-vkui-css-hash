import * as React from "react";
import { HasComponent } from "../../../types";
import { classNamesString } from "../../../lib/classNames";
import { warnOnce } from "../../../lib/warnOnce";
import { useAdaptivity } from "../../../hooks/useAdaptivity";
import classes from "./Subhead.module.css";

const weightClasses = {
  semibold: classes["Subhead--w-semibold"],
  medium: classes["Subhead--w-medium"],
  regular: classes["Subhead--w-regular"],
  bold: classes["Subhead--w-bold"],
  1: classes["Subhead--w-1"],
  2: classes["Subhead--w-2"],
  3: classes["Subhead--w-3"],
};

const sizeYClasses = {
  regular: "",
  compact: classes["Subhead--sizeY-compact"],
};

export interface SubheadProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  /**
   * Задаёт начертание шрифта отличное от стандартного.
   *
   * > ⚠️ Начертания `"semibold"`, `medium` и `"regular"` устарели и будут удалены в 5.0.0. Используйте значения `"1"`, `"2"` и `"3"`.
   */
  weight?: "regular" | "medium" | "semibold" | "bold" | "1" | "2" | "3";
}

const warn = warnOnce("Subhead");
export const Subhead: React.FC<SubheadProps> = ({
  children,
  weight,
  Component = "h5",
  className,
  ...restProps
}) => {
  const { sizeY } = useAdaptivity();

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
        classes.Subhead,
        sizeY && sizeYClasses[sizeY],
        weight && weightClasses[weight]
      )}
    >
      {children}
    </Component>
  );
};
