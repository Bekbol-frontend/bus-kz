import { queryKeys } from "@/shared/constants/queryKeys";
import { useStepParams } from "@/shared/lib/hooks/useStepParams";
import { Container } from "@/shared/ui/Container";
import { Section } from "@/shared/ui/Section";
import { StepsTicket } from "@/shared/ui/StepsTicket";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Button, Spin } from "antd";
import { useTranslation } from "react-i18next";
import { getTripSearch } from "../model/services";
import { EmptyData } from "@/shared/ui/EmptyData";
import { ErrorContent } from "@/shared/ui/ErrorContent";
import styles from "./SearchPage.module.scss";
import { TripItems } from "@/entities/TripItems";

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
    return (
      <Section className={styles.secionLoading}>
        <Spin size="large" />
      </Section>
    );
  }
  if (isError && error) {
    return (
      <Section className={styles.section}>
        <Container>
          <Button type="primary" icon={<ArrowLeftOutlined />}>
            Назад
          </Button>

          <ErrorContent title="error" />

          <StepsTicket />
        </Container>
      </Section>
    );
  }
  if (!data || !data?.data.length)
    return (
      <Section className={styles.section}>
        <Container>
          <Button type="primary" icon={<ArrowLeftOutlined />}>
            Назад
          </Button>

          <EmptyData />

          <StepsTicket />
        </Container>
      </Section>
    );

  return (
    <Section className={styles.section}>
      <Container>
        <Button type="primary" icon={<ArrowLeftOutlined />}>
          Назад
        </Button>

        <TripItems data={data.data} />

        <StepsTicket />
      </Container>
    </Section>
  );
}

export default SearchPage;
