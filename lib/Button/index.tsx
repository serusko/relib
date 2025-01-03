import styles from "./index.module.css";
import Icon, { IconName } from "../Icon";
import type Props from "./props";
import { forwardRef } from "react";

function Button(
  {
    variant = "default",
    size = "medium",
    type = "button",
    trailingIcon,
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
      {leadingIcon && typeof leadingIcon === "string" ? (
        <Icon className={styles.icon} name={leadingIcon as IconName} />
      ) : (
        leadingIcon
      )}
      {label && <span>{label}</span>}
      {chevron && <span className={styles.chevron} />}
      {trailingIcon && typeof trailingIcon === "string" ? (
        <Icon className={styles.icon} name={trailingIcon as IconName} />
      ) : (
        trailingIcon
      )}
      {isLoading && (
        <span className={styles.loadingIcon}>
          <Icon className={styles.icon} name="loading" />
        </span>
      )}
    </button>
  );
}

export default forwardRef(Button);
