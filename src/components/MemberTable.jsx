
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MemberTable.scss';
import logo from '../assets/logo.png'

const MemberTable = ({ data }) => {
  const [activeTab, setActiveTab] = useState('activeMembers');

  const activeMembers = data.filter((member) => member.status === 'active');
  const pendingRequests = data.filter((member) => member.status === 'pending');
  const expiredMembers = data.filter((member) => member.status === 'expired');

  const renderTableData = () => {
    switch (activeTab) {
      case 'activeMembers':
        return activeMembers;
      case 'pendingRequests':
        return pendingRequests;
      case 'expiredMembers':
        return expiredMembers;
      default:
        return activeMembers;
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='mem-tab p-lg-5 p-3'>
        <div className="head">
            <img src={logo} alt="" />
            <span>Advocates association</span>
        </div>
        <div className="content p-4">

        <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'activeMembers' ? 'active' : ''}`}
            onClick={() => handleTabClick('activeMembers')}
          >
            Active Members
            <span className="badge rounded-circle ">{activeMembers.length}</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'pendingRequests' ? 'active' : ''}`}
            onClick={() => handleTabClick('pendingRequests')}
          >
            Pending Requests
            <span className="badge rounded-circle">{pendingRequests.length}</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'expiredMembers' ? 'active' : ''}`}
            onClick={() => handleTabClick('expiredMembers')}
          >
            Membership Expired
            <span className="badge rounded-circle">{expiredMembers.length}</span>
          </a>
        </li>
      </ul>
      <table className="table table-bordered mt-1">
        <thead>
          <tr>
            <th>Advocate Name</th>
            <th>Enrollment</th>
            <th>Plan choosed</th>
            <th>Amount</th>
            <th>Paid on</th>
            <th>Membership Status</th>

          </tr>
        </thead>
        <tbody>
          {renderTableData().map((member) => (
            <tr key={member.id}>
              <td>{member.name}</td>
              <td>{member.id}</td>
              <td>{member.plan}</td>
              <td>{member.amt}</td>
              <td>{member.paid}</td>
              <td>{member.status}</td>

            </tr>
          ))}
        </tbody>
      </table>

        </div>
      
    </div>
  );
};

export default MemberTable;
