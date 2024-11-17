import type Props from "./props";

import styles from "./index.module.css";
import clsx from "clsx";

export default function FieldWrapper({
  helperText,
  horizontal,
  children,
  required,
  warning,
  label,
  error,
  name,
  more,
}: Props) {
  const hasMore = !!error || !!helperText || !!warning || !!more;

  return (
    <div
      className={clsx(styles.container, { [styles.horizontal]: horizontal })}
    >
      {label && (
        <label className={styles.label} htmlFor={`input-${name}`}>
          {label}
          {required ? <span className={styles.asterisk}>*</span> : null}
        </label>
      )}

      <div className={styles.content} role="gridcell">
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
    </div>
  );
}
