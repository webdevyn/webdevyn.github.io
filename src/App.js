<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
>>>>>>> origin/main
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";

function App() {
  return (
<<<<<<< HEAD
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
=======
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
>>>>>>> origin/main
  );
}

export default App;
