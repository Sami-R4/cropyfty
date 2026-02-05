// Styles
import styles from "../styles/hero.module.css";

export default function HeroScreen() {
  return (
    <div
      className={`${styles.heroContainer} w-screen min-h-screen relative flex flex-col items-center justify-center overflow-hidden`}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-between px-6 py-12 sm:px-8 md:px-12 lg:px-16">
        
        {/* Top Spacer */}
        <div className="flex-1 flex items-center"></div>

        {/* Main Content - Center */}
        <div className="flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8 md:space-y-10">
          
          {/* Logo/Brand Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight">
            Cropyfty
          </h1>

          {/* Subheading */}
          <div className="space-y-3 max-w-xl">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-medium leading-relaxed">
              Connecting Farmers <br className="hidden sm:block" />
              Directly Your Buyers
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-6 sm:pt-8 md:pt-10">
            <button className="px-10 sm:px-14 md:px-16 py-4 sm:py-5 md:py-6 bg-primary hover:bg-green-700 text-white font-semibold text-lg sm:text-xl rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl">
              Get Started
            </button>
          </div>

          {/* Login Link */}
          <p className="text-sm sm:text-base text-gray-200 font-medium pt-2">
            Already have an account? <span className="text-gold font-semibold">
              <a href="#" className="hover:text-yellow-300 transition-colors duration-200">
                Login
              </a>
            </span>
          </p>
        </div>

        {/* Bottom Spacer with Floating Search Icon */}
        <div className="flex-1 flex items-end justify-center pb-8 sm:pb-12 md:pb-16">
          <button 
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 active:scale-95"
            aria-label="Search"
          >
            <svg 
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-gold" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2.5} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
