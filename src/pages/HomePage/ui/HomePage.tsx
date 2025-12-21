import { Container } from "@/shared/ui/Container";
import { Section } from "@/shared/ui/Section";
import { Typography } from "antd";
import styles from "./HomePage.module.scss";
import { useTranslation } from "react-i18next";
import SearchingTicket from "./SearchingTicket/SearchingTicket";
import { StepsTicket } from "@/shared/ui/StepsTicket";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";

const { Title } = Typography;

function HomePage() {
  const { t } = useTranslation();
  const { xs } = useResponsive();

  return (
    <Section>
      <Container>
        <Title level={ xs ? 4 : 2 } className={styles.title}>{t("Buy or book tickets")}</Title>
        <SearchingTicket />
        <StepsTicket />
      </Container>
    </Section>
  );
}

export default HomePage;
