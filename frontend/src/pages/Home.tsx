// MapleMigrant Landing Page – Levelled Up!
import React from "react";
import { Link } from "react-router-dom";

/* Dummy Featured Blogs */
const featured = [
  {
    id: "b19fe435-f959-4dab-b20e-1e8cee964912",
    title: "How I Got My PR in Canada within 8 Months",
    content: `I moved to Canada in 2023, excited but clueless about the paperwork. The Express Entry system seemed intimidating at first, but I started by breaking down each step. 

From booking my IELTS to gathering reference letters from my old employers, every week was a new mini-challenge. I spent hours on forums and double-checked every detail on my application. The wait after submitting my profile felt endless, but finding small routines (and support from fellow applicants) kept me sane.

Looking back, I wish I knew how crucial it is to keep digital copies of every document and not to rush the police clearance. The day the Invitation to Apply (ITA) landed in my inbox, I felt every all-nighter was worth it. 

If you’re starting out, don’t panic. Stay organized, connect with others on the same path, and remember: rejection isn’t the end. My first try didn’t work out, but I fixed my mistakes and tried again. Now, I get to call this country home.`,
    author: "Alisha Verma",
    avatar: "https://ui-avatars.com/api/?name=Alisha+Verma&background=E2E8F0&color=BA1B1D",
  },
  {
    id: "89cbccde-d42c-4234-aad1-60501e324a31",
    title: "Surviving Your First Winter in Canada",
    content: `Nothing prepared me for that first November snowstorm in Toronto. The cold was a different level, and I realized quickly that “layer up” isn’t just advice, it’s survival.

I learned to check weather apps religiously and shop at Value Village for thick sweaters and jackets. A big mistake: buying fancy boots that looked good but let water in. Invest in waterproof boots (trust me!). 

Winter blues are real, especially when you’re away from family, but making a ritual out of chai and video calls helped. Also, don’t underestimate community events—even if you’re shy, just show up once, and suddenly winter feels less lonely.

By February, I was laughing at my old fear of slipping on ice. If you’re new here, give yourself patience. Spring always comes, and you’ll feel proud you made it through.`,
    author: "Carlos Santos",
    avatar: "https://ui-avatars.com/api/?name=Carlos+Santos&background=E2E8F0&color=BA1B1D",
  },
  {
    id: "051b8fdf-0792-48d8-95f2-4c7ec1799294",
    title: "Top 5 Cities for International Students",
    content: `Choosing where to study in Canada was the hardest part of my application. I compared tuition costs, job opportunities, and the vibe in each city.

Toronto offers endless options, but the cost of living is high. If you’re into city life and networking, you’ll love it. Vancouver is beautiful, with milder winters, but rent can be rough on a student budget.

Montreal is affordable and has amazing food, but you’ll need some French to get by. Calgary surprised me with its friendly community and growing tech scene. Halifax was my wild card—smaller, but so supportive for newcomers.

Every city has its trade-offs. My advice? Don’t pick just for rankings. Think about your lifestyle, mental health, and job prospects. No matter where you go, there’s a community waiting for you—and resources to help you settle in.`,
    author: "Emily Zhang",
    avatar: "https://ui-avatars.com/api/?name=Emily+Zhang&background=E2E8F0&color=BA1B1D",
  },
];

/* Benefits */
const benefits = [
  {
    icon: "📝",
    title: "Real Stories",
    desc: "Learn from authentic, personal accounts no sugarcoating, just facts.",
  },
  {
    icon: "📚",
    title: "Guides & Tools",
    desc: "Step-by-step immigration guides, study and job resources, and more.",
  },
  {
    icon: "🤝",
    title: "Welcoming Community",
    desc: "Ask questions, get advice, and connect no judgment, just help.",
  },
  {
    icon: "🍁",
    title: "Canadian Culture",
    desc: "Navigate life, food, and career in Canada with ease.",
  },
];

/* Testimonials */
const testimonials = [
  {
    quote:
      "MapleMigrant felt like a friend holding a flashlight while I navigated immigration forms. Actual people, no BS.",
    name: "Rahul 🇮🇳",
  },
  {
    quote:
      "Answered my housing dilemma within hours no Facebook drama, just facts. This is the future of community.",
    name: "Maria 🇲🇽",
  },
];

