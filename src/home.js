import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <><div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav nav-list">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rent-remaining">
                Rent Remaining
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tenants-details">
                Tenants Details
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/maintenance-requests">
                Maintenance Requests
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/price-change">
                Price Change
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reports">
                Reports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </nav></div>

      <main className="container">
        <section className="dashboard">
          <h1>Admin Dashboard</h1>

          <div className="key-metrics">
            <div className="metric-card">
              <h3>Occupancy Rate</h3>
              <p>95%</p>
            </div>
            <div className="metric-card">
              <h3>Rent Collected</h3>
              <p>$15,000</p>
            </div>
            <div className="metric-card">
              <h3>Pending Requests</h3>
              <p>8</p>
            </div>
          </div>

          <div className="alerts-notifications">
            <h2>Alerts</h2>
            <div className="alerts">
              <div className="alert alert1">
                <p>Upcoming Lease Expiration</p>
              </div>
              <div className="alert alert2">
                <p>Overdue Maintenance</p>
              </div>
              <div className="alert alert3">
                <p>Pending Tenant Application</p>
              </div>
            </div>

            <h2>Notifications</h2>
            <div className="notifications">
              <p>New tenant application received.</p>
              <p>Maintenance request #123 has been completed.</p>
              <p>Monthly financial report is ready.</p>
            </div>
          </div>

          <div className="recent-activity">
            <h2>Recent Activity</h2>
            <ul>
              <li>John Doe paid rent for July.</li>
              <li>Unit 204 maintenance request submitted.</li>
              <li>Lease for Unit 305 renewed.</li>
            </ul>
          </div>

          <div className="quick-actions">
            <h2>Quick Actions</h2>
            <div className="abuttons">
            <button className="btn btn-primary">Add New Tenant</button>
            <button className="btn btn-primary">
              Create Maintenance Request
            </button>
            <button className="btn btn-primary">Send Notification</button></div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
