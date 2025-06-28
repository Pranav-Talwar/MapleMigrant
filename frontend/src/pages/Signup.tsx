import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCanadianMapleLeaf } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

export function Signup({ placeholder , onChange }: { placeholder: string, onchaange: (e: React.ChangeEvent<HTMLInputElement>) => void}) {

  const postInputs = useState({
    name: '',
    email: '',
    password: ''
  })

  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
        <title>MapleMigrant – Sign up</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>{`
          body { font-family: 'Poppins', sans-serif; }
          .flight-pattern::before {
            content: ""; position: absolute; inset: 0;
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600" fill="none" stroke="%2391A6B7" stroke-width="1" stroke-dasharray="2 6" stroke-linecap="round" opacity="0.2"><path d="M-50 50 Q300 150 650 50"/><path d="M-50 250 Q300 350 650 250"/><path d="M-50 450 Q300 550 650 450"/></svg>');
            background-size: 600px 600px; background-repeat: repeat; pointer-events: none;
          }
          .glass { background: rgba(255,255,255,.75); box-shadow: 0 8px 32px rgba(0,0,0,.1); backdrop-filter: blur(20px); border: 2px solid rgba(200,16,46,.1); }
        `}</style>
      </head>

      <body className="h-full bg-gradient-to-br from-[#FAFAFA] to-[#F4F6F8] relative flight-pattern flex items-center justify-center py-12 px-4">
        <main className="glass rounded-[24px] max-w-sm w-full p-8 relative">
          {/* Logo */}
          <div className="flex items-center justify-center mb-6">
            <FontAwesomeIcon icon={faCanadianMapleLeaf} style={{ color: '#c10007', fontSize: '36px' }} className="mr-2" />
            <h1 className="text-3xl font-extrabold tracking-wide text-red-700">MapleMigrant</h1>
          </div>

          {/* Headline */}
          <header className="text-center space-y-1 mb-6">
            <h2 className="text-2xl font-bold text-neutral-800">Create your account</h2>
            <p className="text-sm text-neutral-500">Join our community of resilient newcomers </p>
          </header>

          {/* Name */}
          <label className="block text-sm text-gray-700 mb-1" htmlFor="name">Full name</label>
          <input onChange={onChange} id="name" type="text" placeholder="Jane Doe" className="w-full h-[52px] px-4 rounded-full border border-gray-300 focus:border-[#C8102E] focus:ring-[#C8102E]/40 mb-4" />

          {/* Email */}
          <label className="block text-sm text-gray-700 mb-1" htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="you@example.com" className="w-full h-[52px] px-4 rounded-full border border-gray-300 focus:border-[#C8102E] focus:ring-[#C8102E]/40 mb-4" />

          {/* Password */}
          <label className="block text-sm text-gray-700 mb-1" htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="Create a password" className="w-full h-[52px] px-4 rounded-full border border-gray-300 focus:border-[#C8102E] focus:ring-[#C8102E]/40 mb-6" />

          {/* Sign‑up button */}
          <button className="w-full h-[52px] rounded-full bg-[#C8102E] text-white font-semibold shadow-md hover:bg-[#99151F] transition mb-6">Sign up</button>

          {/* Links */}
          <p className="text-center text-sm text-gray-500 mb-2 px-4">By signing up you agree to our Terms of Service and Privacy Policy.</p>
          <div className="flex justify-center text-sm">
            <span className="text-gray-500 mr-1">Already have an account?</span>
            <a href="#" className="text-[#C8102E] hover:underline">Sign in</a>
          </div>
        </main>

        <footer className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[11px] text-gray-500">© 2025 MapleMigrant · Your compass in a new land.</footer>
      </body>
    </html>
  )
}
