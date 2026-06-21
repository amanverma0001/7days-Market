import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { useWishlist } from "../hooks/useAuth";
import { useAuth } from "../hooks/useAuth";
import { useCartStore } from "../stores/cartStore";
import { Button } from "../components/ui/Button";
import { formatPrice } from "../lib/utils";
import { motion } from "framer-motion";

export function Wishlist() {
  const { user } = useAuth();
  const { data: wishlistItems, isLoading } = useWishlist();
  const addItem = useCartStore((state) => state.addItem);

  if (!user) {
    return (
      <div className="py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Please sign in
        </h2>
        <Link to="/signin">
          <Button size="lg">Sign In</Button>
        </Link>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="py-8">
        <div className="animate-pulse grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-64 bg-gray-200 dark:bg-gray-800 rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  if (!wishlistItems?.length) {
    return (
      <div className="py-16 text-center">
        <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Your wishlist is empty
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Save items you love to your wishlist.
        </p>
        <Link to="/">
          <Button size="lg">Explore Products</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="py-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Your Wishlist
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {wishlistItems.map((item: any, index: number) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden group"
          >
            <div className="relative aspect-square">
              <Link to={`/product/${item.product?.slug}`}>
                <img
                  src={item.product?.image_url}
                  alt={item.product?.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <button className="absolute top-2 right-2 p-2 bg-white dark:bg-gray-900 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                <Trash2 className="w-4 h-4 text-red-500" />
              </button>
            </div>
            <div className="p-4">
              <Link to={`/product/${item.product?.slug}`}>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 hover:text-blue-600 transition-colors">
                  {item.product?.name}
                </h3>
              </Link>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {item.product?.brand}
              </p>
              <div className="flex items-center justify-between mt-3">
                <span className="font-bold text-gray-900 dark:text-white">
                  {formatPrice(item.product?.price || 0)}
                </span>
                <button
                  onClick={() => addItem(item.product)}
                  className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ShoppingCart className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
