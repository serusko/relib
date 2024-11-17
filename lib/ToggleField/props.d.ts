import { ReactNode } from "react";

import type FieldWrapperProps from "../FieldWrapper/props";
import type ToggleProps from "../Toggle/props";

export default interface Props extends FieldWrapperProps, ToggleProps {
  checkbox?: boolean;
}
