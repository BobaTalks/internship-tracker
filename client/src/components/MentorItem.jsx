import { React } from "react";

import { Box, Grid, Typography, Link, Divider, Stack } from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";

const MentorItem = ({ name, pronouns, linkedIn, websiteUrl, icon }) => {
  return (
    <Grid container direction="row" sx={{ margin: "15px" }}>
      <Grid container item xs={4} alignItems="center">
        <Box component="img" src={icon} sx={{ width: "90%" }} />
      </Grid>
      <Grid
        container
        item
        xs={8}
        sx={{ paddingLeft: "10px" }}
        direction="column"
      >
        <Typography sx={{ fontWeight: 600 }}>{name}</Typography>
        <Typography
          sx={{ color: "#777F8C", fontWeight: 600, fontSize: "0.75rem" }}
        >
          {pronouns}
        </Typography>
        <Stack direction="row" spacing={0.5} sx={{ marginTop: "5px" }}>
          <Link
            href={linkedIn}
            sx={{ width: "25px", height: "24px" }}
            target="_blank"
          >
            <LinkedInIcon color="primary" />
          </Link>
          {websiteUrl && (
            <>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ color: "242830", borderRightWidth: "3px" }}
              />
              <Link href={websiteUrl} target="_blank" sx={{ height: "24px" }}>
                <LanguageIcon sx={{ color: "#1c1b1f" }} />
              </Link>
            </>
          )}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default MentorItem;
