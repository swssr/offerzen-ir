import React from 'react'
import { ifClss, relativeTimeFromDates } from '../helpers'
import { Candidate } from '../models'

export const TableRow = (props: RowProps) => {
  const { candidate, image, role, sent_by, salary, last_comms, archived } = props.payload
  return (<tr key={candidate} className={"row" + ifClss("row--important", last_comms.unread) + ifClss("row--archived", archived)}>
    <td>
      <div className="nested">
        <span><img src={image} alt={candidate} className="avator" /></span>
        <span>{candidate}</span>
      </div>
    </td>
    <td>{role}</td>
    <td>
      <div className="nested">
        <span className={"indicator" + (last_comms.unread ? " indicator--active" : "")}></span>
        <span>{last_comms.description}</span>
        <span className="minor">{relativeTimeFromDates(new Date(last_comms.date_time))}</span>
      </div>
    </td>
    <td>R{salary}</td>
    <td>{sent_by}</td>
    <td className="min"><Archiver payload={props.payload} updateHandler={props.updateHandler} /></td>
  </tr>)
}

function Archiver(data: RowProps) {
  const row = data.payload;

  const toggleArchived = () => data.updateHandler({
    ...row,
    archived: !row.archived
  })
  return <button className="btn btn--plain" onClick={toggleArchived}>{row.archived ? "Unarchive" : "Archive"}</button>

}

interface RowProps {
  payload: Candidate;
  updateHandler: (payload: Candidate) => Candidate[]
}