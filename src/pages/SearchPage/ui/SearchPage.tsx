import { queryKeys } from "@/shared/constants/queryKeys";
import { useStepParams } from "@/shared/lib/hooks/useStepParams";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { getTripSearch } from "../model/services";
import { EmptyData } from "@/shared/ui/EmptyData";
import { ErrorContent } from "@/shared/ui/ErrorContent";
import { TripItems } from "@/entities/TripItems";
import SearchPageWrapper from "./SearchPageWrapper/SearchPageWrapper";

function SearchPage() {
  const { i18n } = useTranslation();
  const { from, to, date } = useStepParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [queryKeys.tripSearch, i18n.language],
    queryFn: () => {
      if (from && to && date) {
        return getTripSearch(from, to, date);
      }
    },
    enabled: !!from && !!to && !!date,
  });

  if (isLoading) {
    return <SearchPageWrapper loading={isLoading} />;
  }

  if (isError && error) {
    return (
      <SearchPageWrapper>
        <ErrorContent title="error" />
      </SearchPageWrapper>
    );
  }

  if (!data?.data.length) {
    return (
      <SearchPageWrapper>
        <EmptyData />
      </SearchPageWrapper>
    );
  }

  return (
    <SearchPageWrapper>
      <TripItems data={data.data} />
    </SearchPageWrapper>
  );
}

export default SearchPage;
