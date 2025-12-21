import { StepEnum } from "@/shared/constants";
import { useAppContext } from "../useAppContext";

export function useStepParams() {
  const { searchParams } = useAppContext();

  const from = searchParams.get(StepEnum.FROM) || undefined;
  const to = searchParams.get(StepEnum.TO) || undefined;
  const date = searchParams.get(StepEnum.DATE) || undefined;

  return { from, to, date };
}
