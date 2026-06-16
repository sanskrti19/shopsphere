import hero from "../../hero.png";

function AuthLayout({ children }) {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex bg-black text-white flex-col justify-center px-20">

        <h1 className="text-6xl font-bold mb-6">
          ShopSphere
        </h1>

        <p className="text-xl text-gray-300 leading-8">
          Smart E-Commerce Platform powered by
          Spring Boot, MongoDB and Data Structures.
        </p>

        <img
          src={hero}
          alt="hero"
          className="w-[500px] mt-10"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="flex justify-center items-center bg-gray-100">
        {children}
      </div>

    </div>
  );
}

export default AuthLayout;