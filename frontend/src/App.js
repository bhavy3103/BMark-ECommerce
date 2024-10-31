import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Store from "./redux/store";
import { loadUser, loadSeller } from "./redux/actions/user";
import { getAllProducts } from "./redux/actions/product";
import { getAllEvents } from "./redux/actions/event";
import ProtectedRoute from "./routes/ProtectedRoute";
import ProtectedAdminRoute from "./routes/ProtectedAdminRoute";
import SellerProtectedRoute from "./routes/SellerProtectedRoute";
import { server } from "./server";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { 
  HomePage, 
  LoginPage, 
  SignupPage, 
  ActivationPage, 
  ProductsPage, 
  ProductDetailsPage, 
  CheckoutPage, 
  PaymentPage, 
  OrderSuccessPage,
  ProfilePage,
  UserInbox,
  TrackOrderPage,
  ShopHomePage,
  ShopCreatePage,
  ShopLoginPage,
  ShopDashboardPage,
  ShopSettingsPage,
  AdminDashboardPage,
  AdminDashboardUsers,
  AdminDashboardSellers,
  AdminDashboardOrders,
  AdminDashboardProducts,
  AdminDashboardEvents,
  AdminDashboardWithdraw,
  // Import other components as necessary
} from "./routes/Routes";

const App = () => {
  const [stripeApiKey, setStripeApiKey] = useState("");

  // Function to fetch Stripe API key
  const fetchStripeApiKey = async () => {
    try {
      const response = await axios.get(`${server}/payment/stripeapikey`);
      setStripeApiKey(response.data.stripeApikey);
    } catch (error) {
      console.error("Error fetching Stripe API key:", error);
    }
  };

  // Use effect to load necessary data when the app starts
  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
    Store.dispatch(getAllProducts());
    Store.dispatch(getAllEvents());
    fetchStripeApiKey();
  }, []);

  return (
    <BrowserRouter>
      {/* Stripe Elements for payment */}
      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <Routes>
            <Route path="/payment" element={<ProtectedRoute><PaymentPage /></ProtectedRoute>} />
          </Routes>
        </Elements>
      )}

      {/* Main application routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/activation/:activation_token" element={<ActivationPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/checkout" element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} />
        <Route path="/order/success" element={<OrderSuccessPage />} />
        <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
        <Route path="/inbox" element={<ProtectedRoute><UserInbox /></ProtectedRoute>} />
        <Route path="/user/track/order/:id" element={<ProtectedRoute><TrackOrderPage /></ProtectedRoute>} />

        {/* Seller routes */}
        <Route path="/shop-create" element={<ShopCreatePage />} />
        <Route path="/shop-login" element={<ShopLoginPage />} />
        <Route path="/shop/:id" element={<SellerProtectedRoute><ShopHomePage /></SellerProtectedRoute>} />
        <Route path="/settings" element={<SellerProtectedRoute><ShopSettingsPage /></SellerProtectedRoute>} />
        <Route path="/dashboard" element={<SellerProtectedRoute><ShopDashboardPage /></SellerProtectedRoute>} />
        
        {/* Admin routes */}
        <Route path="/admin/dashboard" element={<ProtectedAdminRoute><AdminDashboardPage /></ProtectedAdminRoute>} />
        <Route path="/admin-users" element={<ProtectedAdminRoute><AdminDashboardUsers /></ProtectedAdminRoute>} />
        <Route path="/admin-sellers" element={<ProtectedAdminRoute><AdminDashboardSellers /></ProtectedAdminRoute>} />
        <Route path="/admin-orders" element={<ProtectedAdminRoute><AdminDashboardOrders /></ProtectedAdminRoute>} />
        <Route path="/admin-products" element={<ProtectedAdminRoute><AdminDashboardProducts /></ProtectedAdminRoute>} />
        <Route path="/admin-events" element={<ProtectedAdminRoute><AdminDashboardEvents /></ProtectedAdminRoute>} />
        <Route path="/admin-withdraw-request" element={<ProtectedAdminRoute><AdminDashboardWithdraw /></ProtectedAdminRoute>} />
      </Routes>

      {/* Toast notifications */}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
};

export default App;
