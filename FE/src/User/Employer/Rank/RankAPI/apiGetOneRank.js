import axios from "../../../../Setup/setupAxios";

const apiGetOneRank = async (id) => {
    if(id){
        const result = await axios.get(`http://localhost:8080/api/rank/${id}`);
        return result;
    }else{
        return null;
    }
};

export { apiGetOneRank };
