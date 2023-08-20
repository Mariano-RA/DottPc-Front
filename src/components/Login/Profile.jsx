import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getProtectedResource } from "../utils/apiClient";

const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const fetchProtectedResource = async () => {
      try {
        const accessToken = await getAccessTokenSilently(); // Reemplaza con la lógica para obtener el token
        const apiResponse = await getProtectedResource(accessToken);
        console.log(apiResponse);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchProtectedResource();
  }, []);

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;
