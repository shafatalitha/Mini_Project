import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("http://backendexample.sanbercloud.com/api/student-scores")
      .then((res) => {
        setData([...res.data]);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  console.log(data);

  const handleIndexScore = (param) => {
    if (param >= 80) {
      return "A";
    } else if (param < 80 && param >= 70) {
      return "B";
    } else if (param < 70 && param >= 60) {
      return "C";
    } else if (param < 60 && param >= 50) {
      return "D";
    } else {
      return "E";
    }
  };

  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-grey-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-purple-90 dark:bg-purple-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Nama
              </th>
              <th scope="col" className="px-6 py-3">
                Mata Kuliah
              </th>
              <th scope="col" className="px-6 py-3">
                Nilai
              </th>
              <th scope="col" className="px-6 py-3">
                Index nilai
              </th>
            </tr>
          </thead>
          <tbody>
            {data !== null &&
              data.length !== 0 &&
              data.map((e, index) => {
                return (
                  <tr
                    key={e.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4">{e.name}</td>
                    <td className="px-6 py-4">{e.course}</td>
                    <td className="px-6 py-4">{e.score}</td>
                    <td className="px-6 py-4">{handleIndexScore(e.score)}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
