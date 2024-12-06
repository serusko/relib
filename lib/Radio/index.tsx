import Props, { OptionValue } from "./props";

import styles from "./index.module.css";

export default function Radio<V extends OptionValue>({
  value: fieldValue,
  dir = "row",
  setValue,
  options,
}: Props<V>) {
  return (
    <div
      className={styles.container}
      aria-orientation={dir === "row" ? "horizontal" : "vertical"}
    >
      {options.map(({ value, label }, index) => (
        <label className={styles.option} key={index}>
          <input
            checked={value === fieldValue}
            type="radio"
            onChange={() => setValue(value === fieldValue ? null : value)}
          />
          <span>{label}</span>
        </label>
      ))}
    </div>
  );
}
