import { Button, Card, CardText } from "react-bootstrap";
import { formatCurrency } from "../../../../Utils/formatCurrency";
import { apiCreateOrder } from "../RankAPI/apiCreateOrder";
import { Link } from "react-router-dom";
export const RankCard = ({ rank, user }) => {
  console.log(user);
  const handleOnClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (rank.rankId > user.rankId) {
      formData.append("rankId", rank.rankId);
      formData.append("userId", user.employerId);
      formData.append("amount", rank.price);
      formData.append(
        "orderInfo",
        `Nang cap tai khoan nha tuyen dung ${user?.employerId} len muc rank ${rank.rankId}`
      );
    }
    const result = await apiCreateOrder(formData);
    console.log(result?.data);
    window.location.href = result?.data;
    // if (isLoading) return <LoadingPage />;
  };

  return (
    <>
      <form className="col-lg-3 col-md-6">
        <Card
          className="d-flex border justify-content-center align-items-center flex-wrap h-100"
          border="info"
          style={{ alignSelf: "normal" }}
        >
          <Card.Img
            variant="top"
            src={`http://localhost:8080/api/v1/files/${rank?.photo}`}
            alt={rank?.rankName}
            style={{
              width: "120px",
              height: "120px",
              objectFit: "cover",
              flexShrink: 0,
            }}
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title className="text-center">{rank.rankName}</Card.Title>
            {rank.rankId > 1 && (
              <>
                <Card.Text>Ưu tiên hiển thị nhà tuyển dụng nổi bật</Card.Text>
                <Card.Text>Ưu tiên hiển thị trong công việc nổi bật</Card.Text>
              </>
            )}
            <Card.Text>
              Thời gian hiển thị, hết hạn tin:&nbsp;
              <b>{rank.displayTime}</b> ngày
            </Card.Text>
            <Card.Text>
              Đăng lại tin đã hết hạn có giới hạn số lượt:&nbsp;
              <b>{rank.reupTimes}</b>
            </Card.Text>
            <Card.Text>
              Giới hạn số lượng đăng tin:&nbsp;
              <b>{rank.limitPost}</b>
            </Card.Text>

            {rank.rankId === 2 && (
              <small className="text-muted text-center">
                Được nhiều người tin dùng
              </small>
            )}
          </Card.Body>

          <Card.Footer className="w-100 text-center">
            {!user ? (
              <Link to="/login">
                <Button variant="primary">{formatCurrency(rank.price)}</Button>
              </Link>
            ) : rank.rankId > user.rankId ? (
              // <Link to={linkRankUp}>
              <Button
                variant="primary"
                onClick={(e) => handleOnClick(e)}
                className="font-weight-bold"
                style={{ fontSize: "14px" }}
              >
                {formatCurrency(rank.price)}
              </Button>
            ) : (
              // </Link>
              <Button
                variant="secondary"
                disabled
                className="font-weight-bold"
                style={{ fontSize: "14px" }}
              >
                Đã sở hữu
              </Button>
            )}
          </Card.Footer>
        </Card>
      </form>
    </>
  );
};
