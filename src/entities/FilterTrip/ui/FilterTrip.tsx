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
import { filterTripItems } from "../module/items";
import type { SeatTypeCodeEnum } from "@/pages/SearchPage";
import type { Dispatch, SetStateAction } from "react";

const { Title } = Typography;

interface IProps {
  filter: "" | SeatTypeCodeEnum;
  setFilter: Dispatch<SetStateAction<"" | SeatTypeCodeEnum>>;
  isMobile?: boolean;
  onCloseDrawer?: () => void;
}

function FilterTrip({ filter, setFilter, isMobile, onCloseDrawer }: IProps) {
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
        options={[...filterTripItems, { value: "", label: "All" }]}
        onChange={onChange}
        vertical
      />
    );
  }

  return (
    <Card>
      <Flex align="center" justify="space-between" className={styles.flex}>
        <Title style={{ marginBottom: 0 }} level={5}>
          Фильтровать
        </Title>
        <Button
          icon={<CloseOutlined />}
          type="text"
          onClick={() => setFilter("")}
        />
      </Flex>
      <Radio.Group
        value={filter}
        options={filterTripItems}
        onChange={onChange}
        vertical
      />
    </Card>
  );
}

export default FilterTrip;
