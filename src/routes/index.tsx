import { BrowserRouter, Route, Routes } from "react-router";
import { Experiences } from "pages/experiences";
import { Projects } from "pages/projects";
import { Home } from "pages/home";
import { Personal } from "pages/personal";
import { DefaultLayout } from "pages/layout";

export const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/personal" element={<Personal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
