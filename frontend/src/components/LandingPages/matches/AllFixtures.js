import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Fixtures from './Fixtures';
import HockeyFixtures from './HockeyFixtures';
import VolleyballFixtures from './VolleyballFixtures';
import FootballFixtures from './FootballFixtures';
import './AllFixtures.css';

const sportOrder = [
  'Athletics',
  'Badminton',
  'Basketball',
  'Boxing',
  'Chess',
  'Cricket',
  'Cycling',
  'Football',
  'Handball',
  'Hockey',
  'Kabbadi',
  'Kho-kho',
  'Powerlifting',
  'Squash',
  'Table Tennis',
  'Taekwondo',
  'Tennis',
  'Volleyball',
  'Weight Lifting',
];

const customComponents = {
  Football: FootballFixtures,
  Hockey: HockeyFixtures,
  Volleyball: VolleyballFixtures,
};

function AllFixtures() {
  const [matchData, setMatchData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_MICROSERVICE_URL;
    axios
      .get(`${apiUrl}/api/v1/games/`)
      .then((response) => {
        setMatchData(response.data.data.reverse());
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="allFixtures">
      {sportOrder.map((sport) => {
        const Custom = customComponents[sport];
        const hasData = matchData.some((match) => match.game_name === sport);

        return (
          <section className="allSportSection" key={sport}>
            <h3 className="allSportHeading">
              <span>{sport}</span>
            </h3>
            {Custom ? (
              <Custom />
            ) : hasData ? (
              <Fixtures
                selectedSport={sport}
                selectedDate="All"
                allMatches={matchData}
              />
            ) : loading ? (
              <p className="allEmpty">Loading fixtures...</p>
            ) : (
              <p className="allEmpty">Fixtures to be announced.</p>
            )}
          </section>
        );
      })}
    </div>
  );
}

export default AllFixtures;
