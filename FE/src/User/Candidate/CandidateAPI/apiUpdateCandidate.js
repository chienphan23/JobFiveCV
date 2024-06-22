import axios from "../../../Setup/setupAxios";

const apiUpdateCandidate = async (id, formData) => {
    let emptyFile;
    emptyFile = new Blob([], { type: "image/png" });
    emptyFile.name = "nophoto.png";

    if (
        typeof formData.get("file") !== "object" ||
        formData.get("file") === undefined ||
        formData.get("file") === null
    ) {
        formData.append("file", emptyFile, "nophoto.png");
    }
    const result = await axios.put(
        `http://localhost:8080/api/candidate/update/${id}`,
        formData
    );
    return result;
};
export { apiUpdateCandidate };
