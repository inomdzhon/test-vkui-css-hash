import * as React from "react";
import { classNamesString } from "../../lib/classNames";
import "./FocusVisible.css";

export type FocusVisibleMode = "inside" | "outside";

interface FocusVisibleProps {
  mode: FocusVisibleMode;
}

export const FocusVisible: React.FC<FocusVisibleProps> = ({
  mode,
}: FocusVisibleProps) => (
  <span
    aria-hidden="true"
    className={classNamesString("FocusVisible", `FocusVisible--${mode}`)}
  />
);
