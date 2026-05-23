import { useState } from "react";

function CreateOffer() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    originalPrice: "",
    offerPrice: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    capacity: "",
    maxBooking: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Offer Data:", form);
    alert("Offer Created Successfully 🚀");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
      
      <div className="bg-white w-full max-w-2xl p-8 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Create Offer
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Title */}
          <input
            type="text"
            name="title"
            placeholder="Offer Title"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          {/* Description */}
          <textarea
            name="description"
            placeholder="Offer Description"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          {/* Category */}
          <select
            name="category"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          >
            <option value="">Select Category</option>
            <option>Restaurant</option>
            <option>Gym</option>
            <option>Salon</option>
            <option>Clinic</option>
            <option>Coaching</option>
            <option>Turf</option>
          </select>

          {/* Prices */}
          <input
            type="number"
            name="originalPrice"
            placeholder="Original Price"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="number"
            name="offerPrice"
            placeholder="Offer Price"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          {/* Dates */}
          <input
            type="date"
            name="startDate"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="date"
            name="endDate"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          {/* Time */}
          <div className="flex gap-4">
            <input
              type="time"
              name="startTime"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="time"
              name="endTime"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />
          </div>

          {/* Capacity */}
          <input
            type="number"
            name="capacity"
            placeholder="Total Capacity"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          {/* Max Booking */}
          <input
            type="number"
            name="maxBooking"
            placeholder="Max Booking Per Customer"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          >
            Create Offer
          </button>

        </form>
      </div>
    </div>
  );
}

export default CreateOffer;