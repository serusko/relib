import type { IconName } from "../Icon";

export default interface Props extends React.ComponentProps<"button"> {
  /**
   * @default "button"
   */
  type?: "button" | "submit" | "reset";
  size?: "small" | "medium" | "large";
  leadingIcon?: IconName;
  trailingICon?: IconName;
  /**
   * Indicate Loading status
   */
  isLoading?: boolean;
  /**
   * @default "default"
   */
  variant?: "primary" | "outline" | "default" | "text";
  fullWidth?: boolean;
  label?: string;
  isActive?: boolean;
  chevron?: boolean;
}
