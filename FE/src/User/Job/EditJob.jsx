import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetIndustry } from "../../API/useGetIndustry";
import { JobInformation } from "./JobUI/JobInformation";
import { ProvinceNameSelect } from "../../UI/ProvinceNameSelect";
import { LoadingPage } from "../../UI/LoadingPage";
import { InputGroup } from "../../UI/InputGroup";
import { useUser } from "../../Context/UseContext";
import { PageNotAccess } from "../../UI/PageNotAccess";
import { useGetJob } from "./JobAPI/useGetJob";
import { useUpdateJob } from "./JobAPI/useUpdateJob";
import { IndustrySelectEditJob } from "./IndustrySelectEditJob";
import { formatDate } from "../../Utils/formatDateTime";
import { useUpdateIsExpired } from "./JobAPI/useUpdateIsExpired";
import { useUpdateReup } from "./JobAPI/useUpdateReup";
import { useDeleteJob } from "./JobAPI/useDeleteJob";
import { ErrorText } from "../../UI/ErrorText";
import { InputRequire } from "../../UI/InputRequire";
import toast from "react-hot-toast";
import { Modal } from "../../UI/Modal";

export const EditJob = () => {
  let { idJob } = useParams();
  const {
    job,
    arrayJobDescription,
    arrayJobRequirement,
    arrayJobBenefit,
    employerOfJob,
    arrayIndustriesOfJob,
    isLoadingJob,
    isLoadingDescription,
    isLoadingRequirement,
    isLoadingBenefit,
    isLoadingEmployer,
    isLoadingIndustriesOfJob,
  } = useGetJob(idJob);
  const { updateJob, isLoading: isLoadingUpdateJob } = useUpdateJob();
  const { user, isLoadingUser } = useUser(); // user hiện tại

  const { listIndustry, isLoading } = useGetIndustry();
  const [name, setName] = useState("");
  const postDate = "20-02-2024";
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
  const [isExpired, setIsExpired] = useState(false);
  const navigate = useNavigate();
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

  const { updateIsExpired } = useUpdateIsExpired();
  const { updateReup } = useUpdateReup();
  const { deleteJob } = useDeleteJob();

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
      newError.numPosition = "Vui lòng nhập số lượng tuyển dụng > 0";

    if (yearExperience.length === 0)
      newError.yearExperience = "Vui lòng nhập số năm kinh nghiệm";

    if (location.length === 0)
      newError.location = "Vui lòng chọn tỉnh / thành phố";

    if (jobAddress.replace(/\s+/g, " ").trim().length === 0)
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
    formdata.append("jobPosition", jobPosition.replace(/\s+/g, " ").trim());
    formdata.append("numPosition", numPosition);
    formdata.append("maxSalary", maxSalary);
    formdata.append("minSalary", minSalary);
    formdata.append("yearExperience", yearExperience);
    formdata.append("address", jobAddress.replace(/\s+/g, " ").trim());
    formdata.append("employerId", user.data.employerId);
    formdata.append("typeId", typeId);
    formdata.append("location", location);
    formdata.append("postDate", formatDate(new Date(job?.data?.postDate)));
    formdata.append(
      "expirationDate",
      formatDate(new Date(job?.data?.expirationDate))
    );

    formdata.append("acceptDate", formatDate(new Date(job?.data?.acceptDate)));
    let arrayDescription = jobDescription && jobDescription.split("\n");
    ("alo");
    let arrayBenefit = jobBenefit && jobBenefit.split("\n");
    let arrayRequirement = jobRequirement && jobRequirement.split("\n");
    const formdataIndustry = new FormData();
    formdataIndustry.append("arrayIndustryIds", arrayIndustryId);
    "alo" + idJob;
    const result = await updateJob({
      idJob,
      formdata,
      arrayDescription,
      arrayBenefit,
      arrayRequirement,
      arrayIndustryId,
    });

    navigate("/manage-job");
  };

  useEffect(() => {
    if (
      job &&
      arrayJobBenefit &&
      arrayJobDescription &&
      arrayJobRequirement &&
      arrayIndustriesOfJob
    ) {
      setName(job.data.jobName);
      setJobPosition(job.data.jobPosition);
      setNumPosition(job.data.numPosition);
      setYearExperience(job.data.yearExperience);
      setJobAddress(job.data.address);
      setLocation(job.data.location);
      setMinSalary(job.data.minSalary);
      setMaxSalary(job.data.maxSalary);
      setTypeId(job.data.typeId);
      let stringConvertArrayDescription = arrayJobDescription
        ? arrayJobDescription.data.map((i) => i.description)
        : "";
      setJobDescription(stringConvertArrayDescription.join("\n"));
      let stringConvertArrayRequirement = arrayJobRequirement.data.map(
        (i) => i.description
      );
      setJobRequirement(stringConvertArrayRequirement.join("\n"));
      let stringConvertArrayBenefit = arrayJobBenefit.data.map(
        (i) => i.description
      );
      setJobBenefit(stringConvertArrayBenefit.join("\n"));
      let arrayConverListIndustries = arrayIndustriesOfJob.data.map(
        (i) => i.industries_industryid
      );
      setArrayIndustryId(arrayConverListIndustries);
    }
  }, [
    job,
    arrayJobBenefit,
    arrayJobDescription,
    arrayJobRequirement,
    arrayIndustriesOfJob,
  ]);

  useEffect(() => {
    let day = Math.floor(
      (new Date() - new Date(job?.data.expirationDate)) / (1000 * 3600 * 24)
    );
    day;
    if (day >= 0) setIsExpired(true);
    else setIsExpired(false);
  }, [job?.data.expirationDate]);

  const handleClickUpdateIsExpired = () => {
    updateIsExpired(idJob);
  };

  const handleClickUpdateReup = () => {
    updateReup(idJob);
  };
  const handleClickDeleteJob = () => {
    deleteJob(idJob);
  };

  if (isLoading || isLoadingUser) return <LoadingPage />;
  if (
    !("employerId" in user.data) ||
    user.data.employerId != job?.data.employerId
  )
    return <PageNotAccess />;

  return (
    <>
      <div className="bg-white p-3">
        <h5>Chỉnh sửa tin tuyển dụng</h5>
      </div>
      <div className="bg-white p-3 mt-3">
        <div className="d-flex" style={{ gap: "20px" }}>
          {!job?.data.removed && (
            <Link
              to={`/job/${idJob}`}
              className="btn btn-primary font-weight-bold"
              style={{ fontSize: "14px", lineHeight: "24px" }}
            >
              Xem tin
            </Link>
          )}
          {!job?.data.removed &&
            (!isExpired ? (
              <button
                type="button"
                className="btn btn-primary font-weight-bold"
                style={{ fontSize: "14px", lineHeight: "24px" }}
                onClick={handleClickUpdateIsExpired}
              >
                Ngưng tuyển dụng
              </button>
            ) : (
              job?.data.reupTimesLeft !== 0 && (
                <button
                  type="button"
                  className="btn btn-primary font-weight-bold"
                  style={{ fontSize: "14px", lineHeight: "24px" }}
                  onClick={handleClickUpdateReup}
                >
                  Đăng lại
                </button>
              )
            ))}
          <button
            type="button"
            className="btn btn-danger"
            data-toggle={"modal"}
            data-target={`#modalDeleteJob`}
          >
            Xóa tin
          </button>
          <Modal
            id={"DeleteJob"}
            title={"Bạn chắc chắn muốn xóa?"}
            displayButton={false}
          >
            <div className="d-flex justify-content-around align-items-center">
              <button
                data-dismiss="modal"
                className="btn btn-outline-secondary col-lg-4 font-weight-bold"
              >
                Hủy
              </button>

              <button
                data-dismiss="modal"
                className="btn btn-outline-danger col-lg-4 font-weight-bold"
                onClick={handleClickDeleteJob}
              >
                Xóa
              </button>
            </div>
          </Modal>
        </div>
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
            <IndustrySelectEditJob
              arrayIndustryId={arrayIndustryId}
              setArrayIndustryId={setArrayIndustryId}
              arrayIndustrys={arrayIndustrys}
              setArrayIndustrys={setArrayIndustrys}
              isLoadingIndustriesOfJob={isLoadingIndustriesOfJob}
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
                      placeholder="VD: 1000000"
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
                      placeholder="VD: 2000000"
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
            label={"Yêu cần công việc"}
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
          <div className="col-lg-12 form-group text-center mt-5">
            {job?.data?.removed ? (
              <button
                type="button"
                className="btn btn-outline-info col-lg-4 font-weight-bold"
                disabled
              >
                Bài viết đã bị ẩn
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-outline-info col-lg-4 font-weight-bold"
              >
                Cập nhật tin
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};
