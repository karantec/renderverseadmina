import React from "react";
import { Card, Grid, TextField, Button, Typography, Divider } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function ProjectAssigned() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card sx={{ p: 3, mb: 3 }}>
        {/* Employee Details Section */}
        <Typography variant="h6" sx={{ mb: 2 }}>
          Employee Details
        </Typography>
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={6}>
            <TextField label="Employee Name" variant="outlined" fullWidth sx={{ mb: 2 }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Designation" variant="outlined" fullWidth sx={{ mb: 2 }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Skills"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Salary" variant="outlined" fullWidth type="number" sx={{ mb: 2 }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Monthly Performance (0-10)"
              variant="outlined"
              fullWidth
              type="number"
              InputProps={{ inputProps: { min: 0, max: 10 } }}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Joining Date"
              type="date"
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        {/* Bank Details Section */}
        <Typography variant="h6" sx={{ mb: 2 }}>
          Bank Details
        </Typography>
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={6}>
            <TextField label="Account Number" variant="outlined" fullWidth sx={{ mb: 2 }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Bank Name" variant="outlined" fullWidth sx={{ mb: 2 }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="IFSC Code" variant="outlined" fullWidth sx={{ mb: 2 }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Branch" variant="outlined" fullWidth sx={{ mb: 2 }} />
          </Grid>
        </Grid>

        {/* Submit Button */}
        <Button
          variant="contained"
          size="large"
          sx={{
            px: 5,
            py: 1,
            mt: 2,
            backgroundColor: "info.main",
            "& .MuiButton-label": {
              // Target the button label specifically
              color: "#ffffff",
            },
            "&.MuiButton-contained": {
              // Add more specificity
              color: "#ffffff",
            },
            "&:hover": {
              backgroundColor: "info.dark",
              color: "#ffffff",
            },
          }}
        >
          Submit Employee Details
        </Button>
      </Card>
    </DashboardLayout>
  );
}

export default ProjectAssigned;
