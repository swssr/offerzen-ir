import React from 'react'
import { relativeTimeFromDates } from '../helpers'
import { Candidate } from '../models'

export const TableRow = (row: Candidate) => {
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