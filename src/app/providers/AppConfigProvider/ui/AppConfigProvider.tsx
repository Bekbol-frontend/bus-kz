import type { ReactNode } from "react";
import { ConfigProvider } from "antd";

interface IProps {
  children: ReactNode;
}

function AppConfigProvider({ children }: IProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "var(--font-roboto)",
          fontSize: 16,
        },
        components: {
          Layout: {
            colorBgLayout: "var(--color-gray-light)",
            headerBg: "var(--color-white)",
            headerHeight: "var(--header-height)",
          },
          Button: {
            controlHeight:  37
          }
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default AppConfigProvider;
