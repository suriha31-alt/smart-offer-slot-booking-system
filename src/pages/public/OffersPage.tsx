import { useEffect, useState } from "react";
import { getOffers } from "../../services/offerService";

interface Offer {
  id: number;
  businessName: string;
  title: string;
  description: string;
  price: number;
  discount: number;
  location: string;
  terms: string;
  slots: string[];
}

export default function OffersPage() {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = async () => {
    try {
      const data = await getOffers();
      setOffers(data);
    } catch (err) {
      console.log("Error fetching offers", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="p-6">Loading offers...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">
        Available Offers
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
          >
            {/* Business */}
            <p className="text-sm text-gray-500">
              {offer.businessName}
            </p>

            {/* Title */}
            <h2 className="text-xl font-bold">
              {offer.title}
            </h2>

            {/* Description */}
            <p className="text-sm mt-2">
              {offer.description}
            </p>

            {/* Price + Discount */}
            <div className="mt-3 flex justify-between">
              <p className="font-bold text-green-600">
                ₹{offer.price}
              </p>

              <p className="text-red-500 text-sm">
                {offer.discount}% OFF
              </p>
            </div>

            {/* Location */}
            <p className="text-sm mt-2">
              📍 {offer.location}
            </p>

            {/* Slots */}
            <div className="mt-2">
              <p className="text-sm font-semibold">
                Available Slots:
              </p>

              <div className="flex flex-wrap gap-2 mt-1">
                {offer.slots.map((slot, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 px-2 py-1 text-xs rounded"
                  >
                    {slot}
                  </span>
                ))}
              </div>
            </div>

            {/* Terms */}
            <p className="text-xs text-gray-500 mt-2">
              {offer.terms}
            </p>

            {/* Button */}
            <button className="mt-4 w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
              Book Slot
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}