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
              { time: '9:00 am', match: 'KNIT Sultanpur vs REC BANDA' },
              { time: '9:00 am', match: 'SRMU vs RGIPT' },
              { time: '10:00 am', match: 'Galgotia vs REC Ambedkar' },
              { time: '10:00 am', match: 'SOA vs BBDU' },
            ],
          },
          { heading: 'Break', kind: 'break', text: 'BREAK (1:00 PM - 3:30 PM)' },
          {
            heading: 'Evening Session',
            kind: 'list',
            rows: [
              { time: '3:30 pm', match: 'IIT Dhanbad vs REC Ambedkar' },
              { time: '3:30 pm', match: 'Galgotia vs IET Lucknow' },
              { time: '4:30 pm', match: 'IIT Roorkee vs SRMU' },
              { time: '4:30 pm', match: 'IIT BHU(B) vs RGIPT' },
              { time: '5:30 pm', match: 'IIT BHU(A) vs REC BANDA' },
              { time: '5:30 pm', match: 'SOA vs JEC Jabalpur' },
              { time: '6:30 pm', match: 'IIT Dhanbad vs IET Lucknow' },
              { time: '6:30 pm', match: 'IIT Roorkee vs IIT BHU(B)' },
              { time: '7:30 pm', match: 'IIT BHU(A) vs KNIT' },
              { time: '7:30 pm', match: 'BBDU vs BIT Deoghar' },
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
              { time: '8:00 am', match: 'BBDU vs JEC Jabalpur' },
              { time: '8:00 am', match: 'SOA vs BIT Deoghar' },
              { time: '9:00 am', match: 'REC Ambedkar vs IET Lucknow' },
              { time: '9:00 am', match: 'IIT Dhanbad vs Galgotia' },
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
              { time: '', match: 'Winner of QF vs Winner of QF' },
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
              { time: '11:00 - 12:30 am', match: 'REC vs Galgotia' },
              { time: '2:30 - 4:00 pm', match: 'IIT Roorkee vs BBDU' },
              { time: '4:00 - 5:30 pm', match: 'IIT Dhanbad vs IIT Roorkee' },
              { time: '5:30 - 7:00 pm', match: 'IIT BHU B vs REC' },
              { time: '7:00 - 8:30 pm', match: 'IIT BHU A vs KNIT' },
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
              { time: '9:00 - 10:30 am', match: 'IIT Dhanbad vs BBDU' },
              { time: '10:30 - 11:30 am', match: '' },
            ],
          },
          {
            heading: 'Quarter Finals',
            kind: 'list',
            playoff: true,
            rows: [
              { time: '5:30 - 6:30 pm', match: '' },
              { time: '6:30 - 7:30 pm', match: '' },
              { time: '7:30 - 9:30 pm', match: '' },
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
            heading: 'Semis - Finals',
            kind: 'list',
            playoff: true,
            rows: [
              { time: '8:30 - 9:30 am', match: '' },
              { time: '9:00 - 10:30 am', match: '' },
              { time: '10:30 - 11:30 am', match: '' },
            ],
          },
          {
            heading: 'Finals',
            kind: 'list',
            playoff: true,
            rows: [
              { time: '5:30 - 6:30 pm', match: '' },
              { time: '6:30 - 7:30 pm', match: '' },
              { time: '7:30 - 9:30 pm', match: '' },
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
