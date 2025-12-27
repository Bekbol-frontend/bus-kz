import type { ReactNode } from "react";
import { Section } from "@/shared/ui/Section";
import styles from "./SearchPageWrapper.module.scss";
import { Container } from "@/shared/ui/Container";
import { Button, Spin } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/shared/config/router";

interface IProps {
  children?: ReactNode;
  loading?: boolean;
}

function SearchPageWrapper({ children, loading = false }: IProps) {
  const navigate = useNavigate();

  if (loading) {
    console.log("Loading");
    return (
      <Section className={styles.secionLoading}>
        <Spin size="large" />
      </Section>
    );
  }

  return (
    <Section className={styles.section}>
      <Container>
        <Button
          type="primary"
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate(appRoutes.home)}
        >
          Назад
        </Button>

        {children}
      </Container>
    </Section>
  );
}

export default SearchPageWrapper;
