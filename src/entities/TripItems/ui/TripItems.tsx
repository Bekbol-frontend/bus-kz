import type { ITrip } from "@/pages/SearchPage/model/types";
import { Row } from "antd";
import styles from "./TripItems.module.scss";
import TripItem from "./TripItem/TripItem";

interface IProps {
  data: ITrip[];
}

function TripItems({ data }: IProps) {
  return (
    <div className={styles.wrapper}>
      <Row gutter={[10, 10]}>
        {data.map((el) => (
          <TripItem data={el} key={el.tripId} />
        ))}
      </Row>
    </div>
  );
}

export default TripItems;
