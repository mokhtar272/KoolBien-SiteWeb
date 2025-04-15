import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export const Navbar = () => {
    const location = useLocation();
    const isActive = (path) => {
        return location.pathname === path ? "bg-[#C75000] text-white py-1 px-3 rounded-3xl font-semibold" : "text-black hover:text-[#C75000] py-1 px-3";
    };

    return ( 
        <nav className="bg-white p-6 flex justify-between items-center sticky top-0 z-10 shadow-md">
            <Link to="/"><img src="/logo/logo.svg" alt="" className="" /></Link> 
            <ul className="flex space-x-6 text-lg font-semibold">
                <li className={isActive("/Menu")}>
                    <Link to="/Menu">Menu</Link>
                </li>
                <li className={isActive("/Reservation")}>
                    <Link to="/Reservation">Réservation</Link>
                </li>
                <li className={isActive("/Contact")}>
                    <Link to="/Contact">Contact</Link>
                </li>
                <li className={isActive("/Commande")}>
                    <Link to="/Commande">Commande</Link>
                </li>
            </ul>
        </nav>
    );
}
