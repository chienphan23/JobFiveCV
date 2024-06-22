export const HeaderHome = () => {
  return (
    <>
      <header>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item ">
              <img
                style={{ height: "490px" }}
                src="/public/b4.png"
                alt="123"
                className="d-block w-100"
              />
              <div className="carousel-caption" style={{ top: "50px" }}>
                <h1 style={{ textAlign: "center", color: "white" }}></h1>
                <h2
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "300",
                    marginTop: "20px",
                  }}
                >
                  <i></i>
                </h2>
              </div>
            </div>

            <div className="carousel-item ">
              <img
                style={{ height: "490px", objectFit: "cover" }}
                src="/public/b4.png"
                alt="123"
                className="d-block w-100"
              />
              <div className="carousel-caption" style={{ top: "50px" }}>
                <h1 style={{ textAlign: "center", color: "white" }}></h1>
                <h2
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "300",
                    marginTop: "20px",
                  }}
                >
                  <i></i>
                </h2>
              </div>
            </div>

            <div className="carousel-item active">
              <img
                style={{ height: "490px" }}
                src="/b4.png"
                alt="Los Angeles"
                className="d-block w-100"
              />
              <div className="carousel-caption" style={{ top: "50px" }}>
                <h1 style={{ textAlign: "center", color: "white" }}>
                  Chào mừng bạn đến với JOB5
                </h1>
                <h2
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "300",
                    marginTop: "20px",
                  }}
                >
                  <i>Công việc ổn định, cải thiện cuộc sống.</i>
                </h2>
              </div>
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#myCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#myCarousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </header>
    </>
  );
};
