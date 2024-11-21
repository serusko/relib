import type Props from "./props";
import { forwardRef } from "react";

import sprite from "./sprite.svg";

// https://iconoir.com/
function Icon(
  { size = 20, name }: Props,
  ref: React.RefAttributes<SVGSVGElement>["ref"]
) {
  return (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24">
      <use xlinkHref={`${sprite}#${name}`} />
    </svg>
  );
}

export default forwardRef(Icon);
