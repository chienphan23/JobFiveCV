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

import {
  faBell,
  faFileCirclePlus,
  faListCheck,
  faTrophy,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                  to={"/edit-employer-profile"}
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
                  Thông tin cá nhân
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
                  to={"/rank-up"}
                >
                  <i
                    style={{
                      padding: "0 10px",
                      flex: "1",
                      width: "50px",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faTrophy}
                      className="me-2"
                      style={{ fontSize: "14px" }}
                    />
                  </i>
                  Thăng hạng
                </Link>
              </FormLabel>
            </FormControl>
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary>
          <ListItemContent>
            <Typography level="title-md">Quản lý đăng tuyển</Typography>
          </ListItemContent>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={1.5}>
            <FormControl orientation="horizontal" sx={{ gap: 1 }}>
              <FormLabel>
                <Link
                  className="d-flex align-items-center text-muted ml-2"
                  to={"/create-job"}
                >
                  <i
                    style={{
                      padding: "0 10px",
                      flex: "1",
                      width: "50px",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faFileCirclePlus}
                      className="me-2"
                      style={{ fontSize: "14px" }}
                    />
                  </i>
                  Tạo tin tuyển dụng
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
                  to={"/manage-job"}
                >
                  <i
                    style={{
                      padding: "0 10px",
                      flex: "1",
                      width: "50px",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faListCheck}
                      className="me-2"
                      style={{ fontSize: "14px" }}
                    />
                  </i>
                  Quản lý tin đăng
                </Link>
              </FormLabel>
            </FormControl>
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary>
          <ListItemContent>
            <Typography level="title-md">Quản lý thông báo</Typography>
          </ListItemContent>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={1.5}>
            <FormControl orientation="horizontal" sx={{ gap: 1 }}>
              <FormLabel>
                <Link
                  className="d-flex align-items-center text-muted ml-2"
                  to={"/employer-notification"}
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
                  Thông báo
                </Link>
              </FormLabel>
            </FormControl>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
};
