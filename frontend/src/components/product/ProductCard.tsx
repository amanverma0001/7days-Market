import { Heart, ShoppingCart, Eye, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { StarRating } from "../ui/StarRating";
import { Badge } from "../ui/Badge";
import { formatPrice, truncateText } from "../../lib/utils";
import { useCartStore } from "../../stores/cartStore";
import type { Product } from "../../types";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg dark:hover:shadow-gray-800/30 transition-all duration-300"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800">
        <Link to={`/product/${product.slug}`}>
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </Link>

        {product.discount_percentage > 0 && (
          <Badge variant="danger" className="absolute top-2 left-2">
            -{product.discount_percentage}%
          </Badge>
        )}

        {product.is_new_arrival && (
          <Badge variant="success" className="absolute top-2 right-2">
            New
          </Badge>
        )}

        {product.fast_delivery && (
          <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-green-600 text-white text-xs px-2 py-1 rounded">
            <Zap className="w-3 h-3" />
            Fast Delivery
          </div>
        )}

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex gap-2">
            <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors">
              <Heart className="w-4 h-4 text-gray-700" />
            </button>
            <Link
              to={`/product/${product.slug}`}
              className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            >
              <Eye className="w-4 h-4 text-gray-700" />
            </Link>
          </div>
        </div>
      </div>

      <div className="p-4">
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{product.brand}</p>
        <Link to={`/product/${product.slug}`}>
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2">
            {truncateText(product.name, 60)}
          </h3>
        </Link>

        <div className="mb-2">
          <StarRating rating={product.rating} reviewCount={product.review_count} size="sm" />
        </div>

        <div className="flex items-end gap-2 mb-3">
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            {formatPrice(product.price)}
          </span>
          {product.original_price > product.price && (
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(product.original_price)}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <span
            className={`text-xs ${
              product.is_in_stock
                ? "text-green-600 dark:text-green-400"
                : "text-red-600 dark:text-red-400"
            }`}
          >
            {product.is_in_stock ? "In Stock" : "Out of Stock"}
          </span>
          <Button
            size="sm"
            variant="primary"
            onClick={() => addItem(product)}
            disabled={!product.is_in_stock}
            className="gap-1"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            Add
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
