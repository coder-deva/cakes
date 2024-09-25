const Map = () => {
  return (
    <>
    
    <div className="w-[75%] mx-auto grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-10">
      <h1 className="text-2xl text-orange-500 items-center font-bold ">Map</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3886.681406403287!2d80.1966303!3d13.05594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAzJzIxLjQiTiA4MMKwMTEnNDcuOSJF!5e0!3m2!1sen!2sin!4v1727202361514!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
      ></iframe>
      </div>
      
    </>
  );
};

export default Map;
