import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateOffer from "./pages/CreateOffer";
import ManageOffers from "./pages/ManageOffers";
import ManageBookings from "./pages/ManageBookings";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/create-offer" element={<CreateOffer />} />
      <Route path="/manage-offers" element={<ManageOffers />} />
      <Route path="/bookings" element={<ManageBookings />} />
    </Routes>
  );
}

export default App;