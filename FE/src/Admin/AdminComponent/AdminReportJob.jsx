import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format, parseISO } from "date-fns";
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import styled from "styled-components";
import { useGetReportJob } from "../AdminAPI/use/useGetReportJob";
import AdminDetailReportModal from "./AdminDetailReportModal";
import { LoadingPage } from "../../UI/LoadingPage";

const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;

  &:hover {
    cursor: pointer;
  }
`;

const ClearButton = styled.button`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 34px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <TextField
      id="search"
      type="text"
      placeholder="Nhập tên người báo cáo"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
    <ClearButton type="button" className="btn btn-primary" onClick={onClear}>
      <i className="ti-search"></i>
    </ClearButton>
  </>
);

export const AdminReportJob = () => {
  const { data, isLoading } = useGetReportJob();
  const [numberButton, setNumberButton] = useState(-1);
  const [fullname, setFullname] = useState("");
  const [reportDate, setReportDate] = useState("");
  const [employername, setEmployername] = useState("");
  const [description, setDescription] = useState("");
  const [jobId, setJobID] = useState("");
  const [employerId, setEmployerID] = useState("");
  const [showModal, setShowModal] = useState(false);
  const columns = [
    {
      name: "STT",
      selector: (row, index) => index + 1,
      sortable: true,
    },
    {
      name: "Người dùng báo cáo",
      selector: (row) => row.fullname,
      sortable: true,
    },
    {
      name: "Nội dung report",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Ngày report",
      selector: (row) => {
        const formattedDate = row.reportDate
          ? format(parseISO(row.reportDate), "dd/MM/yyyy")
          : "";
        return formattedDate;
      },
      sortable: true,
    },
    {
      name: "Nhà tuyển dụng bị báo cáo",
      selector: (row) => row.employername,
      sortable: true,
    },
    {
      name: "Trạng thái",
      selector: (row) => (
        <span className="badge badge-pill badge-warning">Chờ Duyệt</span>
      ),
    },

    {
      name: "Actions",
      cell: (row) => (
        <div>
          <button
            className="btn btn-outline-info"
            data-toggle="modal"
            data-target="#AdminDetailReportModal"
            style={{ marginLeft: "10px" }}
            onClick={() => {
              setNumberButton(row.reportId);
              setFullname(row.fullname);
              setDescription(row.description);
              setEmployername(row.employername);
              setReportDate(row.reportDate);
              setJobID(row.jobId);
              setEmployerID(row.employerId);
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      ),
    },
  ];

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  const filteredItems = data
    ? data.data.filter((item) => {
        const textMatch = item.fullname
          .toLowerCase()
          .includes(filterText.toLowerCase());

        return textMatch;
      })
    : [];

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  if (isLoading) return <LoadingPage />;
  return (
    <div className="main-content-inner">
      <div className="sales-report-area sales-style-two">
        <div className="card">
          <div className="card-body">
            <DataTable
              title="Danh sách báo cáo bài viết"
              columns={columns}
              data={filteredItems}
              pagination
              paginationResetDefaultPage={resetPaginationToggle}
              subHeader
              subHeaderComponent={subHeaderComponentMemo}
              noDataComponent={"Không có dữ liệu"}
              persistTableHead
              highlightOnHover
              pointerOnHover
            />
            <AdminDetailReportModal
              showModal={showModal}
              numberButton={numberButton}
              data={{
                employername,
                description,
                reportDate,
                fullname,
                jobId,
                employerId,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
