import React from "react";
import { Grid, InputAdornment, TextField } from "@mui/material";

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
            <InputAdornment position="start" sx={{ paddingX: "0.3rem" }}>
              {icon}
            </InputAdornment>
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
            fontSize: "1rem",
          },
        }}
      />
    </Grid>
  );
};

export default IconTextField;
