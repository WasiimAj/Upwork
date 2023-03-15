import { Route, Routes } from "react-router-dom";

// Components Import ..
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PageNotFound from "./components/Page Not Found";
import Profile from "./pages/Profile";
import Search from "./pages/Search";

const isUser = localStorage.getItem('session');

function App() {
  if (isUser === 'true') {
    return (
      <Routes className="App">
        <Route path="/" element={<Home />} />
        <Route path="/job_details" element={<JobDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    );
  } 
  else {
    return (
      <Routes className="App">
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Login />} />
      </Routes>
    )
  }
}

export default App;
