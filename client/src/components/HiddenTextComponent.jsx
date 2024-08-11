import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import React, { useState } from 'react';

const HiddenTextComponent = ({
  label,
  hiddenPassword,
  setHiddenPassword,
  setShowErrorMessage,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePassword = (event) => {
    setHiddenPassword(event.target.value);
    setShowErrorMessage('');
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel
        htmlFor={`outlined-adornment-password-${label
          .replace(/\s+/g, '-')
          .toLowerCase()}`}
      >
        {label}
      </InputLabel>
      <OutlinedInput
        id={`outlined-adornment-password-${label
          .replace(/\s+/g, '-')
          .toLowerCase()}`}
        type={showPassword ? 'text' : 'password'}
        onChange={handlePassword}
        value={hiddenPassword}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
      />
    </FormControl>
  );
};

export default HiddenTextComponent;
