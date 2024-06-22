import ChartComponent from "../../Admin/ChartComponent";
import { Modal } from "../../UI/Modal";
import "./css/Home.css";
import { HeaderHome } from "./HeaderHome";
import { MainHome } from "./MainHome";

export const Home = () => {
  // const {data, isLoading, error} = useDemo()
  // const navigate = useNavigate()
  // useEffect(() => {
  //   if(error) return navigate("/errorbug")
  // }, [error, navigate])

  // if(isLoading) return <div>Loading</div>
  
  return (
    <>
    {/* {console.log(data)}
    {data.data.data.map((a) => 

      <div>{a.industryName}</div>
    )} */}
      <HeaderHome/>
      
      <MainHome/>
    </>
  );
};
