import axios from "axios";
import base_url from "../../utils/base_url";
import { toast } from 'react-toastify';


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

const login = async (data) => {
  try {
    
    console.log(data + 'login data')
    const response = await axios.post('https://apimasterv3.leadwissr.com/ipa/login_with_otp', data);
    console.log(response?.data)
    if (response.status === 200) {
      toast.success(response?.data?.message);
    } else {
      toast.error(response?.error?.message);
    }
    return response.data;
  } catch (error) {
    
    toast.error(error?.response?.data?.message.email);
    throw error;
  }
};


export const homeService = {
    getProducts,
    getSiteSetting,
    login
};
