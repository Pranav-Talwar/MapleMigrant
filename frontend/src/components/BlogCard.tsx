/* ------------------------------------------------------------------
   src/components/BlogCard.tsx
   “New-spaper chic” card … minus fancy fonts
------------------------------------------------------------------ */
import React from "react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  id: string;
  title: string;
  content: string;
  authorName: string;
  category?: string;
}

const BlogCard = ({
  id,
  title,
  content,
  authorName,
  category = "Article",
}: BlogCardProps) => {
  const snippet =
    content.length > 180 ? `${content.slice(0, 180).trim()}…` : content;
  const minutes = Math.ceil(content.length / 238);

  return (
    <Link to={`/blog/${id}`} className="group block">
      <article
        className="relative overflow-hidden rounded-xl newspaper-border  bg-white/70
                   paper-texture vintage-shadow transition-transform duration-200
                   hover:-translate-y-1 hover:shadow-lg ornate-corner"
      >
        {/* left rule */}
        <div className="absolute inset-y-0 left-0 w-[3px] bg-[#C8102E]"></div>

        {/* body */}
        <div className="p-6 space-y-3">
          <header className="flex items-center justify-between text-[11px] uppercase tracking-widest text-neutral-700">
            <span>{category}</span>
            <time className="italic lowercase">{minutes} min</time>
          </header>

          <h2
            className="text-xl font-semibold text-neutral-900 first-letter
                       group-hover:text-red-700 transition-colors line-clamp-2"
          >
            {title}
          </h2>

          <p className="text-sm leading-relaxed text-neutral-700 card-snippet">
            {snippet}
          </p>

          <footer className="flex items-center justify-between text-xs text-neutral-600 pt-3 border-t border-neutral-300/50">
            <AuthorMeta name={authorName} />
            <span className="italic">read ↗</span>
          </footer>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;

/* ---------- small avatar helper ---------- */
function AuthorMeta({ name }: { name: string }) {
  const initials = name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

  return (
    <div className="flex items-center gap-2">
      <div className="size-7 rounded-full border-2 border-neutral-400 flex items-center justify-center">
        <span className="text-[11px] font-semibold text-neutral-700">
          {initials}
        </span>
      </div>
      <span>{name}</span>
    </div>
  );
}
