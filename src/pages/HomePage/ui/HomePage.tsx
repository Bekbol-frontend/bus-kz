import { Container } from "@/shared/ui/Container";
import { Section } from "@/shared/ui/Section";
import { Select, Typography } from "antd";
import styles from "./HomePage.module.scss";
import { useTranslation } from "react-i18next";
import SearchingTicket from "./SearchingTicket/SearchingTicket";
import { StepsTicket } from "@/shared/ui/StepsTicket";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";

const { Title } = Typography;

function HomePage() {
  const { t } = useTranslation();
  const { xs } = useResponsive();

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <Section>
      <Container>
        <Title level={xs ? 4 : 2} className={styles.title}>
          {t("Buy or book tickets")}
        </Title>
        <SearchingTicket />
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: "jack", label: "Jack" },
            { value: "lucy", label: "Lucy" },
            { value: "Yiminghe", label: "yiminghe" },
            { value: "disabled", label: "Disabled", disabled: true },
          ]}
        />
        <StepsTicket />
      </Container>
    </Section>
  );
}

export default HomePage;
