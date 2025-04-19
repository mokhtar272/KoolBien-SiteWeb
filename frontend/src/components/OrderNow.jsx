export const OrderNow = () => {
    return ( 
      <div className="w-full table mx-auto mb-16">
        <div className="relative w-full h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('/landingimage.png')" }}>
          {/* Gradient overlay instead of simple opacity */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-50"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-16">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center px-4">Commandez maintenant et régalez-vous chez Kool Bien !</h1>
            <div className="flex flex-wrap gap-10 justify-center items-center">
              <a href="https://www.ubereats.com/fr-en/store/kool-bien-couscous-%26-grillades/nhC15vbmUSCHiisyMvkufA" className="bg-white rounded-full cursor-pointer px-10 py-2 flex items-center justify-center space-x-4 ">
                <img src="/logo/ubereats.png" alt="" className="w-40" />
              </a>
              <a href="https://www.ubereats.com/fr-en/store/kool-bien-couscous-%26-grillades/nhC15vbmUSCHiisyMvkufA" className="bg-[#00CCBC] rounded-full cursor-pointer px-10 py-2 flex items-center justify-center space-x-4 ">
                <img src="/logo/deliveroo.png" alt="" className="w-16" />
                <p className="text-2xl font-bold">Deliveroo</p>
              </a>
            </div>
          </div>
        </div> 
      </div>
    );
  }