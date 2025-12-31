import type { ITrip } from "@/pages/SearchPage/model/types";
import { Row } from "antd";
import TripItem from "./TripItem/TripItem";
import { SortTripEnum } from "@/entities/SortTrip";
import { useMemo } from "react";

interface IProps {
  data: ITrip[];
  sort: "" | SortTripEnum;
}

function TripItems({ data, sort }: IProps) {
  const sortedData = useMemo(() => {
    if (sort === SortTripEnum.PRICE) {
      return [...data].sort((a, b) => a.price - b.price);
    }
    if (sort === SortTripEnum.DEPARTURE_TIME) {
      return [...data].sort((a, b) =>
        a.route.departureTime.localeCompare(b.route.departureTime)
      );
    }
    if (sort === SortTripEnum.ARRIVAL_TIME) {
      return [...data].sort((a, b) =>
        a.route.arrivalTime.localeCompare(b.route.arrivalTime)
      );
    }

    return data;
  }, [data, sort]);

  return (
    <div>
      <Row gutter={[10, 10]}>
        {sortedData.map((el) => (
          <TripItem data={el} key={el.tripId} />
        ))}
      </Row>
    </div>
  );
}

export default TripItems;
