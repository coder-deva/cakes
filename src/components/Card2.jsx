import { useState } from 'react';
import { GiRoundStar } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { useCard } from './CardContext';

export const Card2 = () => {
  const { setSelectedCard } = useCard();
  const navigate = useNavigate();

  const cardData = [
    {id:1,name:"Fresh cream",price:100, restaurantname:"Moon Light", image:"https://ik.imagekit.io/os5tqthul/Cakes/Fresh_cream_cakes/Screenshot_2024-09-17-09-52-13-16_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726719176857",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:2,name:"Deserts",price:150, restaurantname:"Moon Light", image:"https://ik.imagekit.io/os5tqthul/Cakes/Deserts_cakes/WhatsApp%20Image%202024-09-17%20at%2009.54.48_f5663123.jpg?updatedAt=1726718969430",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:3,name:"Tier cakes",price:150, restaurantname:"Moon Light" ,image:"https://ik.imagekit.io/os5tqthul/Cakes/Tier_cakes/WhatsApp%20Image%202024-09-17%20at%2009.50.46_f4d704a6.jpg?updatedAt=1726718729622",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:4,name:"Death cakes",price:100, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Death/Screenshot_2024-09-17-09-47-39-80_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726718629672",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:5,name:"Foundant cakes",price:150, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/foundant%20cakes/Screenshot_2024-09-17-09-42-47-32_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726718035634",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:6,name:"Cup cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Cup_cakes/Screenshot_2024-09-17-09-57-01-17_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726719339923",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:7,name:"Deserts",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Deserts_cakes/WhatsApp%20Image%202024-09-17%20at%2009.54.48_625e6a2c.jpg?updatedAt=1726718969541",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Number cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Number%20cakes/WhatsApp%20Image%202024-09-17%20at%2009.48.42_7238c0cb.jpg?updatedAt=1726718488335",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:9,name:"Death cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Death/Screenshot_2024-09-17-09-46-57-66_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726718629625",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:10,name:"Tier cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Tier_cakes/WhatsApp%20Image%202024-09-17%20at%2009.50.48_43a0916d.jpg?updatedAt=1726718729881",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:11,name:"Deserts",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Deserts_cakes/WhatsApp%20Image%202024-09-17%20at%2009.54.49_5329320d.jpg?updatedAt=1726718969350",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:12,name:"Foundant cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/foundant%20cakes/Screenshot_2024-09-17-09-42-07-98_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726718035556",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:13,name:"Fresh cream",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Fresh_cream_cakes/Screenshot_2024-09-17-09-52-57-05_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726719176096",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:14,name:"Tier cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Tier_cakes/WhatsApp%20Image%202024-09-17%20at%2009.50.47_2e77612f.jpg?updatedAt=1726718730292",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:15,name:"Foundant cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/foundant%20cakes/Screenshot_2024-09-17-09-41-35-80_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726718035339",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:16,name:"Deserts",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Deserts_cakes/WhatsApp%20Image%202024-09-17%20at%2009.54.47_a7700303.jpg?updatedAt=1726718969348",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:17,name:"Death cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Death/Screenshot_2024-09-17-09-47-09-11_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726718629510",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:18,name:"Deserts",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Deserts_cakes/WhatsApp%20Image%202024-09-17%20at%2009.54.47_a4ddf6df.jpg?updatedAt=1726718969298",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:19,name:"Foundant cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/foundant%20cakes/Screenshot_2024-09-17-09-42-26-13_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726718035189",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:20,name:"Number cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Number%20cakes/WhatsApp%20Image%202024-09-17%20at%2009.48.41_96317dcd.jpg?updatedAt=1726718488233",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:21,name:"Deserts",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Deserts_cakes/WhatsApp%20Image%202024-09-17%20at%2009.54.46_56486099.jpg?updatedAt=1726718969054",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:22,name:"Fresh cream",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Fresh_cream_cakes/Screenshot_2024-09-17-09-52-24-77_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726719177252",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:23,name:"Cup cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Cup_cakes/Screenshot_2024-09-17-09-56-02-99_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726719339263",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:24,name:"Number cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Number%20cakes/WhatsApp%20Image%202024-09-17%20at%2009.48.40_a78affe8.jpg?updatedAt=1726718488217",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:25,name:"Deserts",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Deserts_cakes/WhatsApp%20Image%202024-09-17%20at%2009.54.46_a2e2a4fe.jpg?updatedAt=1726718968946",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:26,name:"Fresh cream",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Fresh_cream_cakes/Screenshot_2024-09-17-09-52-47-80_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726719176626",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:27,name:"Foundant cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/foundant%20cakes/Screenshot_2024-09-17-09-42-36-47_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726718034645",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:28,name:"Fresh cream",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Fresh_cream_cakes/Screenshot_2024-09-17-09-52-04-15_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726719175675",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:29,name:"Deserts",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Deserts_cakes/WhatsApp%20Image%202024-09-17%20at%2009.54.49_1953055a.jpg?updatedAt=1726718968557",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:30,name:"Deserts",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Deserts_cakes/WhatsApp%20Image%202024-09-17%20at%2009.54.46_e133711f.jpg?updatedAt=1726718968511",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:31,name:"Death cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Death/Screenshot_2024-09-17-09-47-18-26_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726718629422",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:32,name:"Foundant cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/foundant%20cakes/Screenshot_2024-09-17-09-41-48-06_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726718034632",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:33,name:"Tier cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Tier_cakes/WhatsApp%20Image%202024-09-17%20at%2009.50.47_38be17b8.jpg?updatedAt=1726718730744",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:34,name:"Foundant cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/foundant%20cakes/Screenshot_2024-09-17-09-41-58-28_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726718033928",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:35,name:"Cup cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Cup_cakes/Screenshot_2024-09-17-09-55-51-34_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726719337391",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:36,name:"Tier cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Tier_cakes/WhatsApp%20Image%202024-09-17%20at%2009.50.48_8799ff3d.jpg?updatedAt=1726718730903",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:37,name:"Death cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Death/Screenshot_2024-09-17-09-45-54-49_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726718628827",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:38,name:"Tier cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Tier_cakes/WhatsApp%20Image%202024-09-17%20at%2009.50.48_dd3d6573.jpg?updatedAt=1726718730948",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:39,name:"Foundant cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/foundant%20cakes/Screenshot_2024-09-17-09-42-17-27_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726717967765",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:40,name:"Number cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Number%20cakes/WhatsApp%20Image%202024-09-17%20at%2009.48.42_70f1f255.jpg?updatedAt=1726718488151",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:41,name:"Foundant cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/foundant%20cakes/Screenshot_2024-09-17-09-42-55-40_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726717957433",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:42,name:"Cup cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Cup_cakes/Screenshot_2024-09-17-09-55-17-85_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726719340012",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:43,name:"Death cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Death/Screenshot_2024-09-17-09-46-29-06_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726718628770",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:44,name:"Tier cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Tier_cakes/WhatsApp%20Image%202024-09-17%20at%2009.50.42_986d3659.jpg?updatedAt=1726718731053",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:45,name:"Death cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Death/Screenshot_2024-09-17-09-47-48-10_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726718628534",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:46,name:"Tier cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Tier_cakes/WhatsApp%20Image%202024-09-17%20at%2009.50.47_253c5c1b.jpg?updatedAt=1726718731103",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:47,name:"Cup cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Cup_cakes/Screenshot_2024-09-17-09-57-12-50_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726719340411",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:48,name:"Foundant cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/foundant%20cakes/Screenshot_2024-09-17-09-43-05-67_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726717889442",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:49,name:"Tier cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Tier_cakes/WhatsApp%20Image%202024-09-17%20at%2009.50.46_168d2568.jpg?updatedAt=1726718731140",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:50,name:"Number cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Number%20cakes/WhatsApp%20Image%202024-09-17%20at%2009.48.41_ce496ffc.jpg?updatedAt=1726718488119",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:51,name:"Death cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Death/Screenshot_2024-09-17-09-46-10-69_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726718628546",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:52,name:"Number cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Number%20cakes/WhatsApp%20Image%202024-09-17%20at%2009.48.40_de9f4792.jpg?updatedAt=1726718488018",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:53,name:"Cup cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Cup_cakes/Screenshot_2024-09-17-09-57-12-50_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726719340411",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:54,name:"Death cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Death/Screenshot_2024-09-17-09-47-28-35_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726718625498",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:55,name:"Cup cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Cup_cakes/Screenshot_2024-09-17-09-56-40-32_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726719341194",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:56,name:"Number cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Number%20cakes/WhatsApp%20Image%202024-09-17%20at%2009.48.42_1de120d1.jpg?updatedAt=1726718487998",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:57,name:"Cup cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Cup_cakes/Screenshot_2024-09-17-09-56-14-58_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726719341198",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:58,name:"Death cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Death/Screenshot_2024-09-17-09-46-41-81_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726718625327",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:59,name:"Cup cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Cup_cakes/Screenshot_2024-09-17-09-56-27-74_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726719341269",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:60,name:"Fresh cream",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Fresh_cream_cakes/Screenshot_2024-09-17-09-52-39-84_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726719173740",rating:"4.4 . ",delivery:"45-50 mins"},

  ];

  const [showFilter, setShowFilter] = useState(false);
  const [showNameFilter, setShowNameFilter] = useState(false);
  const [filteredData, setFilteredData] = useState(cardData);
  const [sortOrder, setSortOrder] = useState('');

  const handleCardClick = (card) => {
    setSelectedCard(card);
    navigate(`/details/${card.id}`);
    window.scrollTo(0, 0);
  };

  const handleFilterClick = () => {
    setShowFilter(!showFilter);
    setShowNameFilter(false);
  };

  const handleNameFilterClick = (name) => {
    const filtered = cardData.filter(card => card.name === name);
    setFilteredData(filtered);
    setShowNameFilter(false);
  };

  const handleSort = (order) => {
    let sortedData = [...filteredData];
    if (order === 'lowToHigh') {
      sortedData.sort((a, b) => a.price - b.price);
    } else if (order === 'highToLow') {
      sortedData.sort((a, b) => b.price - a.price);
    }
    setFilteredData(sortedData);
    setSortOrder(order);
  };

  return (
    <>
      <p className="w-[75%] mx-auto text-2xl font-bold">
        You May Also Like
      </p>

      <div className="flex flex-col items-start w-[75%] mx-auto mt-4">
        <button 
          className={`border rounded-full p-2 text-md font-medium cursor-pointer bg-gray-100 hover:bg-orange-300 hover:text-white shadow-md transition-shadow duration-300 ease-in-out ${showFilter ? 'bg-orange-300 text-white' : ''}`}
          onClick={handleFilterClick}>
          Filter
        </button>

        {showFilter && (
          <div className="flex space-x-4 mt-2">
            <button 
              className="border rounded-full p-2 text-md font-medium cursor-pointer bg-gray-100 hover:bg-orange-300 hover:text-white shadow-md transition-shadow duration-300 ease-in-out"
              onClick={() => handleSort('lowToHigh')}>
              Low to High
            </button>
            <button 
              className="border rounded-full p-2 text-md font-medium cursor-pointer bg-gray-100 hover:bg-orange-300 hover:text-white shadow-md transition-shadow duration-300 ease-in-out"
              onClick={() => handleSort('highToLow')}>
              High to Low
            </button>
            <button 
              className="border rounded-full p-2 text-md font-medium cursor-pointer bg-gray-100 hover:bg-orange-300 hover:text-white shadow-md transition-shadow duration-300 ease-in-out"
              onClick={() => setShowNameFilter(!showNameFilter)}>
              Filter by Name
            </button>
          </div>
        )}

        {showNameFilter && (
          <div className="absolute bg-white border p-4 rounded-lg shadow-lg w-[200px] mt-2 z-50 bg-gray-50 border-gray-200 transition-all duration-300 ease-in-out">
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold text-md text-gray-700">Select a Food Item</p>
              <button 
                className="text-gray-500 hover:text-red-500" 
                onClick={() => setShowNameFilter(false)}>
                ✖
              </button>
            </div>
            {[...new Set(cardData.map(card => card.name))].map((name) => (
              <p 
                key={name} 
                className="cursor-pointer p-2 text-sm hover:bg-orange-300 hover:text-white rounded-lg transition-colors duration-200 ease-in-out"
                onClick={() => handleNameFilterClick(name)}>
                {name}
              </p>
            ))}
          </div>
        )}
      </div>

      <div className="2xl:container mt-10 mb-10">
        <div className="w-[75%] mx-auto grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredData.map((itemdata, index) => (
            <div key={index} className="hover:scale-95" onClick={() => handleCardClick(itemdata)}>
              <img src={itemdata.image} alt="food img" className="w-full rounded-2xl h-52" />
              <div className="mt-8 mb-8">
                <p className="font-extrabold">{itemdata.restaurantname}</p>
                <div className="flex items-center gap-3">
                  <GiRoundStar className="text-green-600" />
                  <p className="font-bold">{itemdata.rating} {itemdata.delivery}</p>
                </div>
                <p className="font-bold">{itemdata.name}</p>
                <p className="font-extralight">{itemdata.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
