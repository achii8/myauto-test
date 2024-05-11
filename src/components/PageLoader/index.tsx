const PageLoader = () => {
  return (
    <div className="flex items-center flex-col justify-center h-screen bg-white">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-white"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-primary animate-spin"></div>
      </div>
      <div className="mt-8 text-primary text-semibold">
        Please wait, it may take several seconds...
      </div>
    </div>
  );
};

export default PageLoader;
