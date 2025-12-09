import type { ReactNode } from "react";
import styles from "./Container.module.scss";

interface IProps {
  children: ReactNode;
}

function Container({ children }: IProps) {
  return <div className={styles.container}>{children}</div>;
}

export default Container;
