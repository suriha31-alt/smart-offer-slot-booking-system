import { useNavigate } from "react-router-dom";

function BookingConfirmation() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 flex items-center justify-center p-6">

      {/* Main Card */}
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-2xl relative overflow-hidden">

        {/* Top Decoration */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-green-500"></div>

        {/* Success Icon */}
        <div className="flex justify-center mb-5">
          <div className="bg-green-100 p-5 rounded-full shadow-md animate-bounce">
            <span className="text-5xl">🎉</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center text-green-600 mb-3">
          Booking Confirmed!
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-center text-lg mb-8">
          Your reservation has been successfully completed.
          We look forward to serving you.
        </p>

        {/* Booking Details Card */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">

          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl font-bold text-gray-800">
              Booking Details
            </h2>

            <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
              Confirmed
            </span>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-5">

            <div className="bg-white p-4 rounded-xl shadow-sm">
              <p className="text-gray-500 text-sm">Booking ID</p>
              <p className="font-bold text-lg">BK1024</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm">
              <p className="text-gray-500 text-sm">Offer</p>
              <p className="font-bold text-lg">Gym Trial Offer</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm">
              <p className="text-gray-500 text-sm">Customer</p>
              <p className="font-bold text-lg">John Doe</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm">
              <p className="text-gray-500 text-sm">People</p>
              <p className="font-bold text-lg">2 Members</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm">
              <p className="text-gray-500 text-sm">Date</p>
              <p className="font-bold text-lg">24 May 2026</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm">
              <p className="text-gray-500 text-sm">Time</p>
              <p className="font-bold text-lg">5:00 PM</p>
            </div>

          </div>
        </div>

        {/* Thank You Message */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 mb-8 text-center">
          <p className="text-blue-700 font-medium">
            Thank you for booking with us 💙
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <button
            onClick={() => navigate("/dashboard")}
            className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white px-6 py-3 rounded-xl font-semibold shadow-md"
          >
            Go to Dashboard
          </button>

          <button
            onClick={() => navigate("/bookings")}
            className="bg-gray-200 hover:bg-gray-300 transition-all duration-300 px-6 py-3 rounded-xl font-semibold shadow-md"
          >
            View Bookings
          </button>

        </div>

      </div>
    </div>
  );
}

export default BookingConfirmation;