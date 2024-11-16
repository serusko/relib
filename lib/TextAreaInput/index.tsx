import InputWrapper from "../InputWrapper";
import Props from "./props";

import styles from "./index.module.css";
import { useEffect, useRef } from "react";

export default function TextAreaInput({
  autoComplete,
  required,
  setValue,
  disabled,
  value,
  name,
  max,
  rows = 2,
}: Props) {
  const ref = useRef<HTMLTextAreaElement>(null);

  const resizeTextarea = () => {
    if (ref.current) {
      ref.current.style.height = "auto"; // Reset the height
      ref.current.style.height = `${ref.current.scrollHeight}px`; // Set to the scroll height
    }
  };

  useEffect(() => {
    resizeTextarea();
  }, [value]);

  return (
    <InputWrapper disabled={disabled}>
      <textarea
        rows={rows}
        onChange={(e) => {
          setValue(e.currentTarget.value || null);
        }}
        autoComplete={autoComplete}
        className={styles.input}
        id={`input-${name}`}
        value={value || ""}
        required={required}
        disabled={disabled}
        maxLength={max}
        ref={ref}
        name={name}
      />
    </InputWrapper>
  );
}
