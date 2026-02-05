// Hooks
import { Link, useNavigate } from "react-router-dom";

// Components
import BreadCrumb from '../components/BreadCrumb'

export default function ChooseRole() {

    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[var(--color-background)] flex flex-col">
            
            {/* BreadCrumb */}
            <BreadCrumb/>

            {/* Title */}
            <h2 className="font-extrabold text-3xl mt-10 text-center text-[var(--color-txt)]">
                What are you looking for?
            </h2>
            <p className="text-center text-gray-500 mt-2">
                Choose how you want to use Cropyfty
            </p>

            {/* Options */}
            <div className="flex-1 mx-4 mt-10 flex flex-col gap-5">
                
                {/* Buyer */}
                <div
                    onClick={() => navigate('/registerBuyer')}
                    className="
                        relative flex-1
                        rounded-3xl
                        bg-white
                        border border-gray-200
                        p-6
                        shadow-sm
                        overflow-hidden
                        transition
                        active:scale-[0.98]
                        hover:shadow-lg
                        hover:border-[var(--color-primary)]
                        flex items-center
                    "
                >
                    {/* Circular Accent */}
                    <div className="absolute -right-10 -top-10 w-50 h-50 rounded-full bg-[var(--color-secondary)] opacity-40" />

                    <div className="relative flex-1">
                        <span className="
                            inline-block
                            text-xs font-bold tracking-wide
                            text-[var(--color-primary)]
                            bg-[var(--color-secondary)]
                            px-3 py-1
                            rounded-full
                        ">
                            BUYER
                        </span>

                        <h3 className="mt-3 font-semibold text-xl text-[var(--color-txt)]">
                            I want to buy farm products
                        </h3>
                    </div>

                    {/* Caret */}
                    <svg
                        className="relative w-6 h-6 text-[var(--color-primary)]"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M9 6L15 12L9 18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                {/* Seller */}
                <div
                    onClick={() => navigate('/registerSeller')}
                    className="
                        relative flex-1
                        rounded-3xl
                        bg-white
                        border border-gray-200
                        p-6
                        shadow-sm
                        overflow-hidden
                        transition
                        active:scale-[0.98]
                        hover:shadow-lg
                        hover:border-[var(--color-primary)]
                        flex items-center
                    "
                >
                    {/* Circular Accent */}
                    <div className="absolute -right-10 -top-10 w-50 h-50 rounded-full bg-[var(--color-secondary)] opacity-40" />

                    <div className="relative flex-1">
                        <span className="
                            inline-block
                            text-xs font-bold tracking-wide
                            text-[var(--color-primary)]
                            bg-[var(--color-secondary)]
                            px-3 py-1
                            rounded-full
                        ">
                            SELLER
                        </span>

                        <h3 className="mt-3 font-semibold text-xl text-[var(--color-txt)]">
                            I want to sell my farm products
                        </h3>
                    </div>

                    {/* Caret */}
                    <svg
                        className="relative w-6 h-6 text-[var(--color-primary)]"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M9 6L15 12L9 18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}
