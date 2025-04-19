import { Link } from "react-router-dom";
export const ReserverNow = () => {
    return ( 
        <div className="lg:w-3/5 w-11/12 table mx-auto my-16">
        <div className="relative w-full h-96 bg-cover bg-center rounded-4xl" style={{ backgroundImage: "url('/reservernow.png')" }}>
        <div className="absolute inset-0 bg-black opacity-60 rounded-4xl"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-16">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">Votre table vous attend… 
                    <br />
                    Ne la laissez pas filer !</h1>
                    <Link to='/Reservation' className="px-5 py-3 text-black bg-white font-bold text-xl rounded-full cursor-pointer">Réservez maintenant !</Link>
            </div>
    </div> 
    </div>
    );
}