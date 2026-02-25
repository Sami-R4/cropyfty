import BuyerNav from "../../components/BuyerNav";
import DashboardHeader from "../../components/DashboardHeader";
import Card from "../../components/Card";
import type { CardData } from "../../../types";

export default function BuyerFeed() {
  const cards: CardData[] = [
    {
      id: 1,
      title: "Fresh Tomatoes",
      pfp: "https://i.pravatar.cc/40?img=5",
      profileName: "John Farmer",
      description: "Fresh, organic tomatoes grown with care.",
      pdtImg: "https://picsum.photos/seed/tomatoes/600/400",
    },
    {
      id: 2,
      title: "Organic Carrots",
      pfp: "https://i.pravatar.cc/40?img=12",
      profileName: "Sarah Green",
      description: "Crunchy organic carrots straight from farm.",
      pdtImg: "https://picsum.photos/seed/carrots/600/400",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center">
      
      {/* Simulated Mobile Width */}
      <div className="w-full max-w-sm bg-gray-100 min-h-screen shadow-xl relative">

        <DashboardHeader />

        <div className="px-4 py-4 space-y-6">
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>

        <BuyerNav />

      </div>
    </div>
  );
}
