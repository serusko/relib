import Props from "./props";

import styles from "./index.module.css";
import clsx from "clsx";

export default function FieldWrapper({
  moreHelper,
  helperText,
  children,
  required,
  warning,
  label,
  error,
  name,
}: Props) {
  const hasMore = !!error || !!helperText || !!warning || !!moreHelper;

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
          {moreHelper}
        </div>
      )}
    </div>
  );
}
