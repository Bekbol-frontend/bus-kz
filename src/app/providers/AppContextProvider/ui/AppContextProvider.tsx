import { type ReactNode } from "react";
import { AppContext } from "../config";
import { useSearchParams } from "react-router-dom";

interface IProps {
  children: ReactNode;
}

function AppContextProvider({ children }: IProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <AppContext.Provider value={{ searchParams, setSearchParams }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
