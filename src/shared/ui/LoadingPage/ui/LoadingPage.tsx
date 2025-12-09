import { Spin } from "antd";
import { Section } from "../../Section";
import styles from "./LoadingPage.module.scss";

function LoadingPage() {
  return (
    <Section className={styles.sectionLoadingPage}>
      <Spin size="large" />
    </Section>
  );
}

export default LoadingPage;
