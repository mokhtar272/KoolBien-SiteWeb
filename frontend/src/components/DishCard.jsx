"use client"

export const DishCard = () => {
  return (
    <div className="">
      {/* Main card with rounded corners and orange background */}
      <div className="relative bg-[#C75000] rounded-3xl overflow-hidden">
        {/* Top pattern */}
        <div className="h-[50px] w-full">
          <img src="/zeligwhite.png" alt="" className="w-full h-full object-cover" />
        </div>

        {/* Content area */}
        <div className="flex flex-col items-center ">
          {/* Dish name */}
          <h1 className="text-white text-3xl font-bold py-3">Couscous</h1>

          {/* Dish image - positioned to overflow */}
          <div className="relative -mb-10">
            <img src="/dishes/couscous.png" alt="Couscous dish" className="w-[220px] h-[220px] object-contain" />
          </div>
        </div>

        {/* Bottom pattern */}
        <div className="h-[50px] w-full">
          <img src="/zeligwhite.png" alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}
