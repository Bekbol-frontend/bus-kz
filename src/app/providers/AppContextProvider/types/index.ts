import type { SetURLSearchParams } from "react-router-dom";

export interface IContext {
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
}
