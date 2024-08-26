import axios from "axios";
import base_url from "../../utils/base_url";
// import { getConfigWithToken } from "../../../utils/config";

// Get All bank details
const getProducts = async () => {
  // const config = await getConfigWithToken();
  const config = "";
  try {
    const response = await axios.get(`${base_url}products`, config);
   
    return response;
   
  } catch (error) {
    console.error("Error during getting product data", error);
    throw error;
  }
};

const getSiteSetting = async () => {
  // const config = await getConfigWithToken();
  const config = "";
  try {
    const response = await axios.get(`${base_url}c/b87a-e5e9-4609-8b14`, config);
   
    return response;
  } catch (error) {
    console.error("Error during getting site data", error);
    throw error;
  }
};

export const homeService = {
    getProducts,
    getSiteSetting
};
