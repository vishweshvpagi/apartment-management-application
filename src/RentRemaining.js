import React, { useState } from "react";
import './RentRemaining.css'; // Import CSS for styling if needed

function RentRemaining() {
  // Sample data
  const [tenants, setTenants] = useState([
    { id: 1, name: "John Doe", apartment: "101", rentDue: "$500", amountPaid: "$200", remaining: "$300" },
    { id: 2, name: "Jane Smith", apartment: "102", rentDue: "$600", amountPaid: "$600", remaining: "$0" },
    { id: 3, name: "Alice Johnson", apartment: "103", rentDue: "$550", amountPaid: "$400", remaining: "$150" },
  ]);

  return (
    <div className="rent-remaining">
      <h2>Rent Remaining</h2>
      <p>Details about the remaining rent for each tenant:</p>
      {tenants.length === 0 ? (
        <p>No rent details available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Apartment</th>
              <th>Rent Due</th>
              <th>Amount Paid</th>
              <th>Remaining</th>
            </tr>
          </thead>
          <tbody>
            {tenants.map((tenant) => (
              <tr key={tenant.id}>
                <td>{tenant.name}</td>
                <td>{tenant.apartment}</td>
                <td>{tenant.rentDue}</td>
                <td>{tenant.amountPaid}</td>
                <td>{tenant.remaining}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default RentRemaining;
