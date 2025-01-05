
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import ReactLenis from "lenis/react";
import ProjectPage from "./pages/ProjectPage";


const App = () => {

  return (
    <ReactLenis root>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
    </ReactLenis>
  );
};

export default App;
