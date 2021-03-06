import * as React from "react";
import { useAdaptivity } from "../../../hooks/useAdaptivity";
import { classNamesString } from "../../../lib/classNames";
import { HasComponent, HasRootRef } from "../../../types";
import { warnOnce } from "../../../lib/warnOnce";
import classes from "./Text.module.css";

const weightClasses = {
  semibold: classes["Text--w-semibold"],
  medium: classes["Text--w-medium"],
  regular: classes["Text--w-regular"],
  1: classes["Text--w-1"],
  2: classes["Text--w-2"],
  3: classes["Text--w-3"],
};

const sizeYClasses = {
  regular: "",
  compact: classes["Text--sizeY-compact"],
};

export interface TextProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement>,
    HasComponent {
  /**
   * Задаёт начертание шрифта, отличное от стандартного.
   *
   * > ⚠️ Начертания `"semibold"`, `medium` и `"regular"` устарели и будут удалены в 5.0.0. Используйте значения `"1"`, `"2"` и `"3"`.
   */
  weight?: "regular" | "medium" | "semibold" | "1" | "2" | "3";
}

const warn = warnOnce("Text");
export const Text: React.FC<TextProps> = ({
  children,
  weight,
  Component = "span",
  getRootRef,
  className,
  ...restProps
}: TextProps) => {
  if (
    process.env.NODE_ENV === "development" &&
    typeof Component !== "string" &&
    getRootRef
  ) {
    warn("getRootRef can only be used with DOM components", "error");
  }

  if (
    process.env.NODE_ENV === "development" &&
    weight &&
    ["semibold", "medium", "regular"].includes(weight)
  ) {
    warn(
      `Начертание weight="${weight}" устарело и будет удалено в 5.0.0. Используйте значения "1", "2" и "3"`
    );
  }

  const { sizeY } = useAdaptivity();

  return (
    <Component
      {...restProps}
      ref={getRootRef}
      className={classNamesString(
        className,
        classes.Text,
        sizeY && sizeYClasses[sizeY],
        weight && weightClasses[weight]
      )}
    >
      {children}
    </Component>
  );
};
