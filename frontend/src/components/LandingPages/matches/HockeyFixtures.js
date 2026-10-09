import React, { useState } from 'react';
import './HockeyFixtures.css';
import './playoff.css';
import versus from './icon/vs.png';
import hockeyFixtures, { hockeyNotes } from './hockeyData';

const HockeyFixtures = () => {
  const [activeDay, setActiveDay] = useState(hockeyFixtures[0].id);
  const day =
    hockeyFixtures.find((d) => d.id === activeDay) || hockeyFixtures[0];

  return (
    <div className="hockeyWrap">
      <div className="hockeyDayTabs">
        {hockeyFixtures.map((d) => (
          <button
            key={d.id}
            type="button"
            className={`hockeyDayTab ${activeDay === d.id ? 'active' : ''}`}
            onClick={() => setActiveDay(d.id)}
          >
            <span className="hockeyTabDay">{d.day}</span>
            <span className="hockeyTabDate">{d.date}</span>
          </button>
        ))}
      </div>

      <div className="hockeyDayPanel">
        <h3 className="hockeyDayHeading">{day.heading}</h3>
        <div className="hockeyMatches">
          {day.matches.map((m, index) => (
            <div
              className={`hockeyMatch ${m.playoff ? 'playoff' : ''}`}
              key={index}
            >
              <div className="hockeyMatchMeta">
                <span className="hockeyMatchNo">
                  {m.matchNo}
                  {m.playoff && <span className="playoffBadge">Playoff</span>}
                </span>
                <span className="hockeyMatchTime">{m.time}</span>
              </div>
              <div className="hockeyTeams">
                <div className="hockeyTeam">{m.team1}</div>
                <span className="hockeyVs">
                  <img src={versus} alt="vs" />
                </span>
                <div className="hockeyTeam">{m.team2}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hockeyNotes">
        {hockeyNotes.map((note, index) => (
          <p key={index}>
            {index + 1}. {note}
          </p>
        ))}
      </div>
    </div>
  );
};

export default HockeyFixtures;
