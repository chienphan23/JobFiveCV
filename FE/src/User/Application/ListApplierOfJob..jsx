import { faCheck, faRemove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useUser } from "../../Context/UseContext";
import { LoadingPage } from "../../UI/LoadingPage";
import { parseISO, format } from "date-fns";
import { useGetApplicationByJob } from "./ApplicationAPI/useGetApplicationByJob";
import { apiGetListCandidateByListId } from "./ApplicationAPI/apiGetListCandidateByListId";
import { useGetListCandidateByListId } from "./ApplicationAPI/useGetListCandidateByListId";
import { useQueryClient } from "@tanstack/react-query";
import { useUpdateApplicationStatus } from "./ApplicationAPI/useUpdateApplicationStatus";
import { useGetJob } from "../Job/JobAPI/useGetJob";
import { PageNotAccess } from "../../UI/PageNotAccess";

export const ListApplierOfJob = () => {
  const { idJob } = useParams();
  const { job, isLoadingJob } = useGetJob(idJob);

  const queryClient = useQueryClient();
  const { user, isLoadingUser } = useUser();
  const { applications, isLoading } = useGetApplicationByJob(idJob);
  console.log(applications);
  const { listCandidate, isLoadingListCandidate } = useGetListCandidateByListId(
    applications?.data.map((item) => item.candidateId)
  );

  const [filterText, setFilterText] = useState("");
  const [select, setSelect] = useState("all");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const [listCandidates, setListCandidate] = useState(listCandidate);

  const { updateApplicationStatus, isLoadingUpdate } =
    useUpdateApplicationStatus();

  const getAPI = async (ids) => {
    const result = await apiGetListCandidateByListId(ids);
    return result;
  };

  useEffect(() => {
    setListCandidate(listCandidate);
    queryClient.invalidateQueries({
      queryKey: ["listCandidates"],
    });
  }, [listCandidate, isLoadingUser, isLoading, isLoadingListCandidate]);

  const columns = [
    
    {
      name: "Tên ứng viên",
      selector: (row) => row.candidateName,
      sortable: true,
    },
    {
      name: "Thời gian nộp",
      selector: (row) => row.applicationDate,
      sortable: true,
    },
    {
      name: "Hồ sơ",

      selector: (row) => (
        <Link to={`/detail-applier/${row.candidateId}/${row.jobId}`}>
          {row.cv}
        </Link>
      ),
      sortable: true,
    },
    {
      name: "Trạng thái",
      sortable: true,
      sortFunction: (a, b) => a.status - b.status,
      cell: (row) => {
        let statusLabel;
        switch (row.status) {
          case 1:
            statusLabel = (
              <span className="badge badge-pill badge-warning">
                Vừa ứng tuyển
              </span>
            );
            break;
          case 2:
            statusLabel = (
              <span className="badge badge-pill badge-success">Đã duyệt</span>
            );
            break;
          case 3:
            statusLabel = (
              <span className="badge badge-pill badge-danger">Từ chối</span>
            );
            break;
          default:
            statusLabel = (
              <span className="badge badge-pill badge-secondary">
                Không xác định
              </span>
            );
            break;
        }
        return statusLabel;
      },
    },
    {
      name: "Hành động",
      cell: (row) => (
        <>
          {row.status === 1 ? (
            <>
              <button
                className="btn btn-outline-primary"
                onClick={() => {
                  console.log(row);
                  handleApproved(row.applicationId, 2);
                }}
              >
                <FontAwesomeIcon icon={faCheck} />
              </button>
              <button
                className="btn btn-outline-primary ml-2"
                onClick={() => handleApproved(row.applicationId, 3)}
              >
                <FontAwesomeIcon icon={faRemove} />
              </button>
            </>
          ) : (
            <>
              <button
                className="btn btn-outline-secondary"
                disabled
                style={{ cursor: "default" }}
              >
                <FontAwesomeIcon icon={faCheck} />
              </button>
              <button
                className="btn btn-outline-secondary ml-2"
                disabled
                style={{ cursor: "default" }}
              >
                <FontAwesomeIcon icon={faRemove} />
              </button>
            </>
          )}
        </>
      ),
    },
  ];

  if (isLoadingUser || isLoading || isLoadingListCandidate || isLoadingJob) {
    return <LoadingPage />;
  }

  let data = applications?.data.map((application) => ({
    applicationId: application.applicationId,
    candidateName: listCandidate?.data?.find(
      (candidate) => candidate.candidateId === application.candidateId
    )?.fullName,
    applicationDate: format(
      parseISO(application.applicationDate),
      "dd-MM-yyyy"
    ),
    cv: "Xem chi tiết",
    status: application.status,
    jobId: application.jobId,
    candidateId: application.candidateId,
  }));

  // Hàm để lấy giá trị trạng thái tương ứng với select
  const getStatusValue = (select) => {
    switch (select) {
      case "applied":
        return 1;
      case "approved":
        return 2;
      case "rejected":
        return 3;
      default:
        return undefined; // Trường hợp "all" sẽ không cần lọc theo trạng thái
    }
  };

  const filteredItems = data?.filter((item) => {
    const lowercaseFilterText = filterText.toLowerCase();
    const lowercaseCandidateName = item.candidateName?.toLowerCase();

    // Kiểm tra trạng thái và tên ứng viên trong một lần duy nhất
    const isMatchedStatus =
      select === "all" || item.status === getStatusValue(select);
    const isMatchedCandidateName =
      lowercaseCandidateName &&
      lowercaseCandidateName.includes(lowercaseFilterText);

    return isMatchedStatus && isMatchedCandidateName;
  });

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
    if (filterText === "") setResetPaginationToggle(!resetPaginationToggle);
  };

  const handleSelectChange = (e) => {
    setSelect(e.target.value);
  };

  const handleApproved = (applicationId, status) => {
    console.log(applicationId);
    console.log(status);
    const formData = new FormData();
    formData.append("status", status);
    console.log(formData.get("status"));
    updateApplicationStatus({ id: applicationId, formData });
  };

  return (
    <>
      {!job?.data.removed ? (
        <>
          <div className="bg-white p-3">
            <h5>Hồ sơ ứng tuyển</h5>
          </div>
          <div className="border border-light mt-3 bg-white p-3 rounded pb-5">
            <DataTable
              style={{ padding: "0" }}
              columns={columns}
              data={filteredItems}
              pagination
              paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
              noDataComponent="Không có bài đăng nào"
              subHeader
              subHeaderComponent={
                <div className="row w-100 align-items-center justify-content-center mr-1">
                  <div className="col-lg-1 text-left">
                    <label className="mb-3">Bộ lọc</label>
                  </div>
                  <div className="col-lg-3">
                    <select
                      className="form-control form-group mr-auto"
                      value={select}
                      onChange={handleSelectChange}
                    >
                      <option value="all">Tất cả</option>
                      <option value="applied">Vừa ứng tuyển</option>
                      <option value="approved">Đã duyệt</option>
                      <option value="rejected">Từ chối</option>
                    </select>
                  </div>
                  <div className="col-lg-3"></div>
                  <div className="col-lg-5">
                    <input
                      type="text"
                      className="form-control form-group ml-auto"
                      placeholder="Tìm kiếm"
                      value={filterText}
                      onChange={handleFilterChange}
                    />
                  </div>
                </div>
              }
              // subHeaderAlign="right"
            />
          </div>
        </>
      ) : (
        <div className="style-body">
          <h1 className="style-h1"></h1>
          <p className="zoom-area"></p>
          <section style={{ textAlign: "center" }} className="pt-5">
            <h1 style={{ color: "white", fontWeight: "700" }}>
              Bài viết bị chặn bởi quản trị viên. Do vi phạm điều khoản của JOB5
            </h1>
          </section>
          <div className="link-container">
            <Link to={"/manage-job"} className="more-link">
              Quay lại
            </Link>
          </div>
        </div>
      )}
    </>
  );
};