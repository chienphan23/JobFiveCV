import { Link } from "react-router-dom"
import "./PageNotFound.css"

export const PageNotFound = () => {
    return(
        <div className="style-body" style={{paddingBottom: "-150px"}}>
            <h1 className="style-h1"></h1>
            <p className="zoom-area"></p>
            <section className="error-container">
            <span>4</span>
            <span><span className="screen-reader-text">0</span></span>
            <span>4</span>
            </section>
            <div className="link-container">
            <Link to={"/home"} className="more-link">Trở về trang chủ</Link>
            </div>
        </div>
    )
}