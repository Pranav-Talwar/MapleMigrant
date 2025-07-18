/* -------------------- src/components/BlogCard.tsx -------------------- */
import { Link } from "react-router-dom";

interface BlogCardProps {
  id: string;
  title: string;
  content: string;
  authorName: string;
  /** optional ISO date (defaults → today) */
  date?: string;
}

const BlogCard = ({
  id,
  title,
  content,
  authorName,
}: BlogCardProps) => {
  /* --- helpers --- */
  const snippet =
    content.length > 200 ? `${content.slice(0, 200).trim()}…` : content;
  const minutes = Math.ceil(content.length / 238);

  /* avatar initials */
  const initials = authorName
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

  return (
  <Link to={`/blog/${id}`} className="block">
      <article className="flex flex-col gap-y-3 p-6 bg-white rounded-lg shadow-sm ring-1 ring-gray-400 hover:shadow-md transition">
        {/* tag pill (static because no category field) */}
      

        
        {/* title + snippet */}
        <div>
          <h3 className="text-lg font-semibold leading-6 text-gray-900 hover:text-[#C8102E]">
            {title}
          </h3>
          <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
            {snippet}
          </p>
        </div>

        {/* author row */}
        <div className="mt-3 flex gap-x-2">
          <span className="relative h-8 w-8 flex-none">
            <span
              aria-hidden="true"
              className="absolute inset-0 h-full w-full rounded-full ring-1 ring-inset ring-gray-900/10"
            ></span>
            {/* fallback initials */}
            <span className="h-full w-full flex items-center justify-center rounded-full bg-neutral-200 text-sm font-semibold text-gray-600">
              {initials}
            </span>
            
          </span>
       <div className="flex items-center gap-2 text-lg leading-6">
  <span className="font-semibold text-gray-900">{authorName}</span>
  <span className="flex items-center gap-x-2 text-sm text-gray-500" aria-hidden="true">•</span>
  <span className="flex items-center gap-x-2 text-sm text-gray-500">{minutes} min&nbsp;read</span>
</div>

        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
