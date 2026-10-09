import React, { useState } from 'react';
import './ResultFixture.css';
import './playoff.css';
import './FootballFixtures.css';
import versus from './icon/vs.png';
import {
  footballPools,
  footballFixtures,
  footballPlayoffs,
  footballNotes,
} from './footballData';

function MatchCard({ time, match, playoff }) {
  const parts = match.split(/\s+vs\s+/i);
  const hasTeams = parts.length === 2;

  return (
    <div className={`displayBox footballCard ${playoff ? 'footballPlayoffCard' : ''}`}>
      <div className="row1">
        <span className="footballSport">
          Football
          {playoff && <span className="playoffBadge footballBadge">Playoff</span>}
        </span>
        <span className="footballTime">Time:&nbsp;{time}</span>
      </div>
      {hasTeams ? (
        <div className="row3">
          <div className="row4">{parts[0]}</div>
          <span className="x">
            <img src={versus} alt="vs" />
          </span>
          <div className="row4">{parts[1]}</div>
        </div>
      ) : (
        <div className="row3 footballTbdRow">
          <div className="row4 footballTbd">{match}</div>
        </div>
      )}
    </div>
  );
}

function FootballFixtures() {
  const [activeDay, setActiveDay] = useState(footballFixtures.days[0].id);
  const day = footballFixtures.days.find((d) => d.id === activeDay);

  return (
    <div className="footballWrap">
      <div className="footballPools">
        {footballPools.map((pool) => (
          <div className="footballPool" key={pool.name}>
            <div className="footballPoolName">{pool.name}</div>
            <ul className="footballPoolTeams">
              {pool.teams.map((team) => (
                <li key={team}>{team}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footballDayTabs">
        {footballFixtures.days.map((d) => (
          <button
            type="button"
            key={d.id}
            className={`footballDayTab ${activeDay === d.id ? 'active' : ''}`}
            onClick={() => setActiveDay(d.id)}
          >
            <span className="footballTabDay">{d.label}</span>
            <span className="footballTabDate">{d.date}</span>
          </button>
        ))}
      </div>

      <div className="footballDayHeading">
        {day.label} <span>{day.date}</span>
      </div>

      <div className="Supreme footballGrid">
        {day.matches.map((m, index) => (
          <MatchCard key={index} time={m.time} match={m.match} />
        ))}
      </div>

      <div className="footballPlayoffs">
        <div className="footballPlayoffTitleWrap">
          <h3 className="footballPlayoffTitle">Playoff Rounds</h3>
          <p className="footballPlayoffSub">Road to the Final</p>
        </div>

        {footballPlayoffs.map((round) => (
          <div className="footballRound" key={round.round}>
            <h4 className="footballRoundTitle">
              {round.round}
              <span className="playoffBadge">Playoff</span>
            </h4>
            <div className="Supreme footballGrid">
              {round.matches.map((m, index) => (
                <MatchCard key={index} time={m.time} match={m.match} playoff />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="footballNotes">
        {footballNotes.map((note, index) => (
          <p key={index}>{note}</p>
        ))}
      </div>
    </div>
  );
}

export default FootballFixtures;
