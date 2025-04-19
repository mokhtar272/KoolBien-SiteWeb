import ReservationForm from "../components/ReservationForm";
import { RetoursClients } from "../components/RetoursClients";

export const Reservation = () => {
    return ( 
    <>
        <div className="relative w-full h-[100vh] bg-cover bg-center" style={{ backgroundImage: "url('/landingimage.png')" }}>
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white">
                <ReservationForm/>
            </div>
        </div>
        <RetoursClients />
    </> );
}