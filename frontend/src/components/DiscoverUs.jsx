import { Globe, Utensils, Users, BookOpen } from "lucide-react"

function RestaurantPage() {
  return (
    <div className="relative w-full h-fit bg-cover bg-center" style={{ backgroundImage: "url('/discoverbg.png')" }}>
      <p className="text-3xl md:text-4xl lg:text-5xl text-center font-bold py-6 md:py-10 text-[#515151]">Découvrez-nous</p>
      
      {/* Main content - Original desktop layout preserved, responsive for mobile */}
      <div className="flex flex-col lg:flex-row gap-8 items-center pb-32">
        {/* Left column - Text content */}
        <div className="lg:w-1/2 space-y-4 md:space-y-6 px-10 md:p-6 lg:p-10">
          <h2 className="text-[#515151] text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">Ce qui rend Kool Bien unique</h2>
          <p className="text-[#4f4f4f] text-lg md:text-xl leading-relaxed ">
            c'est avant tout l'harmonie parfaite entre une cuisine traditionnelle algérienne authentique, un accueil
            chaleureux et une ambiance conviviale, créant ainsi une expérience culinaire qui dépasse la simple
            dégustation pour devenir un véritable voyage des sens
          </p>
        </div>
        
        {/* Mobile image - Only visible on mobile */}
        <div className="block lg:hidden rounded-2xl overflow-hidden mb-4 mx-auto">
          <img
            src="/koolbien.png"
            alt="Restaurant Kool Bien"
            className="w-80 md:w-96 object-cover"
          />
        </div>
        {/* Desktop Restaurant image - Only visible on desktop */}
            <div className="hidden lg:block rounded-2xl overflow-hidden mb-4 relative left-28">
              <img
                src="/koolbien.png"
                alt="Restaurant Kool Bien"
                className="w-96 object-cover"
              />
            </div>
        {/* Right column - Image and features - Original desktop layout */}
        <div className="lg:w-1/3 flex w-11/12">
          <div className="bg-[#7e7e7e] rounded-3xl py-6 md:py-10 lg:py-16 px-4 md:pl-6 lg:pr-0 lg:pl-28 flex w-full lg:w-auto">
            {/* Feature buttons */}
            <div className="w-full flex flex-col gap-4 justify-center">
              <div className="bg-white rounded-full lg:rounded-l-full lg:rounded-r-none py-2 px-3 flex items-center">
                <div className="bg-[#417295] rounded-full p-2 mr-3">
                  <Globe className="text-white h-5 w-5" />
                </div>
                <span className="text-[#515151] font-medium">Ambiance chaleureuse</span>
              </div>

              <div className="bg-white rounded-full lg:rounded-l-full lg:rounded-r-none py-2 px-4 flex items-center">
                <div className="bg-[#417295] rounded-full p-2 mr-3">
                  <Utensils className="text-white h-5 w-5" />
                </div>
                <span className="text-[#515151] font-medium">Saveurs authentiques</span>
              </div>

              <div className="bg-white rounded-full lg:rounded-l-full lg:rounded-r-none py-2 px-4 flex items-center">
                <div className="bg-[#417295] rounded-full p-2 mr-3">
                  <Users className="text-white h-5 w-5" />
                </div>
                <span className="text-[#515151] font-medium">Accueil convivial</span>
              </div>

              <div className="bg-white rounded-full lg:rounded-l-full lg:rounded-r-none py-2 px-4 flex items-center">
                <div className="bg-[#417295] rounded-full p-2 mr-3">
                  <BookOpen className="text-white h-5 w-5" />
                </div>
                <span className="text-[#515151] font-medium">Esprit traditionnel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantPage