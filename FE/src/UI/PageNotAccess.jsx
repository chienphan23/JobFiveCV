import { Link } from "react-router-dom"
import "./PageNotFound.css"

export const PageNotAccess = () => {
    return(
        <div className="style-body">
            <h1 className="style-h1"></h1>
            <p className="zoom-area"></p>
            <section style={{textAlign: "center"}} className="pt-5">
            <h1 style={{color: "white", fontWeight: "700"}}>Bạn không có quyền truy cập trang này</h1>
            </section>
            <div className="link-container">
            <Link to={"/home"} className="more-link">Trở về trang chủ</Link>
            </div>
        </div>
    )
}