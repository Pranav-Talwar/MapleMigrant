import { BrowserRouter, Route, Routes } from "react-router-dom";

import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import Auth from "./components/Auth";
import "./app.css";
import AppBar from "./components/AppBar";
import Home from "./pages/Home";
import CreateBlog from "./pages/CreateBlog";
import RequireAuth from "./components/RequireAuth";
export default function App() {
  return (
    <BrowserRouter>
      <AppBar />

      <Routes>
        <Route path="/signup" element={<Auth type="signup" />} />
        <Route path="/signin" element={<Auth type="signin" />} />
        <Route path="/" element={<Home />} />
        <Route path="/Create" element={<CreateBlog />} />
        <Route
          path="/blogs"
          element={
            <RequireAuth>
              <Blogs />
            </RequireAuth>
          }
        />
        <Route
          path="/blog/:id"
          element={
            <RequireAuth>
              <Blog />
            </RequireAuth>
          }
        />
        <Route
          path="/create"
          element={
            <RequireAuth>
              <CreateBlog />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
