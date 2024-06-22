import {
  faBell,
  faFileCircleCheck,
  faFileLines,
  faHeart,
  faLaptopFile,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  FormControl,
  FormLabel,
  ListItemContent,
  Stack,
  Typography,
  accordionDetailsClasses,
  accordionSummaryClasses,
} from "@mui/joy";
import { Link } from "react-router-dom";

export const MainSideBar = () => {
  return (
    <AccordionGroup
      variant="plain"
      transition="0.2s"
      sx={{
        borderRadius: "md",
        [`& .${accordionDetailsClasses.content}.${accordionDetailsClasses.expanded}`]:
          {
            paddingBlock: "1rem",
          },
        [`& .${accordionSummaryClasses.button}`]: {
          paddingBlock: "1rem",
        },
      }}
    >
      <Accordion defaultExpanded>
        <AccordionSummary>
          <ListItemContent>
            <Typography level="title-md">Quản lý tài khoản</Typography>
          </ListItemContent>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={1.5}>
            <FormControl orientation="horizontal" sx={{ gap: 1 }}>
              <FormLabel>
                <Link
                  className="d-flex align-items-center text-muted ml-2"
                  to={"/edit-candidate-profile"}
                >
                  <i
                    style={{
                      padding: "0 10px",
                      flex: "1",
                      width: "50px",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faUser}
                      className="me-2"
                      style={{ fontSize: "14px" }}
                    />
                  </i>
                  Tài khoản của bạn
                </Link>
              </FormLabel>
            </FormControl>
          </Stack>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary>
          <ListItemContent>
            <Typography level="title-md">Quản lý hồ sơ</Typography>
          </ListItemContent>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={1.5}>
            <FormControl orientation="horizontal" sx={{ gap: 1 }}>
              <FormLabel>
                <Link
                  className="d-flex align-items-center text-muted ml-2"
                  to={"/manage-cv"}
                >
                  <i
                    style={{
                      padding: "0 10px",
                      flex: "1",
                      width: "50px",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faFileLines}
                      className="me-2"
                      style={{ fontSize: "14px" }}
                    />
                  </i>
                  Hồ sơ của bạn
                </Link>
              </FormLabel>
            </FormControl>
          </Stack>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary>
          <ListItemContent>
            <Typography level="title-md">Quản lý việc làm</Typography>
          </ListItemContent>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={1.5}>
            <FormControl orientation="horizontal" sx={{ gap: 1 }}>
              <FormLabel>
                <Link
                  className="d-flex align-items-center text-muted ml-2"
                  to={"/job-applied"}
                >
                  <i
                    style={{
                      padding: "0 10px",
                      flex: "1",
                      width: "50px",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faFileCircleCheck}
                      className="me-2"
                      style={{ fontSize: "14px" }}
                    />
                  </i>
                  Việc làm đã ứng tuyển
                </Link>
              </FormLabel>
            </FormControl>
          </Stack>
        </AccordionDetails>
        <AccordionDetails>
          <Stack spacing={1.5}>
            <FormControl orientation="horizontal" sx={{ gap: 1 }}>
              <FormLabel>
                <Link
                  className="d-flex align-items-center text-muted ml-2"
                  to={"/job-saved"}
                >
                  <i
                    style={{
                      padding: "0 10px",
                      flex: "1",
                      width: "50px",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="me-2"
                      style={{ fontSize: "14px" }}
                    />
                  </i>
                  Việc làm đã lưu
                </Link>
              </FormLabel>
            </FormControl>
          </Stack>
        </AccordionDetails>
        <AccordionDetails>
          <Stack spacing={1.5}>
            <FormControl orientation="horizontal" sx={{ gap: 1 }}>
              <FormLabel>
                <Link
                  className="d-flex align-items-center text-muted ml-2"
                  to={`/candidate-notification`}
                >
                  <i
                    style={{
                      padding: "0 10px",
                      flex: "1",
                      width: "50px",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faBell}
                      className="me-2"
                      style={{ fontSize: "14px" }}
                    />
                  </i>
                  Thông báo việc làm
                </Link>
              </FormLabel>
            </FormControl>
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary>
          <ListItemContent>
            <Typography level="title-md">Nhà tuyển dụng</Typography>
          </ListItemContent>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={1.5}>
            <FormControl orientation="horizontal" sx={{ gap: 1 }}>
              <FormLabel>
                <Link
                  className="d-flex align-items-center text-muted ml-2"
                  to={"/company-follow"}
                >
                  <i
                    style={{
                      padding: "0 10px",
                      flex: "1",
                      width: "50px",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faLaptopFile}
                      className="me-2"
                      style={{ fontSize: "14px" }}
                    />
                  </i>
                  Nhà tuyển dụng bạn theo dõi
                </Link>
              </FormLabel>
            </FormControl>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
};
