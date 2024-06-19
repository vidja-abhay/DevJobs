import "./App.css";

import Header from "./components/Header/Header";
import JobLists from "./components/Jobs/JobLists";
import JobDetails from "./components/Job-details/JobDetails";
import Footer from "./components/Footer/Footer";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<JobLists />} />
        <Route path="/jobs/:position" element={<JobDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;