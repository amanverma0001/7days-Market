import { Star } from "lucide-react";
import { cn } from "../../lib/utils";

interface StarRatingProps {
  rating: number;
  reviewCount?: number;
  size?: "sm" | "md" | "lg";
  showCount?: boolean;
}

export function StarRating({ rating, reviewCount, size = "sm", showCount = true }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const sizeClass = {
    sm: "w-3.5 h-3.5",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className={cn(sizeClass[size], "fill-yellow-400 text-yellow-400")} />
        ))}
        {hasHalfStar && (
          <div className="relative">
            <Star className={cn(sizeClass[size], "text-gray-300")} />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star className={cn(sizeClass[size], "fill-yellow-400 text-yellow-400")} />
            </div>
          </div>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className={cn(sizeClass[size], "text-gray-300")} />
        ))}
      </div>
      {showCount && reviewCount !== undefined && (
        <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
          ({reviewCount.toLocaleString()})
        </span>
      )}
    </div>
  );
}
