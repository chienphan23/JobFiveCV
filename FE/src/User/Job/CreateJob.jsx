import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetIndustry } from "../../API/useGetIndustry";
import { JobInformation } from "./JobUI/JobInformation";
import { ProvinceNameSelect } from "../../UI/ProvinceNameSelect";
import { LoadingPage } from "../../UI/LoadingPage";
import { InputGroup } from "../../UI/InputGroup";
import { useCreateJob } from "./JobAPI/useCreateJob";
import { useUser } from "../../Context/UseContext";
import { PageNotAccess } from "../../UI/PageNotAccess";
import { PageError } from "../../UI/PageError";
import { useGetOneRank } from "../../User/Employer/Rank/RankAPI/useGetOneRank";
import { formatDate } from "../../Utils/formatDateTime";
import { IndustrySelectEditJob } from "./IndustrySelectEditJob";
import { InputRequire } from "../../UI/InputRequire";
import { ErrorText } from "../../UI/ErrorText";
import toast from "react-hot-toast";
import { useGetNumJobOfEmployer } from "./JobAPI/useGetNumJobOfEmployer";

export const CreateJob = () => {
  const { user, isLoadingUser } = useUser();
  const { rank, isLoading: isLoadingRank } = useGetOneRank(user?.data?.rankId);
  const navigate = useNavigate();
  const { createJob, isLoading: isLoadingCreateJob } = useCreateJob();
  const { numJob, isLoadingNumJob } = useGetNumJobOfEmployer(
    user.data.employerId ? user.data.employerId : null
  );
  const { listIndustry, isLoading } = useGetIndustry();
  const [name, setName] = useState("");
  const [typeId, setTypeId] = useState(2);
  const [jobPosition, setJobPosition] = useState("");
  const [numPosition, setNumPosition] = useState("");
  const [maxSalary, setMaxSalary] = useState(0);
  const [minSalary, setMinSalary] = useState(0);
  const [yearExperience, setYearExperience] = useState("");
  const [jobAddress, setJobAddress] = useState("");
  const [location, setLocation] = useState("");

  const [jobDescription, setJobDescription] = useState("");
  const [jobRequirement, setJobRequirement] = useState("");
  const [jobBenefit, setJobBenefit] = useState("");
  const [arrayIndustrys, setArrayIndustrys] = useState([]);
  const [arrayIndustryId, setArrayIndustryId] = useState([]);
  const [error, setError] = useState({
    name: "",
    jobPosition: "",
    numPosition: "",
    maxSalary: "",
    minSalary: "",
    yearExperience: "",
    jobAddress: "",
    location: "",
    jobDescription: "",
    jobRequirement: "",
    jobBenefit: "",
    arrayIndustryId: "",
  });

  const handleOnChangeName = (e) => {
    setName(e.target.value);
  };
  const handleOnChangePosition = (e) => {
    setJobPosition(e.target.value);
  };
  const handleOnChangeNumPosition = (e) => {
    setNumPosition(e.target.value);
  };
  const handleOnChangeYearExperience = (e) => {
    setYearExperience(e.target.value);
  };
  const handleOnChangeJobAddress = (e) => {
    setJobAddress(e.target.value);
  };
  const handleOnChangeMinSalary = (e) => {
    setMinSalary(e.target.value);
  };
  const handleOnChangeMaxSalary = (e) => {
    setMaxSalary(e.target.value);
  };

  const handleDescriptionChange = (event) => {
    setJobDescription(event.target.value);
  };
  const handleRequirementChange = (event) => {
    setJobRequirement(event.target.value);
  };
  const handleBenefitChange = (event) => {
    setJobBenefit(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newError = {};
    if (name.replace(/\s+/g, " ").trim().length === 0) {
      newError.name = "Vui lòng nhập tên công việc";
    }
    if (maxSalary < 0) {
      newError.maxSalary = "Vui lòng nhập lương tối đa lớn hơn 0";
    }
    if (maxSalary > 500) {
      newError.maxSalary = "Vui lòng nhập lương bé hơn 500 triệu";
    }
    if (minSalary < 0) {
      newError.minSalary = "Vui lòng nhập lương tối thiểu lớn hơn 0";
    }
    if (numPosition <= 0) {
      newError.numPosition = "Vui lòng nhập số lượng lớn hơn 0";
    }
    if (yearExperience < 0) {
      newError.yearExperience = "Vui lòng nhập số năm kinh nghiệm lớn hơn 0";
    }

    if (Number(minSalary) !== 0 && Number(minSalary) >= Number(maxSalary)) {
      newError.minSalary = "Vui lòng nhập lương tối thiểu bé hơn lương tối đa";
    }

    if (arrayIndustryId.length === 0)
      newError.arrayIndustryId = "Vui lòng chọn ngành nghề liên quan";

    if (jobPosition.replace(/\s+/g, " ").trim().length === 0)
      newError.jobPosition = "Vui lòng nhập vị trí tuyển dụng";

    if (numPosition == 0 || numPosition.length === 0)
      newError.numPosition = "Vui lòng nhập số lượng tuyển dụng lớn hơn 0";

    if (yearExperience.length === 0)
      newError.yearExperience = "Vui lòng nhập số năm kinh nghiệm";

    if (location.replace(/\s+/g, " ").trim().length === 0)
      newError.location = "Vui lòng chọn tỉnh / thành phố";

    if (jobAddress.length === 0)
      newError.jobAddress = "Vui lòng nhập địa điểm làm việc";

    if (jobDescription.replace(/\s+/g, " ").trim().length === 0)
      newError.jobDescription = "Vui lòng nhập mô tả công việc";
    if (jobRequirement.replace(/\s+/g, " ").trim().length === 0)
      newError.jobRequirement = "Vui lòng nhập yêu cầu công việc";
    if (jobBenefit.replace(/\s+/g, " ").trim().length === 0)
      newError.jobBenefit = "Vui lòng nhập quyền lợi";

    if (Object.keys(newError).length > 0) {
      setError(newError);
      toast.error("Dữ liệu bạn nhập chưa hợp lệ vui lòng kiểm tra lại");
      return;
    }

    const formdata = new FormData();
    formdata.append("jobName", name.replace(/\s+/g, " ").trim());
    // formdata.append("postDate", postDate);
    formdata.append("jobPosition", jobPosition.replace(/\s+/g, " ").trim());
    formdata.append("numPosition", numPosition);
    formdata.append("maxSalary", maxSalary);
    formdata.append("minSalary", minSalary);
    formdata.append("yearExperience", yearExperience);
    formdata.append("address", jobAddress.replace(/\s+/g, " ").trim());
    formdata.append("employerId", user.data.employerId);
    formdata.append("typeId", typeId);
    formdata.append("location", location);
    const now = new Date();
    formdata.append("postDate", formatDate(now));
    formdata.append("expirationDate", formatDate(now, rank?.data?.displayTime));
    formdata.append("reupTimesLeft", rank?.data.reupTimes);

    let arrayDescription = jobDescription.split("\n");
    let arrayBenefit = jobBenefit.split("\n");
    let arrayRequirement = jobRequirement.split("\n");
    const formdataIndustry = new FormData();
    formdataIndustry.append("arrayIndustryIds", arrayIndustryId);
    const result = await createJob({
      formdata,
      arrayDescription,
      arrayBenefit,
      arrayRequirement,
      arrayIndustryId,
    });
    // if(result.status === 200){
    //     setName("")
    //     setJobPosition("")
    //     setNumPosition("")
    //     setYearExperience("")
    //     setJobAddress("")
    //     setLocation(0)
    //     setMinSalary(0)
    //     setMaxSalary(0)
    //     setTypeId(1)
    //     setJobDescription("")
    //     setJobRequirement("")
    //     setJobBenefit("")
    //     setArrayIndustryId([])
    //     setArrayIndustrys([])
    // }
    navigate("/manage-job");
  };

  if (
    isLoading ||
    isLoadingUser ||
    isLoadingRank ||
    isLoadingRank ||
    isLoadingNumJob
  )
    return <LoadingPage />;
  if (user && !("employerId" in user.data)) return <PageNotAccess />;
  if (user && !user.data.approved) return <PageNotAccess />;
  if (!user) return <PageError />;
  const useEffect = (() => {}, [user, rank, isLoadingRank, isLoadingUser]);
  if (rank?.data?.limitPost <= numJob?.data)
    return (
      <div className="style-body">
        <h1 className="style-h1"></h1>
        <p className="zoom-area"></p>
        <section style={{ textAlign: "center" }} className="pt-5">
          <h1 style={{ color: "white", fontWeight: "700" }}>
            Bạn đã hết lượt đăng tuyển dụng mới
          </h1>
        </section>
        <div className="link-container">
          <Link to={"/rank-up"} className="more-link">
            Nâng bậc xếp hạng để có thêm lượt
          </Link>
          <br />
          <p
            style={{ color: "white", fontWeight: "700", cursor: "pointer" }}
            onClick={() => navigate(-1)}
          >
            Trở về
          </p>
        </div>
      </div>
    );
  return (
    <>
      <div className="bg-white p-3">
        <h5>Tạo tin tuyển dụng</h5>
      </div>
      <div className="border border-light mt-3 bg-white p-3 rounded pb-5">
        <form onSubmit={(e) => handleSubmit(e)}>
          <h6 className="mb-3 border-bottom pb-3 font-weight-bold">
            Thông tin cơ bản
          </h6>
          <InputGroup
            label={"Tên công việc"}
            placeholder={"Nhập tên công việc"}
            inputValue={name}
            onChangeFns={handleOnChangeName}
            require={true}
          />
          <ErrorText errorText={error?.name} mb={3} />

          <div className="form-group">
            <label>Ngành nghề: </label>
            <InputRequire />
            <IndustrySelectEditJob
              arrayIndustryId={arrayIndustryId}
              setArrayIndustryId={setArrayIndustryId}
              arrayIndustrys={arrayIndustrys}
              setArrayIndustrys={setArrayIndustrys}
            />
            <ErrorText errorText={error?.arrayIndustryId} mt={3} mb={3} />
          </div>
          <div className="form-row">
            <InputGroup
              label={"Vị trí tuyển dụng"}
              placeholder={"Vị trí tuyển dụng"}
              inputValue={jobPosition}
              onChangeFns={handleOnChangePosition}
              colGroup={3}
              require={true}
              errorText={error?.jobPosition}
            />
            <InputGroup
              label={"Số lượng"}
              placeholder={"Số lượng tuyển dụng"}
              inputValue={numPosition}
              onChangeFns={handleOnChangeNumPosition}
              colGroup={3}
              typeInput={"number"}
              require={true}
              errorText={error?.numPosition}
            />

            <InputGroup
              label={"Số năm kinh nghiệm"}
              placeholder={"Năm kinh nghiệm"}
              inputValue={yearExperience}
              onChangeFns={handleOnChangeYearExperience}
              colGroup={3}
              typeInput={"number"}
              require={true}
              errorText={error?.yearExperience}
            />
            <div className="form-group col-lg-3">
              <label>Hình thức làm việc: </label>
              <InputRequire />
              <div
                className="form-control d-flex justify-content-between"
                style={{ height: "38px" }}
              >
                <div>
                  <input
                    type="radio"
                    id="option1"
                    name="gender"
                    value="2"
                    className="mr-2"
                    checked
                    onChange={() => setTypeId(2)}
                  />
                  <label htmlFor="option1">Full time</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="option2"
                    name="gender"
                    value="1"
                    className="mr-2"
                    onChange={() => setTypeId(1)}
                  />
                  <label htmlFor="option2">Part time</label>
                </div>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-lg-4">
              <label>Tỉnh / thành phố: </label>
              <InputRequire />
              <ProvinceNameSelect
                provinceName={location}
                setProvinceName={setLocation}
              />
              <ErrorText errorText={error?.location} mt={3} />
            </div>
            <InputGroup
              label={"Địa điểm làm việc"}
              placeholder={"Địa chỉ"}
              inputValue={jobAddress}
              onChangeFns={handleOnChangeJobAddress}
              colGroup={8}
              require={true}
              errorText={error?.jobAddress}
            />
          </div>

          <div className="form-group">
            <label>Mức lương</label>
            <InputRequire />
            <div className="mb-3 text-muted" style={{ fontSize: "12px" }}>
              Để cả 2 mức lương bằng 0 nếu muốn thoả thuận
            </div>
            <div className="mb-3 text-muted" style={{ fontSize: "12px" }}>
              Đơn vị của mức lương tính theo triệu đồng
            </div>
            <div className="form-row align-items-center">
              <div className="col-lg-6">
                <div className="form-row">
                  <div className="form-group col-lg-6">
                    <label>Mức lương tối thiếu</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Đơn vị: triệu VND"
                      style={{ height: "38px" }}
                      value={minSalary}
                      onChange={handleOnChangeMinSalary}
                    />
                    <ErrorText
                      errorText={error.minSalary ? error.minSalary : null}
                    />
                  </div>
                  <div className="form-group col-lg-6">
                    <label>Mức lương tối đa</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Đơn vị: triệu VND"
                      style={{ height: "38px" }}
                      value={maxSalary}
                      onChange={handleOnChangeMaxSalary}
                    />
                    <ErrorText
                      errorText={error.maxSalary ? error.maxSalary : null}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h6 className="mb-3 border-bottom pb-3 font-weight-bold">
            Chi tiết công việc
          </h6>

          <JobInformation
            label={"Mô tả công việc"}
            inputValue={jobDescription}
            onChangeFns={handleDescriptionChange}
            placeHolder={"Nhập mô tả công việc với vị trí đăng tuyển"}
          />
          <div className="col-lg-12">
            <ErrorText errorText={error?.jobDescription} mt={3} />
          </div>

          <JobInformation
            label={"Yêu cầu công việc"}
            inputValue={jobRequirement}
            onChangeFns={handleRequirementChange}
            placeHolder={
              "Nhập kỹ năng chuyên môn hoặc yêu cầu cần thiết với vị trí đăng tuyển"
            }
          />
          <div className="col-lg-12">
            <ErrorText errorText={error?.jobRequirement} mt={3} />
          </div>

          <JobInformation
            label={"Quyền lợi"}
            inputValue={jobBenefit}
            onChangeFns={handleBenefitChange}
            placeHolder={
              "Nhập quyền lợi, lợi ích của ứng viên với vị trí đăng tuyển"
            }
          />
          <div className="col-lg-12">
            <ErrorText errorText={error?.jobBenefit} mt={3} />
          </div>

          <div
            className="col-lg-12 form-group text-center mt-5"
            style={{ fontSize: "14px" }}
          >
            <p
              className="text-danger"
              style={{ fontSize: "15px", fontWeight: "bold" }}
            >
              Lưu ý:{"   "}{" "}
            </p>{" "}
            bạn còn <b>{rank.data.limitPost - numJob.data}</b> lần đăng tuyển
          </div>

          <div className="col-lg-12 form-group text-center mt-3">
            <button
              type="submit"
              className="btn btn-outline-info col-lg-4 font-weight-bold"
            >
              Đăng tin
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
