import clsx from "clsx";
import { useEffect, useRef } from "react";

import styles from "./index.module.css";
import Props from "./props";

export default function AnimatedText({ value, className }: Props) {
  const containerRef = useRef<any>();
  const prev = useRef<unknown>(undefined);

  useEffect(() => {
    if (containerRef.current && value !== prev.current) {
      prev.current = value;

      const item = document.createElement("div");
      item.innerText = value;
      if (containerRef.current.childElementCount === 0) {
        item.classList.add("init");
      }
      containerRef.current.append(item);
    }
  }, [value]);

  return (
    <div className={clsx(styles.animator, className)} ref={containerRef}></div>
  );
}
