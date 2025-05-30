import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Package,
  CheckCircle,
  Truck,
  ChevronDown,
  ChevronUp,
  Search,
  X,
  Clock,
} from "lucide-react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [expandedOrder, setExpandedOrder] = useState(null);

  useEffect(() => {
    // Simulate API call to fetch orders
    setTimeout(() => {
      setOrders(mockOrders);
      setFilteredOrders(mockOrders);
      setLoading(false);
    }, 1200);
  }, []);

  useEffect(() => {
    let result = orders;

    if (activeFilter !== "all") {
      result = result.filter((order) => order.status === activeFilter);
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (order) =>
          order.id.toLowerCase().includes(term) ||
          order.items.some((item) => item.name.toLowerCase().includes(term))
      );
    }

    setFilteredOrders(result);
  }, [searchTerm, activeFilter, orders]);

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  const toggleOrderExpansion = (orderId) => {
    if (expandedOrder === orderId) {
      setExpandedOrder(null);
    } else {
      setExpandedOrder(orderId);
    }
  };

  const statusConfig = {
    delivered: {
      color: "bg-emerald-100 text-emerald-800",
      icon: <CheckCircle size={16} />,
    },
    shipped: { color: "bg-blue-100 text-blue-800", icon: <Truck size={16} /> },
    processing: {
      color: "bg-amber-100 text-amber-800",
      icon: <Package size={16} />,
    },
    cancelled: { color: "bg-rose-100 text-rose-800", icon: <X size={16} /> },
    pending: { color: "bg-gray-100 text-gray-800", icon: <Clock size={16} /> },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10"
        >
          <div>
            <h1 className="text-3xl md:text-4xl font-light text-gray-900">
              Order History
            </h1>
            <p className="text-gray-600 mt-2">
              Review your past purchases and order status
            </p>
          </div>
          <div className="mt-4 md:mt-0 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search orders or products..."
              className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent w-full md:w-80"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-8"
        >
          {[
            "all",
            "delivered",
            "shipped",
            "processing",
            "pending",
            "cancelled",
          ].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                activeFilter === filter
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {filter === "all" ? "All Orders" : filter}
            </button>
          ))}
        </motion.div>

        {/* Orders List */}
        {loading ? (
          <div className="flex justify-center items-center h-96">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : filteredOrders.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-2xl shadow-sm p-12 text-center"
          >
            <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              No orders found
            </h3>
            <p className="text-gray-600 max-w-md mx-auto mb-6">
              {searchTerm
                ? `No orders match your search for "${searchTerm}"`
                : "You haven't placed any orders yet. Start shopping to see your order history here."}
            </p>
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Start Shopping
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-5"
          >
            {filteredOrders.map((order) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100"
              >
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => toggleOrderExpansion(order.id)}
                >
                  <div className="flex flex-wrap justify-between items-center gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-medium text-gray-900">
                          Order #{order.id}
                        </h3>
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${
                            statusConfig[order.status].color
                          }`}
                        >
                          {statusConfig[order.status].icon}
                          {order.status.charAt(0).toUpperCase() +
                            order.status.slice(1)}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Placed on {order.date} • {order.items.length} item
                        {order.items.length > 1 ? "s" : ""} • Total: $
                        {order.total}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handleOrderClick(order)}
                        className="text-sm font-medium text-gray-900 hover:text-gray-700 flex items-center gap-1"
                      >
                        View Details <ArrowRight size={16} />
                      </button>
                      <div className="text-gray-400">
                        {expandedOrder === order.id ? (
                          <ChevronUp size={20} />
                        ) : (
                          <ChevronDown size={20} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedOrder === order.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-100"
                    >
                      <div className="p-6">
                        <h4 className="font-medium text-gray-900 mb-4">
                          Order Items
                        </h4>
                        <div className="space-y-4">
                          {order.items.map((item, index) => (
                            <div
                              key={index}
                              className="flex gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                            >
                              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                              <div className="flex-1">
                                <p className="font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-gray-600 text-sm">
                                  Size: {item.size}, Qty: {item.quantity}
                                </p>
                                <p className="text-gray-900 mt-1">
                                  ${item.price}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">
                              Shipping Address
                            </h4>
                            <p className="text-gray-600">
                              {order.shipping.name}
                            </p>
                            <p className="text-gray-600">
                              {order.shipping.address}
                            </p>
                            <p className="text-gray-600">
                              {order.shipping.city}, {order.shipping.state}{" "}
                              {order.shipping.zip}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">
                              Payment Method
                            </h4>
                            <p className="text-gray-600">
                              {order.payment.method}
                            </p>
                            <p className="text-gray-600">
                              **** **** **** {order.payment.last4}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">
                              Order Summary
                            </h4>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-600">Subtotal</span>
                                <span>${order.subtotal}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Shipping</span>
                                <span>${order.shippingCost}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Tax</span>
                                <span>${order.tax}</span>
                              </div>
                              <div className="flex justify-between font-medium pt-2 border-t border-gray-100">
                                <span>Total</span>
                                <span>${order.total}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 flex gap-3">
                          <button className="border border-gray-900 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                            Reorder
                          </button>
                          <button className="border border-gray-900 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                            Track Order
                          </button>
                          <button className="border border-gray-900 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors ml-auto">
                            Download Invoice
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Order Detail Modal */}
      <AnimatePresence>
        {selectedOrder && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedOrder(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-2xl font-light">Order Details</h2>
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={24} />
                </button>
              </div>

              {selectedOrder && (
                <div className="p-6">
                  <div className="flex flex-wrap justify-between gap-4 mb-8">
                    <div>
                      <p className="text-gray-600">Order Number</p>
                      <p className="text-lg font-medium">{selectedOrder.id}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Order Date</p>
                      <p className="text-lg font-medium">
                        {selectedOrder.date}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600">Total Amount</p>
                      <p className="text-lg font-medium">
                        ${selectedOrder.total}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600">Status</p>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${
                          statusConfig[selectedOrder.status].color
                        }`}
                      >
                        {statusConfig[selectedOrder.status].icon}
                        {selectedOrder.status.charAt(0).toUpperCase() +
                          selectedOrder.status.slice(1)}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Items</h3>
                      <div className="space-y-4">
                        {selectedOrder.items.map((item, index) => (
                          <div
                            key={index}
                            className="flex gap-4 pb-4 border-b border-gray-100"
                          >
                            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                            <div className="flex-1">
                              <p className="font-medium">{item.name}</p>
                              <p className="text-gray-600 text-sm">
                                Size: {item.size}, Qty: {item.quantity}
                              </p>
                              <p className="mt-1">${item.price}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="mb-8">
                        <h3 className="text-lg font-medium mb-4">
                          Shipping Information
                        </h3>
                        <div className="bg-gray-50 rounded-xl p-4">
                          <p className="font-medium">
                            {selectedOrder.shipping.name}
                          </p>
                          <p>{selectedOrder.shipping.address}</p>
                          <p>
                            {selectedOrder.shipping.city},{" "}
                            {selectedOrder.shipping.state}{" "}
                            {selectedOrder.shipping.zip}
                          </p>
                          <p className="mt-2">
                            Phone: {selectedOrder.shipping.phone}
                          </p>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium mb-4">
                          Payment Information
                        </h3>
                        <div className="bg-gray-50 rounded-xl p-4">
                          <p className="font-medium">
                            {selectedOrder.payment.method}
                          </p>
                          <p>**** **** **** {selectedOrder.payment.last4}</p>
                          <p className="mt-2">
                            Billing address same as shipping
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <h3 className="text-lg font-medium mb-4">Order Summary</h3>
                    <div className="space-y-3 max-w-md ml-auto">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span>${selectedOrder.subtotal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Shipping</span>
                        <span>${selectedOrder.shippingCost}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tax</span>
                        <span>${selectedOrder.tax}</span>
                      </div>
                      <div className="flex justify-between font-medium pt-3 border-t border-gray-100">
                        <span>Total</span>
                        <span>${selectedOrder.total}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end gap-3">
                    <button className="border border-gray-900 text-gray-900 px-6 py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
                      Download Invoice
                    </button>
                    <button className="bg-gray-900 text-white px-6 py-2.5 rounded-lg hover:bg-gray-800 transition-colors">
                      Track Order
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Mock order data
const mockOrders = [
  {
    id: "ORD-12345",
    date: "May 15, 2023",
    status: "delivered",
    total: 245.75,
    subtotal: 225.0,
    shippingCost: 15.0,
    tax: 5.75,
    items: [
      { name: "Premium Leather Jacket", size: "M", quantity: 1, price: 149.99 },
      { name: "Cashmere Sweater", size: "M", quantity: 1, price: 75.0 },
    ],
    shipping: {
      name: "Alex Johnson",
      address: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "10001",
      phone: "(555) 123-4567",
    },
    payment: {
      method: "Visa",
      last4: "4242",
    },
  },
  {
    id: "ORD-12346",
    date: "May 10, 2023",
    status: "shipped",
    total: 89.99,
    subtotal: 79.99,
    shippingCost: 0.0,
    tax: 10.0,
    items: [
      {
        name: "Designer Sunglasses",
        size: "One Size",
        quantity: 1,
        price: 79.99,
      },
    ],
    shipping: {
      name: "Alex Johnson",
      address: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "10001",
      phone: "(555) 123-4567",
    },
    payment: {
      method: "MasterCard",
      last4: "5678",
    },
  },
  {
    id: "ORD-12347",
    date: "May 5, 2023",
    status: "processing",
    total: 320.5,
    subtotal: 300.0,
    shippingCost: 15.0,
    tax: 5.5,
    items: [
      { name: "Italian Leather Shoes", size: "10", quantity: 1, price: 199.99 },
      { name: "Cotton Dress Shirt", size: "M", quantity: 2, price: 50.0 },
    ],
    shipping: {
      name: "Alex Johnson",
      address: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "10001",
      phone: "(555) 123-4567",
    },
    payment: {
      method: "American Express",
      last4: "9012",
    },
  },
  {
    id: "ORD-12348",
    date: "April 28, 2023",
    status: "pending",
    total: 145.25,
    subtotal: 130.0,
    shippingCost: 10.0,
    tax: 5.25,
    items: [
      { name: "Wool Beanie", size: "One Size", quantity: 1, price: 35.0 },
      { name: "Leather Gloves", size: "M", quantity: 1, price: 45.0 },
      { name: "Silk Scarf", size: "One Size", quantity: 1, price: 50.0 },
    ],
    shipping: {
      name: "Alex Johnson",
      address: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "10001",
      phone: "(555) 123-4567",
    },
    payment: {
      method: "PayPal",
      last4: "",
    },
  },
];

export default Orders;
