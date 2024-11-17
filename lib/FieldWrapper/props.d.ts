import { PropsWithChildren, ReactNode } from "react";

export default interface Props extends PropsWithChildren {
  name: string;
  vertical?: string;
  helperText?: ReactNode;
  more?: ReactNode;
  error?: ReactNode;
  warning?: ReactNode;
  label?: ReactNode;
  /**
   * Field is required, so display Asterisk
   */
  required?: boolean;
  /**
   *
   */
  more?: ReactNode;
  /**
   * Horizontal mode
   * si Label is next to Input
   */
  horizontal?: boolean;
}
