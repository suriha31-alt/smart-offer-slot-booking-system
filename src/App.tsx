import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateOffer from "./pages/CreateOffer";
import ManageOffers from "./pages/ManageOffers";
import ManageBookings from "./pages/ManageBookings";
import OffersPage from "./pages/public/OffersPage";
import OfferDetail from "./pages/public/OfferDetail";
import BookingConfirmation from "./pages/BookingConfirmation";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/create-offer" element={<CreateOffer />} />

      <Route path="/manage-offers" element={<ManageOffers />} />

      <Route path="/bookings" element={<ManageBookings />} />

      <Route path="/offers" element={<OffersPage />} />

      <Route path="/offer/:id" element={<OfferDetail />} />

      <Route
        path="/booking-confirmation"
        element={<BookingConfirmation />}
      />

      <Route path="/profile" element={<Profile />} />

    </Routes>
  );
}

export default App;