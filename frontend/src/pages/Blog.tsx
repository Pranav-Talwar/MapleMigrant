import { useParams } from "react-router-dom";
import useBlogById from "../hooks/useBlogById";
import { useEffect } from "react";
import BlogPageSkeleton from "../components/BlogPageSkeleton";

export default function Blog() {
  
  const { id } = useParams<{ id: string }>();
  const { loading, blog } = useBlogById(id ?? "");
 useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" }); // or "smooth"
  }, []);
if (!id) return <div className="p-8 text-xl">Invalid link.</div>;

  /* guard: no id in URL */
  if (!id) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl font-semibold text-gray-600">
          Invalid link – no post ID.
        </div>
      </div>
    );
  }

  if (loading) {
    return (
     <div className="text-center pt-17 md:pt-32 px-4">  <BlogPageSkeleton /></div>
    );
  }

  if (!blog) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl font-semibold text-gray-600">
          Blog not found.
        </div>
      </div>
    );
  }
   /* ---------------- helpers ---------------- */
  const minutes = Math.ceil(blog.content.length / 238);
  const displayDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date());            
  return (
    <>
      <header className="text-center pt-16 md:pt-32 px-4">
        <h1 className="font-bold break-normal text-3xl md:text-5xl">
          {blog.title}
        </h1>

        <p className="mt-4 text-sm md:text-base text-green-500 font-medium">
          {displayDate} <span className="mx-2 text-gray-800">|</span>
          {minutes} min read
          <span className="mx-2 text-gray-800">|</span>
          Written by – {blog.author?.name || "Anonymous"}
        </p>
      </header>

      <main className="container max-w-5xl mx-auto mt-6 md:mt-12">
        <article
          className="bg-white p-6 md:p-12 text-lg md:text-xl text-gray-800 leading-relaxed"
          style={{ fontFamily: "Georgia,serif" }}
        >
          {blog.content.split("\n\n").map((para, i) => (
            <p key={i} className="mb-6">
              {para}
            </p>
          ))}
        </article>
      </main>
    </>
  );
}