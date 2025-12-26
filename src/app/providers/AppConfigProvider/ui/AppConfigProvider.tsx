import type { ReactNode } from "react";
import { ConfigProvider } from "antd";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";

interface IProps {
  children: ReactNode;
}

function AppConfigProvider({ children }: IProps) {
  const { sm } = useResponsive();

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "var(--font-roboto)",
          fontSize: 16,
          borderRadius: 7,
        },
        components: {
          Typography: {
            titleMarginBottom: sm ? 7 : 3,
          },
          Layout: {
            colorBgLayout: "var(--color-gray-light)",
            headerBg: "var(--color-white)",
            headerHeight: "var(--header-height)",
          },
          Button: {
            controlHeight: 37,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default AppConfigProvider;
