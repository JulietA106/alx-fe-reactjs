import axios from "axios";

export const searchUsers = async (query) => {
  try {
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return response.data.items; // array of users
  } catch (error) {
    console.error(error);
    throw error;
  }
};

