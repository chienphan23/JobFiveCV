import axios from "axios";
import Cookies from 'js-cookie';
 
axios.defaults.withCredentials = true;
 
// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 50000
  });
  
  instance.interceptors.request.use(function (request) {
    const jwt = Cookies.get('AUTH_TOKEN');
    // Cập nhật header Authorization với giá trị mới nhất của cookie
    if(jwt){
      request.headers.Authorization = `Bearer ${jwt}`
    }
    return request;
  }, function (error) {
    // Bất kì mã trạng thái nào lọt ra ngoài tầm 2xx đều khiến hàm này được trigger\
    // Làm gì đó với lỗi response
    error = error.response.data
    console.log(error)
    return Promise.reject(error);
  });
 
  instance.interceptors.response.use( (response) => {
    // Bất kì mã trạng thái nào nằm trong tầm 2xx đều khiến hàm này được trigger
    // Làm gì đó với dữ liệu response
    response = response.data
   
    return response;
  }, async (error) => {
    // Bất kì mã trạng thái nào lọt ra ngoài tầm 2xx đều khiến hàm này được trigger\
    // Làm gì đó với lỗi response
    if(error.code === "ERR_NETWORK") return Promise.reject({status: 602})
    error = error.response.data
    console.log(error)
    if(error.status === 706 && error.message == "User doesn't exist"){
      return error
    }
    
    if(error.status === 401 && error.message === 'Token expired'){
      let jwt = Cookies.get('AUTH_TOKEN');
      const formData = new FormData()
     
      formData.append("token", jwt)
      const refresh = await axios.post("http://localhost:8080/api/auth/refresh", formData)
      if(refresh?.data?.data?.authenticated === true){
        Cookies.set('AUTH_TOKEN', refresh?.data?.data?.token)
      }else{
        window.location.pathname = "/login"
      }
    }
    // 
    // if(error.status === 1006 ){
    //   window.location.pathname = "/login"
    // }
    // 
    return Promise.reject(error);
  });
 
export default instance