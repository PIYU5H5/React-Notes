import axios from "axios";

export const getAllProducts = async (limit, pageParams) => {
  try {
    let res = await axios.get(
      `https://dummyjson.com/products?limit=${limit}&skip=${pageParams}`,
    );
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
