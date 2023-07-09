import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Divider, Link, Stack, Typography, useTheme } from '@mui/material';
import { React } from 'react';

import BobaCardPath from '../assets/card-milktea_p1.svg';

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
        width: '90%',
        position: 'relative',
        marginTop: '30px',
        [theme.breakpoints.down('md')]: {
          width: '80%',
        },
      }}
    >
      <Box component="img" src={BobaCardPath} />
      <Stack
        alignItems="center"
        direction="column"
        sx={{ position: 'absolute', width: '100%', top: 0, left: 0 }}
      >
        <Box
          component="img"
          src={icon}
          sx={{ width: '40%', marginTop: '48%' }}
        />
        <Typography
          variant="memberName"
          sx={{
            [theme.breakpoints.down('sm')]: {
              fontSize: '5vw',
            },
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="memberPronouns"
          sx={{
            color: 'text.light',
            [theme.breakpoints.down('sm')]: {
              fontSize: '3vw',
            },
          }}
        >
          {pronouns}
        </Typography>
        <Typography
          variant="memberPosition"
          sx={{
            color: 'tertiary.contrastText',
            [theme.breakpoints.down('sm')]: {
              fontSize: '3.5vw',
            },
          }}
        >
          {position}
        </Typography>
        <Stack direction="row" sx={{ marginTop: '7%' }} spacing={0.5}>
          <Link
            href={linkedInUrl}
            sx={{ height: '24px' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon color="icons.linkedin" />
          </Link>
          {websiteUrl && (
            <>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ color: 'text.light', borderRightWidth: '3px' }}
              />
              <Link
                href={websiteUrl}
                sx={{ height: '24px', color: 'text.main' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LanguageIcon />
              </Link>
            </>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default BobaCard;
