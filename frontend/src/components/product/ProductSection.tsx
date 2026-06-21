import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ProductGrid } from "./ProductGrid";
import type { Product } from "../../types";

interface ProductSectionProps {
  title: React.ReactNode;
  products: Product[];
  viewAllLink?: string;
  columns?: number;
}

export function ProductSection({ title, products, viewAllLink, columns = 5 }: ProductSectionProps) {
  if (!products.length) return null;

  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
        {viewAllLink && (
          <Link
            to={viewAllLink}
            className="flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            View All
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        )}
      </div>
      <ProductGrid products={products.slice(0, 10)} columns={columns} />
    </section>
  );
}
