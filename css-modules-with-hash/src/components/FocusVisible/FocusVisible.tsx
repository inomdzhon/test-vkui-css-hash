import * as React from "react";
import { classNamesString } from "../../lib/classNames";
import classes from "./FocusVisible.module.css";

export type FocusVisibleMode = "inside" | "outside";

const modeStyles = {
  inside: "",
  outside: classes["FocusVisible--outside"],
};

interface FocusVisibleProps {
  mode: FocusVisibleMode;
}

export const FocusVisible: React.FC<FocusVisibleProps> = ({
  mode,
}: FocusVisibleProps) => (
  <span
    aria-hidden="true"
    className={classNamesString(classes.FocusVisible, modeStyles[mode])}
  />
);
