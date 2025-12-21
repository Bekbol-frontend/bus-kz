import dayjs from "dayjs";

export function getHoursAndMinute(departureTime: string, arrivalTime: string) {
  const departure = dayjs(departureTime);
  const arrival = dayjs(arrivalTime);

  const totalMinutes = arrival.diff(departure, "minute");
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return {
    hours: hours,
    minutes: minutes,
  };
}