/* FAQs */
const faqs = [
  {
    q: "Is MapleMigrant free to join?",
    a: "Absolutely. Reading, commenting, and publishing are 100% free no paywalls, no surprise fees.",
  },
  {
    q: "Who writes the articles?",
    a: "A mix of vetted immigration experts and real newcomers documenting first‑hand experiences.",
  },
  {
    q: "Can I share my own story?",
    a: "Yes! Once you sign up, you’ll unlock our in‑browser editor to publish your journey.",
  },
];

export default function MapleMigrantLanding() {
  return (
    <main className="font-inter bg-gradient-to-br from-gray-50 via-white to-red-50 min-h-screen w-full">
      {/* Hero */}
      <section
        className="relative flex flex-col items-center justify-center min-h-[75vh] bg-cover bg-center text-center px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80')", // Lake Louise
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-3xl text-white space-y-7">
          <span className="inline-block  text-red-700 font-bold  text-lg mb-3">
            🍁 New to Canada? Start here.
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold font-playfair drop-shadow-xl tracking-tight leading-tight">
            Your Canadian Journey Starts Here.
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
            Practical guides, honest stories, and a community that has your back every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <Link
              to="/blogs"
              className="px-8 py-3 bg-white text-red-700 font-semibold rounded-full shadow-lg hover:bg-red-50 border-2 border-red-700 transition"
            >
              Explore Articles
            </Link>
            <Link
              to="/signup"
              className="px-8 py-3 bg-red-600 text-white font-semibold rounded-full shadow-lg hover:bg-red-700 border-2 border-red-600 transition"
            >
              Join Our Community
            </Link>
          </div>
      
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12">Why MapleMigrant?</h2>
          <div className="grid md:grid-cols-4 gap-7">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl bg-white/95 backdrop-blur-md shadow-lg p-8 border-t-4 border-red-700 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition"
              >
                <div className="text-4xl mb-3">{b.icon}</div>
                <h3 className="text-lg font-bold mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blogs */}
      <section className="bg-gradient-to-b from-white via-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Featured Stories</h2>
          <div className="grid gap-12 md:grid-cols-3">
            {featured.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="block bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition p-7 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={post.avatar}
                    alt={post.author}
                    className="h-12 w-12 rounded-full border-2 border-white shadow"
                  />
                  <p className="text-sm text-gray-500">By {post.author}</p>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-red-700 transition">
                  {post.title}
                </h3>
                <p className="text-gray-600 line-clamp-3 mb-4">{post.content}</p>
                <span className="inline-block text-xs bg-red-50 text-red-700 font-bold px-3 py-1 rounded-full mt-2">
                  Read Story &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Community Voices</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map(({ quote, name }) => (
              <blockquote
                key={name}
                className="bg-white p-8 rounded-2xl shadow-md text-gray-700 text-left border-l-4 border-red-700"
              >
                <p className="mb-4 italic">
                  <span className="text-3xl text-red-600">“</span>
                  {quote}
                </p>
                <footer className="font-semibold text-gray-700 flex items-center gap-1">{name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Sign Up Callout */}
      <section className="py-20 bg-gradient-to-r from-red-700 via-red-600 to-red-800 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join 10,000+ Thriving Immigrants?</h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto">
          Create a free account to publish your story, bookmark guides, and meet newcomers who get it.
        </p>
        <Link
          to="/signup"
          className="inline-block bg-white text-red-600 font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-red-100 border-2 border-white transition"
        >
          Become a MapleMigrant Member
        </Link>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-7">
            {faqs.map(({ q, a }) => (
              <details
                key={q}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 group cursor-pointer"
              >
                <summary className="font-semibold text-lg mb-2 flex items-center group-open:text-red-700 transition-all">
                  <span className="mr-2">❓</span>
                  {q}
                </summary>
                <p className="text-gray-600 leading-relaxed pt-2">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 text-sm">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="text-white text-xl font-bold flex items-center gap-2">
            <span role="img" aria-label="Maple Leaf">
              🍁
            </span>{" "}
            MapleMigrant
          </Link>
          <nav className="flex gap-7 items-center">
            <Link to="/blogs" className="hover:text-white transition">
              Blog
            </Link>
            <Link to="/signin" className="hover:text-white transition">
              Sign In
            </Link>
            <Link to="/signup" className="hover:text-white transition">
              Sign Up
            </Link>
            
          </nav>
          <div className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} MapleMigrant. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
