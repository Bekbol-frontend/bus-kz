import { MinusOutlined } from "@ant-design/icons";
import { Card, Col, Flex, Typography } from "antd";
import { useTranslation } from "react-i18next";
import styles from "./TripItem.module.scss";
import TripDistanceIcon from "../TripDistanceIcon/TripDistanceIcon";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import "dayjs/locale/kk";
import "dayjs/locale/en";
import type { ITrip } from "@/pages/SearchPage";
import { getHoursAndMinute } from "@/shared/lib/getHoursAndMinute";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import { clsx } from "@/shared/lib/clsx";

const { Title, Paragraph } = Typography;

interface IProps {
  data: ITrip;
}

function TripItem({ data }: IProps) {
  const { t, i18n } = useTranslation();
  const { sm } = useResponsive();

  console.log(sm);

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

  const departTime = dayjs(departureTime).format("HH:mm");
  const arivalTime = dayjs(arrivalTime).format("HH:mm");

  return (
    <Col span={24}>
      <Card className={styles.card} hoverable>
        <Flex vertical={!sm} justify="space-between">
          <Flex vertical>
            <Title level={4}>
              {brand} {model}
            </Title>
            <Paragraph type="secondary">
              {fromCity} <MinusOutlined /> {toCity}
            </Paragraph>
          </Flex>

          <Flex align="center" justify="space-between" gap={20}>
            <Flex vertical className={styles.innerFlex}>
              <div className={styles.wrapperSpan}>
                <span className={styles.spanTime}>{departTime}</span>
                <span className={styles.dateSpan}>
                  {dayjs(departureTime)
                    .locale(i18n.language === "kz" ? "kk" : i18n.language)
                    .format(
                      i18n.language === "ru" ? "DD MMM dd" : "DD MMM. dd"
                    )}
                </span>
              </div>
              <Paragraph
                type="secondary"
                className={clsx([styles.notMargin, styles.descStantion])}
              >
                {fromStation}
              </Paragraph>
            </Flex>

            <Flex
              vertical
              align="center"
              justify="center"
              gap={3}
              className={styles.innerFlex}
            >
              <Flex gap={5} align="center">
                <Paragraph
                  type="secondary"
                  className={styles.notMargin}
                  style={{
                    fontSize: "14px",
                  }}
                >
                  {getHoursAndMinute(departureTime, arrivalTime).hours}
                  {t("hours")}
                </Paragraph>
                {getHoursAndMinute(departureTime, arrivalTime).minutes !==
                  0 && (
                  <Paragraph
                    type="secondary"
                    className={styles.notMargin}
                    style={{
                      fontSize: "14px",
                    }}
                  >
                    {getHoursAndMinute(departureTime, arrivalTime).minutes}
                    {t("minutes")}
                  </Paragraph>
                )}
              </Flex>
              <TripDistanceIcon />
            </Flex>

            <Flex
              vertical
              className={clsx([styles.flexRight, styles.innerFlex])}
            >
              <div className={styles.wrapperSpan}>
                <span className={styles.spanTime}>{arivalTime}</span>
                <span className={styles.dateSpan}>
                  {dayjs(arrivalTime)
                    .locale(i18n.language === "kz" ? "kk" : i18n.language)
                    .format(
                      i18n.language === "ru" ? "DD MMM dd" : "DD MMM. dd"
                    )}
                </span>
              </div>
              <Paragraph
                type="secondary"
                className={clsx([styles.notMargin, styles.descStantion])}
              >
                {toStation}
              </Paragraph>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </Col>
  );
}

export default TripItem;
