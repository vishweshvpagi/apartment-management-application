import React, { useState } from "react";
import "./App.css";

export default function Reports() {
  const [requests, setRequests] = useState([
    {
      id: 1,
      title: "Request 1",
      description: "Description for request 1",
      status: "Pending",
    },
    {
      id: 2,
      title: "Request 2",
      description: "Description for request 2",
      status: "Completed",
    },
    {
      id: 3,
      title: "Request 3",
      description: "Description for request 3",
      status: "In Progress",
    },
  ]);

  return (
    <div>
      <h1>Requests</h1>
      {requests.length === 0 ? (
        <p>No requests found</p>
      ) : (
        <ul>
          {requests.map((request) => (
            <li key={request.id}>
              <strong>{request.title}</strong>
              <p>{request.description}</p>
              <p>Status: {request.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
