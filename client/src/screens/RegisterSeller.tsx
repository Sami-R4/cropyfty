import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser, faEnvelope, faLock, faEye, faEyeSlash, faCaretRight} from "@fortawesome/free-solid-svg-icons"

export default function RegisterSeller() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] flex flex-col">
      
      {/* BreadCrumb */}
      <BreadCrumb />

      {/* Registration Card */}
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-sm bg-white rounded-3xl shadow-xl p-6">
          
          {/* Header */}
          <h2 className="text-3xl font-extrabold text-center text-[var(--color-txt)]">
            Join as a Seller
          </h2>
          <p className="text-center text-sm text-gray-500 mt-1 mb-6">
            Create your account to start selling your farm products
          </p>

          {/* Form */}
          <form className="space-y-4">

            {/* Full Name */}
            <div className="flex items-center border border-gray-300 rounded-3xl px-4 py-2 focus-within:ring-1 focus-within:ring-[var(--color-primary)]">
              <FontAwesomeIcon icon={faUser} className="text-primary mr-2" />
              <div className="w-px h-6 bg-primary mr-2" />
              <input
                type="text"
                placeholder="Enter Your Name"
                className="flex-1 outline-none"
              />
            </div>

            {/* Email */}
            <div className="flex items-center border border-gray-300 rounded-3xl px-4 py-2 focus-within:ring-1 focus-within:ring-[var(--color-primary)]">
              <FontAwesomeIcon icon={faEnvelope} className="text-primary mr-2" />
              <div className="w-px h-6 bg-primary mr-2" />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 outline-none"
              />
            </div>

            {/* Password */}
            <div className="flex items-center border border-gray-300 rounded-3xl px-4 py-2 focus-within:ring-1 focus-within:ring-[var(--color-primary)]">
              <FontAwesomeIcon icon={faLock} className="text-primary mr-2" />
              <div className="w-px h-6 bg-primary mr-2" />
              <input
                type="password"
                placeholder="Enter Your Password"
                className="flex-1 outline-none"
              />
              <FontAwesomeIcon
                icon={faEyeSlash}
                className="text-gray-400 ml-2 cursor-pointer"
              />
            </div>

            {/* Confirm Password */}
            <div className="flex items-center border border-gray-300 rounded-3xl px-4 py-2 focus-within:ring-1 focus-within:ring-[var(--color-primary)]">
              <FontAwesomeIcon icon={faLock} className="text-primary mr-2" />
              <div className="w-px h-6 bg-primary mr-2" />
              <input
                type="password"
                placeholder="Confirm Your Password"
                className="flex-1 outline-none"
              />
              <FontAwesomeIcon
                icon={faEyeSlash}
                className="text-gray-400 ml-2 cursor-pointer"
              />
            </div>

            {/* Submit */}
            <div className="flex items-center justify-end mt-2">
            <button
              type="submit"
              className="w-50 py-3 rounded-3xl font-semibold text-white
                         bg-[var(--color-primary)] hover:bg-green-600 transition"
            >
              Next <FontAwesomeIcon icon={faCaretRight}/>
            </button>
            </div>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-6">
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
