import CheckBox from "../CheckBox";
import FieldWrapper from "../FieldWrapper";
import Toggle from "../Toggle";

import type Props from "./props.d";

export default function ToggleField({
  setValue,
  checkbox,
  value,
  label,
  text,
  name,
  rtl,
  ...props
}: Props) {
  return (
    <FieldWrapper name={name} {...props} label={text ? label : label || <></>}>
      {checkbox ? (
        <CheckBox
          setValue={setValue}
          text={text || label}
          value={value}
          name={name}
          rtl={rtl}
        />
      ) : (
        <Toggle
          setValue={setValue}
          text={text || label}
          value={value}
          name={name}
          rtl={rtl}
        />
      )}
    </FieldWrapper>
  );
}
