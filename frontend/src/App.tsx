import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Signup from './pages/Signup'
// import Signin from './pages/Signin'
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import Auth from "./components/Auth";
import "./app.css";
import AppBar from "./components/AppBar";

export default function App() {
  return (
    <BrowserRouter>
      <AppBar /> 
      
      <Routes>
        <Route path="/signup" element={<Auth type="signup" />} />
        <Route path="/signin" element={<Auth type="signin" />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:Id" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}
