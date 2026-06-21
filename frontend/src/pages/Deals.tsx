import { useProducts } from "../hooks/useProducts";
import { ProductGrid } from "../components/product/ProductGrid";
import { BadgePercent, Clock } from "lucide-react";
import { DealCountdown } from "../components/home/DealCountdown";

export function Deals() {
  const { data: deals, isLoading } = useProducts({ dealOfDay: true, limit: 50 });

  return (
    <div className="py-6">
      <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-2xl p-8 mb-8 border border-red-100 dark:border-red-900/30">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <BadgePercent className="w-8 h-8 text-red-600 dark:text-red-400" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Deals of the Day
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Up to 50% off on select items - Limited time only!
              </p>
            </div>
          </div>
          <DealCountdown />
        </div>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-200 dark:bg-gray-800 aspect-square rounded-xl mb-3" />
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded mb-2" />
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-2/3" />
            </div>
          ))}
        </div>
      ) : (
        <ProductGrid products={deals || []} />
      )}
    </div>
  );
}
