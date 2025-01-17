import React, { useState } from "react";
import { Card, Grid, TextField, Button, Typography, Box, MenuItem } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable";
import servicesTableData from "./data/servicesTableData";

function Services() {
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const { columns, rows } = servicesTableData();

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ["clean"],
    ],
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = () => {
    console.log("Description:", description);
    console.log("Selected File:", selectedFile);
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card sx={{ maxWidth: 800, mx: "auto", p: 4 }}>
        <Typography variant="h6" sx={{ mb: 4, fontWeight: "bold" }}>
          Service Details
        </Typography>
        <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {/* Service Name */}
          <TextField label="Service Name" variant="outlined" fullWidth />

          {/* Description */}
          <Box sx={{ "& .quill": { height: 200 }, mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
              Description
            </Typography>
            <ReactQuill
              theme="snow"
              value={description}
              onChange={setDescription}
              modules={modules}
              style={{ height: 150 }}
              placeholder="Enter service description..."
            />
          </Box>

          {/* Service Picture Upload */}
          <Box sx={{ mt: 4, gap: 6 }}>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="service-picture-upload"
              type="file"
              onChange={handleFileChange}
            />
            <label htmlFor="service-picture-upload">
              <TextField
                label="Service Picture"
                variant="outlined"
                fullWidth
                value={selectedFile ? selectedFile.name : ""}
                InputProps={{
                  readOnly: true,
                  endAdornment: (
                    <Button
                      component="span"
                      variant="contained"
                      size="small"
                      sx={{
                        height: "32px",
                        minWidth: "100px",
                        backgroundColor: "info.main",
                        color: "#ffffff",
                        mr: 1,
                        whiteSpace: "nowrap",
                        fontSize: "0.875rem",
                        textTransform: "none",
                        "&:hover": {
                          backgroundColor: "info.dark",
                        },
                      }}
                    >
                      Choose File
                    </Button>
                  ),
                }}
              />
            </label>
          </Box>

          {/* Submit Button */}
          <Button
            variant="contained"
            size="large"
            onClick={handleSubmit}
            sx={{
              mt: 2,
              py: 1.5,
              backgroundColor: "info.main",
              color: "#ffffff",
              "&:hover": {
                backgroundColor: "info.dark",
              },
            }}
          >
            Submit Service
          </Button>
        </Box>
      </Card>
      {/* Services Table Section */}
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Services Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Services;
