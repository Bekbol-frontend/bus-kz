import { createContext } from "react";
import type { IContext } from "../types";

export const AppContext = createContext<IContext>(null!);
