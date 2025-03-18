import { BrowserRouter, Route, Routes } from "react-router";
import { Experiences } from "pages/experiences";
import { Projects } from "pages/projects";
import { Home } from "pages/home";
import { Personal } from "pages/personal";
import { NavBar } from "components/navbar";

export const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/personal" element={<Personal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
