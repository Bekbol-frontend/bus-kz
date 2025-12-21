import { Empty, Flex } from "antd";
import styles from "./EmptyData.module.scss";

function EmptyData() {
  return (
    <Flex align="center" justify="center" className={styles.emptyDataWrapper}>
      <Empty />
    </Flex>
  );
}

export default EmptyData;
