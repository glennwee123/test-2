"use client"

import { useState, useEffect, type FormEvent } from "react"
import { Lock, Heart } from "lucide-react"

const CORRECT_PASSWORD = "Burgundy"
const STORAGE_KEY = "anniversary-trip-auth"

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const [shake, setShake] = useState(false)

  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY)
    if (stored === "true") {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (password === CORRECT_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "true")
      setIsAuthenticated(true)
      setError(false)
    } else {
      setError(true)
      setShake(true)
      setTimeout(() => setShake(false), 600)
      setPassword("")
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#1a0a0a] flex items-center justify-center">
        <div className="animate-pulse">
          <Heart className="w-8 h-8 text-red-500 fill-red-500" />
        </div>
      </div>
    )
  }

  if (isAuthenticated) {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen bg-[#1a0a0a] flex items-center justify-center px-4">
      <div
        className={`w-full max-w-md text-center transition-transform ${shake ? "animate-shake" : ""}`}
      >
        <div className="flex justify-center gap-2 mb-6">
          <Heart className="w-6 h-6 text-red-500 fill-red-500" />
          <Heart className="w-6 h-6 text-red-500 fill-red-500" />
        </div>

        <h1 className="text-4xl md:text-5xl font-serif text-[#f5f0e8] mb-2 tracking-wide">
          {"Ed & Trina's"}
        </h1>
        <p className="text-lg text-[#c4b5a0] mb-1 font-serif">
          30th Anniversary Trip
        </p>
        <p className="text-sm text-[#8a7d6d] mb-10 tracking-widest uppercase">
          Paris & Burgundy
        </p>

        <div className="bg-[#2a1a1a]/60 border border-[#3d2a2a] rounded-lg p-8 backdrop-blur-sm">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-[#3d2020] flex items-center justify-center">
              <Lock className="w-5 h-5 text-[#c4b5a0]" />
            </div>
          </div>

          <p className="text-[#c4b5a0] mb-6 font-serif text-lg">
            Enter the password to view the trip details
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                setError(false)
              }}
              placeholder="Enter password"
              autoFocus
              className={`w-full px-4 py-3 rounded-md bg-[#1a0a0a] border text-[#f5f0e8] text-center text-lg tracking-wider placeholder:text-[#5a4d3d] focus:outline-none focus:ring-2 focus:ring-[#6b3030] transition-colors ${
                error ? "border-red-500" : "border-[#3d2a2a]"
              }`}
            />

            {error && (
              <p className="text-red-400 text-sm mt-2">
                Incorrect password. Please try again.
              </p>
            )}

            <button
              type="submit"
              className="w-full mt-4 px-6 py-3 bg-[#6b3030] text-[#f5f0e8] rounded-md font-serif text-lg tracking-wide hover:bg-[#7d3a3a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6b3030] focus:ring-offset-2 focus:ring-offset-[#1a0a0a]"
            >
              Unlock
            </button>
          </form>
        </div>

        <p className="text-[#5a4d3d] text-xs mt-8">
          2 - 5 April 2026
        </p>
      </div>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
          20%, 40%, 60%, 80% { transform: translateX(4px); }
        }
        .animate-shake {
          animation: shake 0.6s ease-in-out;
        }
      `}</style>
    </div>
  )
}
