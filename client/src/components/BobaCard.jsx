import { React } from "react";

import { Box, Stack, Typography, Divider, useTheme, Link } from "@mui/material";

import BobaCardPath from "../assets/card-milktea_p1.svg";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";

const BobaCard = ({
  name,
  pronouns,
  position,
  linkedInUrl,
  websiteUrl,
  icon,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "90%",
        position: "relative",
        marginTop: "30px",
        [theme.breakpoints.down("md")]: {
          width: "80%",
        },
      }}
    >
      <Box component="img" src={BobaCardPath} />
      <Stack
        alignItems="center"
        direction="column"
        sx={{ position: "absolute", width: "100%", top: 0, left: 0 }}
      >
        <Box
          component="img"
          src={icon}
          sx={{ width: "40%", marginTop: "48%" }}
        />
        <Typography
          sx={{
            marginTop: "5%",
            fontWeight: 600,
            textAlign: "center",
            maxWidth: "80%",
            fontSize: "1.3vw",
            [theme.breakpoints.down("sm")]: {
              fontSize: "5vw",
            },
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            color: "#777F8C",
            fontWeight: 600,
            fontSize: "0.9vw",
            [theme.breakpoints.down("sm")]: {
              fontSize: "3vw",
            },
          }}
        >
          {pronouns}
        </Typography>
        <Typography
          sx={{
            color: "#242830",
            opacity: "40%",
            fontWeight: 600,
            fontSize: "1.1vw",
            marginTop: "4%",
            maxWidth: "80%",
            textAlign: "center",
            [theme.breakpoints.down("sm")]: {
              fontSize: "3.5vw",
            },
          }}
        >
          {position}
        </Typography>
        <Stack direction="row" sx={{ marginTop: "7%" }} spacing={0.5}>
          <Link href={linkedInUrl} sx={{ height: "24px" }} target="_blank">
            <LinkedInIcon color="primary" />
          </Link>
          {websiteUrl && (
            <>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ color: "242830", borderRightWidth: "3px" }}
              />
              <Link href={websiteUrl} sx={{ height: "24px" }} target="_blank">
                <LanguageIcon sx={{ color: "#1c1b1f" }} />
              </Link>
            </>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default BobaCard;
