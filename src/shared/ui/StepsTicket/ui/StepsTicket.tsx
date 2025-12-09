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

function StepsTicket() {
  const { searchParams } = useAppContext();
  const current = Number(searchParams.get(StepEnum.STEP)) || 0;

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
