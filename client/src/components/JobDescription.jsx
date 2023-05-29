import React, { useState } from "react";
import { Grid, Typography, Link } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const JobDescription = (props) => {
  const ReadMore = ({ children }) => {
    const text = children;
    const [isVisible, setIsVisible] = useState(true);
    const [isReadMore, setIsReadMore] = useState(true);
    const toggle = () => {
      if (isReadMore) {
        setIsReadMore(!isReadMore);
        setIsVisible(!isReadMore);
      } else {
        setIsReadMore(!isReadMore);
        setIsVisible(!isReadMore);
      }
    };
    return (
      <p className="text">
        <Typography>{isReadMore ? text.slice(0, 150) : text}</Typography>
        {isVisible &&
            <Link component="button" onClick={toggle}>
              <Typography variant="MuiLink" fontWeight={"bold"}>Read More</Typography>
            </Link>}
        {!isVisible && <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '1vh' }}>
          <IconButton onClick={toggle}><ExpandLessIcon /></IconButton>
          </div>}
        {!isVisible && <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}> 
          <Link>
            <Typography variant="MuiLink" fontWeight={"bold"}>Continue to external listing to read full description
            </Typography>
          </Link>
          </div>}
      </p>
    );
  };
  return (
    <Grid container direction="column" spacing={0}>
      <Grid item>
        <Typography variant="h5">Job description</Typography>
      </Grid>
      <Grid item>
        <Typography><ReadMore>{props.description}</ReadMore>
        </Typography>
      </Grid>
    </Grid>
  );
};
export default JobDescription;
