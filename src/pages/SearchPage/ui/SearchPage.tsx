import { queryKeys } from "@/shared/constants/queryKeys";
import { useStepParams } from "@/shared/lib/hooks/useStepParams";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { getTripSearch } from "../model/services";
import { EmptyData } from "@/shared/ui/EmptyData";
import { ErrorContent } from "@/shared/ui/ErrorContent";
import { TripItems } from "@/entities/TripItems";
import { LoadingPage } from "@/shared/ui/LoadingPage";
import SearchPageLayout from "./SearchPageLayout/SearchPageLayout";
import { Col, Row } from "antd";
import styles from "./SearchPage.module.scss";
import { SortTrip, SortTripEnum } from "@/entities/SortTrip";
import { useState } from "react";

function SearchPage() {
  const { i18n } = useTranslation();
  const { from, to, date } = useStepParams();
  const [sort, setSort] = useState<SortTripEnum | "">("");

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [queryKeys.tripSearch, i18n.language, from, to, date],
    queryFn: () => {
      if (from && to && date) {
        return getTripSearch(from, to, date);
      }
    },
    enabled: !!from && !!to && !!date,
  });

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError && error) {
    return (
      <SearchPageLayout>
        <ErrorContent title="error" />
      </SearchPageLayout>
    );
  }

  if (!data?.data.length) {
    return (
      <SearchPageLayout>
        <EmptyData />
      </SearchPageLayout>
    );
  }

  return (
    <SearchPageLayout>
      <Row className={styles.rowWrapper} gutter={[15, 15]}>
        <Col span={6}>
          <SortTrip sort={sort} setSort={setSort} />
        </Col>
        <Col span={18}>
          <TripItems data={data.data} sort={sort} />
        </Col>
      </Row>
    </SearchPageLayout>
  );
}

export default SearchPage;
