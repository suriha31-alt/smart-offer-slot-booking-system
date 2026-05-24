import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

interface Offer {
  id: number;
  title: string;
  businessName: string;
  description: string;
  price: number;
  discount: number;
}

export default function OfferDetail() {
  const { id } = useParams<{ id: string }>();

  const [offer, setOffer] = useState<Offer | null>(null);
  const [loading, setLoading] = useState(true);

  // dummy data (later replace with API)
  const offers: Offer[] = [
    {
      id: 1,
      title: "Gym Trial Offer",
      businessName: "FitZone Gym",
      description: "Get 7 days free gym access with trainer support.",
      price: 500,
      discount: 20,
    },
    {
      id: 2,
      title: "Salon Special Offer",
      businessName: "Glow Salon",
      description: "Hair + Facial combo at discounted price.",
      price: 800,
      discount: 30,
    },
  ];

  // simulate API behavior
  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      const found = offers.find((o) => o.id === Number(id));
      setOffer(found || null);
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [id]);

  // derived values (optimized)
  const finalPrice = useMemo(() => {
    if (!offer) return 0;
    return offer.price - (offer.price * offer.discount) / 100;
  }, [offer]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 animate-pulse">Loading offer...</p>
      </div>
    );
  }

  if (!offer) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold">Offer not found</h2>
          <p className="text-gray-500">Please check the URL or go back.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-2xl">

        <h1 className="text-3xl font-bold mb-2">
          {offer.title}
        </h1>

        <p className="text-gray-600 mb-4">
          {offer.businessName}
        </p>

        <p className="text-gray-700 mb-6 leading-relaxed">
          {offer.description}
        </p>

        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <p className="text-lg font-medium">
            Original Price: ₹{offer.price}
          </p>

          <p className="text-green-600 font-semibold">
            Discount: {offer.discount}%
          </p>

          <p className="text-xl font-bold text-blue-600 mt-2">
            Final Price: ₹{finalPrice.toFixed(0)}
          </p>
        </div>

        <button
          className="w-full bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-3 rounded-lg font-semibold"
          onClick={() => alert("Booking started!")}
        >
          Book Now
        </button>

      </div>
    </div>
  );
}