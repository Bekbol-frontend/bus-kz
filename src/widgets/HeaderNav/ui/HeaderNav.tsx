import { Flex, Layout } from "antd";
import { Container } from "@/shared/ui/Container";
import { Logo } from "@/shared/ui/Logo";
import styles from "./HeaderNav.module.scss";
import { SwitchLang } from "@/shared/ui/SwitchLang";

const { Header } = Layout;

function HeaderNav() {
  return (
    <Header className={styles.header}>
      <Container>
        <Flex flex={1} align="center" justify="space-between" gap={16}>
          <Flex>
            <Logo />
          </Flex>
          <Flex align="center" gap={16}>
            <SwitchLang />
          </Flex>
        </Flex>
      </Container>
    </Header>
  );
}

export default HeaderNav;
