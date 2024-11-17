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
   * so Label is next to Input
   * split 1 to 3 with input field
   */
  horizontal?: boolean;
}
