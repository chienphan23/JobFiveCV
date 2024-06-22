import axios from "../../../Setup/setupAxios";

const apiGetListCandidateByListId = async (ids) => {
    if (!ids || ids === undefined) {
        return null;
    }
    const result = await axios.post(`http://localhost:8080/api/candidate/ids`, {
        ids,
    });
    return result;
};

export { apiGetListCandidateByListId };
