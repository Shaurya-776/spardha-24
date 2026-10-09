import React, { useState } from 'react';
import './VolleyballFixtures.css';
import './playoff.css';
import { volleyballFixtures, volleyballNotes } from './volleyballData';

const dayTabs = [
  { id: 'day1', label: 'Day 1' },
  { id: 'day2', label: 'Day 2' },
  { id: 'day3', label: 'Day 3' },
];

const getDay = (gender, id) => gender.days.find((d) => d.id === id);

function TeamMatch({ match }) {
  const parts = match.split(/\s+vs\s+/i);
  if (parts.length === 2) {
    return (
      <div className="vbTeams">
        <span className="vbTeam">{parts[0]}</span>
        <span className="vbVs" role="img" aria-label="vs" />
        <span className="vbTeam">{parts[1]}</span>
      </div>
    );
  }
  return <span className="vbMatchText">{match}</span>;
}

function Pools({ pools }) {
  return (
    <div className="vbPools">
      {pools.map((pool) => (
        <div className="vbPool" key={pool.name}>
          <div className="vbPoolName">{pool.name}</div>
          <ul className="vbPoolTeams">
            {pool.teams.map((team) => (
              <li key={team}>{team}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function ListTable({ rows }) {
  return (
    <div className="vbList">
      {rows.map((row, index) => (
        <div className="vbListRow" key={index}>
          <span className="vbListTime">{row.time}</span>
          {row.match ? (
            <TeamMatch match={row.match} />
          ) : (
            <span className="vbTbd">To be decided</span>
          )}
        </div>
      ))}
    </div>
  );
}

function Sections({ sections }) {
  return (
    <>
      {sections.map((section, index) => (
        <div
          className={`vbSection ${section.playoff ? 'playoff' : ''}`}
          key={index}
        >
          <h4 className="vbSectionHeading">
            {section.heading}
            {section.playoff && <span className="playoffBadge">Playoff</span>}
          </h4>
          {section.kind === 'break' && (
            <div className="vbBreak">{section.text}</div>
          )}
          {section.kind === 'list' && <ListTable rows={section.rows} />}
        </div>
      ))}
    </>
  );
}

function GenderColumn({ title, gender, activeDay }) {
  const day = getDay(gender, activeDay);
  if (!day) return null;
  return (
    <div className={`vbColumn ${title === 'Boys' ? 'vbBoys' : 'vbGirls'}`}>
      <div className="vbColHeader">
        <span className="vbColTitle">{title}</span>
        <span className="vbColDate">
          {day.label} · {day.date}
        </span>
      </div>
      <div className="vbPoolsTitle">Pools</div>
      <Pools pools={gender.pools} />
      <Sections sections={day.sections} />
    </div>
  );
}

const VolleyballFixtures = () => {
  const [activeDay, setActiveDay] = useState('day1');

  return (
    <div className="vbWrap">
      <div className="vbDayTabs">
        {dayTabs.map((d) => (
          <button
            key={d.id}
            type="button"
            className={`vbDayTab ${activeDay === d.id ? 'active' : ''}`}
            onClick={() => setActiveDay(d.id)}
          >
            {d.label}
          </button>
        ))}
      </div>

      <div className="vbColumns">
        <GenderColumn
          title="Boys"
          gender={volleyballFixtures.boys}
          activeDay={activeDay}
        />
        <GenderColumn
          title="Girls"
          gender={volleyballFixtures.girls}
          activeDay={activeDay}
        />
      </div>

      <div className="vbNotes">
        {volleyballNotes.map((note, index) => (
          <p key={index}>Note: {note}</p>
        ))}
      </div>
    </div>
  );
};

export default VolleyballFixtures;
