import { Link } from "react-router-dom"
import "./PageNotFound.css"

export const PageError = () => {
    return(
        <div className="style-body" style={{paddingBottom: "-150px"}}>
            <h1 className="style-h1"></h1>
            <p className="zoom-area"></p>
            <section className="error-container">
            <span>O</span>
            <span><span className="screen-reader-text">O</span></span>
            <span>P</span>
            <span>s</span>
            </section>
            <div className="link-container">
                <div style={{color: "white",fontSize: "36px",fontWeight: "bold"}}>Đã có lỗi xảy ra !</div>
            <Link to={"/login"} className="more-link">Trở về trang chủ</Link>
            </div>
        </div>
    )
}