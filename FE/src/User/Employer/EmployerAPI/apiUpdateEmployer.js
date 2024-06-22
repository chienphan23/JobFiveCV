import axios from "../../../Setup/setupAxios";

const apiUpdateEmployer = async (id, formData) => {
    let emptyFile;
    emptyFile = new Blob([], { type: "image/png" });
    emptyFile.name = "nophoto.png";

    if (
        typeof formData.get("filePhoto") !== "object" ||
        formData.get("filePhoto") === undefined ||
        formData.get("filePhoto") === null
    ) {
        console.log("alo");
        formData.append("filePhoto", emptyFile, "nophoto.png");
    }

    if (
        typeof formData.get("fileBackground") !== "object" ||
        formData.get("fileBackground") === undefined ||
        formData.get("fileBackground") === null
    ) {
        console.log("alo");
        formData.append("fileBackground", emptyFile, "nobackground.png");
    }
    // formData.append("rankId", 1);

    const result = await axios.put(
        `http://localhost:8080/api/employer/update/${id}`,
        formData
    );

    return result;
};

export { apiUpdateEmployer };
