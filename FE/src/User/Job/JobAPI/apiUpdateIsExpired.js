import axios from "../../../Setup/setupAxios";

export const apiUpdateIsExpired = async (id) => {
  if (!id || id === undefined) {
    return { status: 200, data: null };
  }
  const result = await axios.put(
    `http://localhost:8080/api/job/updateIsExpired/${id}`
  );
  return result;
};
