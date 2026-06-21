import { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  Package,
  Heart,
  MapPin,
  CreditCard,
  Settings,
  ChevronRight,
  LogOut,
} from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import { useSignOut } from "../hooks/useAuth";
import { Button } from "../components/ui/Button";

export function Account() {
  const { user } = useAuth();
  const signOut = useSignOut();
  const [activeTab, setActiveTab] = useState("overview");

  if (!user) {
    return (
      <div className="py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Please sign in
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          You need to be signed in to view your account.
        </p>
        <Link to="/signin">
          <Button size="lg">Sign In</Button>
        </Link>
      </div>
    );
  }

  const menuItems = [
    { id: "overview", label: "Overview", icon: User, href: "/account" },
    { id: "orders", label: "Orders", icon: Package, href: "/orders" },
    { id: "wishlist", label: "Wishlist", icon: Heart, href: "/wishlist" },
    { id: "addresses", label: "Addresses", icon: MapPin, href: "/addresses" },
    { id: "payment", label: "Payment Methods", icon: CreditCard, href: "/payment" },
    { id: "settings", label: "Settings", icon: Settings, href: "/settings" },
  ];

  return (
    <div className="py-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Your Account
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
            <div className="p-4 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {user.email}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Member since 2024
                  </p>
                </div>
              </div>
            </div>
            <nav className="p-2">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === item.id
                      ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                  <ChevronRight className="w-4 h-4 ml-auto" />
                </Link>
              ))}
              <button
                onClick={() => signOut.mutate()}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 w-full transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link to="/orders">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
                <Package className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
                <h3 className="font-bold text-gray-900 dark:text-white">Your Orders</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Track, return, or buy again
                </p>
              </div>
            </Link>
            <Link to="/addresses">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
                <MapPin className="w-8 h-8 text-green-600 dark:text-green-400 mb-3" />
                <h3 className="font-bold text-gray-900 dark:text-white">Your Addresses</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Edit or add new addresses
                </p>
              </div>
            </Link>
            <Link to="/wishlist">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
                <Heart className="w-8 h-8 text-red-600 dark:text-red-400 mb-3" />
                <h3 className="font-bold text-gray-900 dark:text-white">Your Wishlist</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  View saved items
                </p>
              </div>
            </Link>
            <Link to="/payment">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
                <CreditCard className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-3" />
                <h3 className="font-bold text-gray-900 dark:text-white">Payment Options</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Manage payment methods
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
