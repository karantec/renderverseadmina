// src/layouts/services/data/servicesTableData.js

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar"; // Add this import for displaying images
import Icon from "@mui/material/Icon";

export default function servicesTableData() {
  return {
    columns: [
      { Header: "service title", accessor: "service", width: "30%", align: "left" },
      { Header: "category", accessor: "category", align: "left" },
      { Header: "description", accessor: "description", align: "center" },
      { Header: "picture", accessor: "picture", align: "center" }, // Changed from price to picture
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        service: (
          <MDBox display="flex" alignItems="center" lineHeight={1}>
            <MDTypography display="block" variant="button" fontWeight="medium">
              Web Development
            </MDTypography>
          </MDBox>
        ),
        category: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Web Dev
          </MDTypography>
        ),
        description: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Full stack web development services
          </MDTypography>
        ),
        picture: (
          <MDBox display="flex" alignItems="center" lineHeight={1}>
            <MDAvatar src="https://your-image-url.jpg" size="sm" variant="rounded" />
          </MDBox>
        ),
        action: (
          <MDBox display="flex" alignItems="center">
            <MDTypography
              component="a"
              href="#"
              color="text"
              sx={{
                fontSize: "1.2rem",
                cursor: "pointer",
                lineHeight: "0.75",
                mx: 1,
              }}
            >
              <Icon>edit</Icon>
            </MDTypography>
            <MDTypography
              component="a"
              href="#"
              color="text"
              sx={{
                fontSize: "1.2rem",
                cursor: "pointer",
                lineHeight: "0.75",
                mx: 1,
              }}
            >
              <Icon>delete</Icon>
            </MDTypography>
          </MDBox>
        ),
      },
      // Example of another row
      {
        service: (
          <MDBox display="flex" alignItems="center" lineHeight={1}>
            <MDTypography display="block" variant="button" fontWeight="medium">
              App Development
            </MDTypography>
          </MDBox>
        ),
        category: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            App Dev
          </MDTypography>
        ),
        description: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Mobile application development
          </MDTypography>
        ),
        picture: (
          <MDBox display="flex" alignItems="center" lineHeight={1}>
            <MDAvatar src="https://another-image-url.jpg" size="sm" variant="rounded" />
          </MDBox>
        ),
        action: (
          <MDBox display="flex" alignItems="center">
            <MDTypography
              component="a"
              href="#"
              color="text"
              sx={{
                fontSize: "1.2rem",
                cursor: "pointer",
                lineHeight: "0.75",
                mx: 1,
              }}
            >
              <Icon>edit</Icon>
            </MDTypography>
            <MDTypography
              component="a"
              href="#"
              color="text"
              sx={{
                fontSize: "1.2rem",
                cursor: "pointer",
                lineHeight: "0.75",
                mx: 1,
              }}
            >
              <Icon>delete</Icon>
            </MDTypography>
          </MDBox>
        ),
      },
    ],
  };
}
