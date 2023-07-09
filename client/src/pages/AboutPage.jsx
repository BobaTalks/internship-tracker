import { Box, Grid, Stack, Typography, useTheme } from '@mui/material';
import React from 'react';

// all of the boba icons
import AliceBoba from '../assets/boba_icons/icon-Alice_Boba.svg';
import AnthonyBoba from '../assets/boba_icons/icon-Anthony_Boba.svg';
import BrandonCBoba from '../assets/boba_icons/icon-BrandonC_Boba.svg';
import BrandonVBoba from '../assets/boba_icons/icon-BrandonV_Boba.svg';
import DarrenBoba from '../assets/boba_icons/icon-Darren_Boba.svg';
import FaithBoba from '../assets/boba_icons/icon-Faith_Boba.svg';
import JennaBoba from '../assets/boba_icons/icon-Jenna_Boba.svg';
import JessicaBoba from '../assets/boba_icons/icon-Jessica_Boba.svg';
import KrystalBoba from '../assets/boba_icons/icon-Krystal_Boba.svg';
import LaraBoba from '../assets/boba_icons/icon-Lara_Boba.svg';
import LilyBoba from '../assets/boba_icons/icon-Lily_Boba.svg';
import LynnBoba from '../assets/boba_icons/icon-Lynn_Boba.svg';
import MarrianeBoba from '../assets/boba_icons/icon-Marriane_Boba.svg';
import NancyBoba from '../assets/boba_icons/icon-Nancy_Boba.svg';
import PrincessBoba from '../assets/boba_icons/icon-Princess_Boba.svg';
import RaziBoba from '../assets/boba_icons/icon-Razi_Boba.svg';
import VictoriaBoba from '../assets/boba_icons/icon-Victoria_Boba.svg';
import YeJuBoba from '../assets/boba_icons/icon-YeJu_Boba.svg';
import MentorBoba from '../assets/boba_icons/mentor-honey.svg';
import funLogoPath from '../assets/bobatalks_fun_logo.svg';
import logoBlueberry from '../assets/logo_blueberry.svg';
import BobaCard from '../components/BobaCard.jsx';
import MentorItem from '../components/MentorItem.jsx';
import BasePage from './BasePage';

const teamMembers = {
  productManagers: {
    categoryTitle: 'Product Managers',
    members: [
      {
        name: 'Victoria Tran',
        pronouns: '(she/her)',
        position: 'Product Manager',
        linkedIn: 'https://www.linkedin.com/in/victoriatran17/',
        website: '',
        icon: VictoriaBoba,
      },
      {
        name: 'Krystal Nguyen',
        pronouns: '(she/her)',
        position: 'Product Manager',
        linkedIn: 'http://www.linkedin.com/in/krystalpnguyen',
        website: '',
        icon: KrystalBoba,
      },
      {
        name: 'Faith Lee',
        pronouns: '(she/her)',
        position: 'Product Manager Shadow',
        linkedIn: '',
        website: '',
        icon: FaithBoba,
      },
    ],
  },
  designers: {
    categoryTitle: 'Designers',
    members: [
      {
        name: 'Brandon Castillo',
        pronouns: '(he/him)',
        position: 'UX Designer',
        linkedIn: '',
        website: '',
        icon: BrandonCBoba,
      },
      {
        name: 'Brandon Vuong',
        pronouns: '(he/him)',
        position: 'UI/UX Designer',
        linkedIn: '',
        website: '',
        icon: BrandonVBoba,
      },
      {
        name: 'Alice Liu',
        pronouns: '(she/her)',
        position: 'UI/UX Designer',
        linkedIn: 'https://www.linkedin.com/in/aliceliu96/',
        website: '',
        icon: AliceBoba,
      },
    ],
  },
  uxResearchers: {
    categoryTitle: 'User Experience Researchers',
    members: [
      {
        name: 'Marriane Jane Annga',
        pronouns: '(she/her)',
        position: 'UX Researcher',
        linkedIn: '',
        website: '',
        icon: MarrianeBoba,
      },
      {
        name: 'Princess Enriquez',
        pronouns: '(she/her)',
        position: 'UX Researcher',
        linkedIn: 'https://www.linkedin.com/in/princessenriquez/',
        website: '',
        icon: PrincessBoba,
      },
      {
        name: 'Lara Conanizado',
        pronouns: '(she/her)',
        position: 'UX Researcher',
        linkedIn: 'https://www.linkedin.com/in/laracanonizado/',
        website: 'https://www.laracanonizado.com/',
        icon: LaraBoba,
      },
      {
        name: 'Ye Ju Kim',
        pronouns: '(she/her)',
        position: 'Support UX Researcher',
        linkedIn: 'https://www.linkedin.com/in/yeju/',
        website: 'https://yeju.info/',
        icon: YeJuBoba,
      },
      {
        name: 'Lynn',
        pronouns: '(she/her)',
        position: 'Support UX Researcher',
        linkedIn: '',
        website: '',
        icon: LynnBoba,
      },
    ],
  },
  developers: {
    categoryTitle: 'Software Engineers',
    members: [
      {
        name: 'Jenna Xiao',
        pronouns: '(she/her)',
        position: 'Frontend Software Engineer',
        linkedIn: 'https://www.linkedin.com/in/jenna-x-435a851b3/',
        website: '',
        icon: JennaBoba,
      },
      {
        name: 'Nancy Tian',
        pronouns: '(she/her)',
        position: 'Frontend Software Engineer',
        linkedIn: 'http://www.linkedin.com/in/nancy-tian-57934a1b5',
        website: '',
        icon: NancyBoba,
      },
      {
        name: 'Jessica Chen',
        pronouns: '(she/they)',
        position: 'Frontend Software Engineer',
        linkedIn: 'https://www.linkedin.com/in/jessica-chen-441222198/',
        website: '',
        icon: JessicaBoba,
      },
      {
        name: 'Razi Syed',
        pronouns: '(he/him)',
        position: 'Frontend Software Engineer',
        linkedIn: 'https://www.linkedin.com/in/razisyed-/',
        website: '',
        icon: RaziBoba,
      },
      {
        name: 'Darren Lee',
        pronouns: '(he/him)',
        position: 'Backend Software Engineer',
        linkedIn: 'https://www.linkedin.com/in/darrenlee09/',
        website: '',
        icon: DarrenBoba,
      },
      {
        name: 'Lily Meng',
        pronouns: '(she/her)',
        position: 'Backend Software Engineer',
        linkedIn: 'https://www.linkedin.com/in/lilyxmeng/',
        website: '',
        icon: LilyBoba,
      },
      {
        name: 'Anthony Camarillo',
        pronouns: '(he/him)',
        position: 'Backend Software Engineer',
        linkedIn: 'https://www.linkedin.com/in/anthony-camarillo/',
        website: '',
        icon: AnthonyBoba,
      },
    ],
  },
};

