import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { apiGetListEmployerPage } from "./EmployerAPI/apiGetListEmployerPage";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { EmployerCard } from "../Home/HomeUI/EmployerCard";
import { LoadingPage } from "../../UI/LoadingPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const ListEmployerPage = () => {
  const limit = 12;
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();

  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["listEmployerPage", searchParams.get("employerName")],
    queryFn: ({ pageParam = -1 }) =>
      apiGetListEmployerPage(
        searchParams.get("employerName"),
        pageParam == -1 ? 0 : pageParam * limit,
        limit
      ),

    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.data.length === 0) {
        return undefined;
      }
      let nextPage = allPages.length * 1;
      return nextPage;
    },
  });

  const location = useLocation();
  const [path, setPath] = useState("");
  const [employerName, setEmployerName] = useState("");
  const handleOnclickSearch = () => {
    setSearchParams({ employerName: employerName });
  };

  useEffect(() => {
    setPath(location.pathname);
    if (path === "/list-employer") {
      setEmployerName(
        searchParams.get("employerName") ? searchParams.get("employerName") : ""
      );
    }

    let fetching = false;
    const onScroll = async (e) => {
      const { scrollHeight, scrollTop, clientHeight } =
        e.target.scrollingElement;
      //  tổng thanh cuộn, chiều cao hiện tại, chiều cao của nội dung của khung đang đứng
      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
        // cuộn đến gần cuối trang
        fetching = true;
        if (hasNextPage) {
          await fetchNextPage();
        }
        fetching = false;
      }
    };
    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [
    searchParams,
    queryClient,
    fetchNextPage,
    hasNextPage,
    location.pathname,
    path,
  ]);

  if (isLoading) return <LoadingPage />;

  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div
            className="col-lg-6"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h3 className="main-color-bold mb-3">
              Tra cứu các công ty nổi bật
            </h3>
            <div className="mb-3">
              <i>Tìm kiếm nơi làm việc tốt nhất dành cho bạn</i>
            </div>

            <div className="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control outline-input border-select"
                  placeholder="Nhập tên công ty"
                  style={{ fontSize: "16px" }}
                  onChange={(e) => setEmployerName(e.target.value)}
                  value={employerName}
                />
                <div
                  className="input-group-append"
                  style={{ backgroundColor: "white" }}
                ></div>
                <button
                  className="btn btn-outline-info"
                  type="button"
                  onClick={handleOnclickSearch}
                >
                  <i style={{ padding: "0 10px" }}>
                    <FontAwesomeIcon icon={faSearch} className="me-2" />
                  </i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img src="/e1.png" />
          </div>
        </div>
      </div>
      <div className="container mb-5">
        <div className="row row-gap">
          {console.log(data)}
          {data?.pages?.map((employer) =>
            employer?.data.map((e) => (
              <EmployerCard key={e.employerId} employer={e} />
            ))
          )}
        </div>
      </div>
      {!hasNextPage && (
        <div className="container">
          <div className="col-lg-12 py-5" style={{ textAlign: "center" }}>
            <p
              style={{
                textAlign: "center",
                fontWeight: "700",
                color: "#555252",
              }}
            >
              -- Hết --
            </p>
          </div>
        </div>
      )}
    </>
  );
};
