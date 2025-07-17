import { useState, useEffect } from "react";
import axios from "axios";
import { Backend_URL } from "../config";

export type SingleBlog = {
  id: string;
  title: string;
  content: string;
  author: { name: string };
};

export default function useBlogById(id: string) {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<SingleBlog | null>(null);

  useEffect(() => {
    if (!id) return;

    const token = localStorage.getItem("token");
    if (!token) {
      console.warn("No JWT in localStorage → redirect to /signin?");
      setLoading(false);
      return;
    }

    axios
      .get(`${Backend_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
          console.log("⇣ single-post payload", res.data);   // ← look here
  setBlog(res.data);
  setLoading(false);
      })

      
      .catch((err) => {
        console.error("Error fetching blog:", err);
        setLoading(false);
      });
  }, [id]);

  return { loading, blog };
}
