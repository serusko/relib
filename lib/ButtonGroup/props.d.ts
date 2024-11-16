import { ReactElement } from "react";
import type ButtonProps from "../Button/props";

export default interface Props {
  variant?: ButtonProps["variant"];
  children: ReactElement[];
  disabled?: boolean;
}
