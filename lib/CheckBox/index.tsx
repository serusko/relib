import type Props from "./props";

import styles from "./index.module.css";

// https://www.justinmind.com/ui-design/toggle-button-patterns-examples
export default function CheckBox({ setValue, value, name, text, rtl }: Props) {
  return (
    <label className={styles.container}>
      {rtl && <div className={styles.text}>{text}</div>}
      <input
        onChange={() => setValue(!value)}
        className={styles.input}
        id={`input-${name}`}
        checked={!!value}
        type="checkbox"
        name={name}
      />
      {/* TODO: refactor class-name to enable "peer" */}
      {!rtl && <div className={styles.text}>{text}</div>}
    </label>
  );
}
