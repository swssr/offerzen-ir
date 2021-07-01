//#region Imports
import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import './App.css';

import sortIcon from "./assets/sort.svg"

import { Candidate } from './models';
import { AllCandidates } from './db';

import { InputChangeEvent } from './types';
import { TableRow } from './components/TableRow';
import FilterInput from './components/FilterInput';
import NavTop from './components/NavTop';
//#endregion Imports


function App() {
  /**
   * Will need a filteredCandidate state store,
   * To avoid mutating origin value, just incase I need the origins agains.
   * 
   * - searchValue - Currently used for determing if user is filtering or not.
   */
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [filteredCandidates, setFilteredCandidates] = useState<Candidate[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const handleFilterChange = (event: InputChangeEvent) => {
    const { value } = event.target;
    const _clean = value.trim().toLowerCase();

    const _filtered = candidates.filter(row => row.candidate.toLowerCase().includes(_clean))

    setSearchValue(_clean);
    setFilteredCandidates(_filtered);
  }

  const getCandidates = () => {
    return searchValue ? filteredCandidates : candidates
  }

  useEffect(() => {
    setCandidates(AllCandidates);
  }, [])

  return (
    <div className="app">
      <NavTop />
      <header className="nav nav--sub">
        <div className="content-wrapper">
          <FilterInput searchValue={searchValue} onChangeHandler={handleFilterChange} />
        </div>
      </header>
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
              {getCandidates().map(row => (
                <TableRow key={nanoid()} {...row} />
              ))}
            </tbody>

          </table>
        </div>
      </main>
    </div>
  );
}

function HeaderCell(props: HeaderCellProps) {
  return (<th>
    <div className="head"><span>{props.label}</span>
      <img src={sortIcon} alt="sort icon" /></div>
  </th>)
}

interface HeaderCellProps { label: string }


export default App;
