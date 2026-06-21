import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  User,
  MapPin,
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
  LogOut,
  Package,
  Heart,
  ShieldCheck,
} from "lucide-react";
import { useThemeStore } from "../../stores/themeStore";
import { useAuthStore } from "../../stores/authStore";
import { useCartStore } from "../../stores/cartStore";
import { useCategories } from "../../hooks/useProducts";
import { Button } from "../ui/Button";
import { useSignOut } from "../../hooks/useAuth";

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const qParam = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(qParam);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const { isDark, toggleTheme } = useThemeStore();
  const { user } = useAuthStore();
  const totalItems = useCartStore((state) => state.getTotalItems());
  const { data: categories } = useCategories();
  const signOut = useSignOut();

  useEffect(() => {
    setSearchQuery(qParam);
  }, [qParam]);

  const categorySlug = location.pathname.startsWith("/category/")
    ? location.pathname.substring("/category/".length).split("/")[0]
    : searchParams.get("category") || "All";

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery.trim()) {
      params.set("q", searchQuery.trim());
    }
    
    if (categorySlug && categorySlug !== "All") {
      navigate(`/category/${categorySlug}${params.toString() ? `?${params.toString()}` : ""}`);
    } else {
      navigate(`/search${params.toString() ? `?${params.toString()}` : ""}`);
    }
  };

  const parentCategories = categories?.filter((c) => !c.parent_id) || [];

  return (
    <header className="bg-white dark:bg-gray-950 shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-900 dark:bg-black text-white text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <span className="hidden sm:inline">Welcome to 7days Market - Shop the best deals</span>
          <div className="flex items-center gap-4 ml-auto">
            <button className="hover:text-blue-300 transition-colors flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span className="hidden sm:inline">Deliver to</span> New York
            </button>
            <button className="hover:text-blue-300 transition-colors">EN</button>
            <button
              onClick={toggleTheme}
              className="hover:text-blue-300 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-3 h-3" /> : <Moon className="w-3 h-3" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center gap-4">
          {/* Mobile Menu */}
          <button
            className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white hidden sm:block">
              7days <span className="text-blue-600">Market</span>
            </span>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-4">
            <div className="flex">
              <select
                value={categorySlug}
                onChange={(e) => {
                  const val = e.target.value;
                  const queryParam = searchQuery.trim() ? `?q=${encodeURIComponent(searchQuery.trim())}` : "";
                  if (val === "All") {
                    navigate(`/search${queryParam}`);
                  } else {
                    navigate(`/category/${val}${queryParam}`);
                  }
                }}
                className="hidden sm:block px-3 py-2.5 bg-gray-100 dark:bg-gray-800 border border-r-0 border-gray-300 dark:border-gray-700 rounded-l-lg text-sm text-gray-700 dark:text-gray-300 focus:outline-none"
              >
                <option value="All">All</option>
                {parentCategories.map((cat) => (
                  <option key={cat.id} value={cat.slug}>{cat.name}</option>
                ))}
              </select>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, brands, and more..."
                className="flex-1 px-4 py-2.5 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-l-lg sm:rounded-none"
              />
              <Button
                type="submit"
                variant="primary"
                className="rounded-l-none px-4"
              >
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </form>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Account */}
            <div className="relative">
              <button
                onClick={() => setIsAccountOpen(!isAccountOpen)}
                className="flex items-center gap-1 hover:bg-gray-100 dark:hover:bg-gray-800 px-2 py-1.5 rounded-lg transition-colors"
              >
                <User className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                <div className="hidden sm:block text-left">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {user ? "Hello," : "Hello, Sign in"}
                  </p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Account
                  </p>
                </div>
                <ChevronDown className="w-3 h-3 hidden sm:block text-gray-500" />
              </button>

              {isAccountOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800 py-2 z-50">
                  {user ? (
                    <>
                      <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-800">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {user.email}
                        </p>
                      </div>
                      <Link
                        to="/account"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={() => setIsAccountOpen(false)}
                      >
                        <User className="w-4 h-4" /> Your Account
                      </Link>
                      <Link
                        to="/orders"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={() => setIsAccountOpen(false)}
                      >
                        <Package className="w-4 h-4" /> Orders
                      </Link>
                      <Link
                        to="/wishlist"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={() => setIsAccountOpen(false)}
                      >
                        <Heart className="w-4 h-4" /> Wishlist
                      </Link>
                      <button
                        onClick={() => {
                          signOut.mutate();
                          setIsAccountOpen(false);
                        }}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-800 w-full text-left"
                      >
                        <LogOut className="w-4 h-4" /> Sign Out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/signin"
                        className="block px-4 py-2 text-sm text-blue-600 font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={() => setIsAccountOpen(false)}
                      >
                        Sign In
                      </Link>
                      <Link
                        to="/signup"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={() => setIsAccountOpen(false)}
                      >
                        Create Account
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Returns */}
            <Link
              to="/orders"
              className="hidden md:flex flex-col hover:bg-gray-100 dark:hover:bg-gray-800 px-2 py-1.5 rounded-lg transition-colors"
            >
              <span className="text-xs text-gray-500 dark:text-gray-400">Returns</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                & Orders
              </span>
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="flex items-center gap-1 hover:bg-gray-100 dark:hover:bg-gray-800 px-2 py-1.5 rounded-lg transition-colors relative"
            >
              <div className="relative">
                <ShoppingCart className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {totalItems > 99 ? "99+" : totalItems}
                  </span>
                )}
              </div>
              <span className="hidden sm:block text-sm font-medium text-gray-900 dark:text-white">
                Cart
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="border-t border-gray-200 dark:border-gray-800 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-1 py-2">
            <button className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
              <Menu className="w-4 h-4" />
              All
            </button>
            {parentCategories.slice(0, 8).map((cat) => (
              <Link
                key={cat.id}
                to={`/category/${cat.slug}`}
                className="px-3 py-1.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                {cat.name}
              </Link>
            ))}
            <Link
              to="/deals"
              className="px-3 py-1.5 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              Deals
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50">
          <div className="bg-white dark:bg-gray-950 h-full w-80 overflow-y-auto">
            <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                Menu
              </span>
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4">
              {parentCategories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/category/${cat.slug}`}
                  className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
