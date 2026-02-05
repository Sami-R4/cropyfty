import { useNavigate } from "react-router-dom";

export default function BreadCrumb(){

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
            <>
            {/* Header */}
            <div className="flex items-center px-4 py-5">
                <button
                    onClick={handleGoBack}
                    className="flex justify-center items-center p-2 rounded-full hover:bg-[var(--color-secondary)] transition"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-primary"
                    >
                        <path
                            d="M15 18L9 12L15 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

                <h1 className="text-2xl font-bold mx-auto text-[var(--color-primary)]">
                    Cropyfty
                </h1>
            </div>
            </>
    )
}