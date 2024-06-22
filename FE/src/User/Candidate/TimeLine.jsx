import TimeLineItem from "./TimeLineItem";

function TimeLine({ timeLines }) {
    return (
        <>
            <div className="row mt-3">
                <div className="col-lg-6 text-center font-weight-bold">
                    Khoảng thời gian
                </div>
                <div className="col-lg-6 font-weight-bold">Công việc</div>
            </div>
            {timeLines?.data.map((timeLine) => (
                <TimeLineItem timeLine={timeLine} key={timeLine?.timelineId} />
            ))}
        </>
    );
}

export default TimeLine;
