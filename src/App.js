import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='main-div'>
        <div className='sidebar'>
          <div className='heading-left'>
            <b>KD</b>HOSTEL
          </div>
          <div  className='sidebar-body'>
            <div className='sidebar-heading'>
              <img className='profile-logo' src='/image.png'></img>
              <div className='profile-text'>
                <p>NIHANSHU</p>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
            <div className='top-right-logo'>
              <img className='profile-logo2' src='/2image.png'></img>
              <p>Student</p>
            </div>
          </div>
          <div className='body-header'>
            <p className='gatepass-text'>Gate Pass And Leave</p>
            <div className='body-header-right'>
              <i class="fa fa-dashboard" aria-hidden="true"></i>
              <p>Home  > Gate Pass</p> 
            </div>
          </div>
          <div className='gate-pass-btn'>
            <button>GATE PASS REQUEST</button>
          </div>
          <div className='entry-dropdown'>
            <div className='entries'>
              Show <select>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="500">500</option>
                <option value="1000">1,000</option>
                <option value="2000">2,000</option>
                <option value="3000">3,000</option>
                <option value="5000">50,00</option>
                <option value="10000">10,000</option>
              </select> entries
            </div>
            <div className='searchbar'>
              Search: <input type='text'></input>
            </div>
          </div>
          <div className='table-section'>
            <table>
              <thead>
                <tr>
                  <th>Registration No</th>
                  <th>Type</th>
                  <th>Reason</th>
                  <th>Date</th>
                  <th>Return Date</th>
                  <th>Out Time</th>
                  <th>In Time</th>
                  <th>Status</th>
                  <th>Created At</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>KD300663      <img className='profile-logo2' src='/2image.png'></img></td>
                  <td><span className='leave-tag'>Leave</span></td>
                  <td>go to home</td>
                  <td>28-Feb-2026</td>
                  <td>15-Apr-2026</td>
                  <td><i class="fa fa-clock-o"></i>01:01   PM</td>
                  <td><i class="fa fa-clock-o"></i>01:01   PM</td>
                  <td><button className='approve-btn'>Approved</button></td>
                  <td>27-Feb-2026</td>
                </tr>
              </tbody>
            </table>
            <div className='table-footer'>
              <p>Showing 1 to 1 of 1 entries</p>
              <div className='page-number'>
                <div className='previous'>
                  Previous
                </div>
                <div className='pg-num'>
                  1
                </div>
                <div className='Next'>
                  Next
                </div>
              </div>
            </div>
          </div>
          <div className='footer'>
            <p><b>Copyright © 2026</b> <p className='blue-clr'><b>Company</b></p>. All rights reserved.</p>
            <p className='anything'>Anything you want</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
