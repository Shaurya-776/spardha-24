const hockeyFixtures = [
  {
    id: 'day1',
    day: 'Day 1',
    date: '9 October',
    heading: 'DAY-1 (9 October)',
    matches: [
      {
        matchNo: 'M01',
        time: '8:30 AM - 10 AM',
        team1: 'IIT BHU B',
        team2: 'IIT Guwahati',
      },
      {
        matchNo: 'M02',
        time: '10 AM - 11:30 AM',
        team1: 'IIT BHU A',
        team2: 'IIT Dhanbad',
      },
      {
        matchNo: 'M03',
        time: '5 PM - 6:30 PM',
        team1: 'IIT Kharagpur',
        team2: 'IIT Guwahati',
      },
      {
        matchNo: 'M04',
        time: '6:30 PM - 8 PM',
        team1: 'IIT BHU A',
        team2: 'IIT BHU B',
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
        matchNo: 'M05',
        time: '8 AM - 9:30 AM',
        team1: 'IIT BHU A',
        team2: 'IIT Kharagpur',
      },
      {
        matchNo: 'M06',
        time: '9:30 AM - 11 AM',
        team1: 'IIT BHU B',
        team2: 'IIT Dhanbad',
      },
      {
        matchNo: 'M07',
        time: '4:30 PM - 6 PM',
        team1: 'IIT BHU A',
        team2: 'IIT Guwahati',
      },
      {
        matchNo: 'M08',
        time: '6 PM - 7:30 PM',
        team1: 'IIT Kharagpur',
        team2: 'IIT Dhanbad',
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
        matchNo: 'M09',
        time: '8 AM - 9:30 AM',
        team1: 'IIT BHU B',
        team2: 'IIT Kharagpur',
      },
      {
        matchNo: 'M10',
        time: '9:30 AM - 11 AM',
        team1: 'IIT Guwahati',
        team2: 'IIT Dhanbad',
      },
      {
        matchNo: '3rd Place',
        time: '4:30 PM - 6 PM',
        team1: '2nd Runner Up',
        team2: '3rd Runner Up',
        playoff: true,
      },
      {
        matchNo: 'FINALS',
        time: '6 PM - 7:30 PM',
        team1: 'Table Topper',
        team2: '1st Runner Up',
        playoff: true,
      },
    ],
  },
];

const hockeyNotes = [
  'The fixtures are tentative and subject to change if required.',
  "All matches will be conducted in accordance with the SPARDHA'26 Rulebook.",
  'Points System: Win – 3 points, Draw – 1 point, Loss – 0 points.',
];

export { hockeyNotes };
export default hockeyFixtures;
