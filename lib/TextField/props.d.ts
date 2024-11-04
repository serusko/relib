import type TextInputProps from "../TextInput/props";
import type FieldWrapperProps from "../FieldWrapper/props";

export default interface Props extends TextInputProps, FieldWrapperProps {
  /** Max number of characters */
  max?: number;
}
