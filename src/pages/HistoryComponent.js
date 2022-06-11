import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function HistoryComponent() {
  const { data } = useSelector((state) => state.history);

  return (
    <div className="d-flex flex-column justify-content-center text-center">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Value Clicked</th>
            <th>Coordinates</th>
            <th>Date</th>
          </tr>
        </thead>
        {data.map((item, index) => (
          <tbody>
            <tr>
              <td>{item.value}</td>
              <td>
                [{item.coordinates[0]},{item.coordinates[1]}]
              </td>
              <td>{new Date(item.date).toUTCString()}</td>
            </tr>
          </tbody>
        ))}
      </Table>
      <hr />
      <Link to="/">
        <button className="btn btn-dark mt-3 mx-5 py-3">Add New History</button>
      </Link>
    </div>
  );
}
