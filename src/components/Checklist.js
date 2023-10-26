// Checklist.js
import React from 'react';

const Checklist = () => {
  const date = new Date()
  const year = date.year
  const month = date.month
  const day = date.day
  return (
    <div>
      <div style={{textAlign: "center"}}>
        <h2>checklist</h2>
      </div>
      <div>
        <ul>
            <li>
              <p>{day}, {month}, {year}</p>
              <label>
                <input
                  type="checkbox"
                />
              </label>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Checklist;