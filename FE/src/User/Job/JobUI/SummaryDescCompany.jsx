import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

export const SummaryDescCompany = ({icon, title, desc}) => {
    return(
        <>
            <div className="row mb-1" >
                <div className="col-lg-12">
                    <i style={{ padding: "0 5px 0 0", fontSize: "18px" }}><FontAwesomeIcon style={{width: "18px"}} icon={icon} className="me-2 main-color-bold" /></i>
                    <p className="main-color-bold" style={{fontSize: "16px", fontWeight: "600"}}>{title}: </p>
                    {title === "Liên kết" ?
                        <Link to={"#"}>{desc}</Link> 
                        :
                        <p>{desc}</p>
                    }
                </div>
            </div>
        </>
    )
}