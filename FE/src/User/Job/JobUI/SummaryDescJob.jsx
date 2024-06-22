import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const SummaryDescJob = ({icon, title, detail}) => {
    return (
        <>
            <div className="col-lg-4 mb-3">
                <div style={{display: "flex", width: "100%"}}>
                    <div>
                    <div className="main-background-bold" style={{ width: "52px",borderRadius: "50%", textAlign: "center", lineHeight: "48px"}}><i style={{ padding: "0 10px", fontSize: "24px", color: "white" }}>
                        <FontAwesomeIcon icon={icon} className="me-2" />
                        </i></div>  </div>                                                    
                    <div style={{flex: 1, marginLeft: "14px"}}>
                        <div>{title}</div>
                        <p>{detail}</p>
                    </div>
                </div>
            </div>
        </>
    )
}