
import { SearchJobHome } from "./SearchJobHome";
import { IndustryHome } from "./IndustryHome";
import { EmployerHome } from "./EmployerHome";
import { ListJobHome } from "./ListJobHome";
import { useGetTopJobForHome } from "./HomeAPI/useGetTopJobForHome";

export const MainHome = () => {
    return (
        <>
        
            <div className="container-fluid" style={{ margin: "0", padding: "0"}}>
               
                <SearchJobHome/>
                <div className="container">

                <ListJobHome/>
                </div>
                <IndustryHome/>

                <EmployerHome/>
            </div>
        </>
    )
}