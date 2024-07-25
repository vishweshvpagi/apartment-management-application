import React, { useState } from "react";
import './TenantsDetails.css'; // Import CSS for styling if needed

function TenantsDetails() {
  // Sample data
  const [tenants, setTenants] = useState([
    { id: 1, name: "John Doe", apartment: "101", phone: "555-1234", email: "john.doe@example.com", leaseEnd: "2024-12-31" },
    { id: 2, name: "Jane Smith", apartment: "102", phone: "555-5678", email: "jane.smith@example.com", leaseEnd: "2025-06-30" },
    { id: 3, name: "Alice Johnson", apartment: "103", phone: "555-8765", email: "alice.johnson@example.com", leaseEnd: "2024-11-15" },
  ]);

  return (
    <div className="tenants-details">
      <h2>Tenants Details</h2>
      <p>Details about each tenant:</p>
      {tenants.length === 0 ? (
        <p>No tenant details available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Apartment</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Lease End Date</th>
            </tr>
          </thead>
          <tbody>
            {tenants.map((tenant) => (
              <tr key={tenant.id}>
                <td>{tenant.name}</td>
                <td>{tenant.apartment}</td>
                <td>{tenant.phone}</td>
                <td>{tenant.email}</td>
                <td>{tenant.leaseEnd}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TenantsDetails;
