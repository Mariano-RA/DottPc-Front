import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/home",
      },
      authorizationParams: {
        prompt: "login",
      },
    });
  };

  return (
    !isAuthenticated && (
      <button
        className="btn btn-outline-verdedottclaro"
        style={{ height: "35px" }}
        onClick={handleLogin}
      >
        Log In
      </button>
    )
  );
};

export default LoginButton;
