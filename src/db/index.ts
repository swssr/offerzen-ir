import { Candidate } from "../models";

export const AllCandidates: Candidate[] = [
  {
    image: "https://s3-eu-west-1.amazonaws.com/images.offerzen.com/personas/Persona__Andile.png",
    candidate: "Andile Wala",
    role: "Front-end developer",
    salary: 32000,
    last_comms: {
      unread: true,
      description: "Jaco replied",
      date_time: "2020-10-04 12:09:51"
    },
    sent_by: "Ethan Marrs",
    status: "Interviewing",
    archived: false
  },
  {
    image: "https://s3-eu-west-1.amazonaws.com/images.offerzen.com/personas/Persona__Ansurie.png",
    candidate: "Ansurie Govendar",
    role: "Java developer",
    salary: 40000,
    last_comms: {
      unread: true,
      description: "Gys replied",
      date_time: "2020-10-04 10:09:51"
    },
    sent_by: "Ethan Marrs",
    status: "Extending offer",
    archived: false
  },
  {
    image: "https://s3-eu-west-1.amazonaws.com/images.offerzen.com/personas/Persona__Richard.png",
    candidate: "Richard Mitman",
    role: "",
    salary: 35000,
    last_comms: {
      unread: false,
      description: "You replied",
      date_time: "2020-10-03 14:09:51"
    },
    sent_by: "Pieter van der Merwe",
    status: "Technical assesment",
    archived: true
  },
  {
    image: "https://s3-eu-west-1.amazonaws.com/images.offerzen.com/personas/Persona__Nkosana.png",
    candidate: "Nkosana Ndebele",
    role: "Ruby engineer",
    salary: 45000,
    last_comms: {
      unread: false,
      description: "Lara replied",
      date_time: "2019-10-09 12:09:51"
    },
    sent_by: "Pieter van der Merwe",
    status: "Declined",
    archived: false
  },
  {
    image: "https://s3-eu-west-1.amazonaws.com/images.offerzen.com/personas/Persona__Natasha.png",
    candidate: "Natasha Peters",
    role: "UI designer",
    salary: 30000,
    last_comms: {
      unread: false,
      description: "You sent request",
      date_time: "2021-04-12 10:09:51"
    },
    sent_by: "Ethan Marrs",
    status: "Pending",
    archived: false
  },
  {
    image: "https://s3-eu-west-1.amazonaws.com/images.offerzen.com/personas/Persona__Wynand.png",
    candidate: "Wynand Du Plessis",
    role: "React engineer",
    salary: 42000,
    last_comms: {
      unread: false,
      description: "Laura replied",
      date_time: "2021-04-10 10:09:51"
    },
    sent_by: "Ethan Marrs",
    status: "Declined",
    archived: true
  },
  {
    image: "https://s3-eu-west-1.amazonaws.com/images.offerzen.com/personas/Persona__Brian.png",
    candidate: "Brian Mkhize",
    role: "JavaScript engineer",
    salary: 38000,
    last_comms: {
      unread: false,
      description: "You replied",
      date_time: "2021-04-10 09:12:38"
    },
    sent_by: "Pieter van der Merwe",
    status: "Technical assessment",
    archived: true
  }
]