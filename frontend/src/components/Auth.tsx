/* ---------- imports ---------- */
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCanadianMapleLeaf } from '@fortawesome/free-brands-svg-icons'
import type { SignupInput } from 'maplemigrant-common'

/* ---------- component ---------- */
export default function Auth({ type }: { type: 'signin' | 'signup' }) {
  const isSignIn = type === 'signin'

  /* local form state */
  const [inputs, setInputs] = useState<SignupInput>({
    name: '',
    email: '',
    password: '',
  })

  const handleChange =
    (field: keyof SignupInput) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setInputs({ ...inputs, [field]: e.target.value })

  return (
    <>
      {/* flight-path + glass CSS (could live in a CSS file) */}
      <style>{`
        .flight-pattern::before {
          content:"";position:absolute;inset:0;
          background-image:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600" fill="none" stroke="%2391A6B7" stroke-width="1" stroke-dasharray="2 6" stroke-linecap="round" opacity="0.2"><path d="M-50 50 Q300 150 650 50"/><path d="M-50 250 Q300 350 650 250"/><path d="M-50 450 Q300 550 650 450"/></svg>');
          background-size:600px 600px;background-repeat:repeat;pointer-events:none;
        }
        .glass{background:rgba(255,255,255,.75);box-shadow:0 8px 32px rgba(0,0,0,.1);backdrop-filter:blur(20px);border:2px solid rgba(200,16,46,.1);}
      `}</style>

      {/* page wrapper */}
      <div className="min-h-screen bg-gradient-to-br from-[#FAFAFA] to-[#F4F6F8] flex items-center justify-center relative flight-pattern py-12 px-4">
        <main className="glass rounded-[24px] max-w-sm w-full p-8 relative">
          {/* logo */}
          <div className="flex items-center justify-center mb-6">
            <FontAwesomeIcon
              icon={faCanadianMapleLeaf}
              style={{ color: '#c10007', fontSize: '33px' }}
              className="mr-2 shrink-0"
            />
            <h1 className="text-3xl font-extrabold tracking-wide text-red-700">
              MapleMigrant
            </h1>
          </div>

          {/* headline */}
          <header className="text-center space-y-1 mb-6">
            <h2 className="text-2xl font-bold text-neutral-800">
              {isSignIn ? 'Sign in to your account' : 'Create your account'}
            </h2>
            <p className="text-sm text-neutral-500">
              We’re here to make your immigrant journey smoother 🇨🇦
            </p>
          </header>

          {/* form fields */}
          {!isSignIn && (
            <LabelledInput
              label="Full name"
              placeholder="Jane Doe"
              onChange={handleChange('name')}
              value={inputs.name}
            />
          )}

          <LabelledInput
            label="Email"
            type="email"
            placeholder="you@example.com"
            onChange={handleChange('email')}
            value={inputs.email}
          />

          <LabelledInput
            label="Password"
            type="password"
            placeholder="••••••••"
            onChange={handleChange('password')}
            value={inputs.password}
          />

          {/* main button */}
          <button className="w-full h-[52px] rounded-full bg-[#C8102E] text-white font-semibold shadow-md hover:bg-[#99151F] transition mb-6">
            {isSignIn ? 'Sign in' : 'Sign up'}
          </button>

          {/* link row */}
          <div className="flex justify-between text-sm">
            {isSignIn ? (
              <>
                <a href="#" className="text-gray-500 hover:underline">
                  Forgot password?
                </a>
                <a href="#" className="text-[#C8102E] hover:underline">
                  Create account
                </a>
              </>
            ) : (
              <>
                <span className="text-gray-500">Already have an account?</span>
                <a href="#" className="text-[#C8102E] hover:underline">
                  Sign in
                </a>
              </>
            )}
          </div>
        </main>
      </div>
    </>
  )
}

/* ---------- re-usable input ---------- */
interface LabelProps {
  label: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: 'text' | 'email' | 'password'
}

function LabelledInput({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
}: LabelProps) {
  return (
    <div className="mb-4">
      <label
        className="block text-sm text-gray-700 mb-1"
        htmlFor={label.toLowerCase()}
      >
        {label}
      </label>
      <input
        id={label.toLowerCase()}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full h-[52px] px-4 rounded-full border border-gray-300 focus:border-[#C8102E] focus:ring-[#C8102E]/40"
      />
    </div>
  )
}
