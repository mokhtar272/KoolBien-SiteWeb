import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const isActive = (path) => {
        return location.pathname === path 
            ? "bg-orange-600 text-white py-1 px-3 rounded-full font-semibold" 
            : "text-black hover:text-orange-600 py-1 px-3";
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return ( 
        <nav className="bg-white p-4 md:p-6 flex justify-between items-center sticky top-0 z-10 shadow-md">
            <Link to="/" className="flex-shrink-0">
                <img src="/logo/logo.svg" alt="Logo" className="h-6 md:h-10" />
            </Link> 
            
            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-4 lg:space-x-6 text-base lg:text-lg font-semibold">
                <li className={isActive("/Menu")}>
                    <Link to="/Menu">Menu</Link>
                </li>
                <li className={isActive("/Reservation")}>
                    <Link to="/Reservation">Réservation</Link>
                </li>
                <li className={isActive("/Commande")}>
                    <Link to="/Commande">Commande</Link>
                </li>
                <li className={isActive("/Contact")}>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
            
            {/* Mobile Menu Button */}
            <button 
                className="md:hidden text-gray-800 focus:outline-none" 
                onClick={toggleMenu}
                aria-label="Toggle navigation menu"
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
                    <ul className="flex flex-col py-2 font-semibold">
                        <li className={`mx-4 my-2 text-center ${isActive("/Menu")}`}>
                            <Link to="/Menu" onClick={toggleMenu}>Menu</Link>
                        </li>
                        <li className={`mx-4 my-2 text-center ${isActive("/Reservation")}`}>
                            <Link to="/Reservation" onClick={toggleMenu}>Réservation</Link>
                        </li>
                        <li className={`mx-4 my-2 text-center ${isActive("/Commande")}`}>
                            <Link to="/Commande" onClick={toggleMenu}>Commande</Link>
                        </li>
                        <li className={`mx-4 my-2 text-center ${isActive("/Contact")}`}>
                            <Link to="/Contact" onClick={toggleMenu}>Contact</Link>
                        </li>
                        
                    </ul>
                </div>
            )}
        </nav>
    );
};