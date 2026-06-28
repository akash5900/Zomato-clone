import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./pages/home";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Logine from "./pages/logine";
import About from "./pages/about";
import Profile from "./pages/profile";
import Cart from "./pages/cart";

function App() {
  return (
    <BrowserRouter>
      <div className="sticky top-0 z-50 bg-white">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/elogin" element={<Logine />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
