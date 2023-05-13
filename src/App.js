import { useState, useEffect } from 'react';
import './App.css';

function App() {

  //const [coolumn, setColumn] = useState();
  const [records, setRecord] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setRecord(data)
      })
      .catch(err => console.error(err))
  }, []);

  return (
    <div className="container">
      <div className='row m-3 p-3'>
        <div className='col-sm-10 mx-auto'>
          <div className='card'>
            <div className='card-header text-center'>Fetch Data</div>
            <div className='card-body'>
              <table className='table table-hover'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    records.map((record, index) =>
                    (
                      <tr key={index}>
                        <td>{record.name}</td>
                        <td>{record.email}</td>
                        <td>{record.address.city}</td>
                        <td>{record.phone}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
