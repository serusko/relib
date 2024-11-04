import Props from "./props";

import styles from "./index.module.css";
import clsx from "clsx";

export default function InputWrapper({
  rightIcon,
  leftIcon,
  disabled,
  children,
}: Props) {
  return (
    <div
      className={clsx(styles.inputContainer, { [styles.disabled]: !!disabled })}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </div>
  );
}
