import { Flex } from "antd";
import styles from "./TripItemAllTime.module.scss";
import { getHoursAndMinute } from "@/shared/lib/getHoursAndMinute";
import { useTranslation } from "react-i18next";
import TripDistanceIcon from "../../TripDistanceIcon/TripDistanceIcon";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";

interface IProps {
  departureTime: string;
  arrivalTime: string;
}

function TripItemAllTime({ departureTime, arrivalTime }: IProps) {
  const { t } = useTranslation();
  const { sm } = useResponsive();

  return (
    <Flex
      vertical
      align="center"
      justify="center"
      gap={3}
      className={styles.wrapper}
      flex={1}
    >
      <Flex gap={5} align="center">
        <span>
          {getHoursAndMinute(departureTime, arrivalTime).hours}
          {t("hours")}
        </span>
        {getHoursAndMinute(departureTime, arrivalTime).minutes !== 0 && (
          <span>
            {getHoursAndMinute(departureTime, arrivalTime).minutes}
            {t("minutes")}
          </span>
        )}
      </Flex>
      <TripDistanceIcon width={sm ? 120 : 75} />
    </Flex>
  );
}

export default TripItemAllTime;
