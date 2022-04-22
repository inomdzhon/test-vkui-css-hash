import * as React from "react";
import { HasComponent } from "../../../types";
import { usePlatform } from "../../../hooks/usePlatform";
import { ANDROID } from "../../../lib/platform";
import { classNamesString } from "../../../lib/classNames";
import classes from "./Headline.module.css";

const weightClasses = {
  semibold: classes["Headline--w-semibold"],
  medium: classes["Headline--w-medium"],
  regular: classes["Headline--w-regular"],
};

export interface HeadlineProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  weight: "regular" | "medium" | "semibold";
}

const Headline: React.FC<HeadlineProps> = ({
  children,
  weight = "regular",
  Component = "h3",
  className,
  ...restProps
}: HeadlineProps) => {
  const platform = usePlatform();

  return (
    <Component
      {...restProps}
      className={classNamesString(
        className,
        classes.Headline,
        platform === ANDROID && classes["Headline--android"],
        weightClasses[weight]
      )}
    >
      {children}
    </Component>
  );
};

// eslint-disable-next-line import/no-default-export
export default Headline;
