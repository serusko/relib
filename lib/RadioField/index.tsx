import FieldWrapper from "../FieldWrapper";
import Radio from "../Radio";
import { OptionValue } from "../Radio/props";

import type Props from "./props.d";

export default function RadioField<V extends OptionValue = OptionValue>({
  value,
  name,
  setValue,
  options,
  dir,
  ...props
}: Props<V>) {
  return (
    <FieldWrapper name={name} {...props}>
      <Radio
        setValue={setValue}
        options={options}
        value={value}
        name={name}
        dir={dir}
      />
    </FieldWrapper>
  );
}
