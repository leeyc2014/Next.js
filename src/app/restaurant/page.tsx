import type { Restaurant } from "@/types/restaurant";
import RestaurantCard from "@/components/RestaurantCard";
import restaurantData from "@/data/restaurant.json"

export default function RestaurantPage() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <h2 className="text-3xl font-bold p-5">부산 맛집 목록</h2>
      <div className="mt-4 w-9/10 h-3/4 overflow-y-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {restaurantData.map((item: Restaurant) => (
          <RestaurantCard key={item.UC_SEQ} restaurant={item} />
        ))}
      </div>
    </div>
  );
}