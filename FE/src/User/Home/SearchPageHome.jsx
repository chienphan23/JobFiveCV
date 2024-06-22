import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { LoadingPage } from "../../UI/LoadingPage";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { JobCard } from "./HomeUI/JobCard";
import { SearchJobHome } from "./SearchJobHome";
import { apiSearchJob } from "./HomeAPI/apiSearchJob";
import { JobResult } from "./HomeUI/JobResult";

export const SearchPageHome = () => {
  const limit = 8;
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();

  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: [
      "searchInfinite",
      searchParams.get("industryParam"),
      searchParams.get("provinceParam"),
      searchParams.get("experienceParam")
        ? searchParams.get("experienceParam")
        : -1,
      searchParams.get("minSalaryParam"),
      searchParams.get("maxSalaryParam"),
      searchParams.get("searchKeyParam"),
      searchParams.get("typeParam") === -1 ? 0 : searchParams.get("typeParam"),
    ],
    queryFn: ({ pageParam = -1 }) =>
      apiSearchJob(
        searchParams.get("industryParam"),
        searchParams.get("provinceParam"),
        searchParams.get("experienceParam")
          ? searchParams.get("experienceParam")
          : -1,
        searchParams.get("minSalaryParam"),
        searchParams.get("maxSalaryParam"),
        searchParams.get("searchKeyParam"),
        searchParams.get("typeParam") === -1
          ? 0
          : searchParams.get("typeParam"),
        pageParam == -1 ? 0 : pageParam * limit,
        limit
      ),

    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.data.length === 0) {
        return undefined;
      }
      console.log(allPages.length);
      let nextPage = allPages.length * 1;
      return nextPage;
    },
  });

  const location = useLocation();

  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(location.pathname);
    if (path === "/search-page") {
      queryClient.invalidateQueries({
        queryKey: ["listJobResult"],
      });
    }

    let fetching = false;
    const onScroll = async (e) => {
      const { scrollHeight, scrollTop, clientHeight } =
        e.target.scrollingElement;
      //  tổng thanh cuộn, chiều cao hiện tại, chiều cao của nội dung của khung đang đứng
      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
        // cuộn đến gần cuối trang
        fetching = true;
        console.log("alo" + hasNextPage);
        if (hasNextPage) {
          await fetchNextPage();
        } else {
          console.log("hết bài");
        }
        fetching = false;
      }
    };
    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [
    location,
    location.pathname,
    path,
    searchParams,
    queryClient,
    fetchNextPage,
    hasNextPage,
  ]);
  if (isLoading) return <LoadingPage />;
  return (
    <>
      <SearchJobHome />
      <div className="container mb-5">
        <div className="row row-gap">
          {console.log(data)}
          {data?.pages?.map((job) =>
            job.data.map((j) => <JobResult job={j} key={j.jobId} />)
          )}
        </div>
      </div>
      {/* {!hasNextPage && !data.pages[0].data.length === 0 && (
        <div className="container">
          <div className="col-lg-12 mt-5" style={{ textAlign: "center" }}>
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
      )} */}
      {!hasNextPage && data.pages[0].data.length === 0 && (
        <div className="container mb-5">
          <div className="col-lg-12 mt-5 " style={{ textAlign: "center" }}>
            <p
              style={{
                textAlign: "center",
                fontWeight: "700",
                color: "#555252",
              }}
            >
              -- Không tìm thấy kết quả tương ứng --
            </p>
            <br />

            <img
              src="/emptylist.jpg"
              style={{ width: "200px", height: "200px" }}
            />
          </div>
        </div>
      )}
    </>
  );
};
