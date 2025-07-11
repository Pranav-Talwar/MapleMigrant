import React from 'react';
import BlogCard from '../components/BlogCard';
import HeroBanner from '../components/HeroBanner';
import UseBlog from '../hooks/UseBlog';



export default function Blogs() {
    const { loading, Blogs } = UseBlog();
    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-2xl font-bold text-gray-700">Loading...</div>
            </div>
        );
    }
  return (<div>    <HeroBanner
        title="Canadian Immigration Blogs"
        subtitle="Guides, insights and stories for newcomers"
      />
    <div className="min-h-screen bg-[#FFF9F9] py-14 px-4 sm:px-6 lg:px-12">
        
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-extrabold mb-10 text-[#C8102E]">
          Recent articles
        </h1>

 

...
<section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
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
...



      </div>
    </div></div>
  );
}

