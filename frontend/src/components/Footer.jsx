import { Link } from "react-router-dom";
// import { Facebook, Instagram } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="w-full bg-slate-700 py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
          {/* Hours Column */}
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Heure</h2>
            <p className="mb-1 font-semibold">De lundi a vendredi</p>
            <p className="mb-4 text-gray-200 font-thin">De 11h a 14h & 18h a 23h</p>
            <p className="font-semibold">Vendredi</p>
            <p className=" text-gray-200 font-thin">De 18h a 23h</p>
          </div>

          {/* Address Column */}
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Adresse</h2>
            <p className="mb-6 text-gray-200 font-thin">
              3 Rue du 8 Mai 1945,
              <br />
              29200 Brest, France
            </p>
            <Link href="#" className="bg-white text-black px-4 py-2 font-bold text-xl hover:bg-gray-100 transition-colors">
              Directions
            </Link>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Conctact</h2>
            <Link href="tel:+33229027236" className="mb-6 underline hover:text-gray-200 transition-colors">
              +33 2 29 02 72 36
            </Link>
            <div className="flex ">
              <Link
                href="https://www.facebook.com/profile.php?id=61551253742418#"
                className=" rounded-full p-2 hover:opacity-90 transition-opacity"
                aria-label="Facebook"
              >
                <img src="/facebook.png" alt="" className="w-12"/>
              </Link>
              <Link
                href="https://www.instagram.com/kool.bien/"
                className=" rounded-full p-2 hover:opacity-90 transition-opacity"
                aria-label="Instagram"
              >
                <img src="/instagram.png" alt=""  className="w-12"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
