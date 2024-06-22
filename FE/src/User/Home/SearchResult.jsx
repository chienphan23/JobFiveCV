import { CardResultSearch } from "./HomeUI/CardResultSearch"

export const SearchResult = () => {
    return(
        <>
            <div className="default-background pb-5">
            <div className="container" >
                    <div className="row col-lg-12 mb-4">
                        <h5>Kết quả tìm kiếm của: </h5>
                    </div>
                <div className="row mb-4 default-background">
                    
                    <div className="col-lg-9 default-background" >
                        <CardResultSearch/>
                        <CardResultSearch/>
                        <CardResultSearch/>
                        <CardResultSearch/>
                    </div>
                    <div className="col-lg-3 default-background" >
                        <div className="border-main background-card" style={{ padding: "20px 24px"}}>
                            <div className="row mb-3" style={{display: "flex"}}>
                                <div style={{flex: 1}}>
                                    <img src="http://localhost:5173/logo.png" alt="logo" height={"75.5px"} width={"75.5px"}/>
                                </div>
                                <div>
                                    Công ty nổi bật....
                                </div>
                                <div style={{flex: 1}}>
                                    Name company
                                </div>
                            </div>
                           
                            
                            <div className=" text-center mt-3" style={{width: "100%"}}>
                                <button className="btn btn-info" style={{fontWeight: "650"}}>Xem trang công ty</button>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
        </>
    )
}