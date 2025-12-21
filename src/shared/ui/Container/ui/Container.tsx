import type { ReactNode } from "react";
import styles from "./Container.module.scss";
import { clsx } from "@/shared/lib/clsx";

interface IProps {
  children: ReactNode;
  className?: string
}

function Container({ children, className = "" }: IProps) {
  return <div className={clsx([styles.container, className])}>{children}</div>;
}

export default Container;
