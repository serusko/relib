import IconName from "./dist/IconName";

export default interface Props {
  name: "loading" | IconName;
  /**
   * Icon W x H
   * @defaults {20}
   */
  size?: number | string;

  className?: string;
}
