import axios from "../../../../Setup/setupAxios";

const apiCreateOrder = async (formData) => {
    // formData.append("rankId", 1);
    const result = await axios.post(
        "http://localhost:8080/api/vnpay/create-order",
        formData
    );
    return result;
};

export { apiCreateOrder };
