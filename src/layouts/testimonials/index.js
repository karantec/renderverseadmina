import React, { useState } from "react";
import { Card, Grid, TextField, Button, Typography, Box, Rating } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Testimonials() {
  const [message, setMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [rating, setRating] = useState(0);

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
    console.log("Message:", message);
    console.log("Selected File:", selectedFile);
    console.log("Rating:", rating);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card sx={{ maxWidth: 800, mx: "auto", p: 4 }}>
        <Typography variant="h6" sx={{ mb: 4, fontWeight: "bold" }}>
          Testimonials Details
        </Typography>
        <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {/* Name and Designation Row */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField label="Name" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Designation" variant="outlined" fullWidth />
            </Grid>
          </Grid>

          {/* Portfolio Link Row */}
          <TextField label="Portfolio Link" variant="outlined" fullWidth />

          {/* Message Row */}
          <Box sx={{ "& .quill": { height: 200 } }}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
              Message
            </Typography>
            <ReactQuill
              theme="snow"
              value={message}
              onChange={setMessage}
              modules={modules}
              style={{ height: 150 }}
              placeholder="Enter your message..."
            />
          </Box>

          {/* Profile Photo and Rating Row */}
          <Grid container spacing={3} alignItems="center" sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="profile-photo-upload"
                type="file"
                onChange={handleFileChange}
              />
              <label htmlFor="profile-photo-upload">
                <TextField
                  label="Profile Photo"
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
            </Grid>
            {/* <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", whiteSpace: "nowrap" }}>
                  Rating
                </Typography>
                <Rating
                  value={rating}
                  onChange={(event, newValue) => {
                    setRating(newValue);
                  }}
                  size="large"
                  sx={{
                    "& .MuiRating-iconFilled": {
                      color: "#FFD700",
                    },
                  }}
                />
              </Box>
            </Grid> */}
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
            Submit Testimonial
          </Button>
        </Box>
      </Card>
    </DashboardLayout>
  );
}

export default Testimonials;
