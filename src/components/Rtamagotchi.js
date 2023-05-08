import React, { useState, useEffect } from "react";


const Rtamagotchi = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/tamagotchi/records");
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
            <th className="p-1">Name</th>
            <th>Happiness</th>
            <th>Health</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td className="p-1">{result.name}</td>
              <td>{result.happiness}</td>
              <td>{result.health}</td>
              <td>{result.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </>  );
};

export default Rtamagotchi;
