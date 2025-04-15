import { TitleImage } from "../components/TitleImage";
import { DishCard } from "../components/DishCard";
const LandingPage = () => {
    return ( 
    <>
        <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('/landingimage.png')" }}>
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white">
                <h1 className="text-4xl font-bold">Couscous et grillades, un voyage de saveurs.</h1>
            </div>
        </div>
        <div className="container mx-auto max-w-6xl px-4 py-8">

       
        <h1 className="text-4xl font-bold text-center my-6">Notre Menu</h1>
        <div className="flex flex-wrap justify-center gap-4 my-10">
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
         </div>

        </div>
        
    </> );
}
 
export default LandingPage;