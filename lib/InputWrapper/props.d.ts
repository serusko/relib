import { ReactNode } from "react";

export default interface Props {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  disabled?: boolean;
  children: ReactNode;
  rightItem?: ReactNode;
  leftItem?: ReactNode;
}
