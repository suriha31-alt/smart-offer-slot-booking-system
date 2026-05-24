import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  // Dummy offers data
  const offers = [
    { id: 1, title: "Gym Trial Offer" },
    { id: 2, title: "Salon Discount Offer" },
    { id: 3, title: "Spa Package Offer" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <div className="w-64 bg-blue-600 text-white p-6">

        <h1 className="text-2xl font-bold mb-8">
          Admin Panel
        </h1>

        <ul className="space-y-3">

          {/* Dashboard */}
          <li>
            <button
              onClick={() => navigate("/dashboard")}
              className="w-full text-left bg-blue-700 p-2 rounded transition"
            >
              Dashboard
            </button>
          </li>

          {/* Create Offer */}
          <li>
            <button
              onClick={() => navigate("/create-offer")}
              className="w-full text-left hover:bg-blue-700 p-2 rounded transition"
            >
              Create Offer
            </button>
          </li>

          {/* Manage Offers */}
          <li>
            <button
              onClick={() => navigate("/manage-offers")}
              className="w-full text-left hover:bg-blue-700 p-2 rounded transition"
            >
              Manage Offers
            </button>
          </li>

          {/* Bookings */}
          <li>
            <button
              onClick={() => navigate("/bookings")}
              className="w-full text-left hover:bg-blue-700 p-2 rounded transition"
            >
              Bookings
            </button>
          </li>

          {/* Booking Confirmation */}
          <li>
            <button
              onClick={() => navigate("/booking-confirmation")}
              className="w-full text-left hover:bg-blue-700 p-2 rounded transition"
            >
              Booking Confirmation
            </button>
          </li>

          {/* Profile */}
          <li>
            <button
              onClick={() => navigate("/profile")}
              className="w-full text-left hover:bg-blue-700 p-2 rounded transition"
            >
              Profile
            </button>
          </li>

        </ul>

      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">

        {/* Heading */}
        <div className="flex justify-between items-center mb-6">

          <h2 className="text-3xl font-bold">
            Dashboard Overview
          </h2>

          <button
            onClick={() => navigate("/profile")}
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-xl shadow-md transition"
          >
            My Profile
          </button>

        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

          <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">

            <h3 className="text-gray-500">
              Total Offers
            </h3>

            <p className="text-3xl font-bold text-blue-600 mt-2">
              12
            </p>

          </div>

          <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">

            <h3 className="text-gray-500">
              Active Offers
            </h3>

            <p className="text-3xl font-bold text-green-600 mt-2">
              6
            </p>

          </div>

          <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">

            <h3 className="text-gray-500">
              Total Bookings
            </h3>

            <p className="text-3xl font-bold text-purple-600 mt-2">
              48
            </p>

          </div>

          <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">

            <h3 className="text-gray-500">
              Today's Bookings
            </h3>

            <p className="text-3xl font-bold text-orange-500 mt-2">
              5
            </p>

          </div>

        </div>

        {/* Offers Table */}
        <div className="bg-white rounded-2xl shadow p-6">

          <div className="flex justify-between items-center mb-6">

            <h3 className="text-2xl font-bold">
              Available Offers
            </h3>

            <button
              onClick={() => navigate("/create-offer")}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
            >
              + Add Offer
            </button>

          </div>

          <table className="w-full">

            <thead>

              <tr className="bg-gray-100">

                <th className="text-left p-4 rounded-l-xl">
                  Offer Name
                </th>

                <th className="text-center p-4 rounded-r-xl">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {offers.map((offer) => (
                <tr
                  key={offer.id}
                  className="border-b hover:bg-gray-50 transition"
                >

                  {/* Offer Name */}
                  <td className="p-4 font-medium">
                    {offer.title}
                  </td>

                  {/* Action Buttons */}
                  <td className="p-4 flex justify-center gap-3">

                    {/* View Details */}
                    <button
                      onClick={() => navigate(`/offer/${offer.id}`)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
                    >
                      View Details
                    </button>

                    {/* Confirm Booking */}
                    <button
                      onClick={() => navigate("/booking-confirmation")}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
                    >
                      Confirm Booking
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