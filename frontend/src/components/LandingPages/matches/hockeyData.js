const hockeyFixtures = [
  {
    id: 'day1',
    day: 'Day 1',
    date: '9 October',
    heading: 'DAY-1 (9 October)',
    matches: [
      {
        matchNo: 'M01',
        time: '4 PM - 5:30 PM',
        team1: 'IIT BHU B',
        team2: 'IIT Guwahati',
      },
      {
        matchNo: 'M02',
        time: '8 PM - 9:30 PM',
        team1: 'IIT BHU A',
        team2: 'IIT Dhanbad',
      },
    ],
  },
  {
    id: 'day2',
    day: 'Day 2',
    date: '10 October',
    heading: 'DAY-2 (10 October)',
    matches: [
      {
        matchNo: 'M03',
        time: '7 AM - 8:30 AM',
        team1: 'Hansraj',
        team2: 'IIT Guwahati',
      },
      {
        matchNo: 'M04',
        time: '8:30 AM - 10 AM',
        team1: 'IIT Kharagpur',
        team2: 'IIT Dhanbad',
      },
      {
        matchNo: 'M05',
        time: '4 PM - 5:30 PM',
        team1: 'IIT BHU B',
        team2: 'Hansraj',
      },
      {
        matchNo: 'M06',
        time: '5:30 PM - 7 PM',
        team1: 'IIT BHU A',
        team2: 'IIT Kharagpur',
      },
    ],
  },
  {
    id: 'day3',
    day: 'Day 3',
    date: '11 October',
    heading: 'DAY-3 (11 October)',
    matches: [
      {
        matchNo: 'SF-1',
        time: '7 AM - 8:30 AM',
        team1: 'Pool A Topper',
        team2: 'Pool B Runner Up',
        playoff: true,
      },
      {
        matchNo: 'SF-2',
        time: '8:30 AM - 10 AM',
        team1: 'Pool B Topper',
        team2: 'Pool A Runner Up',
        playoff: true,
      },
      {
        matchNo: '3rd Place',
        time: '4 PM - 5:30 PM',
        team1: 'SF-1 Loser',
        team2: 'SF-2 Loser',
        playoff: true,
      },
      {
        matchNo: 'FINALS',
        time: '5:30 PM - 7 PM',
        team1: 'SF-1 Winner',
        team2: 'SF-2 Winner',
        playoff: true,
      },
    ],
  },
];

const hockeyNotes = [
  'The fixtures are tentative and subject to change if required.',
  "All matches will be conducted in accordance with the SPARDHA'26 Rulebook.",
  'Points System: Win – 3 points, Draw – 1 point, Loss – 0 points.',
  'Teams are required to report to the venue at least 30 minutes prior to their scheduled match.',
];

export { hockeyNotes };
export default hockeyFixtures;
