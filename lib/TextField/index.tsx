import AnimatedText from "../Animated";
import FieldWrapper from "../FieldWrapper";
import TextInput from "../TextInput";
import Props from "./props";

import styles from "./index.module.css";

export default function TextField({
  helperText,
  required,
  warning,
  error,
  label,
  name,
  value,
  max,
  ...rest
}: Props) {
  return (
    <FieldWrapper
      helperText={helperText}
      required={required}
      warning={warning}
      error={error}
      label={label}
      name={name}
      moreHelper={
        max ? (
          <AnimatedText
            className={styles.rightAnimation}
            value={Math.max(0, max - (value || "").length).toString()}
          />
        ) : undefined
      }
    >
      <TextInput
        required={required}
        value={value}
        name={name}
        max={max}
        {...rest}
      />
    </FieldWrapper>
  );
}
