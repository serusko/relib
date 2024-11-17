import AnimatedText from "../Animated";
import FieldWrapper from "../FieldWrapper";
import TextInput from "../TextInput";
import type Props from "./props";

import styles from "./index.module.css";
import { useMemo } from "react";
import TextAreaInput from "../TextAreaInput";

export default function TextField({
  horizontal,
  helperText,
  multiline,
  required,
  warning,
  error,
  label,
  value,
  name,
  max,
  ...rest
}: Props) {
  const Input = useMemo(
    () => (multiline ? TextAreaInput : TextInput),
    [multiline]
  );

  return (
    <FieldWrapper
      helperText={helperText}
      horizontal={horizontal}
      required={required}
      warning={warning}
      error={error}
      label={label}
      name={name}
      more={
        max ? (
          <AnimatedText
            className={styles.rightAnimation}
            value={Math.max(0, max - (value || "").length).toString()}
          />
        ) : undefined
      }
    >
      <Input
        required={required}
        value={value}
        name={name}
        max={max}
        {...rest}
      />
    </FieldWrapper>
  );
}
