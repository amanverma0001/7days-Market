import { cn } from "../../lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "success" | "warning" | "danger" | "info";
  className?: string;
}

export function Badge({ children, variant = "primary", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium",
        {
          "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300": variant === "primary",
          "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300": variant === "success",
          "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300": variant === "warning",
          "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300": variant === "danger",
          "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300": variant === "info",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
