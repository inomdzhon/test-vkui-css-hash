import * as React from "react";
import { classNamesString } from "../../lib/classNames";
import { IOS } from "../../lib/platform";
import { usePlatform } from "../../hooks/usePlatform";
import { HasRootRef } from "../../types";
import classes from "./Div.module.css";

export interface DivProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement> {}

export const Div: React.FC<DivProps> = ({
  children,
  getRootRef,
  className,
  ...restProps
}) => {
  const platform = usePlatform();
  return (
    <div
      {...restProps}
      ref={getRootRef}
      className={classNamesString(
        classes.Div,
        platform === IOS && classes["Div--ios"],
        className
      )}
    >
      {children}
    </div>
  );
};
