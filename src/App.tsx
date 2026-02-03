import React from 'react'
import './App.css'

function App() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="relative min-h-screen bg-gradient-to-br from-orange-500 via-orange-600 to-red-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
          <h1 className="text-6xl md:text-9xl font-bold mb-6 tracking-tight">
            Baba Banarasi
          </h1>
          <p className="text-3xl md:text-6xl font-light mb-8 opacity-90">
            Solo Scooter Darshan
          </p>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl opacity-90">
            Experience the divine ghats of Varanasi on a solo scooter at sunrise & sunset
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 mb-20">
            <a href="tel:+919876543210" className="bg-white text-orange-600 px-16 py-6 rounded-full font-bold text-2xl hover:scale-110 transition-all shadow-2xl flex items-center gap-4 justify-center">
              📞 Call Now
            </a>
            <a href="https://wa.me/919876543210" className="bg-green-500 text-white px-16 py-6 rounded-full font-bold text-2xl hover:scale-110 transition-all shadow-2xl flex items-center gap-4 justify-center">
              💬 WhatsApp
            </a>
          </div>
          
          <div className="text-6xl animate-bounce">🛵</div>
        </div>
      </div>

      {/* TOURS SECTION */}
      <div className="py-24 px-6 bg-orange-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-orange-600 mb-16">
            Choose Your Spiritual Journey
          </h2>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white rounded-3xl p-10 shadow-2xl hover:scale-105 transition-all">
              <div className="text-8xl mb-6">🌅</div>
              <h3 className="text-4xl font-bold text-orange-600 mb-4">Sunrise Tour</h3>
              <p className="text-2xl text-gray-700 mb-6">4:30 AM - 7:30 AM</p>
              <p className="text-gray-600 text-lg">Witness morning aarti & peaceful ghats</p>
            </div>
            
            <div className="bg-white rounded-3xl p-10 shadow-2xl hover:scale-105 transition-all">
              <div className="text-8xl mb-6">🌇</div>
              <h3 className="text-4xl font-bold text-orange-600 mb-4">Sunset Tour</h3>
              <p className="text-2xl text-gray-700 mb-6">4:00 PM - 7:30 PM</p>
              <p className="text-gray-600 text-lg">Grand Ganga Aarti experience</p>
            </div>
            
            <div className="bg-white rounded-3xl p-10 shadow-2xl hover:scale-105 transition-all">
              <div className="text-8xl mb-6">🛕</div>
              <h3 className="text-4xl font-bold text-orange-600 mb-4">Full Day</h3>
              <p className="text-2xl text-gray-700 mb-6">Custom Timing</p>
              <p className="text-gray-600 text-lg">Complete Kashi Darshan</p>
            </div>
          </div>
        </div>
      </div>

      {/* BOOKING CTA */}
      <div className="py-24 px-6 bg-gradient-to-r from-orange-500 to-red-600 text-white text-center">
        <h2 className="text-5xl md:text-7xl font-bold mb-10">
          Book Your Divine Ride Now
        </h2>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <a href="tel:+919876543210" className="bg-white text-orange-600 px-20 py-8 rounded-full font-bold text-3xl hover:scale-110 transition-all shadow-2xl">
            Call Baba Banarasi
          </a>
          <a href="https://wa.me/919876543210" className="bg-green-500 text-white px-20 py-8 rounded-full font-bold text-3xl hover:scale-110 transition-all shadow-2xl">
            WhatsApp Now
          </a>
        </div>
      </div>

      <footer className="bg-orange-900 text-white py-12 text-center">
        <p className="text-3xl font-bold mb-2">Baba Banarasi - Scoot Darshan</p>
        <p className="text-xl">Varanasi's Most Authentic Spiritual Experience</p>
      </footer>
    </>
  )
}

export default App
