import { Link } from "react-router-dom";

function EmptyList({ title }) {
    return (
        <div className="text-center mt-5">
            <p className="font-weight-bold" style={{ fontSize: "24px" }}>
                {title}
            </p>
            <br />
            <img
                src="./emptylist.jpg"
                style={{ width: "200px", height: "200px" }}
            />
            <br />
            <Link to={"/home"} className="btn btn-outline-primary">
                Tìm việc ngay
            </Link>
        </div>
    );
}

export default EmptyList;
