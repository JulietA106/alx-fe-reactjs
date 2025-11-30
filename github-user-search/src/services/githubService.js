import axios from "axios";

export const searchUsers = async (query, { location, minRepos } = {}) => {
  try {
    let searchQuery = query;
    
    // Add location filter if provided
    if (location) {
      searchQuery += ` location:${location}`;
    }
    
    // Add minimum repos filter if provided
    if (minRepos !== undefined && minRepos > 0) {
      searchQuery += ` repos:>=${minRepos}`;
    }
    
    const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(searchQuery)}`);
    return response.data.items; // array of users
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchUserData = async (query, { location, minRepos } = {}) => {
  return await searchUsers(query, { location, minRepos });
};

