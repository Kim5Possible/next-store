const Loader = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
      <p className="mt-4">Loading...</p>
    </div>
  );
};

export default Loader;
