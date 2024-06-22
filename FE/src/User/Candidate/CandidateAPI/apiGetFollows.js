import axios from "../../../Setup/setupAxios";

const apiGetFollows = async (id) => {
    const follows = await axios.get(
        `http://localhost:8080/api/follow/list/${id}`
    );
    return follows;
};

export { apiGetFollows };
