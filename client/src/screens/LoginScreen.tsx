import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";

export default function LoginScreen() {
    return (
        <div className="min-h-screen bg-[var(--color-background)] flex flex-col">
        
            {/* BreadCrumb */}
            <BreadCrumb/>

            {/* Login Card */}
            <div className="flex flex-1 items-center justify-center px-4">
                <div className="w-full max-w-sm bg-white rounded-3xl shadow-xl p-6">
                    
                    <h2 className="text-3xl font-extrabold text-center text-[var(--color-txt)]">
                        Welcome Back
                    </h2>
                    <p className="text-center text-sm text-gray-500 mt-1 mb-6">
                        Login to your account
                    </p>

                    <form className="space-y-4">
                        {/* Email */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-[var(--color-txt)]">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="example@gmail.com"
                                className="
                                    border border-gray-300 rounded-xl px-4 py-2
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-[var(--color-primary)]
                                "
                            />
                        </div>

                        {/* Password */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-[var(--color-txt)]">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="
                                    border border-gray-300 rounded-xl px-4 py-2
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-[var(--color-primary)]
                                "
                            />
                        </div>

                        {/* Forgot Password */}
                        <div className="text-right">
                            <button
                                type="button"
                                className="text-sm text-[var(--color-primary)] hover:underline"
                            >
                                Forgot password?
                            </button>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="
                                w-full py-3 rounded-xl font-semibold text-white
                                bg-[var(--color-primary)]
                                hover:bg-green-600
                                transition
                            "
                        >
                            Login
                        </button>
                    </form>

                    {/* Footer */}
                    <p className="text-center text-sm text-gray-500 mt-6">
                        Don’t have an account?{" "}
                        <Link
                            to="/chooseRole"
                            className="text-[var(--color-primary)] font-semibold hover:underline"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
