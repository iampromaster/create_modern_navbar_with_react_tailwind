import Navbar from "./Navbar";


function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full relative bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400 flex items-center justify-center text-center flex-col gap-10 text-white p-52">
        <h1 className="text-7xl">Seciton 1</h1>
        <p className="text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nulla accusamus repellendus expedita facere sequi eligendi eveniet voluptas esse quidem eaque distinctio, ad maiores facilis voluptatum quasi velit ipsam sunt.</p>
      </div>

      <div className="min-h-screen w-full relative bg-gradient-to-r from-orange-500 to-yellow-300  flex items-center justify-center text-center flex-col gap-10 text-white p-52">
        <h1 className="text-7xl">Seciton 2</h1>
        <p className="text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nulla accusamus repellendus expedita facere sequi eligendi eveniet voluptas esse quidem eaque distinctio, ad maiores facilis voluptatum quasi velit ipsam sunt.</p>
      </div>

      <div className="min-h-screen w-full relative bg-gradient-to-r from-sky-500 to-blue-300  flex items-center justify-center text-center flex-col gap-10 text-white p-52">
        <h1 className="text-7xl">Seciton 3</h1>
        <p className="text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nulla accusamus repellendus expedita facere sequi eligendi eveniet voluptas esse quidem eaque distinctio, ad maiores facilis voluptatum quasi velit ipsam sunt.</p>
      </div>
    </>
  );
}

export default App;