const mentors = [
  {
    name: 'Brian Lee',
    pronouns: '(he/him)',
    linkedInUrl: 'https://www.linkedin.com/in/brianscli/',
    icon: MentorBoba,
  },
  {
    name: 'Michael Chan',
    pronouns: '(he/him)',
    linkedInUrl: 'https://www.linkedin.com/in/michachan',
    icon: MentorBoba,
  },
  {
    name: 'Joshua Wu',
    pronouns: '(he/him)',
    linkedInUrl: 'https://linkedin.com/in/wujoshua',
    websiteUrl: 'https://www.joshuawu.me',
    icon: MentorBoba,
  },
  {
    name: 'Emma Li',
    pronouns: '(she/her)',
    linkedInUrl: 'https://www.linkedin.com/in/emmalili/',
    icon: MentorBoba,
  },
  {
    name: 'Jordan Yep',
    pronouns: '(he/him)',
    linkedInUrl: 'https://www.linkedin.com/in/jordanyep/',
    icon: MentorBoba,
  },
];

const AboutPage = () => {
  const theme = useTheme();

  return (
    <BasePage>
      <Stack spacing={5} minWidth="100%" justifyContent="center">
        <Typography
          variant="pageTitle"
          marginTop="6rem"
          sx={{
            width: '100%',
            borderBottom: 'solid 1px',
            borderColor: 'text.underline',
          }}
        >
          About the Team
        </Typography>
        <Grid container direction="row">
          <Grid item sm={12} md={6}>
            <Typography variant="h6">Who We Are</Typography>
            <Typography variant="aboutBody" sx={{ fontSize: '14px' }}>
              Welcome! This internship tracker was created by a group of student
              volunteers and 5 mentors. We&apos;re college students from all
              over the country who came together to build this certain feature
              on the BobaTalks website. We started this project in November 2022
              of creating a fun and student-friendly way to look for and track
              internships. We all hope this tool can help you be able to find
              and track internships as you start going into application season
              :) I also want to thank the original team, mentors, and all the
              open-source volunteers who took the time to help this idea become
              a reality &lt;3
            </Typography>
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              [theme.breakpoints.down('md')]: {
                justifyContent: 'center',
                marginTop: '2rem',
              },
            }}
          >
            <Box
              component="img"
              src={funLogoPath}
              sx={{
                width: '80%',
              }}
            />
          </Grid>
        </Grid>

        {Object.keys(teamMembers).map((key, index) => {
          return (
            <Box key={index}>
              <Typography
                variant="h4"
                sx={{ color: 'red.300', fontWeight: 700, fontSize: '2.25rem' }}
              >
                {teamMembers[key].categoryTitle}
              </Typography>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                {teamMembers[key].members.map((member, index) => {
                  return (
                    <Grid
                      container
                      item
                      xs={12}
                      sm={4}
                      key={index}
                      justifyContent="center"
                    >
                      <BobaCard
                        name={member.name}
                        pronouns={member.pronouns}
                        position={member.position}
                        linkedInUrl={member.linkedIn}
                        websiteUrl={member.website}
                        icon={member.icon}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          );
        })}
        <Box
          sx={{
            backgroundColor: 'grey.light',
            borderRadius: '60px',
            padding: '30px',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: 'primary.main',
              fontWeight: 700,
              fontSize: '2.25rem',
              margin: '1rem',
            }}
          >
            Mentors
          </Typography>
          <Box
            sx={{
              backgroundColor: 'background.dark',
              display: 'flex',
              justifyContent: 'center',
              padding: '40px',
              borderRadius: '0 0 60px 60px',
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{ width: '85%' }}
            >
              {mentors.map((mentor, index) => {
                return (
                  <Grid
                    container
                    item
                    xs={12}
                    sm={4}
                    key={index}
                    justifyContent="center"
                  >
                    <MentorItem
                      name={mentor.name}
                      pronouns={mentor.pronouns}
                      linkedIn={mentor.linkedInUrl}
                      websiteUrl={mentor.websiteUrl}
                      icon={mentor.icon}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '100px',
            paddingBottom: '140px',
          }}
        >
          <Typography>Created in collaboration with</Typography>
          <Box
            component="img"
            src={logoBlueberry}
            sx={{ width: '30%', marginTop: '10px' }}
          ></Box>
        </Box>
      </Stack>
    </BasePage>
  );
};

export default AboutPage;
