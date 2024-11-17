import type Props from "./props";

import styles from "./index.module.css";

// https://www.justinmind.com/ui-design/toggle-button-patterns-examples
export default function Toggle({ setValue, value, name, text, rtl }: Props) {
  return (
    <label className={styles.container}>
      {rtl && <div className={styles.text}>{text}</div>}
      <input
        onChange={() => setValue(!value)}
        className="sr-only peer"
        id={`input-${name}`}
        checked={!!value}
        type="checkbox"
        name={name}
      />
      {/* TODO: refactor class-name to enable "peer" */}
      <div className="relative w-11 min-w-11 h-6 bg-neutral-300 rounded-full peer peer-focus:ring-4 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-500" />
      {!rtl && <div className={styles.text}>{text}</div>}
    </label>
  );
}
