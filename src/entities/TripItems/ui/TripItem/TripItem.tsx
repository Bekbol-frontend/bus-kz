import { MinusOutlined } from "@ant-design/icons";
import { Card, Col, Flex, Typography } from "antd";
import type { ITrip } from "@/pages/SearchPage";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import TripItemInfo from "./TripInfo/TripItemInfo";
import TripItemAllTime from "./TrimItemAllTime/TripItemAllTime";
import styles from "./TripItem.module.scss";

const { Title, Paragraph } = Typography;

interface IProps {
  data: ITrip;
}

function TripItem({ data }: IProps) {
  const { sm } = useResponsive();

  const { bus, route } = data;
  const { brand, model } = bus;
  const {
    fromCity,
    toCity,
    fromStation,
    toStation,
    departureTime,
    arrivalTime,
  } = route;

  return (
    <Col span={24}>
      <Card hoverable className={styles.card}>
        <Flex vertical={!sm} justify="space-between" gap={20}>
          <Flex vertical>
            <Title level={4}>
              {brand} {model}
            </Title>
            <Paragraph type="secondary" className={styles.fromCityDesc}>
              {fromCity} <MinusOutlined /> {toCity}
            </Paragraph>
          </Flex>

          <Flex
            align="center"
            justify="space-between"
            gap={10}
            className={styles.right}
          >
            <TripItemInfo time={departureTime} station={fromStation} />

            <TripItemAllTime
              departureTime={departureTime}
              arrivalTime={arrivalTime}
            />

            <TripItemInfo
              time={arrivalTime}
              station={toStation}
              positionRight
            />
          </Flex>
        </Flex>
      </Card>
    </Col>
  );
}

export default TripItem;
