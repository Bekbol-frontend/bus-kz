import { Select } from "antd";
import { useTranslation } from "react-i18next";
import styles from "./TicketSelect.module.scss";
import type { ICity } from "@/pages/HomePage/model/types";

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
  onChange: onChangeFrom,
  changeCityEnabled,
  isLoading,
  data,
}: IProps) {
  const { t } = useTranslation();

  return (
    <Select
      showSearch={{ optionFilterProp: "label" }}
      placeholder={t(placeholder)}
      allowClear
      className={styles.blockItem}
      value={fromVal}
      onChange={onChangeFrom}
      onFocus={changeCityEnabled}
      loading={isLoading}
      options={data?.map((el) => ({
        label: el.name,
        value: el.code,
      }))}
    />
  );
}

export default TicketSelect;
