export const TestimonialCard = ({ content, name, period, stars }) => {
    // Generate stars based on the number provided (up to 5)
    const renderStars = () => {
      const starArray = [];
      const totalStars = Math.min(stars, 5); // Limit to 5 stars maximum
      
      for (let i = 0; i < stars; i++) {
        starArray.push(
          <span key={i} className="text-yellow-400 text-2xl sm:text-3xl font-bold mx-1">★</span>
        );
      }
      
      return starArray;
    };
  
    // Get first letter of name for avatar
    const firstLetter = name ? name.charAt(0).toUpperCase() : 'A';
  
    return (
      <div className="bg-white rounded-3xl shadow-2xl sm:p-10 p-6 py-12 max-w-md flex flex-col justify-between items-start mx-2">
        <div className="flex justify-between items-center mb-6 w-full">
          <div className="flex">
            {renderStars()}
          </div>
          <div className="text-gray-400 text-md">
            {period}
          </div>
        </div>
        
        <div className="mb-6">
          <p className="text-gray-800 text-sm font-semibold">
            {content}
          </p>
        </div>
        
        <div className="flex items-center">
          <div className="sm:w-12 sm:h-12 w-10 h-10  rounded-full bg-purple-400 flex items-center justify-center text-white font-bold text-xl mr-3">
            {firstLetter}
          </div>
          <div className="font-medium text-gray-800">
            {name}
          </div>
        </div>
      </div>
    );
  };