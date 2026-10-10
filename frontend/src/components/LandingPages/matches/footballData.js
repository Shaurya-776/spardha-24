const footballPools = [
  { name: 'Pool A', teams: ['IIT BHU A', 'KNIT Sultanpur', 'VTI Jamshedpur'] },
  { name: 'Pool B', teams: ['IIT BHU B', 'JEC Jabalpur', 'REC Ambedkar Nagar'] },
  { name: 'Pool C', teams: ['Galgotiya', 'BIT Mesra', 'VIT Bhopal'] },
  { name: 'Pool D', teams: ['SOA', 'ARSD', 'BBD'] },
];

const footballFixtures = {
  days: [
    {
      id: 'day0',
      label: 'Day 0',
      date: '08/10/2026',
      matches: [
        { time: '6:30 - 7:30 pm', match: 'IIT BHU B vs JEC Jabalpur', reporting: '6:00 pm' },
        { time: '7:30 - 8:30 pm', match: 'IIT BHU A vs VTI Jamshedpur', reporting: '7:00 pm' },
        { time: '8:30 - 9:30 pm', match: 'SOA vs ARSD', reporting: '8:00 pm' },
      ],
    },
    {
      id: 'day1',
      label: 'Day 1',
      date: '09/10/2026',
      matches: [
        { time: '6:30 - 7:30 am', match: 'IIT BHU B vs Galgotiya', reporting: '6:00 am' },
        { time: '7:30 - 8:30 am', match: 'ARSD vs BBD', reporting: '7:00 am' },
        { time: '8:30 - 9:30 am', match: 'VTI vs KNIT Sultanpur', reporting: '8:00 am' },
        { time: '9:30 - 10:30 am', match: 'Galgotiya vs VIT Bhopal', reporting: '9:00 am' },
        { time: '6:40 - 7:40 pm', match: 'IIT BHU A vs KNIT', reporting: '6:00 pm' },
        { time: '7:40 - 8:40 pm', match: 'IIT BHU B vs REC', reporting: '7:00 pm' },
        { time: '8:40 - 9:40 pm', match: 'VIT Bhopal vs BIT Mesra', reporting: '8:00 pm' },
      ],
    },
    {
      id: 'day2',
      label: 'Day 2',
      date: '10/10/2026',
      matches: [
        { time: '7:00 - 8:00 am', match: 'SOA vs BBD', reporting: '6:30 am' },
        { time: '8:00 - 9:00 am', match: 'Galgotiya vs BIT Mesra', reporting: '7:30 am' },
        { time: '9:00 - 10:00 am', match: 'JEC vs REC Ambedkar', reporting: '8:30 am' },
      ],
    },
  ],
};

const footballPlayoffs = [
  {
    round: 'Quarter Finals',
    matches: [
      { time: 'To be decided', match: 'Pool A Winner vs Pool B Runner-up' },
      { time: 'To be decided', match: 'Pool C Winner vs Pool D Runner-up' },
      { time: 'To be decided', match: 'Pool B Winner vs Pool A Runner-up' },
      { time: 'To be decided', match: 'Pool D Winner vs Pool C Runner-up' },
    ],
  },
  {
    round: 'Semi Finals',
    matches: [
      { time: 'To be decided', match: 'Winner QF1 vs Winner QF2' },
      { time: 'To be decided', match: 'Winner QF3 vs Winner QF4' },
    ],
  },
  {
    round: 'Third Place',
    matches: [
      { time: 'To be decided', match: 'Loser SF1 vs Loser SF2' },
    ],
  },
  {
    round: 'Final',
    matches: [
      { time: 'To be decided', match: 'Winner SF1 vs Winner SF2' },
    ],
  },
];

const footballNotes = [
  'Top two teams from each pool qualify for the Quarter Finals.',
  'Knockout match timings will be announced 2 hours before the match.',
];

export { footballPools, footballFixtures, footballPlayoffs, footballNotes };
export default footballFixtures;
