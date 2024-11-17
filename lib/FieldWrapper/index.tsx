import type Props from "./props";

import styles from "./index.module.css";
import clsx from "clsx";

export default function FieldWrapper({
  more,
  helperText,
  children,
  required,
  warning,
  label,
  error,
  name,
}: Props) {
  const hasMore = !!error || !!helperText || !!warning || !!more;

  return (
    <div className={styles.container}>
      {label && (
        <label className={styles.label} htmlFor={`input-${name}`}>
          {label}
          {required ? <span className={styles.asterisk}>*</span> : null}
        </label>
      )}

      {children}

      {hasMore && (
        <div className={styles.more}>
          {(!!error || !!helperText || !!warning) && (
            <div
              className={clsx({
                [styles.warningText]: !!warning,
                [styles.errorText]: !!error,
              })}
            >
              {error || warning || helperText}
            </div>
          )}
          {more}
        </div>
      )}
    </div>
  );
}
