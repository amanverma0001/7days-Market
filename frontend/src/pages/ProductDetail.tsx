import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ShoppingCart,
  Heart,
  Share2,
  Truck,
  ShieldCheck,
  RotateCcw,
  Star,
  ChevronRight,
  Minus,
  Plus,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";
import { useProduct, useRelatedProducts } from "../hooks/useProducts";
import { useCartStore } from "../stores/cartStore";
import { Button } from "../components/ui/Button";
import { StarRating } from "../components/ui/StarRating";
import { Badge } from "../components/ui/Badge";
import { ProductCard } from "../components/product/ProductCard";
import { formatPrice } from "../lib/utils";

export function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { data: product, isLoading } = useProduct(slug || "");
  const { data: relatedProducts } = useRelatedProducts(
    product?.category_id || "",
    product?.id || "",
    6
  );
  const addItem = useCartStore((state) => state.addItem);

  if (isLoading) {
    return (
      <div className="py-8">
        <div className="animate-pulse grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-2xl" />
          <div className="space-y-4">
            <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-3/4" />
            <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-1/2" />
            <div className="h-24 bg-gray-200 dark:bg-gray-800 rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Product not found
        </h2>
        <Link to="/" className="text-blue-600 hover:underline">
          Back to home
        </Link>
      </div>
    );
  }

  const images = [product.image_url];
  const discount = product.discount_percentage;

  return (
    <div className="py-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-gray-900 dark:text-white">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Image Gallery */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden mb-4"
          >
            <img
              src={images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="flex gap-2">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                  selectedImage === i
                    ? "border-blue-600"
                    : "border-gray-200 dark:border-gray-700"
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                {product.brand}
              </p>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                {product.name}
              </h1>
            </div>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                <Heart className="w-5 h-5 text-gray-500" />
              </button>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                <Share2 className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>

          <div className="mb-4">
            <StarRating rating={product.rating} reviewCount={product.review_count} size="md" />
          </div>

          <div className="flex items-end gap-3 mb-4">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {formatPrice(product.price)}
            </span>
            {product.original_price > product.price && (
              <span className="text-xl text-gray-400 line-through">
                {formatPrice(product.original_price)}
              </span>
            )}
            {discount > 0 && (
              <Badge variant="danger">{discount}% OFF</Badge>
            )}
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {product.description}
          </p>

          {/* Stock & Delivery */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-2 text-sm">
              <Check className={`w-4 h-4 ${product.is_in_stock ? "text-green-500" : "text-red-500"}`} />
              <span className={product.is_in_stock ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}>
                {product.is_in_stock ? "In Stock" : "Out of Stock"}
              </span>
              {product.stock_quantity > 0 && (
                <span className="text-gray-500 dark:text-gray-400">
                  ({product.stock_quantity} available)
                </span>
              )}
            </div>
            {product.fast_delivery && (
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Truck className="w-4 h-4 text-green-600" />
                <span>Free delivery by tomorrow</span>
              </div>
            )}
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <RotateCcw className="w-4 h-4" />
              <span>30-day return policy</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <ShieldCheck className="w-4 h-4" />
              <span>2-year warranty included</span>
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-l-lg"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-4 py-2 font-medium min-w-[3rem] text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-r-lg"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <Button
              size="lg"
              className="flex-1 min-w-[200px] gap-2"
              onClick={() => addItem(product, quantity)}
              disabled={!product.is_in_stock}
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="flex-1 min-w-[200px]"
              disabled={!product.is_in_stock}
            >
              Buy Now
            </Button>
          </div>

          {/* Specifications */}
          {product.specifications && Object.keys(product.specifications).length > 0 && (
            <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
              <h3 className="font-bold text-lg mb-3">Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{key}</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts && relatedProducts.length > 0 && (
        <section className="py-8 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Related Products
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {relatedProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
