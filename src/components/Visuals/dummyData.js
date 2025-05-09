// Dummy Users
export const usersData = [
    { role: "Seller", count: 25 },
    { role: "Customer", count: 75 },
  ];
  
  // Sales Overview (per month)
  export const salesData = [
    { month: "Jan", revenue: 1200 },
    { month: "Feb", revenue: 2100 },
    { month: "Mar", revenue: 800 },
    { month: "Apr", revenue: 1600 },
  ];
  
  // Top Products (ordered most by customers)
  export const topProducts = [
    { name: "Tomatoes", orders: 45 },
    { name: "Maize", orders: 38 },
    { name: "Cassava", orders: 25 },
    { name: "Rice", orders: 20 },
  ];
  
  // Order Status
  export const orderStatus = [
    { status: "Fulfilled", count: 80 },
    { status: "Pending", count: 20 },
  ];
  
  // AI Consultations
  export const consultationsData = [
    { time: "8AM", count: 10 },
    { time: "12PM", count: 25 },
    { time: "4PM", count: 15 },
    { time: "8PM", count: 5 },
  ];
  



  export const customerData = {
    id: 3,
    name: "Musa Buyer",
    totalOrders: 4,
    totalSpent: 11500,
    recentOrders: [
      { product: "Tomatoes", date: "2025-03-20", status: "Fulfilled", amount: 2500 },
      { product: "Rice", date: "2025-03-15", status: "Pending", amount: 4000 },
    ],
    consultations: [
      { date: "2025-03-22", topic: "Yellowing leaves on maize" },
      { date: "2025-02-11", topic: "Wilted pepper plants" },
    ],
    topProducts: [
      { name: "Tomatoes", count: 2 },
      { name: "Rice", count: 1 },
      { name: "Cassava", count: 1 },
    ],
    activityTimeline: [
      { date: "2025-02-11", activity: "Consultation" },
      { date: "2025-02-15", activity: "Order" },
      { date: "2025-03-15", activity: "Order" },
      { date: "2025-03-22", activity: "Consultation" },
      { date: "2025-03-20", activity: "Order" },
    ]
  };
  
  export const sellerData = {
    id: 1,
    name: "Ayo Farmer",
    totalProducts: 5,
    totalOrders: 12,
    totalRevenue: 32000,
    recentOrders: [
      { product: "Tomatoes", quantity: 10, buyer: "Grace Harvest", status: "Fulfilled", amount: 5000 },
      { product: "Pepper", quantity: 5, buyer: "Musa Buyer", status: "Pending", amount: 2500 },
    ],
    revenueByMonth: [
      { month: "Jan", revenue: 8000 },
      { month: "Feb", revenue: 11000 },
      { month: "Mar", revenue: 13000 },
    ],
    productSales: [
      { name: "Tomatoes", count: 6 },
      { name: "Pepper", count: 4 },
      { name: "Yam", count: 2 },
    ],
    inventory: [
      { name: "Tomatoes", stock: 25 },
      { name: "Pepper", stock: 6 },
      { name: "Yam", stock: 15 },
    ],
    activityTimeline: [
        { date: "2025-02-11", activity: "Consultation" },
        { date: "2025-02-15", activity: "Order" },
        { date: "2025-03-15", activity: "Order" },
        { date: "2025-03-22", activity: "Consultation" },
        { date: "2025-03-20", activity: "Order" },
      ]
  };
  