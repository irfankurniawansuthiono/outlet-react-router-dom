import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageLayout from "./Components/pageLayout";
import Users from "./pages/Users/Users";
import Videos from "./pages/Videos/Videos";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="users" element={<Users />} />
          <Route path="videos" element={<Videos />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
