import {
  Button,
  Card,
  Flex,
  Radio,
  Typography,
  type RadioChangeEvent,
} from "antd";
import styles from "./FilterTrip.module.scss";
import { CloseOutlined } from "@ant-design/icons";
import type { SeatTypeCodeEnum } from "@/pages/SearchPage";
import { useMemo, type Dispatch, type SetStateAction } from "react";
import { useTranslation } from "react-i18next";

const { Title } = Typography;

interface IProps {
  filter: "" | SeatTypeCodeEnum;
  setFilter: Dispatch<SetStateAction<"" | SeatTypeCodeEnum>>;
  isMobile?: boolean;
  onCloseDrawer?: () => void;
}

function FilterTrip({ filter, setFilter, isMobile, onCloseDrawer }: IProps) {
  const { t } = useTranslation();

  const options = useMemo(
    () => [
      { value: "1", label: t("Sedentary") },
      { value: "2", label: t("Sleeper") },
    ],
    [t]
  );

  const onChange = ({ target: { value } }: RadioChangeEvent) => {
    setFilter(value);

    if (isMobile && onCloseDrawer) {
      onCloseDrawer();
    }
  };

  if (isMobile) {
    return (
      <Radio.Group
        value={filter}
        options={[...options, { value: "", label: t("All") }]}
        onChange={onChange}
        vertical
      />
    );
  }

  return (
    <Card>
      <Flex align="center" justify="space-between" className={styles.flex}>
        <Title style={{ marginBottom: 0 }} level={5}>
          {t("Filter")}
        </Title>
        <Button
          icon={<CloseOutlined />}
          type="text"
          onClick={() => setFilter("")}
        />
      </Flex>
      <Radio.Group
        value={filter}
        options={options}
        onChange={onChange}
        vertical
      />
    </Card>
  );
}

export default FilterTrip;
