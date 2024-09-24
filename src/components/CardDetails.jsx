import { useNavigate } from "react-router-dom";
import { useCard } from "./CardContext";
import { MdAddShoppingCart } from "react-icons/md";
import { AiFillThunderbolt } from "react-icons/ai";
import { Card2 } from "./Card2";

export const CardDetails = () => {
  const { selectedCard } = useCard();
  const navigate = useNavigate();

  if (!selectedCard) {
    return (
      <div>
        <p>No card selected. Please go back and select a card.</p>
        <button onClick={() => navigate("/")}>Back to Cards</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    console.log(`${selectedCard.name} added to cart.`);
    alert(`${selectedCard.name} added to cart.`);
  };

  const handleBuyNow = () => {
    console.log(`Proceeding to buy ${selectedCard.name}.`);
    alert(`Proceeding to buy ${selectedCard.name}.`);
  };

  return (
   <>
    <div className="2xl:container mt-10 mb-10">
      <div className="w-[75%] mx-auto">
        {/* Combined Container for Image, Details, Delivery Info, and Buttons */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex">

          {/* Image Section */}
          <div className="flex-shrink-0">
            <img
              src={selectedCard.image}
              alt={selectedCard.name}
              className="rounded-lg shadow-md object-cover w-[350px] h-[350px]"
            />
          </div>

          {/* Details and Actions Section */}
          <div className="ml-4 flex-grow">
            <h1 className="text-3xl font-bold mb-2">{selectedCard.name}</h1>
            <p className="text-lg mb-1">
              Price: <span className="font-semibold">${selectedCard.price}</span>
            </p>
            <p className="text-lg mb-1">
              Restaurant: <span className="font-semibold">{selectedCard.restaurantname}</span>
            </p>
            <p className="text-lg mb-1">
              Rating: <span className="font-semibold">{selectedCard.rating}</span>
            </p>
            <p className="text-lg mb-2">
              Delivery Time: <span className="font-semibold">{selectedCard.delivery}</span>
            </p>

            {/* Delivery Information Container */}
            <div className="flex justify-between mb-4">

              {/* Delivery Location Input */}
              <div className="flex flex-col w-[45%]">
                <label className="mb-2 text-gray-700 font-bold">Delivery Location</label>
                <input 
                  type="text" 
                  placeholder="Enter delivery location" 
                  className="py-2 px-4 border-orange-500 border-2 rounded animate-blink-orange"
                />
              </div>

              {/* Delivery Date Picker */}
              <div className="flex flex-col w-[45%]">
                <label className="mb-2 text-gray-700 font-bold">Delivery Date</label>
                <input 
                  type="date" 
                  className="py-2 px-4 border border-gray-300 rounded"
                />
              </div>

            </div>

            {/* Buttons Container */}
            <div className="flex justify-between">

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="flex items-center justify-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-[45%]"
              >
                <MdAddShoppingCart className="mr-2" />
                ADD TO CART
              </button>

              {/* Buy Now Button */}
              <button
                onClick={handleBuyNow}
                className="flex items-center justify-center bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-[45%]"
              >
                <AiFillThunderbolt className="mr-2" />
                BUY NOW
              </button>

            </div>

          </div>

        </div>
      </div>

      {/* Tailwind Custom Styles */}
      <style >{`
        @keyframes blink-orange {
          0%, 100% {
            box-shadow: 0 0 10px rgba(249, 115, 22, 1);
          }
          50% {
            box-shadow: 0 0 10px rgba(249, 115, 22, 0);
          }
        }

        .animate-blink-orange {
          animation: blink-orange 1.5s infinite;
          border-color: rgba(249, 115, 22, 1) !important;
        }
      `}</style>
    </div>

    <Card2/>
   </>
  );
};
