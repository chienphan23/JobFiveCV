import { Link } from "react-router-dom"
import "./PageNotFound.css"

export const PageNotLogin = () => {
    return(
        <div className="style-body">
            <h1 className="style-h1"></h1>
            <p className="zoom-area"></p>
            <section style={{textAlign: "center"}} className="pt-5">
            <h1 style={{color: "white", fontWeight: "700"}}>Vui lòng đăng nhập để truy cập trang này</h1>
            </section>
            <div className="link-container">
            <Link to={"/login"} className="more-link">Đăng nhập</Link>
            </div>
        </div>
    )
}