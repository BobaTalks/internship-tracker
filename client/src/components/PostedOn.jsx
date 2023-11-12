import { Typography } from '@mui/material';
import { format } from 'date-fns';
import React from 'react';

//assuming the format of the props.date is Date object
const PostedOn = (props) => {
  const postedDate = format(props.date, 'M/d/yy');
  return <Typography variant="body3">Posted on {postedDate}</Typography>;
};

export default PostedOn;
