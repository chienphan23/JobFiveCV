import axios from "../../Setup/setupAxios";

const apiTotalPriceByRanks = async () => {
  const result = await axios.get(
    "http://localhost:8080/api/statistics/totalPrice"
  );
  return result;
};

export default apiTotalPriceByRanks;
