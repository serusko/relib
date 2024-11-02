import clsx from "clsx";

import styles from "./Button.module.css";
import IconName from "../Icon/IconName";
import Icon from "../Icon";

export interface Props extends React.ComponentProps<"button"> {
  /**
   * @default "button"
   */
  type?: "button" | "submit" | "reset";
  size?: "small" | "medium" | "large";
  leadingIcon?: IconName;
  trailingICon?: IconName;
  /**
   * Indicate Loading status
   */
  isLoading?: boolean;
  /**
   * @default "default"
   */
  variant?: "primary" | "outline" | "default" | "text";
  fullWidth?: boolean;
  label: string;
}

export default function Button({
  variant = "default",
  size = "medium",
  type = "button",
  trailingICon,
  leadingIcon,
  isLoading,
  fullWidth,
  label,
  ...props
}: Props) {
  const style = clsx(styles.button, {
    [styles[`button--${variant}`]]: variant,
    [styles[`button--${size}`]]: variant !== "text" && size,
    [styles["button--loading"]]: isLoading,
  });

  return (
    <button type={type} className={style} {...props}>
      {leadingIcon && <Icon name={leadingIcon} />}
      <span>{label}</span>
      {trailingICon && <Icon name={trailingICon} />}
      {isLoading && <span className={styles["icon--loading"]}>...</span>}
    </button>
  );
}
