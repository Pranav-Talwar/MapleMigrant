/* ============================================================================
   CreateBlog.tsx  –  MapleMigrant “Write a Post” page (no TipTap, unique UI)
   ---------------------------------------------------------------------------
   • TailwindCSS‑only, clean maple‑themed design (subtle reds, glass effect)
   • Title input + big textarea with live character count
   • Posts to /api/v1/blog with JWT from localStorage
   • Redirects to /blog/:id after success
   • Drop into src/pages/CreateBlog.tsx and add <Route path="/create" …/>
============================================================================ */

import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Backend_URL } from "../config";

export default function CreateBlog() {
  const navigate = useNavigate();

  /* ───────── local state ───────── */
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /* ───────── submit ───────── */
  async function handlePublish() {
    setError(null);
    if (!title.trim()) return setError("Title is required.");
    if (!content.trim()) return setError("Content is required.");

    const token = localStorage.getItem("token");
    if (!token) return setError("Please sign in first.");

    try {
      setSubmitting(true);
      const res = await axios.post(
        `${Backend_URL}/api/v1/blog`,
        { title, content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      navigate(`/blog/${res.data.id}`);
      } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.error || err.message || "Failed to publish.");
      } else {
        setError("Failed to publish.");
      }
    } finally {
      setSubmitting(false);
    }
  }

  /* ───────── render ───────── */
  return (
    <div className="min-h-screen from-gray-50 via-white to-red-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-lg rounded-3xl  p-10">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold font-playfair text-red-700 mb-2">
            Write a New Post
          </h1>
          <p className="text-gray-600">
            Share your journey, tips, or story with the MapleMigrant community.
          </p>
        </header>

        {/* Title */}
        <label className="block mb-4">
          <span className="font-semibold text-gray-700">Title</span>
          <input
            type="text"
            placeholder="My First Week in Toronto…"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-2 w-full rounded-xl border border-gray-300 p-3 focus:ring-red-500 focus:border-red-500"
          />
        </label>

        {/* Content */}
        <label className="block mb-2">
          <span className="font-semibold text-gray-700">Content</span>
          <textarea
            rows={12}
            placeholder="Tell us everything…"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-2 w-full rounded-xl border border-gray-300 p-4 resize-y focus:ring-red-500 focus:border-red-500 leading-relaxed"
          />
        </label>
        <div className="text-right text-xs text-gray-500 mb-6">
          {content.length} characters
        </div>

        {/* Error */}
        {error && (
          <p className="mb-6 text-red-600 font-medium text-sm">{error}</p>
        )}

        {/* Publish */}
        <button
          onClick={handlePublish}
          disabled={submitting}
          className="w-full py-3 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold shadow-lg hover:from-red-500 hover:to-red-600 disabled:opacity-50"
        >
          {submitting ? "Publishing…" : "Publish Post"}
        </button>
      </div>
    </div>
  );
}
