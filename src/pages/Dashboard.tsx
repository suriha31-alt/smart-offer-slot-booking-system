import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <div className="w-64 bg-blue-600 text-white p-6">
        <h1 className="text-2xl font-bold mb-8">
          Admin Panel
        </h1>

        <ul className="space-y-4">

          <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">
            Dashboard
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

          <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">
            Bookings
          </li>

          <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">
            Profile
          </li>

        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">

        <h2 className="text-3xl font-bold mb-6">
          Dashboard Overview
        </h2>

        {/* Stats Cards */}
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

        {/* Recent Bookings Table */}
        <div className="bg-white p-4 rounded-xl shadow">

          <h3 className="text-xl font-bold mb-4">
            Recent Bookings
          </h3>

          <table className="w-full text-left">

            <thead>
              <tr className="border-b">
                <th className="p-2">Customer</th>
                <th className="p-2">Offer</th>
                <th className="p-2">Slot</th>
                <th className="p-2">People</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="p-2">John</td>
                <td className="p-2">Gym Trial</td>
                <td className="p-2">5 PM</td>
                <td className="p-2">2</td>
                <td className="p-2 text-green-600">Confirmed</td>
              </tr>

              <tr className="border-b">
                <td className="p-2">Sara</td>
                <td className="p-2">Salon Offer</td>
                <td className="p-2">3 PM</td>
                <td className="p-2">1</td>
                <td className="p-2 text-yellow-600">Pending</td>
              </tr>
            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;