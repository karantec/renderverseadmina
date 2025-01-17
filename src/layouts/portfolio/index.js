import React, { useState } from "react";
import { Card, Grid, TextField, Button, Typography, Box, MenuItem } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedImages, setSelectedImages] = useState(null);
  const [description, setDescription] = useState("");

  const categories = [
    "Web Dev",
    "App Dev",
    "Software Dev",
    "Editing",
    "2D & 3D Modelling",
    "Animation",
    "Gamification",
  ];

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

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    setSelectedVideo(file);
  };

  const handleImagesChange = (event) => {
    const files = event.target.files;
    setSelectedImages(files);
  };

  const handleSubmit = () => {
    console.log("Video:", selectedVideo);
    console.log("Images:", selectedImages);
    console.log("Description:", description);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card sx={{ maxWidth: 800, mx: "auto", p: 4 }}>
        <Typography variant="h6" sx={{ mb: 4, fontWeight: "bold" }}>
          Project Details
        </Typography>
        <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {/* Title and Project Name Row */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField label="Title" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Project Name" variant="outlined" fullWidth />
            </Grid>
          </Grid>

          {/* Category Row */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                select
                label="Category"
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
                    height: "40px",
                  },
                }}
              >
                {categories.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>

          {/* Description Row with Rich Text Editor */}
          <Box sx={{ "& .quill": { height: 200 }, mb: 2 }}>
            {" "}
            {/* Added margin bottom */}
            <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
              Description
            </Typography>
            <ReactQuill
              theme="snow"
              value={description}
              onChange={setDescription}
              modules={modules}
              style={{ height: 150 }}
              placeholder="Enter project description..."
            />
          </Box>

          {/* Client Name and Deployed Link Row */}
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {" "}
            {/* Added margin top */}
            <Grid item xs={12} md={6}>
              <TextField label="Client Name" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Product Deployed Link" variant="outlined" fullWidth />
            </Grid>
          </Grid>

          {/* Video and Images Upload Row */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <input
                accept="video/*"
                style={{ display: "none" }}
                id="video-upload"
                type="file"
                onChange={handleVideoChange}
              />
              <label htmlFor="video-upload">
                <TextField
                  label="Product Video"
                  variant="outlined"
                  fullWidth
                  value={selectedVideo ? selectedVideo.name : ""}
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
                        Choose Video
                      </Button>
                    ),
                  }}
                />
              </label>
            </Grid>
            <Grid item xs={12} md={6}>
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="images-upload"
                type="file"
                multiple
                onChange={handleImagesChange}
              />
              <label htmlFor="images-upload">
                <TextField
                  label="Product Images"
                  variant="outlined"
                  fullWidth
                  value={selectedImages ? `${selectedImages.length} files selected` : ""}
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
                        Choose Files
                      </Button>
                    ),
                  }}
                />
              </label>
            </Grid>
          </Grid>

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
            Submit Project
          </Button>
        </Box>
      </Card>
    </DashboardLayout>
  );
}

export default Portfolio;
