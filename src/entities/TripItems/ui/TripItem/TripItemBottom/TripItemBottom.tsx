import { Card, Flex, Typography } from "antd";
import styles from "./TripItemBottom.module.scss";
import { useTranslation } from "react-i18next";

const { Paragraph, Title } = Typography;

interface IProps {
  seatType: string;
  seatsCount: number;
  price: number;
}

function TripItemBottom({ price, seatType, seatsCount }: IProps) {
  const { t } = useTranslation();

  return (
    <Flex className={styles.wrapper} gap={10}>
      <Card className={styles.card}>
        <Paragraph className={styles.desc} type="secondary">
          {seatType} {seatsCount}
        </Paragraph>
        <Title level={5} className={styles.title}>
          {t("Price from")} {price} ₸
        </Title>
      </Card>
    </Flex>
  );
}

export default TripItemBottom;
