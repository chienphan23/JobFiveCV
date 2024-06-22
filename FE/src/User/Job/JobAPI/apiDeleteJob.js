import axios from "../../../Setup/setupAxios";

export const apiDeleteJob = async (id) => {
  if (!id || id === undefined) {
    return { status: 200, data: null };
  }
  const result = await axios.delete(
    `http://localhost:8080/api/job/delete/${id}`
  );
  return result;
};
