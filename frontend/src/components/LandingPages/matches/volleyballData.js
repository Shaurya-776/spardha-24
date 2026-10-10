const volleyballFixtures = {
  boys: {
    pools: [
      { name: 'Group 1', teams: ['IIT BHU(A)', 'KNIT Sultanpur', 'REC BANDA'] },
      { name: 'Group 2', teams: ['IIT BHU(B)', 'IIT Roorkee', 'RGIPT', 'SRMU'] },
      {
        name: 'Group 3',
        teams: ['IIT Dhanbad', 'Galgotia', 'REC Ambedkar', 'IET Lucknow'],
      },
      {
        name: 'Group 4',
        teams: ['BBDU Lucknow', 'SOA', 'JEC Jabalpur', 'BIT Deoghar'],
      },
    ],
    days: [
      {
        id: 'day1',
        label: 'Day 1',
        date: '09/10/2026',
        sections: [
          {
            heading: 'Morning Session',
            kind: 'list',
            rows: [
              {
                time: '9:00 am',
                match: 'KNIT Sultanpur vs REC BANDA',
                winner: 'KNIT Sultanpur',
              },
              { time: '9:00 am', match: 'SRMU vs RGIPT', winner: 'SRMU' },
              {
                time: '10:00 am',
                match: 'GALGOTIA vs REC Ambedkar',
                winner: 'GALGOTIA',
              },
              { time: '10:00 am', match: 'SOA vs BBDU', winner: 'BBDU' },
            ],
          },
          { heading: 'Break', kind: 'break', text: 'BREAK (1:00 PM - 3:30 PM)' },
          {
            heading: 'Evening Session',
            kind: 'list',
            rows: [
              {
                time: '3:30 pm',
                match: 'IIT DHANBAD vs REC Ambedkar',
                winner: 'IIT Dhanbad',
              },
              {
                time: '3:30 pm',
                match: 'Galgotia vs IET Lucknow',
                winner: 'Galgotia',
              },
              {
                time: '4:30 pm',
                match: 'IIT Roorkee vs SRMU',
                winner: 'IIT Roorkee',
              },
              {
                time: '4:30 pm',
                match: 'IIT BHU(B) vs RGIPT',
                winner: 'IIT BHU(B)',
              },
              {
                time: '5:30 pm',
                match: 'IIT BHU(A) vs REC BANDA',
                winner: 'IIT BHU(A)',
              },
              {
                time: '5:30 pm',
                match: 'SOA vs JEC Jabalpur',
                winner: 'SOA',
              },
              {
                time: '6:30 pm',
                match: 'IIT Dhanbad vs IET Lucknow',
                winner: 'IIT Dhanbad',
              },
              {
                time: '6:30 pm',
                match: 'IIT Roorkee vs IIT BHU(B)',
                winner: 'Not recorded',
              },
              {
                time: '7:30 pm',
                match: 'IIT BHU(A) vs KNIT',
                winner: 'IIT BHU(A)',
              },
              {
                time: '7:30 pm',
                match: 'BBDU vs BIT Deoghar',
                winner: 'BBDU',
              },
            ],
          },
        ],
      },
      {
        id: 'day2',
        label: 'Day 2',
        date: '10/10/2026',
        sections: [
          {
            heading: 'Morning Session',
            kind: 'list',
            rows: [
              { time: '8:00 am', match: 'BBDU vs SOA' },
              { time: '8:00 am', match: 'JEC Jabalpur vs BIT Deoghar' },
              { time: '9:00 am', match: 'REC Ambedkar vs IIT Dhanbad' },
              { time: '9:00 am', match: 'IET Lucknow vs Galgotia' },
              { time: '10:00 am', match: 'RGIPT vs IIT Roorkee' },
              { time: '10:00 am', match: 'IIT BHU(B) vs SRMU' },
              { time: '11:00 am', match: 'BIT Deoghar vs JEC Jabalpur' },
            ],
          },
          { heading: 'Break', kind: 'break', text: 'BREAK (1:00 PM - 3:30 PM)' },
          {
            heading: 'Quarter Final',
            kind: 'list',
            playoff: true,
            rows: [
              { time: '', match: 'QF1' },
              { time: '', match: 'QF2' },
              { time: '', match: 'QF3' },
              { time: '', match: 'QF4' },
            ],
          },
        ],
      },
      {
        id: 'day3',
        label: 'Day 3',
        date: '11/10/2026',
        sections: [
          {
            heading: 'Semi Final',
            kind: 'list',
            playoff: true,
            rows: [
              { time: '', match: '(SF1) Winner of QF vs Winner of QF' },
              { time: '', match: '(SF2) Winner of QF vs Winner of QF' },
            ],
          },
          {
            heading: '3rd Place — Court B',
            kind: 'list',
            playoff: true,
            rows: [{ time: '', match: 'Runner Up SF 1 vs Runner Up SF 2' }],
          },
          {
            heading: 'Final — Court A',
            kind: 'list',
            playoff: true,
            rows: [{ time: '', match: 'Winner of SF 1 vs Winner of SF 2' }],
          },
          {
            heading: 'Final Standings',
            kind: 'break',
            playoff: true,
            text: 'Final standings will be updated after the finals.',
          },
        ],
      },
    ],
  },
  girls: {
    pools: [
      { name: 'Pool A', teams: ['IIT Roorkee', 'IIT Dhanbad', 'BBDU'] },
      {
        name: 'Pool B',
        teams: ['IIT BHU B', 'Galgotia University', 'REC Ambhedker'],
      },
      { name: 'Pool C', teams: ['IIT BHU A', 'KNIT'] },
    ],
    days: [
      {
        id: 'day1',
        label: 'Day 1',
        date: '09/10/2026',
        sections: [
          {
            heading: 'Matches',
            kind: 'list',
            rows: [
              {
                time: '11:00 - 12:30 am',
                match: 'REC vs Galgotia',
                winner: 'Galgotia University',
              },
              {
                time: '2:30 - 4:00 pm',
                match: 'IIT Roorkee vs BBDU',
                winner: 'BBDU',
              },
              {
                time: '4:00 - 5:30 pm',
                match: 'IIT BHU B vs REC',
                winner: 'REC Ambedkar',
              },
              {
                time: '5:30 - 7:00 pm',
                match: 'IIT Dhanbad vs IIT Roorkee',
                winner: 'IIT Dhanbad',
              },
              {
                time: '7:30 - 9:00 pm',
                match: 'IIT BHU A vs KNIT',
                winner: 'IIT BHU A',
              },
            ],
          },
        ],
      },
      {
        id: 'day2',
        label: 'Day 2',
        date: '10/10/2026',
        sections: [
          {
            heading: 'Matches',
            kind: 'list',
            rows: [
              { time: '8:30 - 9:30 am', match: 'IIT BHU B vs Galgotia' },
              { time: '9:30 - 11:00 am', match: 'IIT Dhanbad vs BBDU' },
            ],
          },
          {
            heading: 'Quarter Finals',
            kind: 'list',
            playoff: true,
            rows: [
              { time: '3:00 - 4:00 pm', match: 'Pool A Winner vs Pool C Runner-up' },
              { time: '4:00 - 5:30 pm', match: 'Pool A Runner-up vs Pool B Winner' },
              { time: '5:30 - 7:00 pm', match: 'Pool C Winner vs Pool B Runner-up' },
              { time: '7:00 - 8:00 pm', match: 'Pool B Runner-up vs Pool A Winner' },
            ],
          },
          {
            heading: 'Semi Finals',
            kind: 'list',
            playoff: true,
            rows: [{ time: '8:00 - 9:30 pm', match: 'Semi Final 1' }],
          },
        ],
      },
      {
        id: 'day3',
        label: 'Day 3',
        date: '11/10/2026',
        sections: [
          {
            heading: 'Semi Finals',
            kind: 'list',
            playoff: true,
            rows: [{ time: '8:30 - 9:30 am', match: 'Semi Final 2' }],
          },
          {
            heading: 'Finals',
            kind: 'list',
            playoff: true,
            rows: [
              { time: '', match: 'To be decided' },
            ],
          },
        ],
      },
    ],
  },
};

const volleyballNotes = [
  'Quarter/Semi/Final match timings will be announced 2 hours before the match.',
];

export { volleyballFixtures, volleyballNotes };
export default volleyballFixtures;
