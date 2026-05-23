import { useState } from "react";

type Offer = {
  id: number;
  title: string;
  category: string;
  originalPrice: number;
  offerPrice: number;
  status: "Active" | "Draft" | "Paused";
};

function ManageOffers() {
  const [offers, setOffers] = useState<Offer[]>([
    {
      id: 1,
      title: "Gym Trial Slot",
      category: "Gym",
      originalPrice: 499,
      offerPrice: 99,
      status: "Active",
    },
    {
      id: 2,
      title: "Salon Happy Hour",
      category: "Salon",
      originalPrice: 799,
      offerPrice: 299,
      status: "Paused",
    },
  ]);

  const deleteOffer = (id: number) => {
    setOffers(offers.filter((offer) => offer.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Offers</h1>

      <div className="grid gap-4">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-semibold">{offer.title}</h2>
              <p className="text-gray-600">{offer.category}</p>

              <p className="mt-1">
                ₹{offer.offerPrice} / ₹
                <span className="line-through">{offer.originalPrice}</span>
              </p>

              <span
                className={`text-sm px-2 py-1 rounded ${
                  offer.status === "Active"
                    ? "bg-green-200 text-green-800"
                    : offer.status === "Paused"
                    ? "bg-yellow-200 text-yellow-800"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {offer.status}
              </span>
            </div>

            <div className="flex gap-2">
              <button className="px-3 py-1 bg-blue-500 text-white rounded">
                Edit
              </button>

              <button
                onClick={() => deleteOffer(offer.id)}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageOffers;