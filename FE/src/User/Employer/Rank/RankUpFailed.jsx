import { Link } from "react-router-dom";

export const RankUpFailed = () => {
    
    return (
        <div
            className="container py-5"
            style={{
                height: "73vh",
            }}
        >
            <div className="row">
                <div className="col w-75 m-auto">
                    <div className="circle">
                        <div className="icon"></div>
                    </div>
                    <h1 className="my-3 text-danger text-center">
                        Thanh toán thất bại
                    </h1>
                    <div className="circle">
                        <div className="failed text-center">
                            <svg
                                style={{
                                    backgroundColor: "white",
                                    borderRadius: "50%",
                                }}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                color="red"
                                width={200}
                                height={200}
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="alert alert-danger text-center">
                        Giao dịch chưa hoàn tất, hãy thử lại sau.
                    </div>
                    <div className="text-center">
                        <Link to="/home" className="btn btn-primary">
                            Về trang chủ
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
