import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateTask from "./components/CreateTask";
import EditTask from "./components/EditTask";
import Home from "./components/Home";
import Landing from "./components/Landing";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="home" element={<Home />} />
          <Route path="create" element={<CreateTask />} />
          <Route path="edit/:id" element={<EditTask />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
