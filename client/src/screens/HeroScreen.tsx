// Styles
import styles from "../styles/hero.module.css";

export default function HeroScreen() {
  return (
    <div
      className={`${styles.heroContainer} w-screen min-h-screen relative flex items-center justify-center px-4 py-8 sm:px-6 md:px-8 lg:px-0`}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8">
        {/* Main Heading */}
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Cropyfty
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 font-medium leading-relaxed">
            Connecting farmers
            <br className="sm:hidden" /> directly to your <br />
            buyers
          </p>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center gap-4 w-full sm:w-auto pt-4">
          <button className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-primary hover:bg-green-600 text-white font-semibold rounded-full text-base sm:text-lg transition-all duration-200 hover:scale-105 shadow-lg">
            Get Started
          </button>

          {/* Login Link */}
          <p className="text-sm sm:text-base text-gray-200 font-medium">
            Already have an account?{" "}
            <a
              href="#"
              className="text-gold hover:text-yellow-300 font-semibold transition-colors duration-200"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
