import { GiRoundStar } from "react-icons/gi";

export const Card = () => {
  const cardData = [
    {id:1,name:"Fresh_cream_cakes",price:100, restaurantname:"Moon Light", image:"https://ik.imagekit.io/os5tqthul/Cakes/Fresh_cream_cakes/Screenshot_2024-09-17-09-52-13-16_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726719176857",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:2,name:"Deserts",price:150, restaurantname:"Moon Light", image:"https://ik.imagekit.io/os5tqthul/Cakes/Deserts_cakes/WhatsApp%20Image%202024-09-17%20at%2009.54.48_f5663123.jpg?updatedAt=1726718969430",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:3,name:"Tier_cakes",price:150, restaurantname:"Moon Light" ,image:"https://ik.imagekit.io/os5tqthul/Cakes/Tier_cakes/WhatsApp%20Image%202024-09-17%20at%2009.50.46_f4d704a6.jpg?updatedAt=1726718729622",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:4,name:"Death_cakes",price:100, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Death/Screenshot_2024-09-17-09-47-39-80_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726718629672",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:5,name:"Foundant_cakes",price:150, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/foundant%20cakes/Screenshot_2024-09-17-09-42-47-32_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726718035634",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:6,name:"Cup_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Cup_cakes/Screenshot_2024-09-17-09-57-01-17_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726719339923",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:7,name:"Deserts",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Deserts_cakes/WhatsApp%20Image%202024-09-17%20at%2009.54.48_625e6a2c.jpg?updatedAt=1726718969541",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Number_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Number%20cakes/WhatsApp%20Image%202024-09-17%20at%2009.48.42_7238c0cb.jpg?updatedAt=1726718488335",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:9,name:"Death_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Death/Screenshot_2024-09-17-09-46-57-66_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726718629625",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:10,name:"Tier_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Tier_cakes/WhatsApp%20Image%202024-09-17%20at%2009.50.48_43a0916d.jpg?updatedAt=1726718729881",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:11,name:"Deserts",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Deserts_cakes/WhatsApp%20Image%202024-09-17%20at%2009.54.49_5329320d.jpg?updatedAt=1726718969350",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:12,name:"Foundant_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/foundant%20cakes/Screenshot_2024-09-17-09-42-07-98_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726718035556",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:13,name:"Fresh_cream_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Fresh_cream_cakes/Screenshot_2024-09-17-09-52-57-05_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726719176096",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:14,name:"Tier_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Tier_cakes/WhatsApp%20Image%202024-09-17%20at%2009.50.47_2e77612f.jpg?updatedAt=1726718730292",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:15,name:"Foundant_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/foundant%20cakes/Screenshot_2024-09-17-09-41-35-80_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726718035339",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:16,name:"Deserts",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Deserts_cakes/WhatsApp%20Image%202024-09-17%20at%2009.54.47_a7700303.jpg?updatedAt=1726718969348",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:17,name:"Death_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Death/Screenshot_2024-09-17-09-47-09-11_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726718629510",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:18,name:"Deserts",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Deserts_cakes/WhatsApp%20Image%202024-09-17%20at%2009.54.47_a4ddf6df.jpg?updatedAt=1726718969298",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Foundant_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/foundant%20cakes/Screenshot_2024-09-17-09-42-26-13_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726718035189",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Number_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Number%20cakes/WhatsApp%20Image%202024-09-17%20at%2009.48.41_96317dcd.jpg?updatedAt=1726718488233",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Deserts",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Deserts_cakes/WhatsApp%20Image%202024-09-17%20at%2009.54.46_56486099.jpg?updatedAt=1726718969054",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Fresh_cream_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Fresh_cream_cakes/Screenshot_2024-09-17-09-52-24-77_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726719177252",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Cup_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Cup_cakes/Screenshot_2024-09-17-09-56-02-99_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726719339263",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Number_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Number%20cakes/WhatsApp%20Image%202024-09-17%20at%2009.48.40_a78affe8.jpg?updatedAt=1726718488217",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Deserts",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Deserts_cakes/WhatsApp%20Image%202024-09-17%20at%2009.54.46_a2e2a4fe.jpg?updatedAt=1726718968946",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Fresh_cream_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Fresh_cream_cakes/Screenshot_2024-09-17-09-52-47-80_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726719176626",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Foundant_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/foundant%20cakes/Screenshot_2024-09-17-09-42-36-47_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726718034645",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Fresh_cream_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Fresh_cream_cakes/Screenshot_2024-09-17-09-52-04-15_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726719175675",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Deserts",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Deserts_cakes/WhatsApp%20Image%202024-09-17%20at%2009.54.49_1953055a.jpg?updatedAt=1726718968557",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Deserts",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Deserts_cakes/WhatsApp%20Image%202024-09-17%20at%2009.54.46_e133711f.jpg?updatedAt=1726718968511",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Death_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Death/Screenshot_2024-09-17-09-47-18-26_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726718629422",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Foundant_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/foundant%20cakes/Screenshot_2024-09-17-09-41-48-06_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726718034632",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Tier_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Tier_cakes/WhatsApp%20Image%202024-09-17%20at%2009.50.47_38be17b8.jpg?updatedAt=1726718730744",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Foundant_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/foundant%20cakes/Screenshot_2024-09-17-09-41-58-28_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726718033928",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Cup_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Cup_cakes/Screenshot_2024-09-17-09-55-51-34_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726719337391",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Tier_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Tier_cakes/WhatsApp%20Image%202024-09-17%20at%2009.50.48_8799ff3d.jpg?updatedAt=1726718730903",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Death_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Death/Screenshot_2024-09-17-09-45-54-49_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726718628827",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Tier_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Tier_cakes/WhatsApp%20Image%202024-09-17%20at%2009.50.48_dd3d6573.jpg?updatedAt=1726718730948",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Foundant_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/foundant%20cakes/Screenshot_2024-09-17-09-42-17-27_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726717967765",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Number_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Number%20cakes/WhatsApp%20Image%202024-09-17%20at%2009.48.42_70f1f255.jpg?updatedAt=1726718488151",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Foundant_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/foundant%20cakes/Screenshot_2024-09-17-09-42-55-40_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726717957433",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Cup_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Cup_cakes/Screenshot_2024-09-17-09-55-17-85_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726719340012",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Death_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Death/Screenshot_2024-09-17-09-46-29-06_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726718628770",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Tier_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Tier_cakes/WhatsApp%20Image%202024-09-17%20at%2009.50.42_986d3659.jpg?updatedAt=1726718731053",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Death_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Death/Screenshot_2024-09-17-09-47-48-10_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726718628534",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Tier_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Tier_cakes/WhatsApp%20Image%202024-09-17%20at%2009.50.47_253c5c1b.jpg?updatedAt=1726718731103",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Cup_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Cup_cakes/Screenshot_2024-09-17-09-57-12-50_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726719340411",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Foundant_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/foundant%20cakes/Screenshot_2024-09-17-09-43-05-67_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726717889442",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Tier_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Tier_cakes/WhatsApp%20Image%202024-09-17%20at%2009.50.46_168d2568.jpg?updatedAt=1726718731140",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Number_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Number%20cakes/WhatsApp%20Image%202024-09-17%20at%2009.48.41_ce496ffc.jpg?updatedAt=1726718488119",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Death_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Death/Screenshot_2024-09-17-09-46-10-69_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726718628546",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Number_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Number%20cakes/WhatsApp%20Image%202024-09-17%20at%2009.48.40_de9f4792.jpg?updatedAt=1726718488018",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Cup_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Cup_cakes/Screenshot_2024-09-17-09-57-12-50_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726719340411",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Death_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Death/Screenshot_2024-09-17-09-47-28-35_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726718625498",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Cup_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Cup_cakes/Screenshot_2024-09-17-09-56-40-32_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726719341194",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Number_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Number%20cakes/WhatsApp%20Image%202024-09-17%20at%2009.48.42_1de120d1.jpg?updatedAt=1726718487998",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Cup_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Cup_cakes/Screenshot_2024-09-17-09-56-14-58_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726719341198",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Death_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Death/Screenshot_2024-09-17-09-46-41-81_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726718625327",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Cup_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Cup_cakes/Screenshot_2024-09-17-09-56-27-74_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726719341269",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"Fresh_cream_cakes",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/Cakes/Fresh_cream_cakes/Screenshot_2024-09-17-09-52-39-84_6012fa4d4ddec268fc5c7112cbb265e7.jpg?updatedAt=1726719173740",rating:"4.4 . ",delivery:"45-50 mins"},


    
    //... other items
  ];

  return (
    <>
    
      <p className="w-[75%] mx-auto grid  text-2xl font-bold">
        Restaurants with online food delivery in Chhindwara
      </p>
      <p className="w-[75%] ml-48 border rounded-lg p-1 items-center text-2xl grid font-medium mx-auto ">filter</p>
      
      <div className="2xl:container mt-10 mb-10">
        <div className="w-[75%] mx-auto grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cardData.map((itemdata, index) => (
            <div key={index} className="hover:scale-95">
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
