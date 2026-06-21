import { Header } from "./Header";
import { Footer } from "./Footer";
import { useThemeStore } from "../../stores/themeStore";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { isDark } = useThemeStore();

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header />
        <main className="max-w-7xl mx-auto px-4">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
