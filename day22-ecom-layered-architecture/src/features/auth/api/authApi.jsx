import { api } from "../../../config/api";

export const loginUserApi = async (credentials) => {
  try {
    let res = await api.post("/auth/login", credentials);
    localStorage.setItem("accessToken", res.data.accessToken);
    return res.data;
  } catch (e) {
    console.error("Login request failed:", e.response?.status, e.response?.data || e.message);
    throw e;
  }
};
export const hydrateUser = async () => {
  let token = localStorage.getItem("accessToken");
  try {
    let res = await api.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (e) {
    console.error("Hydrate user failed:", e.response?.status, e.response?.data || e.message);
    throw e;
  }
};
