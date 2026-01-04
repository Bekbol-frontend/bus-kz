import { FilterTrip } from "@/entities/FilterTrip";
import { FilterOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import type { Dispatch, SetStateAction } from "react";
import type { SeatTypeCodeEnum } from "../../model/types";

interface IProps {
  showDrawer: () => void;
  onCloseDrawer: () => void;
  openDrawer: boolean;
  filter: "" | SeatTypeCodeEnum;
  setFilter: Dispatch<SetStateAction<"" | SeatTypeCodeEnum>>;
}

function FilterAndDrawer({
  showDrawer,
  onCloseDrawer,
  openDrawer,
  filter,
  setFilter,
}: IProps) {
  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<FilterOutlined />}>
        Фильтровать
      </Button>

      <Drawer title="Filter trip" onClose={onCloseDrawer} open={openDrawer}>
        <FilterTrip
          filter={filter}
          setFilter={setFilter}
          isMobile
          onCloseDrawer={onCloseDrawer}
        />
      </Drawer>
    </>
  );
}

export default FilterAndDrawer;
