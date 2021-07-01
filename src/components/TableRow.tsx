import React from 'react'
import { ifClass, relativeTimeFromDates } from '../helpers'
import { Candidate } from '../models'

export const TableRow = (props: RowProps) => {
  const { candidate, image, role, sent_by, salary, last_comms, archived } = props.payload
  //
  return (<tr key={candidate} className={"row" + ifClass("row--important", last_comms.unread) + ifClass("row--archived", archived)}>
    <td>
      <div className="nested">
        <span><img src={image} alt={candidate} className="avator" /></span>
        <span>{candidate}</span>
      </div>
    </td>
    <td>{role}</td>
    <td>
      <div className="nested">
        <span className={"indicator" + ifClass("indicator--active", last_comms.unread)}></span>
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
  const toggleArchived = () => data.updateHandler({
    ...data.payload,
    archived: !data.payload.archived
  })
  return <button className="btn btn--plain" onClick={toggleArchived}>{data.payload.archived ? "Unarchive" : "Archive"}</button>
}

interface RowProps {
  payload: Candidate;
  updateHandler: (payload: Candidate) => Candidate[]
}