import type { ITrip } from "@/pages/SearchPage/model/types";
import { MinusOutlined } from "@ant-design/icons";
import { Card, Col, Flex, Typography } from "antd";
import { useTranslation } from "react-i18next";
import styles from "./TripItem.module.scss";
import TripDistanceIcon from "../TripDistanceIcon/TripDistanceIcon";
import dayjs from "dayjs";

const { Title, Paragraph } = Typography;

interface IProps {
  data: ITrip;
}

function TripItem({ data }: IProps) {
  const { t } = useTranslation();

  const { bus, route, price } = data;
  const { brand, seatType, seatsCount, model } = bus;
  const { fromCity, toCity, fromStation, toStation, distanceKm, duration } =
    route;

  const formatted = dayjs(duration, "HH:mm:ss").format("H");

  return (
    <Col span={24}>
      <Card className={styles.card} hoverable>
        <Title level={4}>
          {t("Brand")}: {brand}
        </Title>
        <Paragraph type="secondary">
          {fromCity} <MinusOutlined /> {toCity}
        </Paragraph>

        <Flex
          className={styles.flex}
          align="center"
          justify="space-between"
          gap={20}
        >
          <Paragraph>{fromStation}</Paragraph>

          <Flex vertical align="center" justify="center" gap={3}>
            <Paragraph type="secondary" code>
              {distanceKm} {t("km")}
            </Paragraph>
            <TripDistanceIcon />
            <Paragraph type="secondary" code>
              {formatted} {t("hours")}
            </Paragraph>
          </Flex>

          <Paragraph>{toStation}</Paragraph>
        </Flex>

        <Paragraph>
          {t("Seat type")}: {seatType}
        </Paragraph>
        <Paragraph>
          {t("Model")}: {brand} {model}
        </Paragraph>
        <Paragraph>
          {t("Seats count")}: {seatsCount}
        </Paragraph>
        <Paragraph className={styles.price}>
          {t("Price")}: {price} &#8376;
        </Paragraph>
      </Card>
    </Col>
  );
}

export default TripItem;
