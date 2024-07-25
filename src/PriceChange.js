import React, { useState } from "react";
import './PriceChange.css'; // Import CSS for styling if needed

function PriceChange() {
  // Sample data
  const [priceChanges, setPriceChanges] = useState([
    { id: 1, item: "Rent", oldPrice: "$1000", newPrice: "$1200", changeDate: "2024-07-01" },
    { id: 2, item: "Parking Fee", oldPrice: "$50", newPrice: "$60", changeDate: "2024-06-15" },
    { id: 3, item: "Maintenance Fee", oldPrice: "$100", newPrice: "$110", changeDate: "2024-07-10" },
  ]);

  return (
    <div className="price-change">
      <h2>Price Change</h2>
      <p>Details about recent price changes:</p>
      {priceChanges.length === 0 ? (
        <p>No price change details available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Old Price</th>
              <th>New Price</th>
              <th>Change Date</th>
            </tr>
          </thead>
          <tbody>
            {priceChanges.map((change) => (
              <tr key={change.id}>
                <td>{change.item}</td>
                <td>{change.oldPrice}</td>
                <td>{change.newPrice}</td>
                <td>{change.changeDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default PriceChange;
