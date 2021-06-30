//#region Imports
import React, { useEffect, useState } from 'react';
import './App.css';
import { AllCandidates } from './db';

import logo from "./assets/logo.svg"
import sortIcon from "./assets/sort.svg"
import { Candidate } from './models';
import { relativeTimeFromDates } from './helpers';
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
                <th>
                  <div className="head"><span>Candidate</span>
                    <img src={sortIcon} alt="sort icon" /></div>
                </th>
                <th>
                  <div className="head"><span>Role</span>
                    <img src={sortIcon} alt="sort icon" /></div>
                </th>
                <th>
                  <div className="head"><span>last Communication</span>
                    <img src={sortIcon} alt="sort icon" /></div>
                </th>
                <th>
                  <div className="head"><span>Salary</span>
                    <img src={sortIcon} alt="sort icon" /></div>
                </th>
                <th>
                  <div className="head"><span>Sent By</span>
                    <img src={sortIcon} alt="sort icon" /></div>
                </th>
              </tr>
            </thead>
            <tbody>
              {candidates.map(row => (
                <tr key={row.candidate} className={"row" + (row.last_comms.unread ? " row--important" : "")}>
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
                  <td>{row.salary}</td>
                  <td>{row.sent_by}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </main>
    </div>
  );
}

export default App;
