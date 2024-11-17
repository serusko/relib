import { ReactNode } from "react";

export default interface Props {
  /**
   * Text next to switch element, Label is used mostly for field name, but switch can contain different working like:
   * "by accepting T&C ..."
   */
  text?: ReactNode;
  /**
   * boolean or nullable by default value
   */
  value: null | boolean;
  setValue: (val: null | boolean) => void;
  /**
   * Switch order of `switch + label` to `label + switch`
   */
  rtl?: boolean;
  /**
   * Field name for Accessibility
   */
  name?: string;
}
