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

function SearchPage() {
  const { i18n } = useTranslation();
  const { from, to, date } = useStepParams();

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
      <TripItems data={data.data} />
    </SearchPageLayout>
  );
}

export default SearchPage;
