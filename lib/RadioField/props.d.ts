import { ReactNode } from "react";

import type FieldWrapperProps from "../FieldWrapper/props";
import type RadioProps from "../Radio/props";

export default interface Props<V extends OptionValue = OptionValue>
  extends FieldWrapperProps,
    RadioProps<V> {}
