import clsx from "clsx";
import Props from "./props";

export default function Icon(props: Props) {
  return <span className={clsx(`icon-${props.name}`)}></span>;
}
