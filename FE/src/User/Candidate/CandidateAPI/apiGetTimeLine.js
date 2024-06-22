import axios from "../../../Setup/setupAxios";

const apiGetTimeLines = async (id) => {
    const timeLines = await axios.get(
        `http://localhost:8080/api/timeLine/${id}`
    );
    return timeLines;
};

export { apiGetTimeLines };
