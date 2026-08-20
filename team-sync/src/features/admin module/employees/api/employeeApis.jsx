import { axiosInstance } from "../../../../config/axiosInstance";

export let getAllEmployees = async ({
  page = 1,
  limit = 20,
  role = "",
  status = "",
  department = "",
}) => {
  try {
    let res = await axiosInstance.get(
      `/employee?page=${page}&limit=${limit}&role=${role}&department=${department}&status=${status}`,
    );
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};

export let createEmployee = async (data) => {
  try {
    let res = await axiosInstance.post(`/employee/create`, data);
    return res.data.data;
  } catch (error) {}
};

export let updateEmployee = async () => {
  try {
    let res = await axiosInstance.patch(`/employee/update/{empID}`, data);
  } catch (error) {}
};
