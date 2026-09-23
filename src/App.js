import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import ProjectsPage from "./components/ProjectsPage";
import WelcomePage from "./components/WelcomePage";
import SiteHeader from "./components/SiteHeader";

function AppRoutes() {
  const { pathname } = useLocation();
  const showHeader = pathname !== "/";

  return (
    <>
      {showHeader ? <SiteHeader /> : null}
      <div className="app-page">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/welcomepage" element={<WelcomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
