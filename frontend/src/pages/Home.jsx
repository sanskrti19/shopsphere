import Navbar from "../components/navbar/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <div className="p-10">

        <h1 className="text-5xl font-bold mb-4">
          Welcome to ShopSphere
        </h1>

        <p className="text-xl text-gray-600">
          Smart E-Commerce Platform using DSA + Spring Boot
        </p>

      </div>
    </>
  );
}

export default Home;    