import axios from "axios";
import Cookies from 'js-cookie';

axios.defaults.withCredentials = true;

// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 50000
  });
  

  instance.interceptors.response.use(function (response) {
    // Bất kì mã trạng thái nào nằm trong tầm 2xx đều khiến hàm này được trigger
    // Làm gì đó với dữ liệu response
    response = response.data
    return response;
  }, function (error) {
    // Bất kì mã trạng thái nào lọt ra ngoài tầm 2xx đều khiến hàm này được trigger\
    // Làm gì đó với lỗi response
    // error = error.response.data
    error = error.response.data
    console.log(error)
    return Promise.reject(error);
  });

export default instance