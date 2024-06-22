import axios from "../../Setup/setupLogin";
import axios2 from "../../Setup/setupAxios";
import { apiLogin } from "../Login/apiLogin";

export const apiRegister = async (formData, formData2, email) => {
    console.log("alo" + email)
    const user = await axios.post(`http://localhost:8080/api/auth/register/${email}`, formData)
    const formDataLogin = new FormData();
    formDataLogin.append('userName', formData.get('userName'))
    formDataLogin.append('password', formData.get('password'))
    console.log(user)
    // if(user?.data?.role !== "employer"){
        const login = await apiLogin(formDataLogin)
        console.log(login)
        const expirationDate = new Date();
                expirationDate.setHours(expirationDate.getHours() + 4);
                document.cookie = 'AUTH_TOKEN' + "=" + login.token + ";" + expirationDate + ";path=/";
    // }

    console.log("alo123")
    let emptyFile;
    emptyFile = new Blob([], { type: "image/png" });
    emptyFile.name = "nophoto.png";
    if(formData.get('role') == 'employer'){
        formData2.append('filePhoto', emptyFile, "nophoto.png")
        formData2.append('fileBackground', emptyFile, "nobackground.png")
        formData2.append('approved', false)
        formData2.append('rankId', 1)
    }else{
        
        formData2.append('file', emptyFile, "nophoto.png")
    }

    
    const result = await axios2.put(`http://localhost:8080/api/${formData.get('role') == 'candidate' ? "candidate" : "employer"}/update/${user.data.userId}`, formData2) 
    return user;
 }