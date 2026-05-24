import { useEffect, useState } from "react";
import { getBookings, updateBookingStatus } from "../services/bookingService";

interface Booking {
  id: number;
  customerName: string;
  offerName: string;
  slotTime: string;
  peopleCount: number;
  status: string;
}

export default function ManageBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  // 1. FETCH BOOKINGS
  const fetchBookings = async () => {
    try {
      const data = await getBookings();
      setBookings(data);
    } catch (err) {
      console.log("Error fetching bookings", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // 2. UPDATE STATUS
  const handleStatusChange = async (id: number, status: string) => {
    try {
      await updateBookingStatus(id, status);

      // refresh list after update
      fetchBookings();
    } catch (err) {
      console.log("Error updating status", err);
    }
  };

  if (loading) {
    return <div className="p-6">Loading bookings...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Bookings</h1>

      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Customer</th>
            <th className="p-2">Offer</th>
            <th className="p-2">Slot</th>
            <th className="p-2">People</th>
            <th className="p-2">Status</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((b) => (
            <tr key={b.id} className="text-center border-t">
              <td className="p-2">{b.customerName}</td>
              <td className="p-2">{b.offerName}</td>
              <td className="p-2">{b.slotTime}</td>
              <td className="p-2">{b.peopleCount}</td>

              <td className="p-2 font-semibold">{b.status}</td>

              <td className="p-2">
                <select
                  value={b.status}
                  onChange={(e) =>
                    handleStatusChange(b.id, e.target.value)
                  }
                  className="border p-1"
                >
                  <option>Pending</option>
                  <option>Confirmed</option>
                  <option>Cancelled</option>
                  <option>Completed</option>
                  <option>No Show</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}