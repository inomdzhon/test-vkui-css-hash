import * as React from "react";
import {
  Icon24Spinner,
  Icon32Spinner,
  Icon44Spinner,
  Icon16Spinner,
} from "@vkontakte/icons";
import "./Spinner.css";

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: "small" | "regular" | "large" | "medium";
}

const Spinner: React.FC<SpinnerProps> = ({
  size,
  className,
  ...restProps
}: SpinnerProps) => {
  let SpinnerIcon = Icon24Spinner;

  if (size === "large") {
    SpinnerIcon = Icon44Spinner;
  }

  if (size === "medium") {
    SpinnerIcon = Icon32Spinner;
  }

  if (size === "small") {
    SpinnerIcon = Icon16Spinner;
  }

  return (
    <span
      role="status"
      {...restProps}
      className="Spinner"
    >
      <SpinnerIcon aria-hidden="true" className="Spinner__self" />
    </span>
  );
};

Spinner.defaultProps = {
  size: "regular",
  "aria-label": "Загружается...",
};

// eslint-disable-next-line import/no-default-export
export default React.memo(Spinner);
