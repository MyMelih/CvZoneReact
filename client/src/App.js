import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import CompaniesScreen from "./screens/CompaniesScreen";
import JobsScreen from "./screens/JobsScreen";
import ProjectsScreen from "./screens/ProjectsScreen";
import UserProfileScreen from "./screens/UserProfileScreen";

import Header from "./components/Header";
function App() {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<HomeScreen />} exact />
          <Route path="/companies" element={<CompaniesScreen />} />
          <Route path="/jobs" element={<JobsScreen />} />
          <Route path="/projects" element={<ProjectsScreen />} />
          <Route path="/user-profile" element={<UserProfileScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
