import { Select } from "antd";
import { useTranslation } from "react-i18next";
import styles from "./TicketSelect.module.scss";
import type { ICity } from "@/pages/HomePage/model/types";
import { useCallback, useState } from "react";

interface IProps {
  placeholder: string;
  fromVal?: string;
  onChange: (value: string) => void;
  changeCityEnabled: () => void;
  isLoading: boolean;
  data?: ICity[];
}

function TicketSelect({
  placeholder,
  fromVal,
  onChange,
  changeCityEnabled,
  isLoading,
  data,
}: IProps) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const onClick = useCallback(() => {
    setOpen(true);
    changeCityEnabled();
  }, [changeCityEnabled]);

  const onChangeSelect = useCallback(
    (val: string) => {
      setOpen(false);
      onChange(val);
    },
    [onChange]
  );

  return (
    <Select
      showSearch={{ optionFilterProp: "label" }}
      placeholder={t(placeholder)}
      allowClear
      className={styles.blockItem}
      value={fromVal}
      onChange={(val) => onChangeSelect(val)}
      onClick={onClick}
      loading={isLoading}
      options={data?.map((el) => ({
        label: el.name,
        value: el.code,
      }))}
      open={open}
    />
  );
}

export default TicketSelect;
