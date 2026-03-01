import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GatePassForm.css';

function GatePassList() {
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
              <td><i className="fa fa-clock-o"></i>01:01       PM</td>
              <td><i className="fa fa-clock-o"></i>01:01       PM</td>
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

  const handleBack = () => {
    navigate('/');
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
        <p><b>Copyright © 2026</b> <p className='blue-clr'><b>Company</b></p>. All rights reserved.</p>
        <p className='anything'>Anything you want</p>
      </div>
    </div>
  );
}

export { GatePassList, GatePassForm };
