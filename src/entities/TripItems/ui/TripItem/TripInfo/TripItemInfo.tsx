import { Flex, Typography } from "antd";
import styles from "./TripItemInfo.module.scss";
import { useTranslation } from "react-i18next";
import { clsx } from "@/shared/lib/clsx";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import "dayjs/locale/kk";
import "dayjs/locale/en";
import LocationImgStation from "@/shared/assets/location-img/location.png";

const { Paragraph } = Typography;

interface IProps {
  time: string;
  station: string;
  positionRight?: boolean;
}

function TripItemInfo({ time, station, positionRight = false }: IProps) {
  const { i18n } = useTranslation();

  const fromatTime = dayjs(time).format("HH:mm");

  return (
    <Flex
      vertical
      className={clsx([styles.wrapper], {
        [styles.positionRight]: positionRight,
      })}
      flex={1}
    >
      <div className={styles.wrapperSpan}>
        <span className={styles.spanTime}>{fromatTime}</span>
        <span className={styles.dateSpan}>
          {dayjs(time)
            .locale(i18n.language === "kz" ? "kk" : i18n.language)
            .format(i18n.language === "ru" ? "DD MMM dd" : "DD MMM. dd")}
        </span>
      </div>
      <Paragraph type="secondary" className={styles.descStantion}>
        <span>
          <img src={LocationImgStation} alt="location" />
        </span>
        {station}
      </Paragraph>
    </Flex>
  );
}

export default TripItemInfo;
