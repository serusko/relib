import Props from "./props";

import styles from "./index.module.css";
import clsx from "clsx";

export default function InputWrapper({
  rightIcon,
  rightItem,
  leftItem,
  leftIcon,
  disabled,
  children,
}: Props) {
  return (
    <div className={styles.inputWrapper}>
      {leftItem}
      <div
        className={clsx(styles.inputContainer, {
          [styles.disabled]: !!disabled,
        })}
      >
        {leftIcon}
        {children}
        {rightIcon}
      </div>
      {rightItem}
    </div>
  );
}
