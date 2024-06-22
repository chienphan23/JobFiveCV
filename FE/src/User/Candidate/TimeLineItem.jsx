function TimeLineItem({ timeLine }) {
    return (
        <div className="row mt-2">
            <div className="col-lg-6 text-center">{timeLine?.stage}</div>
            <div className="col-lg-6">{timeLine?.job}</div>
        </div>
    );
}

export default TimeLineItem;
