import clsx from "clsx";

import styles from "./Title.module.css";

export interface Props extends React.ComponentProps<"h1"> {
  primary?: boolean;
  title: string;
}

export default function Title({ primary = false, title, ...props }: Props) {
  const style = clsx(styles.title, {
    [styles["title--primary"]]: primary,
  });

  return (
    <h1 className={style} {...props}>
      {title}
    </h1>
  );
}
