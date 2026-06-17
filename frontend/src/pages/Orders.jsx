function Orders() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold mb-8">
        My Orders
      </h1>

      <div className="bg-white rounded-xl shadow-md p-6 mb-6">

        <div className="flex justify-between items-center mb-4">

          <div>
            <h2 className="text-2xl font-semibold">
              Order #12345
            </h2>

            <p className="text-gray-500">
              Placed on June 17, 2026
            </p>
          </div>

          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
            Delivered
          </span>

        </div>

        <div className="border-t pt-4">

          <p className="mb-2">
            Wireless Headphones × 1
          </p>

          <p className="mb-2">
            Gaming Mouse × 2
          </p>

          <h3 className="text-xl font-bold mt-4">
            Total: ₹5997
          </h3>

        </div>

      </div>

    </div>
  );
}

export default Orders;