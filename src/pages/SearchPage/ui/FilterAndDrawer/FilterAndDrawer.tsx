import { FilterTrip } from "@/entities/FilterTrip";
import { FilterOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import type { Dispatch, SetStateAction } from "react";
import type { SeatTypeCodeEnum } from "../../model/types";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<FilterOutlined />}>
        {t("Filter")}
      </Button>

      <Drawer title={t("Filter")} onClose={onCloseDrawer} open={openDrawer}>
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
