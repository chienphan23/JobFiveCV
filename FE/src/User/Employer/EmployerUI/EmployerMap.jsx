import { useEffect, useState } from "react";

export const EmployerMap = ({ employerCurrent }) => {
    const [mapData, setMapData] = useState(null);

    const query =
        employerCurrent?.data?.address?.replace(" ", "+") +
        "+" +
        employerCurrent?.data?.provinceName?.replace(" ", "+");
    const API_KEY = "2429394608aa4f9a933a9f5f1b9369c9";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://api.opencagedata.com/geocode/v1/json?q=${query}&key=${API_KEY}`
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                // console.log(data);
                if (data !== undefined) {
                    setMapData(data.results[0]);
                } else setMapData("Không thể tìm thấy địa chỉ tương ứng");
            } catch (error) {
                console.error(
                    "There was a problem with your fetch operation:",
                    error
                );
            }
        };

        fetchData();
    }, [query]);

    return (
        <>
            <div className="row border-top">
                <h6
                    className="col-lg-12"
                    style={{
                        fontWeight: "500",
                        margin: "18px 0",
                    }}
                >
                    Bản đồ
                </h6>
            </div>

            <iframe
                src={`https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3826.310462566868!2d${mapData?.geometry.lng}!3d${mapData?.geometry.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDI3JzM1LjMiTiAxMDfCsDM1JzMzLjQiRQ!5e0!3m2!1svi!2s!4v1713966184808!5m2!1svi!2s`}
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                width="100%"
            ></iframe>
        </>
    );
};
