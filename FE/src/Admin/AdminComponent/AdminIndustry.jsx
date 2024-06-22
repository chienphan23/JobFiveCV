import React, { useState } from "react";
import DataTable from "react-data-table-component";
import styled from "styled-components";
import { useCreateIndustry } from "../AdminAPI/use/useCreateIndustry";
import { useDeleteIndustry } from "../AdminAPI/use/useDeleteIndustry";
import { useGetIndustry } from "../AdminAPI/use/useGetIndustry";
import "../documentation/css/style.css";

import DeleteIndustryModal from "./DeleteIndustryModal";
import CreateIndustryModal from "./CreateIndustryModal";
import UpdateIndustryModal from "./UpdateIndustryModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faPlug,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
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

const AddButton = styled.button`
  height: 34px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

const FilterComponent = ({ filterText, onFilter }) => (
  <>
    <TextField
      id="search"
      type="text"
      placeholder="Nhập ngành nghề"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
    <ClearButton type="button" className="btn btn-primary">
      <i className="ti-search"></i>
    </ClearButton>
  </>
);

export const AdminIndustry = () => {
  const { deleteIndustry, isLoading: isLoadingDeleteIndustry } =
    useDeleteIndustry();

  const { createIndustry, isLoading: isLoadingCreateIndustry } =
    useCreateIndustry();

  const { UpdateIndustry, isLoading: isLoadingUpdateIndustry } =
    useCreateIndustry();

  const { industry, isLoading } = useGetIndustry();

  const [industryName, setIndustryName] = useState("");
  const [numberButton, setNumberButton] = useState(-1);
  const [showModal, setShowModal] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);

  const [showModalUpdate, setShowModalUpdate] = useState(false);

  const toggleDelete = (industryId) => {
    if (industryId && typeof industryId == Number && industryId !== -1) {
      setNumberButton(industryId);
      setIndustryName(industry.industryName);
    }
    setShowModalDelete(true);
  };

  const toggleUpdate = (industryId) => {
    if (industryId && typeof industryId == Number && industryId !== -1) {
      setNumberButton(industryId);
      setIndustryName(industry.industryName);
    }
    setShowModalUpdate(true);
  };

  const handleCreateIndustry = async (industryName) => {
    const formData = new FormData();
    formData.append("industryName", industryName);
    await createIndustry(formData);
    setIndustryName("");
  };

  const handleDeleteIndustry = async (industryId) => {
    await deleteIndustry(industryId);
    setNumberButton(-1);
  };

  const columns = [
    {
      name: "STT",
      selector: (row, index) => index + 1,
      sortable: false,
    },
    {
      name: "Mã Ngành",
      selector: (row) => row.industryId,
      sortable: false,
    },
    {
      name: "Tên Ngành nghề",
      selector: (row) => row.industryName,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div>
          <button
            className="btn btn-outline-danger"
            data-toggle="modal"
            data-target="#deleteIndustryModal"
            style={{ marginLeft: "10px" }}
            onClick={() => {
              setNumberButton(row.industryId);
              toggleDelete(row.industryId);
            }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>

          <button
            className="btn btn-outline-primary"
            data-toggle="modal"
            data-target="#UpdateIndustryModal"
            style={{ marginLeft: "10px" }}
            onClick={() => {
              setNumberButton(row.industryId);
              toggleUpdate(row.industryId);
            }}
          >
            <FontAwesomeIcon icon={faPen} />
          </button>
        </div>
      ),
    },
  ];

  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const filteredItems = industry
    ? industry.data?.filter((item) =>
        item?.industryName?.toLowerCase().includes(filterText.toLowerCase())
      )
    : [];

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <>
        <FilterComponent
          onFilter={(e) => setFilterText(e.target.value)}
          onClear={handleClear}
          filterText={filterText}
        />
        <AddButton
          className="btn btn-outline-info"
          title="Tạo mới ngành nghề"
          data-toggle="modal"
          data-target="#CreateIndustryModal"
        >
          <FontAwesomeIcon icon={faPlus} />
        </AddButton>
      </>
    );
  }, [filterText, resetPaginationToggle]);

  if (isLoading) return <LoadingPage />;

  return (
    <div className="main-content-inner">
      <div className="sales-report-area sales-style-two">
        <div className="card">
          <div className="card-body">
            <DataTable
              title="Quản lý ngành nghề"
              columns={columns}
              data={filteredItems}
              pagination
              paginationResetDefaultPage={resetPaginationToggle}
              subHeader
              subHeaderComponent={subHeaderComponentMemo}
              persistTableHead
              noDataComponent={"Không có dữ liệu"}
              highlightOnHover
              pointerOnHover
            />
          </div>
        </div>
      </div>
      {showModalDelete && (
        <DeleteIndustryModal
          showModal={showModalDelete}
          numberButton={numberButton}
          setShowModalDelete={setShowModalDelete}
          handleDelete={handleDeleteIndustry}
          toggleModal={toggleDelete}
        />
      )}

      <CreateIndustryModal
        showModal={showModal}
        handleCreate={handleCreateIndustry}
      />

      {showModalUpdate && (
        <UpdateIndustryModal
          showModal={showModal}
          numberButton={numberButton}
          toggleModal={toggleUpdate}
        />
      )}
    </div>
  );
};
