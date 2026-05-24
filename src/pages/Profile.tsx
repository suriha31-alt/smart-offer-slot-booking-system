import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 p-6">

      {/* Top Bar */}
      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold text-blue-700">
          My Profile
        </h1>

        <button
          onClick={() => navigate("/dashboard")}
          className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-xl shadow-md transition"
        >
          Back to Dashboard
        </button>

      </div>

      {/* Main Profile Card */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Cover Section */}
        <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-700 relative">

          {/* Profile Image */}
          <div className="absolute -bottom-16 left-10">

            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            />

          </div>

        </div>

        {/* Profile Content */}
        <div className="pt-20 px-10 pb-10">

          {/* Name & Role */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">

            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Suriha
              </h2>

              <p className="text-gray-500 text-lg">
                Admin / Offer Manager
              </p>
            </div>

            {/* Edit Button */}
            <button
              className="mt-4 md:mt-0 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl shadow-md transition"
            >
              Edit Profile
            </button>

          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

            {/* Email */}
            <div className="bg-gray-50 p-5 rounded-2xl shadow-sm">
              <p className="text-gray-500 mb-1">
                Email
              </p>

              <h3 className="text-lg font-semibold">
                suriha@gmail.com
              </h3>
            </div>

            {/* Phone */}
            <div className="bg-gray-50 p-5 rounded-2xl shadow-sm">
              <p className="text-gray-500 mb-1">
                Phone
              </p>

              <h3 className="text-lg font-semibold">
                +91 9876543210
              </h3>
            </div>

            {/* Location */}
            <div className="bg-gray-50 p-5 rounded-2xl shadow-sm">
              <p className="text-gray-500 mb-1">
                Location
              </p>

              <h3 className="text-lg font-semibold">
                Tamil Nadu, India
              </h3>
            </div>

            {/* Role */}
            <div className="bg-gray-50 p-5 rounded-2xl shadow-sm">
              <p className="text-gray-500 mb-1">
                Role
              </p>

              <h3 className="text-lg font-semibold">
                System Administrator
              </h3>
            </div>

          </div>

          {/* Statistics Section */}
          <div className="mt-12">

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Activity Overview
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Offers */}
              <div className="bg-blue-500 text-white p-6 rounded-2xl shadow-lg">

                <p className="text-lg">
                  Total Offers
                </p>

                <h3 className="text-4xl font-bold mt-2">
                  12
                </h3>

              </div>

              {/* Bookings */}
              <div className="bg-green-500 text-white p-6 rounded-2xl shadow-lg">

                <p className="text-lg">
                  Total Bookings
                </p>

                <h3 className="text-4xl font-bold mt-2">
                  48
                </h3>

              </div>

              {/* Active */}
              <div className="bg-purple-500 text-white p-6 rounded-2xl shadow-lg">

                <p className="text-lg">
                  Active Offers
                </p>

                <h3 className="text-4xl font-bold mt-2">
                  6
                </h3>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;