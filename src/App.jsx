import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Page404 from "./pages/Page404/Page404";
import MainLayout from "./components/layouts/MainLayout/MainLayout";
import Works from "./pages/Works/Works";
import PublicLayout from "./components/layouts/PublicLayout/PublicLayout";
import ProjectWorks from "./pages/ProjectWorks/ProjectWorks";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<PublicLayout />}>
            <Route index={true} element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contact />} />
            <Route path="works" element={<Works />} />
            <Route path="project" element={<ProjectWorks />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
