import { ReactNode } from "react";
import type InputWrapperProps from "../InputWrapper/props";

export default interface Props extends Omit<InputWrapperProps, "children"> {
  setValue: (value: null | string) => void;
  autoComplete?: string;
  value: null | string;
  required?: boolean;
  max?: number;
  name: string;
}
