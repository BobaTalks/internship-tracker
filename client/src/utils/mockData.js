export const MOCK_FILTER_DATA = {
  remote: {
    filterName: 'Remote',
    data: {
      onsite: {
        label: 'On-site',
        count: 4,
        checked: false,
      },
      remote: {
        label: 'Remote',
        count: 5,
        checked: false,
      },
      hybrid: {
        label: 'Hybrid',
        count: 12,
        checked: false,
      },
    },
  },
  company: {
    filterName: 'Company',
    data: {
      meta: {
        label: 'Meta',
        count: 4,
        checked: false,
      },
      amazon: {
        label: 'Amazon',
        count: 5,
        checked: false,
      },
      netflix: {
        label: 'Netflix',
        count: 15,
        checked: false,
      },
      google: {
        label: 'Google',
        count: 12,
        checked: false,
      },
      apple: {
        label: 'Apple',
        count: 2,
        checked: false,
      },
      microsoft: {
        label: 'Microsoft',
        count: 5,
        checked: false,
      },
    },
  },
  education: {
    filterName: 'Education',
    data: {
      currentStudent: {
        label: 'Current student',
        count: 4,
        checked: false,
      },
      recentGraduate: {
        label: 'Recent graduate',
        count: 5,
        checked: false,
      },
    },
  },
  semester: {
    filterName: 'Semester',
    data: {
      spring2023: {
        label: 'Spring 2023',
        count: 4,
        checked: false,
      },
      summer2023: {
        label: 'Summer 2023',
        count: 5,
        checked: false,
      },
      fall2023: {
        label: 'Fall 2023',
        count: 10,
        checked: false,
      },
      spring2024: {
        label: 'Spring 2024',
        count: 23,
        checked: false,
      },
      summer2024: {
        label: 'Summer 2024',
        count: 8,
        checked: false,
      },
    },
  },
  datePosted: {
    filterName: 'Date posted',
    data: {
      anyTime: {
        label: 'Any time',
        count: 3,
        checked: false,
      },
      pastDay: {
        label: 'Past 24 hours',
        count: 2,
        checked: false,
      },
      pastWeek: {
        label: 'Past week',
        count: 21,
        checked: false,
      },
      pastMonth: {
        label: 'Past month',
        count: 12,
        checked: false,
      },
    },
  },
};

