

const Banner = () => {
  return (
    <div>
      <div className="hero h-[70vh] bg-gray-200">
        <img className="hero h-[70vh]" src="banner2.jpg" alt="" />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">YOGA FOR HEALTH</h1>
            <p className="mb-5">Yoga is said to provide many benefits that a gym workout provides. In addition to it, yoga is also extremely beneficial for aspects like peace of mind, meditation, and so on.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;