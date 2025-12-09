import { AppContext, type IContext } from "@/app/providers/AppContextProvider";
import { useContext } from "react";

export const useAppContext = (): IContext => {
  return useContext(AppContext);
};
