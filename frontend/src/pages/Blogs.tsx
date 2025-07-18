import BlogCard from "../components/BlogCard";
import HeroBanner from "../components/HeroBanner";
import UseBlog from "../hooks/UseBlog";
import { Link } from "react-router-dom";
import BlogSkeleton from "../components/BlogSkeleton";

export default function Blogs() {
  const { loading, Blogs } = UseBlog();
  if (loading) {
    return (
      <div >
        <BlogSkeleton />

      </div>
    );
  }
  return (
    <div>
      {" "}
      <HeroBanner
        title="Canadian Immigration Blogs"
        subtitle="Guides, insights and stories for newcomers"
      />
     <div className="min-h-screen py-14 px-4 sm:px-6 lg:px-12">
  <div className="max-w-6xl mx-auto">
    <div className="flex justify-between items-center mb-10 ">
      <h1 className="text-3xl lg:text-4xl font-extrabold  text-[#C8102E]">
        Recent articles
      </h1>
      <Link to="/Create">
      <button className="px-8 py-2 rounded-full bg-gradient-to-b from-red-500 to-red-700 text-white focus:ring-2 focus:ring-red-400 hover:cursor-pointer  transition duration-200 ">
      Create Blog
      </button>
      </Link>
    </div>

          <section className="grid gap-y-12 grid-cols-1">
            {" "}
            {/* 1 card per row */}
            {Blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                title={blog.title}
                content={blog.content}
                authorName={blog.author.name}
              />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
