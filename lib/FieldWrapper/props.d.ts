import { PropsWithChildren, ReactNode } from "react";

export default interface Props extends PropsWithChildren {
  name: string;
  vertical?: string;
  helperText?: ReactNode;
  more?: ReactNode;
  error?: ReactNode;
  warning?: ReactNode;
  label?: ReactNode;
  required?: boolean;
  moreHelper?: ReactNode;
}
