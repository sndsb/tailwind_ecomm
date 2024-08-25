// import { store } from "../app/store";

const getToken = async () => {
    const token = localStorage.getItem("token-ecommerce") || "";
    return token;
  };
  // Define a function to generate the config object with the token
  export const getConfigWithToken = async () => {
    const BerearToken = await getToken();
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${BerearToken}`,
          Accept: "application/json",
        },
      };
      return config;
    } catch (error) {
      console.error("Error generating config:", error);
      throw error;
    }
  };
  