import type { ITrip, SeatTypeCodeEnum } from "@/pages/SearchPage/model/types";
import { Row } from "antd";
import TripItem from "./TripItem/TripItem";
import { SortTripEnum } from "@/entities/SortTrip";
import { useMemo } from "react";
import { EmptyData } from "@/shared/ui/EmptyData";

interface IProps {
  data: ITrip[];
  sort: "" | SortTripEnum;
  filter: "" | SeatTypeCodeEnum;
}

function TripItems({ data, sort, filter }: IProps) {
  const sortedData = useMemo(() => {
    if (sort === SortTripEnum.PRICE) {
      return [...data].sort((a, b) => a.price - b.price);
    }
    if (sort === SortTripEnum.SEATS_COUNT) {
      return [...data].sort((a, b) => a.bus.seatsCount - b.bus.seatsCount);
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

  const filterAndSorterData = useMemo(() => {
    return sortedData.filter((el) => el.bus.seatTypeCode.includes(filter));
  }, [filter, sortedData]);

  if (!filterAndSorterData.length) return <EmptyData />;

  return (
    <div>
      <Row gutter={[10, 10]}>
        {filterAndSorterData.map((el) => (
          <TripItem data={el} key={el.tripId} />
        ))}
      </Row>
    </div>
  );
}

export default TripItems;
