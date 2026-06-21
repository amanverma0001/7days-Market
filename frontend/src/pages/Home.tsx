import { HeroBanner } from "../components/home/HeroBanner";
import { CategoryGrid } from "../components/home/CategoryGrid";
import { DealCountdown } from "../components/home/DealCountdown";
import { ProductSection } from "../components/product/ProductSection";
import { useProducts } from "../hooks/useProducts";
import { Link } from "react-router-dom";
import { Zap, TrendingUp, Star, Sparkles, Award, BadgePercent } from "lucide-react";

export function Home() {
  const { data: trending } = useProducts({ trending: true, limit: 10 });
  const { data: bestsellers } = useProducts({ bestseller: true, limit: 10 });
  const { data: newArrivals } = useProducts({ newArrival: true, limit: 10 });
  const { data: deals } = useProducts({ dealOfDay: true, limit: 10 });
  const { data: sponsored } = useProducts({ sponsored: true, limit: 10 });

  return (
    <div>
      <HeroBanner />
      <CategoryGrid />

      {/* Deals of the Day */}
      {deals && deals.length > 0 && (
        <section className="py-8">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-2xl p-6 border border-red-100 dark:border-red-900/30">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2">
                <BadgePercent className="w-6 h-6 text-red-600 dark:text-red-400" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Deals of the Day
                </h2>
              </div>
              <DealCountdown />
              <Link
                to="/deals"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                View All Deals
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {deals.slice(0, 5).map((product) => (
                <div
                  key={product.id}
                  className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800"
                >
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full aspect-square object-cover rounded-lg mb-3"
                  />
                  <p className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2">
                    {product.name}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-lg font-bold text-red-600 dark:text-red-400">
                      ${product.price}
                    </span>
                    {product.original_price > product.price && (
                      <span className="text-sm text-gray-400 line-through">
                        ${product.original_price}
                      </span>
                    )}
                  </div>
                  {product.discount_percentage > 0 && (
                    <span className="inline-block mt-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs px-2 py-0.5 rounded font-medium">
                      {product.discount_percentage}% OFF
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Trending Products */}
      {trending && trending.length > 0 && (
        <ProductSection
          title={
            <span className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Trending Now
            </span>
          }
          products={trending}
          viewAllLink="/search?sort=popular"
        />
      )}

      {/* Best Sellers */}
      {bestsellers && bestsellers.length > 0 && (
        <ProductSection
          title={
            <span className="flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
              Best Sellers
            </span>
          }
          products={bestsellers}
          viewAllLink="/search?bestseller=true"
        />
      )}

      {/* New Arrivals */}
      {newArrivals && newArrivals.length > 0 && (
        <ProductSection
          title={
            <span className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              New Arrivals
            </span>
          }
          products={newArrivals}
          viewAllLink="/search?new=true"
        />
      )}

      {/* Sponsored Products */}
      {sponsored && sponsored.length > 0 && (
        <section className="py-8">
          <div className="border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Sponsored Products
              </h2>
              <span className="text-xs text-gray-400 ml-2">Ad</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {sponsored.slice(0, 5).map((product) => (
                <div
                  key={product.id}
                  className="bg-white dark:bg-gray-900 rounded-xl p-3 border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow"
                >
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full aspect-square object-cover rounded-lg mb-2"
                  />
                  <p className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2">
                    {product.name}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{product.brand}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      {product.rating}
                    </span>
                  </div>
                  <p className="text-lg font-bold text-gray-900 dark:text-white mt-1">
                    ${product.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Promotional Banner */}
      <section className="py-8">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Join 7days Market Prime
          </h2>
          <p className="text-blue-100 mb-6 max-w-lg mx-auto">
            Get free shipping, exclusive deals, and early access to sales. Cancel anytime.
          </p>
          <button className="px-8 py-3 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-colors">
            Start Free Trial
          </button>
        </div>
      </section>
    </div>
  );
}
