import { ProductCard } from "./ProductCard";
import type { Product } from "../../types";

interface ProductGridProps {
  products: Product[];
  columns?: number;
}

export function ProductGrid({ products, columns = 4 }: ProductGridProps) {
  return (
    <div
      className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
}
