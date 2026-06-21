import { Link } from "react-router-dom";
import { useCategories } from "../../hooks/useProducts";
import { motion } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Shirt,
  Home,
  Heart,
  Dumbbell,
  BookOpen,
  Gamepad2,
  Car,
  ShoppingBasket,
  Briefcase,
  Baby,
  Music,
  TreePine,
  Plane,
  Palette,
  Gift,
  Factory,
  PawPrint,
  Tv,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  electronics: <Monitor className="w-6 h-6" />,
  fashion: <Shirt className="w-6 h-6" />,
  "home-kitchen": <Home className="w-6 h-6" />,
  "beauty-personal-care": <Heart className="w-6 h-6" />,
  "sports-outdoors": <Dumbbell className="w-6 h-6" />,
  books: <BookOpen className="w-6 h-6" />,
  "toys-games": <Gamepad2 className="w-6 h-6" />,
  automotive: <Car className="w-6 h-6" />,
  grocery: <ShoppingBasket className="w-6 h-6" />,
  "office-products": <Briefcase className="w-6 h-6" />,
  "health-wellness": <Heart className="w-6 h-6" />,
  "baby-products": <Baby className="w-6 h-6" />,
  "musical-instruments": <Music className="w-6 h-6" />,
  "garden-outdoor": <TreePine className="w-6 h-6" />,
  "luggage-travel": <Plane className="w-6 h-6" />,
  "art-craft-supplies": <Palette className="w-6 h-6" />,
  "gift-cards": <Gift className="w-6 h-6" />,
  "industrial-supplies": <Factory className="w-6 h-6" />,
  "pet-supplies": <PawPrint className="w-6 h-6" />,
  "video-games": <Tv className="w-6 h-6" />,
};

export function CategoryGrid() {
  const { data: categories } = useCategories();
  const parentCategories = categories?.filter((c) => !c.parent_id) || [];

  return (
    <section className="py-8">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
        Shop by Category
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {parentCategories.map((cat, index) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Link
              to={`/category/${cat.slug}`}
              className="flex flex-col items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-md dark:hover:shadow-gray-800/30 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition-colors">
                {iconMap[cat.slug] || <ShoppingBasket className="w-6 h-6" />}
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                {cat.name}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
