/* -------------------- src/hooks/UseBlog.tsx -------------------- */
import axios from "axios";
import { useState, useEffect } from "react";
import { Backend_URL } from "../config";

type Blog = {
  id: string;
  title: string;
  content: string;
  author: { name: string };
};

function UseBlog() {
  const [loading, setLoading] = useState(true);
  const [Blogs,  setBlogs]   = useState<Blog[]>([]);

  useEffect(() => {
    // ❶ — grab whatever Auth.tsx stored
    const token = localStorage.getItem("token");

    if (!token) {
      console.warn("No JWT in localStorage → redirect to /signin?");
      setLoading(false);
      return;
    }

    axios
      .get(`${Backend_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setBlogs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  }, []);

  return { loading, Blogs };
}

export default UseBlog;
