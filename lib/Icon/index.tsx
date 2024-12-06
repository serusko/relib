import type Props from "./props";
import { forwardRef, lazy, Suspense, useMemo } from "react";

import type IconName from "./dist/IconName";
import Loading from "./Loading";

// https://iconoir.com/
function Icon(
  { size, name, className }: Props,
  ref: React.RefAttributes<any>["ref"]
) {
  const loading = useMemo(
    () => <Loading style={{ width: size, height: size }} />,
    [size]
  );

  const I = useMemo(
    () => lazy(() => import(`./dist/${name}.svg?react`)),
    [name]
  );

  if (name === "loading") {
    return loading;
  }

  return (
    <Suspense fallback={loading}>
      <I className={className} ref={ref} style={{ width: size }} />
    </Suspense>
  );
}

export type { IconName };

export default forwardRef(Icon);
