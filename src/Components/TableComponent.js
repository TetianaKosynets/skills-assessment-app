import React, { useState, useEffect } from "react";

export default function TableComponent(props) {
    const [rowsData, setRowsData] = useState([]);

    const loadClick = () => {
        setRowsData(props.data);
      };

      const deleteClick = () => {
            const rows = [...rowsData];
            const count = rows.length;
            rows.splice(count-1, 1);
            setRowsData(rows);
      };

      const addClick = () => {
        const rowsInput= rowsData[0];
        setRowsData([...rowsData, rowsInput])
      };

    return (
        <div>
            <button onClick={loadClick}>Load</button>
            <button onClick={deleteClick}>Delete</button>
            <button onClick={addClick}>Add</button>
  
            <table>
                <tr>
                    <th>Country</th>
                    <th>Domains</th>
                    <th>Web Pages</th>
                    <th>Alpha Two Code</th>
                    <th>Name</th>
                    <th>State-province</th>
                </tr>
                {rowsData.map(item =>
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.domains}</td>
                        <td>{item.web_pages}</td>
                        <td>{item.alpha_two_code}</td>
                        <td>{item.name}</td>
                        <td>{item.state}</td>
                    </tr>
                )}
            </table>
            </div>
        );           
    }