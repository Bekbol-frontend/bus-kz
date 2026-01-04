import {
  Button,
  Card,
  Flex,
  Radio,
  type RadioChangeEvent,
  Typography,
} from "antd";
import { useMemo, type Dispatch, type SetStateAction } from "react";
import { SortTripEnum } from "../model/types";
import { CloseOutlined } from "@ant-design/icons";
import styles from "./SortTrip.module.scss";
import { useTranslation } from "react-i18next";

const { Title } = Typography;

interface IProps {
  sort: string;
  setSort: Dispatch<SetStateAction<"" | SortTripEnum>>;
  isMobile?: boolean;
  onCloseDrawer?: () => void;
}

function SortTrip({ sort, setSort, isMobile, onCloseDrawer }: IProps) {
  const { t } = useTranslation();

  const onChange = ({ target: { value } }: RadioChangeEvent) => {
    setSort(value);
    if (isMobile && onCloseDrawer) {
      onCloseDrawer();
    }
  };

  const options = useMemo(
    () => [
      {
        label: t("By price, cheap first"),
        value: SortTripEnum.PRICE,
      },
      {
        label: t("Departure time"),
        value: SortTripEnum.DEPARTURE_TIME,
      },
      {
        label: t("Arrival time"),
        value: SortTripEnum.ARRIVAL_TIME,
      },
      {
        label: t("Number of seats"),
        value: SortTripEnum.SEATS_COUNT,
      },
    ],
    [t]
  );

  if (isMobile) {
    return (
      <Radio.Group
        value={sort}
        options={options}
        onChange={onChange}
        vertical
      />
    );
  }

  return (
    <Card>
      <Flex align="center" justify="space-between" className={styles.flex}>
        <Title style={{ marginBottom: 0 }} level={5}>
          {t("Sort")}
        </Title>
        <Button
          icon={<CloseOutlined />}
          type="text"
          onClick={() => setSort("")}
        />
      </Flex>
      <Radio.Group
        value={sort}
        options={options}
        onChange={onChange}
        vertical
      />
    </Card>
  );
}

export default SortTrip;
