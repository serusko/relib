import InputWrapper from "../InputWrapper";
import Props from "./props";

import styles from "./index.module.css";

export default function TextInput({
  autoComplete,
  rightIcon,
  leftIcon,
  required,
  setValue,
  disabled,
  value,
  name,
  max,
}: Props) {
  return (
    <InputWrapper leftIcon={leftIcon} rightIcon={rightIcon} disabled={disabled}>
      <input
        onChange={(e) => setValue(e.currentTarget.value || null)}
        autoComplete={autoComplete}
        className={styles.input}
        id={`input-${name}`}
        value={value || ""}
        required={required}
        disabled={disabled}
        maxLength={max}
        name={name}
      />
    </InputWrapper>
  );
}
