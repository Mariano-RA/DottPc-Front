import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getCuotasTest } from "../utils/testClient";
import { LogoutButton } from "../Login/LogoutButton";
const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const fetchProtectedResource = async () => {
      try {
        const accessToken = await getAccessTokenSilently(); // Reemplaza con la lógica para obtener el token
        const apiResponse = await getCuotasTest(accessToken);
        console.log(apiResponse);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchProtectedResource();
  }, []);

  return (
    isAuthenticated && (
      <div className="d-flex align-items-center bg-fondoClaro rounded">
        <img
          className="img-fluid rounded me-2"
          src={user.picture}
          alt={user.name}
        />
        <div className="flex flex-column justify-content-center align-items-center me-1">
          <p className="m-0 p-0 text-center">{user.given_name}</p>
          <LogoutButton />
        </div>
      </div>
    )
  );
};

export default Profile;
