import type{ CardData } from "../../types";

interface CardProps {
  card: CardData;
}

export default function Card({ card }: CardProps) {
  return (
    <div className="
      bg-white
      rounded-2xl
      shadow-md
      overflow-hidden
      transition
      hover:shadow-lg
    ">

      {/* Seller Header */}
      <div className="flex items-center gap-3 px-4 py-3">
        <img
          src={card.pfp ?? ""}
          alt={card.profileName ?? ""}
          className="w-9 h-9 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-gray-800">
            {card.profileName}
          </p>
          <p className="text-xs text-gray-500">
            California
          </p>
        </div>
      </div>

      {/* Product Image */}
      <div className="w-full h-56 overflow-hidden">
        <img
          src={card.pdtImg ?? ""}
          alt={card.title ?? ""}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="px-4 py-3">
        <h3 className="text-base font-semibold text-gray-900">
          {card.title}
        </h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          {card.description}
        </p>

        <p className="text-green-600 font-bold mt-2">
          $3.50/kg
        </p>
      </div>

    </div>
  );
}
