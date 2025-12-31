import {
  Button,
  Card,
  Flex,
  Radio,
  type RadioChangeEvent,
  Typography,
} from "antd";
import type { Dispatch, SetStateAction } from "react";
import { sortOptionItems } from "../model/items";
import type { SortTripEnum } from "../model/types";
import { CloseOutlined } from "@ant-design/icons";
import styles from "./SortTrip.module.scss";

const { Title } = Typography;

interface IProps {
  sort: string;
  setSort: Dispatch<SetStateAction<"" | SortTripEnum>>;
}

function SortTrip({ sort, setSort }: IProps) {
  const onChange = ({ target: { value } }: RadioChangeEvent) => {
    setSort(value);
  };

  return (
    <Card>
      <Flex align="center" justify="space-between" className={styles.flex}>
        <Title style={{ marginBottom: 0 }} level={5}>
          Сортировать
        </Title>
        <Button
          icon={<CloseOutlined />}
          type="text"
          onClick={() => setSort("")}
        />
      </Flex>
      <Radio.Group
        value={sort}
        options={sortOptionItems}
        onChange={onChange}
        vertical
      />
    </Card>
  );
}

export default SortTrip;
