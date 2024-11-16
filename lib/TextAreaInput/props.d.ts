import { ReactNode } from "react";
import type InputWrapperProps from "../InputWrapper/props";

export default interface Props
  extends Omit<InputWrapperProps, "children" | "leftIcon" | "rightIcon"> {
  setValue: (value: null | string) => void;
  autoComplete?: string;
  value: null | string;
  required?: boolean;
  max?: number;
  name: string;
  /**
   * min rows to display
   * @default 2
   */
  rows?: number;
}
