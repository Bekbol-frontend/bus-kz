import type { ReactNode } from "react";
import styles from "./Section.module.scss";
import { clsx } from "@/shared/lib/clsx";

interface IProps {
  children: ReactNode;
  className?: string;
}

function Section({ children, className = "" }: IProps) {
  return (
    <section className={clsx([styles.section, className])}>{children}</section>
  );
}

export default Section;
