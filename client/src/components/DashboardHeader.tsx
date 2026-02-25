import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function DashboardHeader(){
    return (
        <div>
             {/* Header */}
                        <div className="fixed top-0 bg-white py-4 flex items-center gap-1 rounded-2xl shadow-[0_0_4px_rgba(0,0,0,0.4)] w-full pl-5">
                            <span className="text-primary text-2xl"><FontAwesomeIcon icon={faHome}/></span>
                            <h2 className="text-2xl text-primary">Feed</h2>
                        </div>
        </div>
    );
}