import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import './Dashbord.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  // Sample data for the table
  const data = [
    { id: 1, name: 'Michael Holz', dateCreated: '04/10/2013', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Paula Wilson', dateCreated: '05/08/2014', role: 'Publisher', status: 'Active' },
    { id: 3, name: 'Antonio Moreno', dateCreated: '11/05/2015', role: 'Publisher', status: 'Suspended' },
    { id: 4, name: 'Mary Saveley', dateCreated: '06/09/2016', role: 'Reviewer', status: 'Active' },
    { id: 5, name: 'Martin Sommer', dateCreated: '12/08/2017', role: 'Moderator', status: 'Inactive' },
    { id: 6, name: 'Alice Johnson', dateCreated: '03/03/2018', role: 'Admin', status: 'Active' },
    { id: 7, name: 'John Doe', dateCreated: '07/11/2019', role: 'Publisher', status: 'Active' },
    { id: 8, name: 'Jane Smith', dateCreated: '09/01/2020', role: 'Reviewer', status: 'Active' },
    { id: 9, name: 'Robert Brown', dateCreated: '02/15/2021', role: 'Moderator', status: 'Suspended' },
    { id: 10, name: 'Emily Davis', dateCreated: '08/23/2022', role: 'Admin', status: 'Active' },
    { id: 11, name: 'Sophia Miller', dateCreated: '01/12/2023', role: 'Publisher', status: 'Inactive' },
    { id: 12, name: 'James Wilson', dateCreated: '05/16/2015', role: 'Reviewer', status: 'Active' },
    { id: 13, name: 'Oliver Moore', dateCreated: '06/20/2016', role: 'Moderator', status: 'Suspended' },
    { id: 14, name: 'Charlotte Taylor', dateCreated: '07/14/2017', role: 'Publisher', status: 'Active' },
    { id: 15, name: 'Ethan Johnson', dateCreated: '12/25/2018', role: 'Admin', status: 'Active' },
    { id: 16, name: 'Isabella Martinez', dateCreated: '03/09/2019', role: 'Reviewer', status: 'Inactive' },
    { id: 17, name: 'Liam Garcia', dateCreated: '04/21/2020', role: 'Moderator', status: 'Active' },
    { id: 18, name: 'Amelia Anderson', dateCreated: '05/30/2021', role: 'Publisher', status: 'Suspended' },
    { id: 19, name: 'Lucas Thomas', dateCreated: '06/18/2022', role: 'Reviewer', status: 'Active' },
    { id: 20, name: 'Mia White', dateCreated: '07/05/2023', role: 'Moderator', status: 'Active' },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  // Pagination logic
  const offset = currentPage * itemsPerPage;
  const currentItems = data.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="dashboard-container" >
      <h1>Welcome, {user?.name}</h1>
      <button 
        onClick={handleLogout}
        style={{ margin: '-50px 0px 0px 1480px', padding: '10px 30px', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginRight:'auto' }}
      >
        Logout
      </button>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Date Created</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.dateCreated}</td>
              <td>{item.role}</td>
              <td className={item.status.toLowerCase()}>{item.status}</td>
              <td>
                <button className="action-button">⚙️</button>
                <button className="delete-button">❌</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination-link"}
        nextLinkClassName={"pagination-link"}
        disabledClassName={"pagination-disabled"}
        activeClassName={"pagination-active"}
      />
    </div>
  );
};

export default Dashboard;
