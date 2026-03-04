import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GatePassForm.css';

// ── Format helpers ────────────────────────────────────────────
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

function formatDate(iso) {
  const [y, m, d] = iso.split('-');
  return `${d}-${MONTHS[parseInt(m, 10) - 1]}-${y}`;
}

function formatTime(time24) {
  const [h, m] = time24.split(':').map(Number);
  const period = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 || 12;
  return `${String(h12).padStart(2, '0')}:${String(m).padStart(2, '0')}       ${period}`;
}
// ─────────────────────────────────────────────────────────────

function GatePassList({ record }) {
  const navigate = useNavigate();

  const handleGatePassRequest = () => {
    navigate('/hostel_apply_getpass');
  };

  return (
    <>
      <div className='body-header'>
        <p className='gatepass-text'>Gate Pass And Leave</p>
        <div className='body-header-right'>
          <i className="fa fa-dashboard" aria-hidden="true"></i>
          <p>Home  &gt; Gate Pass</p> 
        </div>
      </div>
      <div className='gate-pass-btn'>
        <button onClick={handleGatePassRequest}>GATE PASS REQUEST</button>
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
              <th>Registration No 
                <svg viewBox="0 0 16 16" fill="#a3a3a3" xmlns="http://www.w3.org/2000/svg" className='table-header-icon' height="16" width="16">
                  <path d="m7.966533333333333 5.299833333333333 -0.9427999999999999 0.9428066666666666L5.33386 4.552 5.33336 13.333333333333332h-1.3333333333333333l0.0005 -8.781333333333333 -1.6908533333333333 1.6906400000000001 -0.9428133333333333 -0.9428066666666666L4.666693333333333 2l3.29984 3.299833333333333Zm6.666666666666666 5.400366666666667L11.333333333333332 14l-3.2998 -3.2998 0.9427999999999999 -0.9428666666666665 1.6908666666666667 1.6906666666666665L10.666666666666666 2.6666666666666665h1.3333333333333333l0.0005333333333333334 8.781333333333333 1.6898666666666666 -1.6906666666666665 0.9427999999999999 0.9428666666666665Z" stroke-width="0.6667"></path>
                </svg>
              </th>
              <th>Type 
                <svg viewBox="0 0 16 16" fill="#a3a3a3" xmlns="http://www.w3.org/2000/svg" className='table-header-icon' height="16" width="16">
                  <path d="m7.966533333333333 5.299833333333333 -0.9427999999999999 0.9428066666666666L5.33386 4.552 5.33336 13.333333333333332h-1.3333333333333333l0.0005 -8.781333333333333 -1.6908533333333333 1.6906400000000001 -0.9428133333333333 -0.9428066666666666L4.666693333333333 2l3.29984 3.299833333333333Zm6.666666666666666 5.400366666666667L11.333333333333332 14l-3.2998 -3.2998 0.9427999999999999 -0.9428666666666665 1.6908666666666667 1.6906666666666665L10.666666666666666 2.6666666666666665h1.3333333333333333l0.0005333333333333334 8.781333333333333 1.6898666666666666 -1.6906666666666665 0.9427999999999999 0.9428666666666665Z" stroke-width="0.6667"></path>
                </svg>
              </th>
              <th>Reason 
                <svg viewBox="0 0 16 16" fill="#a3a3a3" xmlns="http://www.w3.org/2000/svg" className='table-header-icon' height="16" width="16">
                  <path d="m7.966533333333333 5.299833333333333 -0.9427999999999999 0.9428066666666666L5.33386 4.552 5.33336 13.333333333333332h-1.3333333333333333l0.0005 -8.781333333333333 -1.6908533333333333 1.6906400000000001 -0.9428133333333333 -0.9428066666666666L4.666693333333333 2l3.29984 3.299833333333333Zm6.666666666666666 5.400366666666667L11.333333333333332 14l-3.2998 -3.2998 0.9427999999999999 -0.9428666666666665 1.6908666666666667 1.6906666666666665L10.666666666666666 2.6666666666666665h1.3333333333333333l0.0005333333333333334 8.781333333333333 1.6898666666666666 -1.6906666666666665 0.9427999999999999 0.9428666666666665Z" stroke-width="0.6667"></path>
                </svg>
              </th>
              <th>date 
                <svg viewBox="0 0 16 16" fill="#a3a3a3" xmlns="http://www.w3.org/2000/svg" className='table-header-icon' height="16" width="16">
                  <path d="m7.966533333333333 5.299833333333333 -0.9427999999999999 0.9428066666666666L5.33386 4.552 5.33336 13.333333333333332h-1.3333333333333333l0.0005 -8.781333333333333 -1.6908533333333333 1.6906400000000001 -0.9428133333333333 -0.9428066666666666L4.666693333333333 2l3.29984 3.299833333333333Zm6.666666666666666 5.400366666666667L11.333333333333332 14l-3.2998 -3.2998 0.9427999999999999 -0.9428666666666665 1.6908666666666667 1.6906666666666665L10.666666666666666 2.6666666666666665h1.3333333333333333l0.0005333333333333334 8.781333333333333 1.6898666666666666 -1.6906666666666665 0.9427999999999999 0.9428666666666665Z" stroke-width="0.6667"></path>
                </svg>
              </th>
              <th>Return date 
                <svg viewBox="0 0 16 16" fill="#a3a3a3" xmlns="http://www.w3.org/2000/svg" className='table-header-icon' height="16" width="16">
                  <path d="m7.966533333333333 5.299833333333333 -0.9427999999999999 0.9428066666666666L5.33386 4.552 5.33336 13.333333333333332h-1.3333333333333333l0.0005 -8.781333333333333 -1.6908533333333333 1.6906400000000001 -0.9428133333333333 -0.9428066666666666L4.666693333333333 2l3.29984 3.299833333333333Zm6.666666666666666 5.400366666666667L11.333333333333332 14l-3.2998 -3.2998 0.9427999999999999 -0.9428666666666665 1.6908666666666667 1.6906666666666665L10.666666666666666 2.6666666666666665h1.3333333333333333l0.0005333333333333334 8.781333333333333 1.6898666666666666 -1.6906666666666665 0.9427999999999999 0.9428666666666665Z" stroke-width="0.6667"></path>
                </svg>
              </th>
              <th>Out Time
                <svg viewBox="0 0 16 16" fill="#a3a3a3" xmlns="http://www.w3.org/2000/svg" className='table-header-icon' height="16" width="16">
                  <path d="m7.966533333333333 5.299833333333333 -0.9427999999999999 0.9428066666666666L5.33386 4.552 5.33336 13.333333333333332h-1.3333333333333333l0.0005 -8.781333333333333 -1.6908533333333333 1.6906400000000001 -0.9428133333333333 -0.9428066666666666L4.666693333333333 2l3.29984 3.299833333333333Zm6.666666666666666 5.400366666666667L11.333333333333332 14l-3.2998 -3.2998 0.9427999999999999 -0.9428666666666665 1.6908666666666667 1.6906666666666665L10.666666666666666 2.6666666666666665h1.3333333333333333l0.0005333333333333334 8.781333333333333 1.6898666666666666 -1.6906666666666665 0.9427999999999999 0.9428666666666665Z" stroke-width="0.6667"></path>
                </svg>
              </th>
              <th>In Time
                <svg viewBox="0 0 16 16" fill="#a3a3a3" xmlns="http://www.w3.org/2000/svg" className='table-header-icon' height="16" width="16">
                  <path d="m7.966533333333333 5.299833333333333 -0.9427999999999999 0.9428066666666666L5.33386 4.552 5.33336 13.333333333333332h-1.3333333333333333l0.0005 -8.781333333333333 -1.6908533333333333 1.6906400000000001 -0.9428133333333333 -0.9428066666666666L4.666693333333333 2l3.29984 3.299833333333333Zm6.666666666666666 5.400366666666667L11.333333333333332 14l-3.2998 -3.2998 0.9427999999999999 -0.9428666666666665 1.6908666666666667 1.6906666666666665L10.666666666666666 2.6666666666666665h1.3333333333333333l0.0005333333333333334 8.781333333333333 1.6898666666666666 -1.6906666666666665 0.9427999999999999 0.9428666666666665Z" stroke-width="0.6667"></path>
                </svg>
              </th>
              <th>Status
                <svg viewBox="0 0 16 16" fill="#a3a3a3" xmlns="http://www.w3.org/2000/svg" className='table-header-icon' height="16" width="16">
                  <path d="m7.966533333333333 5.299833333333333 -0.9427999999999999 0.9428066666666666L5.33386 4.552 5.33336 13.333333333333332h-1.3333333333333333l0.0005 -8.781333333333333 -1.6908533333333333 1.6906400000000001 -0.9428133333333333 -0.9428066666666666L4.666693333333333 2l3.29984 3.299833333333333Zm6.666666666666666 5.400366666666667L11.333333333333332 14l-3.2998 -3.2998 0.9427999999999999 -0.9428666666666665 1.6908666666666667 1.6906666666666665L10.666666666666666 2.6666666666666665h1.3333333333333333l0.0005333333333333334 8.781333333333333 1.6898666666666666 -1.6906666666666665 0.9427999999999999 0.9428666666666665Z" stroke-width="0.6667"></path>
                </svg>
              </th>
              <th>Created At
                <svg viewBox="0 0 16 16" fill="#a3a3a3" xmlns="http://www.w3.org/2000/svg" className='table-header-icon' height="16" width="16">
                  <path d="m7.966533333333333 5.299833333333333 -0.9427999999999999 0.9428066666666666L5.33386 4.552 5.33336 13.333333333333332h-1.3333333333333333l0.0005 -8.781333333333333 -1.6908533333333333 1.6906400000000001 -0.9428133333333333 -0.9428066666666666L4.666693333333333 2l3.29984 3.299833333333333Zm6.666666666666666 5.400366666666667L11.333333333333332 14l-3.2998 -3.2998 0.9427999999999999 -0.9428666666666665 1.6908666666666667 1.6906666666666665L10.666666666666666 2.6666666666666665h1.3333333333333333l0.0005333333333333334 8.781333333333333 1.6898666666666666 -1.6906666666666665 0.9427999999999999 0.9428666666666665Z" stroke-width="0.6667"></path>
                </svg>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{record.registrationNo}      <img className='profile-logo2' src='/2image.png' alt=' '></img></td>
              <td><span className='leave-tag'>Leave</span></td>
              <td>go to home</td>
              <td>{formatDate(record.date)}</td>
              <td>{formatDate(record.returnDate)}</td>
              <td><i className="fa fa-clock-o"></i>{formatTime(record.outTime)}</td>
              <td><i className="fa fa-clock-o"></i>{formatTime(record.inTime)}</td>
              <td><button className='approve-btn'>Approved</button></td>
              <td>{formatDate(record.createdAt)}</td>
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
        <p><b>Copyright © 2026</b> <span className='blue-clr'><b>Company</b></span>. All rights reserved.</p>
        <p className='anything'>Anything you want</p>
      </div>
    </>
  );
}

function GatePassForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    selectType: '',
    reason: '',
    approxOutTime: '',
    approxInTime: '',
    placeAddress: '',
    whomToContact: '',
    contactNumber: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.selectType) newErrors.selectType = 'Select Type is required';
    if (!formData.reason) newErrors.reason = 'Reason is required';
    if (!formData.approxOutTime) newErrors.approxOutTime = 'Approx Out time is required';
    if (!formData.approxInTime) newErrors.approxInTime = 'Approx In time is required';
    if (!formData.placeAddress.trim()) newErrors.placeAddress = 'Place Address is required';
    if (!formData.whomToContact) newErrors.whomToContact = 'Whom to contact is required';
    
    if (!formData.contactNumber) {
      newErrors.contactNumber = 'Contact Number is required';
    } else if (!/^[0-9]{10}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = 'Contact Number must be 10 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      alert('Gate Pass Request submitted successfully!');
      // Reset form or navigate back
      navigate('/');
    }
  };

  return (
    <div>
      <div className='body-header'>
        <p className='gatepass-text'>Apply For Gate Pass</p>
        <div className='body-header-right'>
          <i className="fa fa-dashboard" aria-hidden="true"></i>
          <p>Home  &gt; Apply For Gate Pass</p> 
        </div>
      </div>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>Select Type <span className='required'>*</span></label>
            <select 
              name="selectType" 
              value={formData.selectType} 
              onChange={handleChange}
              className={errors.selectType ? 'error-field' : ''}
            >
              <option value="">Select type</option>
              <option value="leave">Leave</option>
            </select>
            {errors.selectType && <span className='error-text'>{errors.selectType}</span>}
          </div>

          <div className='form-group'>
            <label>Reason<span className='required'>*</span></label>
            <select 
              name="reason" 
              value={formData.reason} 
              onChange={handleChange}
              className={errors.reason ? 'error-field' : ''}
            >
              <option value="">Select</option>
              <option value="medical">Medical</option>
              <option value="relative_meeting">Relative Meeting</option>
              <option value="college_coaching">College/Coaching</option>
              <option value="other">Other</option>
              <option value="go_to_home">Go to Home</option>
            </select>
            {errors.reason && <span className='error-text'>{errors.reason}</span>}
          </div>

          <div className='form-group'>
            <label>Approx Out time<span className='required'>*</span></label>
            <input 
              type="time" 
              name="approxOutTime" 
              value={formData.approxOutTime} 
              onChange={handleChange}
              placeholder="--:--"
              className={errors.approxOutTime ? 'error-field' : ''}
            />
            {errors.approxOutTime && <span className='error-text'>{errors.approxOutTime}</span>}
          </div>

          <div className='form-group'>
            <label>Approx In time<span className='required'>*</span></label>
            <input 
              type="time" 
              name="approxInTime" 
              value={formData.approxInTime} 
              onChange={handleChange}
              placeholder="--:--"
              className={errors.approxInTime ? 'error-field' : ''}
            />
            {errors.approxInTime && <span className='error-text'>{errors.approxInTime}</span>}
          </div>

          <div className='form-group'>
            <label>Where are you going Place Address? <span className='required'>*</span></label>
            <textarea 
              name="placeAddress" 
              value={formData.placeAddress} 
              onChange={handleChange}
              rows="3"
              className={errors.placeAddress ? 'error-field' : ''}
            ></textarea>
            {errors.placeAddress && <span className='error-text'>{errors.placeAddress}</span>}
          </div>

          <div className='form-group'>
            <label>Whom to contact? <span className='required'>*</span></label>
            <select 
              name="whomToContact" 
              value={formData.whomToContact} 
              onChange={handleChange}
              className={errors.whomToContact ? 'error-field' : ''}
            >
              <option value="">Select</option>
              <option value="mother">Mother</option>
              <option value="father">Father</option>
              <option value="brother">Brother</option>
              <option value="sister">Sister</option>
              <option value="uncle">Uncle</option>
            </select>
            {errors.whomToContact && <span className='error-text'>{errors.whomToContact}</span>}
          </div>

          <div className='form-group'>
            <label>Contact Number <span className='required'>*</span></label>
            <input 
              type="tel" 
              name="contactNumber" 
              value={formData.contactNumber} 
              onChange={handleChange}
              maxLength="10"
              className={errors.contactNumber ? 'error-field' : ''}
            />
            {errors.contactNumber && <span className='error-text'>{errors.contactNumber}</span>}
          </div>

          <div className='form-actions'>
            <button type="submit" className='submit-btn'>Submit</button>
          </div>
        </form>
      </div>
      <div className='footer'>
        <p><b>Copyright © 2026</b> <span className='blue-clr'><b>Company</b></span>. All rights reserved.</p>
        <p className='anything'>Anything you want</p>
      </div>
    </div>
  );
}

export { GatePassList, GatePassForm };
