import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AdminLayout } from "./Layout/AdminLayout";
import { HomeLayout } from "./Layout/HomeLayout";
import { AdminMainContent } from "./Admin/AdminComponent/AdminMainContent";

import { Login } from "./System/Login/Login";
import { ForgotPassword } from "./System/ForgotPassword/ForgotPassword";
import { Register } from "./System/Register/Register";
import { Home } from "./User/Home/Home";
// import { EditProfile } from './User/Profile/EditProfile'
// import { UserProfile } from './User/Profile/UserProfile'
import { JobLayout } from "./Layout/JobLayout";
import { DetailJob } from "./User/Job/DetailJob";
import { CreateJob } from "./User/Job/CreateJob";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBugPage } from "./System/Error/ErrorBugPage";
import { EmployerProfile } from "./User/Employer/EmployerProfile";
import { EditProfileEmployer } from "./User/Employer/EditProfileEmployer";
import { PageNotFound } from "./UI/PageNotFound";
import { PageError } from "./UI/PageError";
import { Toaster } from "react-hot-toast";
import { EditJob } from "./User/Job/EditJob";
import { RankUp } from "./User/Employer/Rank/RankUp";
import { RankUpSuccess } from "./User/Employer/Rank/RankUpSuccess";
import { RankUpFailed } from "./User/Employer/Rank/RankUpFailed";
import { AdminApproved } from "../src/Admin/AdminComponent/AdminApproved";
import { SearchPageHome } from "./User/Home/SearchPageHome";
import { LayoutCommon } from "./Layout/LayoutCommon";
import { ManageJob } from "./User/Employer/ManageJob";
import { EmployerLayout } from "./Layout/EmployerLayout";
import { ListApplierOfJob } from "./User/Application/ListApplierOfJob.";
import { CandidateLayout } from "./Layout/CandidateLayout";
import { EditCandidateProfile } from "./User/Candidate/EditCandidateProfile";
import { JobSaved } from "./User/Candidate/JobSaved";
import { JobApplied } from "./User/Candidate/JobApplied";
import UpdateCv from "./User/Candidate/UpdateCv";
import { ManageCv } from "./User/Candidate/ManageCv";
import { CompanyFollow } from "./User/Candidate/CompanyFollow";
import { EmployerNotification } from "./User/Employer/EmployerNotification";
import { CandidateNotification } from "./User/Candidate/CandidateNotification";
import { AdminChart } from "./Admin/AdminComponent/AdminChart";
import { AdminIndustry } from "./Admin/AdminComponent/AdminIndustry";
import { AdminReportJob } from "./Admin/AdminComponent/AdminReportJob";
import { UserProvider } from "./Context/UseContext";
import { DetailApplier } from "./User/Candidate/DetailApplier";
import { ChangePassword } from "./System/ChangePassword/ChangePassword";
import { ListEmployerPage } from "./User/Employer/ListEmployerPage";
function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <BrowserRouter scrollToTop={true}>
            <Routes>
              <Route index element={<Navigate to="/home" />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route path="/register" element={<Register />} />
              <Route element={<AdminLayout />}>
                <Route path="/admin" element={<AdminMainContent />} />
                <Route
                  path="/admin/approveEmployer"
                  element={<AdminApproved />}
                />
                <Route path="/admin/reportJob" element={<AdminReportJob />} />
                <Route path="/admin/chart" element={<AdminChart />} />
                <Route path="/admin/industry" element={<AdminIndustry />} />
              </Route>
              <Route element={<LayoutCommon />}>
                <Route path="/search-page" element={<SearchPageHome />} />
              </Route>
              <Route element={<HomeLayout />}>
                <Route path="/home" element={<Home />} />
                <Route
                  path="/employer-profile/:id"
                  element={<EmployerProfile />}
                />
                <Route path="/rank-up" element={<RankUp />} />
                <Route path="/rank-up/success" element={<RankUpSuccess />} />
                <Route path="/rank-up/failed" element={<RankUpFailed />} />
                <Route path="/list-employer" element={<ListEmployerPage />} />
              </Route>

              <Route element={<JobLayout />}>
                <Route path="/job/:idJob" element={<DetailJob />} />
              </Route>

              <Route element={<EmployerLayout />}>
                <Route
                  path="/change-password-employer"
                  element={<ChangePassword />}
                />
                <Route path="/create-job" element={<CreateJob />} />
                <Route path="/edit-job/:idJob" element={<EditJob />} />
                <Route
                  path="/edit-employer-profile"
                  element={<EditProfileEmployer />}
                />

                <Route path="/manage-job" element={<ManageJob />} />
                <Route
                  path="/list-applier/:idJob"
                  element={<ListApplierOfJob />}
                />
                <Route
                  path="/detail-applier/:candidateId/:jobId"
                  element={<DetailApplier />}
                />
                <Route
                  path="/employer-notification"
                  element={<EmployerNotification />}
                />
              </Route>

              <Route element={<CandidateLayout />}>
                <Route
                  path="/edit-candidate-profile"
                  element={<EditCandidateProfile />}
                />
                <Route
                  path="/change-password-candidate"
                  element={<ChangePassword />}
                />
                <Route path="/job-saved" element={<JobSaved />} />

                <Route path="/job-applied" element={<JobApplied />} />

                <Route path="/update-cv" element={<UpdateCv />} />

                <Route path="/update-cv/:id" element={<UpdateCv />} />

                <Route path="/manage-cv" element={<ManageCv />} />

                <Route path="/company-follow" element={<CompanyFollow />} />

                <Route
                  path="/candidate-notification"
                  element={<CandidateNotification />}
                />
              </Route>

              <Route path="/errorbug" element={<ErrorBugPage />} />
              <Route path="/page-error" element={<PageError />} />
              <Route path="/page" element={<PageNotFound />} />
              <Route path="/*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </UserProvider>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 3000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "white",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
