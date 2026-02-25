import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch, faUser, faStar, faCommentDots } from "@fortawesome/free-solid-svg-icons";

// import styles from '../styles/nav.module.css';

export default function BuyerNav(){
    return (
        <div className="fixed bottom-0 bg-white py-4 flex items-center px-6 gap-12 rounded-2xl shadow-[0_-2px_4px_rgba(0,0,0,0.2)]">
            <span className={`text-primary text-2xl`}><FontAwesomeIcon icon={faHome}/></span>
            <span className="text-primary text-2xl"><FontAwesomeIcon icon={faSearch}/></span>
            <span className="text-primary text-2xl"><FontAwesomeIcon icon={faStar}/></span>
            <span className="text-primary text-2xl"><FontAwesomeIcon icon={faCommentDots}/></span>
            <span className="text-primary text-2xl"><FontAwesomeIcon icon={faUser}/></span>

        </div>
    );
}
