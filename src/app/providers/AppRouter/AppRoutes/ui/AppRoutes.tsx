import { Route, Routes } from "react-router-dom";
import { AppLayout } from "../../AppLayout";
import { HomePageAsync } from "@/pages/HomePage";
import { AboutPageAsync } from "@/pages/AboutPage";
import { appRoutes } from "@/shared/config/router";
import { SearchPageAsync } from "@/pages/SearchPage";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={appRoutes.home} element={<HomePageAsync />} />
        <Route path={appRoutes.about} element={<AboutPageAsync />} />
        <Route path={appRoutes.search} element={<SearchPageAsync />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