export const MOCK_INTERNSHIP_DATA = [
  {
    id: 1,
    companyName: 'Netflix',
    position: 'Product Design Intern - Experience Design',
    location: 'Los Gatos, CA',
    datePosted: new Date('January 1, 2023'),
    labels: [
      {
        name: 'summer 24',
        filter: 'semester',
        filterOption: 'summer2024',
      },
      {
        name: 'hybrid',
        filter: 'remote',
        filterOption: 'hybrid',
      },
    ],
    jobInfo: {
      jobDesc:
        'Lorem ipsum dolor sit amet consectetur. Nulla sit integer nec arcu tortor ac lectus morbi non. Quam aenean tincidunt blandit amet magna enim sed pharetra habitasse. At nec neque suspendisse feugiat eros. Ante a arcu donec sodales ut amet luctus mauris. Felis eu mauris fringilla mauris. Viverra ante iaculis gravida a amet cursus facilisis scelerisque. Leo sit nulla sit vel nibh amet justo aliquam. Risus ullamcorper vitae amet ornare adipiscing vulputate dapibus diam ultrices. Arcu malesuada dui integer non. Aliquet non tortor adipiscing laoreet leo ac pretium fusce nisi.',
      jobReqs:
        'Vitae consectetur egestas ullamcorper orci pulvinar mattis commodo et morbi.',
      jobResp:
        'Vitae consectetur egestas ullamcorper orci pulvinar mattis commodo et morbi.\n Varius mi massa mi sed cursus mattis. Viverra pharetra vel et neque non ut. ',
      jobLink: 'https://jobs.netflix.com/',
    },
  },
  {
    id: 2,
    companyName: 'Apple',
    position: 'Software Engineer',
    location: 'Cupertino, CA',
    datePosted: new Date('August 15, 2024'),
    labels: [
      {
        name: 'summer 24',
        filter: 'semester',
        filterOption: 'summer2024',
      },
      {
        name: 'hybrid',
        filter: 'remote',
        filterOption: 'hybrid',
      },
    ],
    jobInfo: {
      jobDesc:
        'Lorem ipsum dolor sit amet consectetur. Nulla sit integer nec arcu tortor ac lectus morbi non. Quam aenean tincidunt blandit amet magna enim sed pharetra habitasse. At nec neque suspendisse feugiat eros. Ante a arcu donec sodales ut amet luctus mauris. Felis eu mauris fringilla mauris. Viverra ante iaculis gravida a amet cursus facilisis scelerisque. Leo sit nulla sit vel nibh amet justo aliquam. Risus ullamcorper vitae amet ornare adipiscing vulputate dapibus diam ultrices. Arcu malesuada dui integer non. Aliquet non tortor adipiscing laoreet leo ac pretium fusce nisi.',
      jobReqs:
        'Vitae consectetur egestas ullamcorper orci pulvinar mattis commodo et morbi.',
      jobResp:
        'Vitae consectetur egestas ullamcorper orci pulvinar mattis commodo et morbi.\n Varius mi massa mi sed cursus mattis. Viverra pharetra vel et neque non ut. ',
      jobLink: 'https://www.apple.com/careers/ca/',
    },
  },
  {
    id: 3,
    companyName: 'Amazon',
    position: 'UI/UX Designer',
    location: 'Toronto, Canada',
    datePosted: new Date('August 26, 2024'),
    labels: [],
    jobInfo: {
      jobDesc:
        'Lorem ipsum dolor sit amet consectetur. Nulla sit integer nec arcu tortor ac lectus morbi non. Quam aenean tincidunt blandit amet magna enim sed pharetra habitasse. At nec neque suspendisse feugiat eros. Ante a arcu donec sodales ut amet luctus mauris. Felis eu mauris fringilla mauris. Viverra ante iaculis gravida a amet cursus facilisis scelerisque. Leo sit nulla sit vel nibh amet justo aliquam. Risus ullamcorper vitae amet ornare adipiscing vulputate dapibus diam ultrices. Arcu malesuada dui integer non. Aliquet non tortor adipiscing laoreet leo ac pretium fusce nisi.',
      jobReqs:
        'Vitae consectetur egestas ullamcorper orci pulvinar mattis commodo et morbi.',
      jobResp:
        'Vitae consectetur egestas ullamcorper orci pulvinar mattis commodo et morbi.\n Varius mi massa mi sed cursus mattis. Viverra pharetra vel et neque non ut. ',
      jobLink: 'https://www.amazon.jobs/en/locations/toronto-canada',
    },
  },
  {
    id: 4,
    companyName: 'Google',
    position: 'Google STEP Program',
    location: 'Waterloo, Canada',
    datePosted: new Date('August 21, 2024'),
    labels: [
      {
        name: 'summer 24',
        filter: 'semester',
        filterOption: 'summer2024',
      },
      {
        name: 'on-site',
        filter: 'remote',
        filterOption: 'onsite',
      },
      {
        name: 'current student',
        filter: 'education',
        filterOption: 'currentStudent',
      },
    ],
    jobInfo: {
      jobDesc:
        'Lorem ipsum dolor sit amet consectetur. Nulla sit integer nec arcu tortor ac lectus morbi non. Quam aenean tincidunt blandit amet magna enim sed pharetra habitasse. At nec neque suspendisse feugiat eros. Ante a arcu donec sodales ut amet luctus mauris. Felis eu mauris fringilla mauris. Viverra ante iaculis gravida a amet cursus facilisis scelerisque. Leo sit nulla sit vel nibh amet justo aliquam. Risus ullamcorper vitae amet ornare adipiscing vulputate dapibus diam ultrices. Arcu malesuada dui integer non. Aliquet non tortor adipiscing laoreet leo ac pretium fusce nisi.',
      jobReqs:
        'Vitae consectetur egestas ullamcorper orci pulvinar mattis commodo et morbi.',
      jobResp:
        'Vitae consectetur egestas ullamcorper orci pulvinar mattis commodo et morbi.\n Varius mi massa mi sed cursus mattis. Viverra pharetra vel et neque non ut. ',
      jobLink:
        'https://www.google.com/about/careers/applications/jobs/results/88626154719584966-step-intern-secondyear-student-summer-2024?q=STEP&utm_source=Simplify&ref=Simplify',
    },
  },
  {
    id: 5,
    companyName: 'Microsoft',
    position: 'Back-end Developer',
    location: 'Tokyo, Japan',
    datePosted: new Date('August 30, 2023'),
    labels: [
      {
        name: 'summer 24',
        filter: 'semester',
        filterOption: 'summer2024',
      },
    ],
    jobInfo: {
      jobDesc:
        'Lorem ipsum dolor sit amet consectetur. Nulla sit integer nec arcu tortor ac lectus morbi non. Quam aenean tincidunt blandit amet magna enim sed pharetra habitasse. At nec neque suspendisse feugiat eros. Ante a arcu donec sodales ut amet luctus mauris. Felis eu mauris fringilla mauris. Viverra ante iaculis gravida a amet cursus facilisis scelerisque. Leo sit nulla sit vel nibh amet justo aliquam. Risus ullamcorper vitae amet ornare adipiscing vulputate dapibus diam ultrices. Arcu malesuada dui integer non. Aliquet non tortor adipiscing laoreet leo ac pretium fusce nisi.',
      jobReqs:
        'Vitae consectetur egestas ullamcorper orci pulvinar mattis commodo et morbi.',
      jobResp:
        'Vitae consectetur egestas ullamcorper orci pulvinar mattis commodo et morbi.\n Varius mi massa mi sed cursus mattis. Viverra pharetra vel et neque non ut. ',
      jobLink: 'https://careers.microsoft.com/v2/global/en/home.html',
    },
  },
  {
    id: 6,
    companyName: 'Meta',
    position: 'iOS Developer',
    location: 'Tokyo, Japan',
    datePosted: new Date('December 21, 2022'),
    labels: [
      {
        name: 'summer 24',
        filter: 'semester',
        filterOption: 'summer2024',
      },
      {
        name: 'remote',
        filter: 'remote',
        filterOption: 'remote',
      },
    ],
    jobInfo: {
      jobDesc:
        'Lorem ipsum dolor sit amet consectetur. Nulla sit integer nec arcu tortor ac lectus morbi non. Quam aenean tincidunt blandit amet magna enim sed pharetra habitasse. At nec neque suspendisse feugiat eros. Ante a arcu donec sodales ut amet luctus mauris. Felis eu mauris fringilla mauris. Viverra ante iaculis gravida a amet cursus facilisis scelerisque. Leo sit nulla sit vel nibh amet justo aliquam. Risus ullamcorper vitae amet ornare adipiscing vulputate dapibus diam ultrices. Arcu malesuada dui integer non. Aliquet non tortor adipiscing laoreet leo ac pretium fusce nisi.',
      jobReqs:
        'Vitae consectetur egestas ullamcorper orci pulvinar mattis commodo et morbi.',
      jobResp:
        'Vitae consectetur egestas ullamcorper orci pulvinar mattis commodo et morbi.\n Varius mi massa mi sed cursus mattis. Viverra pharetra vel et neque non ut. ',
      jobLink: 'https://www.metacareers.com/jobs/',
    },
  },
];

