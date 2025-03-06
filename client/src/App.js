import Sidebar from "./SidebarNav/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutme from "./pages/Aboutme";
import BooksRead from "./pages/Literature/BooksRead";
import BooksToRead from "./pages/Literature/BooksToRead";
import Projects from "./pages/projects";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Aboutme />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Literature/BooksRead" element={<BooksRead />} />
        <Route path="/Literature/BooksToRead" element={<BooksToRead />} />
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
