import "../../User/Profile/UserProfile.css"
export const EditProfile = () => {
    return (
        <>
        <div className="container emp-profile">
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                            <div className="file btn btn-lg btn-primary">
                                Đổi ảnh đại diện
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                                    <h5>
                                        Kshiti Ghelani
                                    </h5>
                                    <h6>
                                        Web Developer and Designer
                                    </h6>
                                    <p className="proile-rating">Xếp hạng : <span>8/10</span></p>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Thông tin cá nhân</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-work">
                            <p>Thông tin liên kết</p>
                            <a href="">Website Link</a><br/>
                            <a href="">Bootsnipp Profile</a><br/>
                            <a href="">Bootply Profile</a>
                            <p>Kỹ năng</p>
                            <a href="">Web Designer</a><br/>
                            <a href="">Web Developer</a><br/>
                            <a href="">WordPress</a><br/>
                            <a href="">WooCommerce</a><br/>
                            <a href="">PHP, .Net</a><br/>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        
                                        <div className="row mb-3">
                                            <div className="col-md-12">
                                                <label>Họ và tên: </label>
                                            </div>
                                            <div className="col-md-9">
                                               <input type="text"
                                                    className="form-control outline-input border-select"
                                                    placeholder="Nhập từ khoá tìm kiếm"
                                                    style={{ fontSize: "16px" }}/>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-md-12">
                                                <label>Email: </label>
                                            </div>
                                            <div className="col-md-9">
                                               <input type="text"
                                                    className="form-control outline-input border-select"
                                                    placeholder="Nhập từ khoá tìm kiếm"
                                                    style={{ fontSize: "16px" }}/>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-md-12">
                                                <label>Số điện thoại: </label>
                                            </div>
                                            <div className="col-md-9">
                                               <input type="text"
                                                    className="form-control outline-input border-select"
                                                    placeholder="Nhập từ khoá tìm kiếm"
                                                    style={{ fontSize: "16px" }}/>
                                            </div>
                                        </div>
                                        <div className="row mt-5" style={{textAlign: "center"}}>
                                            <div className="col-md-2"></div>
                                            <div className="col-md-8" >
                                                <input type="submit" className="profile-edit-btn main-background text-white" name="btnAddMore" value="Sửa thông tin" />
                                            </div>  
                                            <div className="col-md-2"></div>
                                        </div>
                            </div>

                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Hourly Rate</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>10$/hr</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Total Projects</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>230</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>English Level</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Availability</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>6 months</p>
                                            </div>
                                        </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Your Bio</label><br/>
                                        <p>Your detail description</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>           
        </div>
        </>
    )
}