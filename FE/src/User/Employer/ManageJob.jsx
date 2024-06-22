import {
  faEye,
  faPenToSquare,
  faTrash,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { useUser } from "../../Context/UseContext";
import { LoadingPage } from "../../UI/LoadingPage";
import { parseISO, format } from "date-fns";
import { useGetJobByEmployer } from "../Job/JobAPI/useGetJobByEmployer";
import { CountOfApplier } from "../Job/JobUI/CountOfApplier";

export const ManageJob = () => {
  const { user, isLoadingUser } = useUser();
  const { jobs, isLoadingJob } = useGetJobByEmployer(user?.data.employerId);

  const [filterText, setFilterText] = useState("");
  const [select, SetSelect] = useState("all");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  if (isLoadingUser || isLoadingJob) {
    return <LoadingPage />;
  }

  const columns = [
    {
      name: "Tên bài đăng",
      selector: (row) => row.jobName,
      sortable: true,
    },
    {
      name: "Vị trí",
      selector: (row) => row.jobPosition,
      sortable: true,
    },
    {
      name: "Số lượng",
      selector: (row) => row.numPosition,
      sortable: true,
    },
    {
      name: "Ngày đăng",
      selector: (row) => row.postDate,
      sortable: true,
    },
    {
      name: "Ngày hết hạn",
      selector: (row) => row.expirationDate,
      sortable: true,
    },
    {
      name: "Lượt ứng tuyển",
      selector: (row) => row.appliers,
    },
    {
      name: "Lần đăng còn lại",
      selector: (row) => row.reupTimesLeft,
    },
    {
      name: "Hành động",
      cell: (row) => (
        <div className="w-75 text-center">
          <Link to={`/edit-job/${row.jobId}`}>
            <i className="mr-1">
              <FontAwesomeIcon icon={faPenToSquare} />
            </i>
            Sửa
          </Link>
        </div>
      ),
    },
  ];

  const data = jobs?.data?.map((item) => ({
    jobId: item.jobId,
    jobName: item.jobName,
    jobPosition: item.jobPosition,
    numPosition: item.numPosition + " vị trí",
    postDate: format(parseISO(item.postDate), "dd-MM-yyyy"),
    expirationDate: format(parseISO(item.expirationDate), "dd-MM-yyyy"),
    appliers: <CountOfApplier jobId={item.jobId} />,
    reupTimesLeft: item.reupTimesLeft + " lần",
    removed: item.removed,
  }));

  //Đang hoạt động, hết hạn, ứng tuyển nhiều nhất
  const filteredItems = data?.filter((item) => {
    const lowercaseFilterText = filterText.toLowerCase();
    const lowercaseJobName = item.jobName?.toLowerCase();
    const lowercaseJobPosition = item.jobPosition?.toLowerCase();

    if (select === "all") {
      return (
        (lowercaseJobName && lowercaseJobName.includes(lowercaseFilterText)) ||
        lowercaseJobPosition?.includes(lowercaseFilterText)
      );
    }
    if (select === "active" || select === "expired") {
      const currentDay = new Date();
      // Phân tích chuỗi ngày tháng
      const parts = item?.expirationDate?.split("-");
      const day = parts[0];
      const month = parts[1];
      // const month = parts[1] - 1;
      const year = parts[2];

      const expirationDate = new Date(`${year}-${month}-${day}`);

      return select === "active"
        ? expirationDate > currentDay
        : expirationDate < currentDay &&
            lowercaseJobName &&
            (lowercaseJobName.includes(lowercaseFilterText) ||
              lowercaseJobPosition?.includes(lowercaseFilterText));
    }
    if (select === "hidden") {
      return (
        item.removed &&
        lowercaseJobName &&
        (lowercaseJobName.includes(lowercaseFilterText) ||
          lowercaseJobPosition?.includes(lowercaseFilterText))
      );
    }
  });

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
    if (filterText === "") setResetPaginationToggle(!resetPaginationToggle);
  };

  const handleSelectChange = (e) => {
    SetSelect(e.target.value);
  };

  return (
    <>
      <div className="bg-white p-3">
        <h5>Quản lý tin đăng</h5>
      </div>
      <Link
        to={"/create-job"}
        className="btn btn-outline-primary mt-3 font-weight-bold"
      >
        + Đăng tin ngay
      </Link>
      <div className="border border-light mt-3 bg-white p-3 rounded pb-5 vh-100">
        <DataTable
          style={{ padding: "0" }}
          columns={columns}
          data={filteredItems}
          pagination
          paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
          noDataComponent="Không có bài đăng nào"
          labelRowsPerPage="Dòng mỗi trang"
          subHeader
          subHeaderComponent={
            <div className="row w-100 align-items-center justify-content-center mr-1">
              <div className="col-lg-1 text-left p-0">
                <label className="mb-3 ">Bộ lọc</label>
              </div>
              <div className="col-lg-3">
                <select
                  className="form-control form-group mr-auto"
                  value={select}
                  onChange={handleSelectChange}
                >
                  <option value="all">Tất cả</option>
                  <option value="active">Đang hoạt động</option>
                  <option value="expired">Hết hạn</option>
                  <option value="hidden">Bị ẩn</option>
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
  );
};
