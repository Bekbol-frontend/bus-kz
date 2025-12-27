import { StepEnum } from "@/shared/constants";
import { useAppContext } from "@/shared/lib/hooks/useAppContext";
import { Card, Flex, Steps } from "antd";

const items = [
  {
    title: "Выбор станции",
  },
  {
    title: "Выбор автобуса",
  },
  {
    title: "Бронирование места",
  },
  {
    title: "Оплата",
  },
];

interface IProps {
  inHeader?: boolean;
}

function StepsTicket({ inHeader }: IProps) {
  const { searchParams } = useAppContext();
  const current = Number(searchParams.get(StepEnum.STEP));

  if (inHeader) {
    return <Steps current={current} items={items} />;
  }

  return (
    <Card>
      <Flex>
        <div style={{ flex: 1 }}>
          <Steps current={current} items={items} />
        </div>
      </Flex>
    </Card>
  );
}

export default StepsTicket;