export const MOCK_TRACKER_DATA = [
  {
    id: 1,
    internshipId: 1,
    dateAdded: new Date('December 9, 2023, 5:54 PM'),
    label: 'saved',
    appliedDate: new Date('July 10, 2023'),
    notes: [
      {
        date: new Date('September 8, 2023, 3:34 PM'),
        message:
          'Recruiter replied (samsample@netflix.com) and set phone screen for next week',
      },
      {
        date: new Date('September 8, 2023, 3:34 PM'),
        message:
          'Recruiter replied (samsample@netflix.com) and set phone screen for next week',
      },
      {
        date: new Date('September 8, 2023, 3:34 PM'),
        message:
          'Recruiter replied (samsample@netflix.com) and set phone screen for next week',
      },
      {
        date: new Date('September 8, 2023, 3:34 PM'),
        message:
          'Recruiter replied (samsample@netflix.com) and set phone screen for next week',
      },
      {
        date: new Date('September 8, 2023, 3:34 PM'),
        message:
          'Recruiter replied (samsample@netflix.com) and set phone screen for next week',
      },
      {
        date: new Date('September 8, 2023, 3:34 PM'),
        message:
          'Recruiter replied (samsample@netflix.com) and set phone screen for next week',
      },
      {
        date: new Date('January 5, 2025, 11:30 PM'),
        message:
          'E-mail reply from Sam for pass/no pass screen in 3-4 business days',
      },
    ],
  },
  {
    id: 2,
    internshipId: 3,
    dateAdded: new Date('January 3, 2021'),
    label: 'saved',
    appliedDate: new Date('August 2, 2023'),
    notes: [],
  },
  {
    id: 3,
    internshipId: 2,
    dateAdded: new Date('July 3, 2023'),
    label: 'applied',
    appliedDate: null,
    notes: [
      {
        date: new Date('September 8, 2023, 3:34 PM'),
        message:
          'Recruiter replied (samsample@netflix.com) and set phone screen for next week',
      },
      {
        date: new Date('September 9, 2023, 12:23 PM'),
        message:
          'E-mail reply from Sam for pass/no pass screen in 3-4 business days',
      },
    ],
  },
  {
    id: 4,
    internshipId: 4,
    dateAdded: new Date('December 7, 2023'),
    label: 'responded',
    appliedDate: null,
    notes: [
      {
        date: new Date('September 8, 2023, 3:34 PM'),
        message:
          'Recruiter replied (samsample@netflix.com) and set phone screen for next week',
      },
      {
        date: new Date('September 9, 2023, 12:23 PM'),
        message:
          'E-mail reply from Sam for pass/no pass screen in 3-4 business days',
      },
    ],
  },
  {
    id: 5,
    internshipId: 5,
    dateAdded: new Date('December 9, 2023'),
    label: 'archived',
    appliedDate: null,
    notes: [
      {
        date: new Date('September 8, 2023, 3:34 PM'),
        message:
          'Recruiter replied (samsample@netflix.com) and set phone screen for next week',
      },
      {
        date: new Date('September 9, 2023, 12:23 PM'),
        message:
          'E-mail reply from Sam for pass/no pass screen in 3-4 business days',
      },
    ],
  },
];
