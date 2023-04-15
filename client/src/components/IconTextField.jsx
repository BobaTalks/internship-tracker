import React from "react";
import { Box, Grid, InputAdornment, TextField } from "@mui/material";

const IconTextField = ({ icon, placeholder, value, setValue }) => {
  return (
    <Grid item sx={{ backgroundColor: "white", borderRadius: "20rem" }}>
      <TextField
        hiddenLabel
        fullWidth
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        InputProps={{
          startAdornment: (
            <Box padding="0.3rem">
              <InputAdornment position="start">{icon}</InputAdornment>
            </Box>
          ),
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
              borderRadius: "20rem",
            },
          },
          "& .MuiInputBase-input": {
            fontSize: ".95rem",
          },
        }}
      />
    </Grid>
  );
};

export default IconTextField;
