import { cloneElement } from "react";
import styles from "./index.module.css";
import Props from "./props";

export default function ButtonGroup({ children, variant, disabled }: Props) {
  let child = children;

  if (variant !== undefined || disabled !== undefined) {
    child = child.map((e) =>
      cloneElement(e, {
        variant: variant || e.props.variant,
        disabled: disabled || e.props.disabled,
      })
    );
  }

  return <div className={styles.container}>{child}</div>;
}
