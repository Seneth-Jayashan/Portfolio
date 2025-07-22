import React from 'react'

export default function ComingSoon() {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-black bg-cover bg-center relative text-white px-4"
      style={{ backgroundImage: "url('/comingSoon.png')" }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Text content */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold mb-4">Coming Soon</h1>
        <p className="text-xl max-w-lg mx-auto">
          We are working hard to launch this project. Stay tuned for updates!
        </p>
      </div>
    </div>
  )
}
