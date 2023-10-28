import React from "react"; // Make sure to import React
import "./App.css";
import { useState } from "react";
import { NavMenu } from "./components/NavMenu/NavMenu";
import { Auction } from "./components/Auction/Auction";
import { Storage } from "./components/Storage/Storage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { Admin } from "./components/Admin/Admin";
import { Api } from "./components/Home/Api.js";

// Route guard HOC
const ProtectedRoute = ({ element: Component, isAuthenticated, ...props }) => {
  return isAuthenticated ? <Component {...props} /> : <Navigate to="/Login" />;
};

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [authIsReady, setAuthIsReady] = useState(false);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Routes>
        <Route path="/Admin" element={<Admin />} />

        <Route path="/" element={<NavMenu />} />
        <Route path="/api" element={<Api />} />
        {/* Protected routes */}
        <Route
          path="/Auction"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              element={Auction} // Render component directly, not JSX element
            />
          }
        />

        <Route
          path="/Storage"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              element={Storage} // Render component directly, not JSX element
            />
          }
        />
        {/* Redirect Home to Auction if authenticated */}
        {isAuthenticated ? (
          <Route path="/Home" element={<Navigate to="/" replace />} />
        ) : (
          <Route path="/Api" element={<Api />} />
        )}
      </Routes>
    </div>
  );
}

function Auth0WrappedApp() {
  return (
    <Auth0Provider
      domain="agricultue.us.auth0.com"
      clientId="pgdGybNFfG8uBVC2ttzcPJhiKKgDq8FN"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  );
}

export default Auth0WrappedApp;
