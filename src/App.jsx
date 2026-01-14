import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Home/Landing";
import Todo from "./components/Todo"; 
import Login from "./pages/login/Login";
import Register from "./pages/Signup/Register";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <div className="antialiased text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;