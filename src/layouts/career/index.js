import React, { useState } from "react";
import { Card, Grid, TextField, Button, Typography, Box, MenuItem } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Career() {
  const [description, setDescription] = useState("");
  const [responsibilities, setResponsibilities] = useState([""]);
  const [requirements, setRequirements] = useState([""]);
  const [tools, setTools] = useState([""]);

  const jobTypes = ["Full time", "Part time", "Contract", "Internship"];

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

  // Generic handler for adding items to any list
  const handleAdd = (items, setItems) => {
    setItems([...items, ""]);
  };

  // Generic handler for removing items from any list
  const handleRemove = (index, items, setItems) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  // Generic handler for changing items in any list
  const handleChange = (index, value, items, setItems) => {
    const newItems = [...items];
    newItems[index] = value;
    setItems(newItems);
  };

  const handleSubmit = () => {
    console.log({
      description,
      responsibilities,
      requirements,
      tools,
    });
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card sx={{ maxWidth: 800, mx: "auto", p: 4 }}>
        <Typography variant="h6" sx={{ mb: 4, fontWeight: "bold" }}>
          Add Career Job
        </Typography>
        <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
          {/* Job Title */}
          <TextField label="Job Title" variant="outlined" fullWidth />

          {/* Job Description */}
          <Box sx={{ "& .quill": { height: 200 }, mb: 8 }}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
              Job Description
            </Typography>
            <ReactQuill
              theme="snow"
              value={description}
              onChange={setDescription}
              modules={modules}
              style={{ height: 150 }}
              placeholder="Enter job description..."
            />
          </Box>

          {/* Location and Salary Row */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField label="Location" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Salary" variant="outlined" fullWidth type="number" />
            </Grid>
          </Grid>

          {/* Job Type and Application Deadline Row */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                select
                label="Job Type"
                variant="outlined"
                fullWidth
                defaultValue=""
                SelectProps={{
                  IconComponent: function DropdownIcon() {
                    return (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          marginRight: "8px",
                          color: "rgba(0, 0, 0, 0.54)",
                          pointerEvents: "none",
                        }}
                      >
                        <path d="M7 10l5 5 5-5H7z" fill="currentColor" />
                      </svg>
                    );
                  },
                }}
                sx={{
                  "& .MuiSelect-select": {
                    padding: "16.5px 14px",
                  },
                  "& .MuiInputBase-input": {
                    height: "23px",
                  },
                  "& .MuiOutlinedInput-root": {
                    height: "45px",
                  },
                }}
              >
                {jobTypes.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Application Deadline"
                type="date"
                variant="outlined"
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          </Grid>

          {/* Responsibilities Section */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Responsibilities
            </Typography>
            {responsibilities.map((responsibility, index) => (
              <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <TextField
                  label={`Responsibility ${index + 1}`}
                  variant="outlined"
                  fullWidth
                  value={responsibility}
                  onChange={(e) =>
                    handleChange(index, e.target.value, responsibilities, setResponsibilities)
                  }
                />
                <Typography
                  onClick={() => handleRemove(index, responsibilities, setResponsibilities)}
                  sx={{
                    color: "error.main",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    fontSize: "0.75rem",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Remove
                </Typography>
              </Box>
            ))}
            <Typography
              onClick={() => handleAdd(responsibilities, setResponsibilities)}
              sx={{
                color: "info.main",
                cursor: "pointer",
                fontSize: "0.75rem",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Add Responsibilities
            </Typography>
          </Box>

          {/* Requirements Section */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Requirements
            </Typography>
            {requirements.map((requirement, index) => (
              <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <TextField
                  label={`Requirement ${index + 1}`}
                  variant="outlined"
                  fullWidth
                  value={requirement}
                  onChange={(e) =>
                    handleChange(index, e.target.value, requirements, setRequirements)
                  }
                />
                <Typography
                  onClick={() => handleRemove(index, requirements, setRequirements)}
                  sx={{
                    color: "error.main",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    fontSize: "0.75rem",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Remove
                </Typography>
              </Box>
            ))}
            <Typography
              onClick={() => handleAdd(requirements, setRequirements)}
              sx={{
                color: "info.main",
                cursor: "pointer",
                fontSize: "0.75rem",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Add Requirements
            </Typography>
          </Box>

          {/* Tools and Technologies Section */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Tools and Technologies
            </Typography>
            {tools.map((tool, index) => (
              <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <TextField
                  label={`Tool/Technology ${index + 1}`}
                  variant="outlined"
                  fullWidth
                  value={tool}
                  onChange={(e) => handleChange(index, e.target.value, tools, setTools)}
                />
                <Typography
                  onClick={() => handleRemove(index, tools, setTools)}
                  sx={{
                    color: "error.main",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    fontSize: "0.75rem",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Remove
                </Typography>
              </Box>
            ))}
            <Typography
              onClick={() => handleAdd(tools, setTools)}
              sx={{
                color: "info.main",
                cursor: "pointer",
                fontSize: "0.75rem",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Add Tools and Technologies
            </Typography>
          </Box>

          {/* Submit Button */}
          <Button
            variant="contained"
            size="large"
            onClick={handleSubmit}
            sx={{
              mt: 3,
              py: 1.5,
              backgroundColor: "info.main",
              color: "#ffffff",
              "&:hover": {
                backgroundColor: "info.dark",
              },
            }}
          >
            Submit Job
          </Button>
        </Box>
      </Card>
    </DashboardLayout>
  );
}

export default Career;
