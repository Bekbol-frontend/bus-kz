import { useCallback, useState } from "react";
import {
  Button,
  Card,
  Col,
  DatePicker,
  Row,
  Select,
  type DatePickerProps,
  notification,
} from "antd";
import styles from "./SearchingTicket.module.scss";
import { useTranslation } from "react-i18next";
import { useAppContext } from "@/shared/lib/hooks/useAppContext";
import dayjs from "dayjs";
import { StepEnum } from "@/shared/constants";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/shared/config/router";
import { useQuery } from "@tanstack/react-query";
import { homeService } from "../../model/services";
import { queryKeys } from "@/shared/constants/queryKeys";

type ValueTypeState = string | undefined;

function SearchingTicket() {
  const { t } = useTranslation();
  const [api, contextHolder] = notification.useNotification();

  const { searchParams, setSearchParams } = useAppContext();

  const from = searchParams.get(StepEnum.FROM) || undefined;
  const to = searchParams.get(StepEnum.TO) || undefined;
  const date = searchParams.get(StepEnum.DATE) || undefined;

  const [fromVal, setFromVal] = useState<ValueTypeState>(from);
  const [toVal, setToVal] = useState<ValueTypeState>(to);
  const [dateVal, setDateVal] = useState<ValueTypeState>(date);
  const [cityEnabled, setCityEnabled] = useState(false)

  const navigate = useNavigate();
  const { i18n } = useTranslation()

  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.city, i18n.language],
    queryFn: homeService.getCity,
    enabled: cityEnabled
  })

  const changeCityEnabled = useCallback(() => {
    setCityEnabled(true)
  }, [])

  const onChangeFrom = useCallback((value: ValueTypeState) => {
    setFromVal(value);
  }, []);

  const onChangeTo = useCallback((value: ValueTypeState) => {
    setToVal(value);
  }, []);

  const onChangeDate: DatePickerProps["onChange"] = useCallback(
    (value: dayjs.Dayjs | null) => {
      if (value) {
        setDateVal(dayjs(value).format("YYYY-MM-DD"));
      } else {
        setDateVal(undefined);
      }
    },
    []
  );

  const disabledDate = useCallback((current: dayjs.Dayjs) => {
    return current && current < dayjs().startOf("day");
  }, []);

  const onClickSearch = useCallback(() => {
    if (!fromVal || !toVal || !dateVal) {
      api.warning({
        title: "Заполните все поля",
      });
      return;
    }

    if (fromVal === toVal) {
      api.warning({
        title: "Станции отправления и прибытия не могут быть одинаковыми",
      });
      return;
    }

    const params = new URLSearchParams();

    params.append(StepEnum.FROM, fromVal);
    params.append(StepEnum.TO, toVal);
    params.append(StepEnum.DATE, dateVal);
    params.append(StepEnum.STEP, "1");

    setSearchParams(params);

    navigate({
      pathname: appRoutes.search,
      search: params.toString(),
    });
  }, [api, fromVal, toVal, dateVal, navigate]);

  return (
    <>
      {contextHolder}
      <Card className={styles.cardWrapper}>
        <Row gutter={5} className={styles.rowWrapper}>
          <Col span={6}>
            <Select
              showSearch={{ optionFilterProp: "label" }}
              placeholder={t("From")}
              allowClear
              className={styles.blockItem}
              value={fromVal}
              onChange={onChangeFrom}
              onClick={changeCityEnabled}
              loading={isLoading}
            />
          </Col>
          <Col span={6}>
            <Select
              showSearch={{ optionFilterProp: "label" }}
              placeholder={t("To")}
              allowClear
              className={styles.blockItem}
              value={toVal}
              onChange={onChangeTo}
              onClick={changeCityEnabled}
              loading={isLoading}
            />
          </Col>
          <Col span={6}>
            <DatePicker
              placeholder={t("Select date")}
              format="YYYY.MM.DD"
              value={dateVal ? dayjs(dateVal, "YYYY-MM-DD") : null}
              onChange={onChangeDate}
              className={styles.blockItem}
              disabledDate={disabledDate}
            />
          </Col>
          <Col span={6}>
            <Button
              type="primary"
              className={styles.blockItem}
              onClick={onClickSearch}
              disabled={!fromVal || !toVal || !dateVal}
            >
              {t("Find a ticket")}
            </Button>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default SearchingTicket;
