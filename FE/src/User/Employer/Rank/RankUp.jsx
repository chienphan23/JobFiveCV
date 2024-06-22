import CardGroup from "react-bootstrap/CardGroup";
import { RankCard } from "./RankUI/RankCard";
import {useGetAllRanks} from "./RankAPI/useGetAllRanks"
import { useUser } from "../../../Context/UseContext";
import { LoadingPage } from "../../../UI/LoadingPage";
import { PageNotAccess } from "../../../UI/PageNotAccess";

export const RankUp = () => {
    const { listRank, isLoading } = useGetAllRanks();
    const { user, isLoadingUser } = useUser();
    
    if (isLoading || isLoadingUser) {
        return <LoadingPage />;
    }
    if(user && "candidateId" in user.data){
        return <PageNotAccess/>
    }
    return (
        <>
            <div className="box-header background-card">
                <p>Nâng cấp tài khoản</p>
                <h3 className="main-color-bold">Mở khóa nhiều quyền lợi hơn</h3>
            </div>
            <div className="container py-5 px-1">
                <CardGroup className="row row-gap">
                    {listRank?.data.map((rank) => (
                        <RankCard
                            key={rank.rankId}
                            rank={rank}
                            user={user?.data}
                        />
                    ))}
                </CardGroup>
            </div>
        </>
    );
};
