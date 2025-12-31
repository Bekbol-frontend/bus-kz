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
import { Col, Flex, Row } from "antd";
import styles from "./SearchPage.module.scss";
import { SortTrip, SortTripEnum } from "@/entities/SortTrip";
import { useCallback, useState } from "react";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import SortAndDrawer from "./SortAndDrawer/SortAndDrawer";

function SearchPage() {
  const { i18n } = useTranslation();
  const { from, to, date } = useStepParams();
  const [sort, setSort] = useState<SortTripEnum | "">("");
  const [openDrawer, setOpenDrawer] = useState(false);
  const { sm } = useResponsive();

  const showDrawer = useCallback(() => {
    setOpenDrawer(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setOpenDrawer(false);
  }, []);

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
        {sm && (
          <Col span={6}>
            <SortTrip sort={sort} setSort={setSort} />
          </Col>
        )}
        {!sm && (
          <Col span={24}>
            <Flex>
              <SortAndDrawer
                showDrawer={showDrawer}
                onCloseDrawer={onCloseDrawer}
                openDrawer={openDrawer}
                sort={sort}
                setSort={setSort}
              />
            </Flex>
          </Col>
        )}
        <Col span={sm ? 18 : 24}>
          <TripItems data={data.data} sort={sort} />
        </Col>
      </Row>
    </SearchPageLayout>
  );
}

export default SearchPage;
