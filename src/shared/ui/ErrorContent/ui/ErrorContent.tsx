import { Typography } from "antd";
import styles from "./ErrorContent.module.scss";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";

const { Title } = Typography;

interface IProps {
  title: string;
}

function ErrorContent({ title }: IProps) {
  const { xs } = useResponsive();

  return (
    <Title
      level={xs ? 4 : 2}
      className={styles.errorContentWrapper}
      type="danger"
    >
      {title}
    </Title>
  );
}

export default ErrorContent;
