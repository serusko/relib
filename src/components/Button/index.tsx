import styles from "./styles.module.css";
import clsx from "clsx";

export interface Props extends React.ComponentProps<"button"> {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  label: string;
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
