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
    chevron,
    isLoading,
    fullWidth,
    isActive,
    label,
    ...props
  }: Props,
  ref: React.RefAttributes<HTMLButtonElement>["ref"]
) {
  const style = clsx(styles.button, {
    [styles[`button--${variant}`]]: variant,
    [styles[`button--${size}`]]: variant !== "text" && size,
    [styles["button--loading"]]: isLoading,
  });

  return (
    <button
      data-active={!!isActive}
      className={style}
      type={type}
      {...props}
      ref={ref}
    >
      {leadingIcon && <Icon name={leadingIcon} />}
      {label && <span>{label}</span>}
      {chevron && <span className={clsx(styles.chevron)} />}
      {trailingICon && <Icon name={trailingICon} />}
      {isLoading && <span className={styles["icon--loading"]}>...</span>}
    </button>
  );
}

export default forwardRef(Button);
