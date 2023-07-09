import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {
  Box,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { React } from 'react';

const MentorItem = ({ name, pronouns, linkedIn, websiteUrl, icon }) => {
  const theme = useTheme();
  return (
    <Grid container direction="row" sx={{ margin: theme.spacing(4) }}>
      <Grid container item xs={4} alignItems="center">
        <Box component="img" src={icon} sx={{ width: '90%' }} />
      </Grid>
      <Grid
        container
        item
        xs={8}
        sx={{ padding: theme.spacing(2) }}
        direction="column"
      >
        <Typography sx={{ fontWeight: 600 }}>{name}</Typography>
        <Typography
          variant="h6"
          sx={{ color: 'text.light', fontWeight: 600, fontSize: '0.75rem' }}
        >
          {pronouns}
        </Typography>
        <Stack
          direction="row"
          spacing={0.5}
          sx={{ marginTop: theme.spacing(1.25) }}
        >
          <Link
            href={linkedIn}
            sx={{ width: '25px', height: '24px' }}
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
                target="_blank"
                rel="noopener noreferrer"
                sx={{ height: '24px', color: 'text.main' }}
              >
                <LanguageIcon />
              </Link>
            </>
          )}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default MentorItem;
