//#region Imports
import React, { useEffect, useState } from 'react';
import './App.css';
import { AllCandidates } from './db';

import logo from "./assets/logo.svg"
import sortIcon from "./assets/sort.svg"
import { Candidate } from './models';
import { relativeTimeFromDates } from './helpers';
import { nanoid } from 'nanoid';
//#endregion Imports

function App() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    setCandidates(AllCandidates);
  }, [])

  return (
    <div className="app">
      <nav className="nav nav--top">
        <div className="content-wrapper content-wrapper--nav">
          <img src={logo} alt="offerzen logo" />
        </div>
      </nav>
      <main className="main">
        <div className="content-wrapper">
          <div className="subhead">
            <span className="count">{candidates.length} interview requests</span>
          </div>
          <table>
            <thead>
              <tr className="row row--head">
                <HeaderCell label="Candidate" />
                <HeaderCell label="Role" />
                <HeaderCell label="Last Communication" />
                <HeaderCell label="Salary" />
                <HeaderCell label="Sent By" />
              </tr>
            </thead>
            <tbody>
              {candidates.map(row => (
                <TableRow key={nanoid()} {...row} />
              ))}
            </tbody>

          </table>
        </div>
      </main>
    </div>
  );
}
//
function HeaderCell(props: HeaderCellProps) {
  return (<th>
    <div className="head"><span>{props.label}</span>
      <img src={sortIcon} alt="sort icon" /></div>
  </th>)
}

function TableRow(row: Candidate) {
  return (<tr key={row.candidate} className={"row" + (row.last_comms.unread ? " row--important" : "")}>
    <td>
      <div className="nested">
        <span><img src={row.image} alt={row.candidate} className="avator" /></span>
        <span>{row.candidate}</span>
      </div>
    </td>
    <td>{row.role}</td>
    <td>
      <div className="nested">
        <span className={"indicator" + (row.last_comms.unread ? " indicator--active" : "")}></span>
        <span>{row.last_comms.description}</span>
        <span className="minor">{relativeTimeFromDates(new Date(row.last_comms.date_time))}</span>
      </div>
    </td>
    <td>R{row.salary}</td>
    <td>{row.sent_by}</td>
  </tr>)
}

interface HeaderCellProps { label: string }


export default App;
