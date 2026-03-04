import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { GatePassList, GatePassForm } from './GatePassForm';
import EditRecord from './EditRecord';
import defaultRecord from './gatePassData';

const STORAGE_KEY = 'gatePassRecord';

// Read saved record from localStorage; fall back to defaultRecord on first load
function loadRecord() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultRecord;
  } catch {
    return defaultRecord;
  }
}

// Inner component so we can use hooks (useState) inside the Router context
function AppContent() {
  const [record, setRecordState] = useState(loadRecord);

  // Persist to localStorage whenever the record is updated
  const setRecord = (updated) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setRecordState(updated);
  };

  return (
      <div className="App">
        <div className='main-div'>
          <div className='sidebar'>
            <div className='heading-left'>
              <b>KD</b>HOSTEL
            </div>
            <div  className='sidebar-body'>
              <div className='sidebar-heading'>
                <img className='profile-logo' src='/image.png' alt=' '></img>
                <div className='profile-text'>
                  <p>STUDENT</p>
                  <p className='online-text'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#3c763d" className='success-svg' viewBox="0 0 16 16">
                      <circle cx="8" cy="8" r="8"/>
                    </svg>
                    Online
                  </p>
                </div>
              </div>
              <div className='sidebar-list'>
                <ul>
                  <li>
                    <i className="fa fa-tachometer" aria-hidden="true"></i>
                    Hostel Fees
                  </li>
                  <li>
                    <i className="fa fa fa-user" aria-hidden="true"></i>
                    Change Information
                  </li>
                  <li>
                    <i className="fa fa-tachometer" aria-hidden="true"></i>
                    Gate pass & Leave
                  </li>
                  <li>
                    <i className="fa fa fa-user" aria-hidden="true"></i>
                    maintaince Issue
                  </li>
                  <li>
                    <i className="fa fa fa-circle" aria-hidden="true"></i>
                    Change Password
                  </li>
                  <li>
                    <i className="fa fa fa-circle" aria-hidden="true"></i>
                    Applied For Promotion
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='mainDiv'>
            <div className='heading-left-duplicate'>
              <b>KD</b>HOSTEL
            </div>
            <div className='heading'>
              <Link to="/edit-record" className='menu-icon-link' title='Edit Record'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-list" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
              </Link>
              <div className='top-right-logo'>
                <img className='profile-logo2' src='/2image.png' alt=' '></img>
                <p>User image</p>
              </div>
            </div>
            <Routes>
              <Route path="/" element={<GatePassList record={record} />} />
              <Route path="/hostel_apply_getpass" element={<GatePassForm />} />
              <Route path="/edit-record" element={<EditRecord record={record} onUpdate={setRecord} />} />
            </Routes>
          </div>
        </div>
      </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
