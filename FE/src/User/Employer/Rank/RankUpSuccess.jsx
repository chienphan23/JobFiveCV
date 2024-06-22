import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useUser } from "../../../Context/UseContext";
import { useGetOneRank } from "./RankAPI/useGetOneRank";
import { LoadingPage } from "../../../UI/LoadingPage";
import { parseISO, format } from "date-fns";
import { formatCurrency } from "../../../Utils/formatCurrency";
import { formatDateTime } from "../../../Utils/formatDateTime";
import { PageNotLogin } from "../../../UI/PageNotLogin";
import { PageNotAccess } from "../../../UI/PageNotAccess";

export const RankUpSuccess = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { user, isLoadingUser } = useUser();

    // console.log(user);
    const { rank, isLoading } = useGetOneRank(user?.data?.rankId);
    // console.log(rank);
    if (isLoading || isLoadingUser) return <LoadingPage />;
    if (user &&  user.status == 706) return <PageNotLogin/>
    if (user &&  "candidateId" in user.data) return <PageNotAccess/>
    const date = parseISO(searchParams.get("vnp_PayDate"));

    return (
        <div
            className="container py-5"
            style={{
                height: "73vh",
            }}
        >
            <div className="row ">
                <div className="col w-75 m-auto">
                    <div className="circle">
                        <div className="tick"></div>
                    </div>
                    <h1 className="my-3 text-success text-center">
                        Thanh toán thành công
                    </h1>
                    <div className="alert alert-success text-center">
                        Nâng cấp tài khoản nhà tuyển dụng{" "}
                        <strong>{user?.data.employerName}</strong> lên mức xếp
                        hạng <strong>{rank?.data.rankName}</strong>{" "}
                    </div>
                    <h2 className="my-2">Chi tiết đơn hàng</h2>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Tổng tiền:</td>
                                <td>
                                    <span>
                                        {formatCurrency(
                                            searchParams.get("vnp_Amount") / 100
                                        )}
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>Thời gian thanh toán:</td>
                                <td>
                                    <span>
                                        {formatDateTime(
                                            searchParams.get("vnp_PayDate")
                                        )}
                                        {/* {format(date, "dd/MM/yyyy hh:mm:ss")} */}
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>Mã giao dịch:</td>
                                <td>
                                    <span>
                                        {searchParams.get("vnp_TransactionNo")}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
