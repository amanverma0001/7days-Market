import { Link } from "react-router-dom";
import { Package, ChevronRight, Clock, CheckCircle } from "lucide-react";
import { useOrders } from "../hooks/useAuth";
import { useAuth } from "../hooks/useAuth";
import { Button } from "../components/ui/Button";
import { formatPrice } from "../lib/utils";
import { motion } from "framer-motion";

const statusConfig: Record<string, { color: string; icon: React.ReactNode }> = {
  pending: { color: "text-yellow-600 dark:text-yellow-400", icon: <Clock className="w-4 h-4" /> },
  processing: { color: "text-blue-600 dark:text-blue-400", icon: <Package className="w-4 h-4" /> },
  shipped: { color: "text-purple-600 dark:text-purple-400", icon: <Package className="w-4 h-4" /> },
  delivered: { color: "text-green-600 dark:text-green-400", icon: <CheckCircle className="w-4 h-4" /> },
};

export function Orders() {
  const { user } = useAuth();
  const { data: orders, isLoading } = useOrders();

  if (!user) {
    return (
      <div className="py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Please sign in
        </h2>
        <Link to="/signin">
          <Button size="lg">Sign In</Button>
        </Link>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="py-8">
        <div className="animate-pulse space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-32 bg-gray-200 dark:bg-gray-800 rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  if (!orders?.length) {
    return (
      <div className="py-16 text-center">
        <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          No orders yet
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          You haven't placed any orders yet.
        </p>
        <Link to="/">
          <Button size="lg">Start Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="py-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Your Orders
      </h1>

      <div className="space-y-4">
        {orders.map((order: any) => {
          const status = statusConfig[order.status] || statusConfig.pending;
          return (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Order #{order.id.slice(0, 8)}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Placed on {new Date(order.created_at).toLocaleDateString()}
                  </p>
                </div>
                <div className={`flex items-center gap-2 ${status.color}`}>
                  {status.icon}
                  <span className="font-medium capitalize">{order.status}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                      {order.order_items?.slice(0, 3).map((item: any) => (
                        <img
                          key={item.id}
                          src={item.product?.image_url}
                          alt=""
                          className="w-10 h-10 rounded-lg border-2 border-white dark:border-gray-900 object-cover"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {order.order_items?.length || 0} items
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-bold text-gray-900 dark:text-white">
                      {formatPrice(order.total_amount)}
                    </span>
                    <button className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700">
                      View Details
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
