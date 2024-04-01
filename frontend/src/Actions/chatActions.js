import axios from "axios";

export const getUsers = async (keyword) => {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/getusers?keyword=${keyword}`,
      { withCredentials: true }
    );

    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const searchUsers = async (keyword) => {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/searchusers?keyword=${keyword}`
    );

    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getUserProfile = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/user-profile", {
      withCredentials: true,
    });

    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
