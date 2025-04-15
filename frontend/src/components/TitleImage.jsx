export const TitleImage = () => {
    return ( 
    <>
        <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('/landingimage.png')" }}>
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white">
                <h1 className="text-4xl font-bold">Couscous et grillades, un voyage de saveurs.</h1>
            </div>
        </div>
    
    </> );
}