import { Flex, Layout } from "antd";
import { Container } from "@/shared/ui/Container";
import { Logo } from "@/shared/ui/Logo";
import { SwitchLang } from "@/shared/ui/SwitchLang";
import { StepsTicket } from "@/shared/ui/StepsTicket";
import { useLocation } from "react-router-dom";
import { appRoutes } from "@/shared/config/router";
import styles from "./HeaderNav.module.scss";

const { Header } = Layout;

function HeaderNav() {
  const { pathname } = useLocation();

  return (
    <Header className={styles.header}>
      <Container>
        <Flex flex={1} align="center" justify="space-between" gap={16}>
          <Flex>
            <Logo />
          </Flex>
          {pathname !== appRoutes.home && <StepsTicket inHeader />}
          <Flex align="center" gap={16}>
            <SwitchLang />
          </Flex>
        </Flex>
      </Container>
    </Header>
  );
}

export default HeaderNav;
