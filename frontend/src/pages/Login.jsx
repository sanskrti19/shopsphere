import Navbar from "../components/navbar/Navbar";

function Login() {
  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center h-[80vh]">

        <div className="bg-white p-10 rounded shadow-md w-[400px]">

          <h2 className="text-3xl font-bold mb-6 text-center">
            Login
          </h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 mb-4 rounded"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 mb-4 rounded"
          />

          <button className="w-full bg-black text-white p-3 rounded">
            Login
          </button>

        </div>

      </div>
    </>
  );
}

export default Login;