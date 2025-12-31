import { SortTrip, SortTripEnum } from "@/entities/SortTrip";
import { SortAscendingOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import type { Dispatch, SetStateAction } from "react";

interface IProps {
  showDrawer: () => void;
  onCloseDrawer: () => void;
  openDrawer: boolean;
  sort: "" | SortTripEnum
  setSort: Dispatch<SetStateAction<"" | SortTripEnum>>
}

function SortAndDrawer({ showDrawer, onCloseDrawer, openDrawer, sort, setSort }:IProps) {
  return (
    <>
      <Button
        type="primary"
        onClick={showDrawer}
        icon={<SortAscendingOutlined />}
      >
        Сортировать
      </Button>

      <Drawer title="Sort trip" onClose={onCloseDrawer} open={openDrawer}>
        <SortTrip
          sort={sort}
          setSort={setSort}
          isMobile
          onCloseDrawer={onCloseDrawer}
        />
      </Drawer>
    </>
  );
}

export default SortAndDrawer;
