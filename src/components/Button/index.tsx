import clsx from "clsx";

import styles from "./Button.module.css";

export interface Props extends React.ComponentProps<"button"> {
  label: string;
  primary?: boolean;
  size?: "small" | "medium" | "large";
}

export default function Button({
  primary = false,
  size = "medium",
  label,
  ...props
}: Props) {
  const style = clsx(styles.button, {
    [styles["button--primary"]]: primary,
    [styles[`button--${size}`]]: size,
  });

  return (
    <button type="button" className={style} {...props}>
      {label}
    </button>
  );
}
