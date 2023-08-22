import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const fetchProtectedResource = async () => {
      try {
        const accessToken = await getAccessTokenSilently();
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchProtectedResource();
  }, []);

  return (
    isAuthenticated && (
      <div className="d-flex">
        <img
          className="img-fluid rounded-3 ms-2"
          src={user.picture}
          alt={user.name}
        />
      </div>
    )
  );
};

export default Profile;
