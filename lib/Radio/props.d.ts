import { ReactNode } from "react";

type OptionValue = unknown | number | string | boolean | null;

export interface RadioOption<V extends OptionValue = OptionValue> {
  value: V;
  label: ReactNode;
}

export default interface Props<V extends OptionValue = OptionValue> {
  setValue: (value: V | null) => void;
  options: RadioOption<V>[];
  value: V | null;
  name?: string;
  /**
   * Choose between direction
   * column or row
   * @default 'row'
   */
  dir?: "row" | "col";
}
