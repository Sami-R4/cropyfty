// Styles
import styles from "../styles/hero.module.css";

// Hooks
import { Link } from "react-router-dom";

export default function HeroScreen() {
  return (
    <div
      className={`${styles.heroContainer} w-screen min-h-screen relative flex flex-col items-center justify-center overflow-hidden`}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col px-6 py-12 sm:px-8 md:px-12 lg:px-16">
        
        {/* Top Section — Brand */}
        <div className="flex flex-col items-center pt-10 sm:pt-14">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight">
            Cropyfty
          </h1>

          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-100 font-medium text-center max-w-xl capitalize">
            Connecting <span className="text-primary">farmers</span> <br className="hidden sm:block" />
            directly with <span className="text-primary">buyers</span>
          </p>
        </div>

        {/* Middle Space (luxury breathing room) */}
        <div className="flex-1 flex items-center justify-center">
          <div
            className={`${styles.floatSlow}
              w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24
              bg-white/95
              rounded-full
              shadow-2xl
              flex items-center justify-center
            `}
            aria-hidden
          >
            <span className="text-[var(--color-primary)] font-extrabold text-2xl sm:text-3xl md:text-4xl">
              C
            </span>
          </div>
        </div>

        {/* Bottom Section — Action */}
        <div className="flex flex-col items-center pb-10 sm:pb-14 space-y-4">
          <Link to="/chooseRole">
            <button className="
              px-10 sm:px-14
              py-4 sm:py-5
              bg-[var(--color-primary)]
              hover:bg-green-700
              text-white
              font-semibold
              text-lg
              rounded-full
              transition-all duration-300
              hover:scale-105
              active:scale-95
              shadow-xl
            ">
              Get Started
            </button>
          </Link>

          <p className="text-sm sm:text-base text-gray-200 font-medium">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[var(--color-primary)] font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}
