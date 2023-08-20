import React from "react";
import axios, { AxiosRequestConfig } from "axios";

// const apiServerUrl = import.meta.env.VITE_APP_API_SERVER_URL; // Reemplaza con tu URL de servidor
const apiServerUrl = import.meta.env.VITE_APP_AUTH0_AUDIENCE;

export default async function getProtectedResource(accessToken) {
  const config: AxiosRequestConfig = {
    url: `./api/cuota`,
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  try {
    const response = await axios(config);
    const { data } = response;
    return {
      data,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error,
    };
  }
}
