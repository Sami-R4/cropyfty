// Styles
import styles from "../styles/hero.module.css";

export default function HeroScreen() {
  return (
    <div
      className={`${styles.heroContainer} w-screen h-screen fixed left-0 top-0 flex justify-center min-h-screen font-sans`}
    >
    <div className="relative">
        <div className="space-y-3">
          <h1 className="text-7xl font-semibold text-white">Cropyfty</h1>

          <p className="text-2xl text-white font- capitalize">Connecting farmers<br></br> directly to your buyers</p>
        </div>

        <div className="absolute bottom-3 flex flex-col justify-center left-1/2 -translate-x-1/2 whitespace-nonwrap">
          <button className="text-white bg-primary rounded-3xl py-3 px-12 text-xl hover:scale-105 transition duration-200 hover:bg-green-700">Get Started</button>
          <p className="text-white mt-3">Already have an Account?- <a className="text-gold hover:underline" href="#">Login</a></p>
        </div>
    </div>
    </div>
  );
}
