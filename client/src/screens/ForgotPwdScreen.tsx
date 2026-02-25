import { Link, useNavigate } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser, faEnvelope, faLock, faEye, faEyeSlash, faCaretRight} from "@fortawesome/free-solid-svg-icons";

export default function ForgotPwdScreen() {

    return (
        <div className="min-h-screen bg-[var(--color-background)] flex flex-col">
        
            {/* BreadCrumb */}
            <BreadCrumb/>

            {/* Login Card */}
            <div className="flex flex-1 items-center justify-center px-4">
                <div className="w-full max-w-sm bg-white rounded-3xl shadow-xl p-6">
                    
                    <h2 className="text-3xl font-extrabold text-center text-[var(--color-txt)]">
                        Forgot Your Password
                    </h2>
                    <p className="text-center text-sm text-gray-500 mt-1 mb-6">
                        Enter the new password
                    </p>

                    <form className="space-y-4">

            {/* New Password */}
            <div className="flex items-center border border-gray-300 rounded-3xl px-4 py-2 focus-within:ring-1 focus-within:ring-[var(--color-primary)] my-8">
              <FontAwesomeIcon icon={faLock} className="text-primary mr-2" />
              <div className="w-px h-6 bg-primary mr-2" />
              <input
                type="email"
                placeholder="Enter Account Email"





                
                className="flex-1 outline-none"
              />
            </div>

            {/* New Password */}
            <div className="flex items-center border border-gray-300 rounded-3xl px-4 py-2 focus-within:ring-1 focus-within:ring-[var(--color-primary)] my-8">
              <FontAwesomeIcon icon={faLock} className="text-primary mr-2" />
              <div className="w-px h-6 bg-primary mr-2" />
              <input
                type="email"
                placeholder="Enter New Password"
                className="flex-1 outline-none"
              />
            </div>
            
            {/* Confirm New Password */}
            <div className="flex items-center border border-gray-300 rounded-3xl px-4 py-2 focus-within:ring-1 focus-within:ring-[var(--color-primary)] my-6">
              <FontAwesomeIcon icon={faLock} className="text-primary mr-2" />
              <div className="w-px h-6 bg-primary mr-2" />
              <input
                type="email"
                placeholder="Confirm New Password"
                className="flex-1 outline-none"
              />
            </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="
                                w-full py-3 rounded-3xl font-semibold text-white
                                bg-[var(--color-primary)]
                                hover:bg-green-600
                                transition
                            "
                        >
                            Change Password
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
