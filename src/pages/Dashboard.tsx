import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  // ✅ Dummy offers data (replace later with API)
  const offers = [
    { id: 1, title: "Gym Trial Offer" },
    { id: 2, title: "Salon Discount Offer" },
    { id: 3, title: "Spa Package Offer" }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <div className="w-64 bg-blue-600 text-white p-6">
        <h1 className="text-2xl font-bold mb-8">
          Admin Panel
        </h1>

        <ul className="space-y-3">

          <li>
            <button
              onClick={() => navigate("/dashboard")}
              className="w-full text-left hover:bg-blue-700 p-2 rounded"
            >
              Dashboard
            </button>
          </li>

          <li>
            <button
              onClick={() => navigate("/create-offer")}
              className="w-full text-left hover:bg-blue-700 p-2 rounded"
            >
              Create Offer
            </button>
          </li>

          <li>
            <button
              onClick={() => navigate("/manage-offers")}
              className="w-full text-left hover:bg-blue-700 p-2 rounded"
            >
              Manage Offers
            </button>
          </li>

          <li>
            <button
              onClick={() => navigate("/bookings")}
              className="w-full text-left hover:bg-blue-700 p-2 rounded"
            >
              Bookings
            </button>
          </li>

          <li>
            <button
              onClick={() => navigate("/profile")}
              className="w-full text-left hover:bg-blue-700 p-2 rounded"
            >
              Profile
            </button>
          </li>

        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">

        <h2 className="text-3xl font-bold mb-6">
          Dashboard Overview
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">

          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-gray-500">Total Offers</h3>
            <p className="text-2xl font-bold">12</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-gray-500">Active Offers</h3>
            <p className="text-2xl font-bold">6</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-gray-500">Total Bookings</h3>
            <p className="text-2xl font-bold">48</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-gray-500">Today's Bookings</h3>
            <p className="text-2xl font-bold">5</p>
          </div>

        </div>

        {/* Offers List with View Details */}
        <div className="bg-white p-4 rounded-xl shadow">

          <h3 className="text-xl font-bold mb-4">
            Offers
          </h3>

          <table className="w-full text-left">

            <thead>
              <tr className="border-b">
                <th className="p-2">Offer Name</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>

            <tbody>
              {offers.map((offer) => (
                <tr key={offer.id} className="border-b">

                  <td className="p-2">
                    {offer.title}
                  </td>

                  <td className="p-2">

                    {/* ✅ Working View Details button */}
                    <button
                      onClick={() => navigate(`/offer/${offer.id}`)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      View Details
                    </button>

                  </td>

                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;