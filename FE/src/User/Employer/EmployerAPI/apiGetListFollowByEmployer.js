import axios from "../../../Setup/setupLogin";

const apiGetListFollowByEmployer = async (id) => {
    const result = await axios.get(
        `http://localhost:8080/api/follow/listFollow/${id}`
    );
    return result;
};

export { apiGetListFollowByEmployer };
