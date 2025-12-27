import { appRoutes } from "@/shared/config/router";
import { Container } from "@/shared/ui/Container";
import { Section } from "@/shared/ui/Section";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface IProps {
  children: ReactNode;
}

function SearchPageLayout({ children }: IProps) {
  const navigate = useNavigate();

  return (
    <Section>
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

export default SearchPageLayout;
