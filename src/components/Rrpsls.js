import React, { useState, useEffect } from "react";



const Rrpsls = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/rpsls/records");

      const data = await response.json();

      setResults(data);
    };

    fetchData();
  }, []);

  return (
<>

      <table className="results-table mx-auto">
        <thead>
          <tr>
            <th className="p-1">Date</th>
            <th>Time</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td className="p-1">{result.date}</td>
              <td>{result.time}</td>
              <td>{result.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </>  );
};

export default Rrpsls;
