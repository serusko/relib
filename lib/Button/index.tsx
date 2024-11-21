import clsx from "clsx";

import styles from "./index.module.css";
import Icon from "../Icon";
import type Props from "./props";
import { forwardRef } from "react";

function Button(
  {
    variant = "default",
    size = "medium",
    type = "button",
    trailingICon,
    leadingIcon,
    isLoading,
    fullWidth,
    isActive,
    chevron,
    label,
    ...props
  }: Props,
  ref: React.RefAttributes<HTMLButtonElement>["ref"]
) {
  return (
    <button
      data-loading={!!isLoading}
      className={styles.button}
      data-active={!!isActive}
      data-variant={variant}
      data-size={size}
      type={type}
      {...props}
      ref={ref}
    >
      {leadingIcon && <Icon name={leadingIcon} />}
      {label && <span>{label}</span>}
      {chevron && <span className={styles.chevron} />}
      {trailingICon && <Icon name={trailingICon} />}
      {isLoading && <span className={styles.loadingIcon}>...</span>}
    </button>
  );
}

export default forwardRef(Button);
