import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GatePassForm.css';
import { sendRecordUpdateEmail } from './emailService';

function EditRecord({ record, onUpdate }) {
  const navigate = useNavigate();

  // Initialise form with current record values
  const [formData, setFormData] = useState({ ...record });
  const [requesterData, setRequesterData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleRequesterChange = (e) => {
    const { name, value } = e.target;
    setRequesterData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.registrationNo.trim()) newErrors.registrationNo = 'Registration No is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.returnDate) newErrors.returnDate = 'Return Date is required';
    if (!formData.outTime) newErrors.outTime = 'Out Time is required';
    if (!formData.inTime) newErrors.inTime = 'In Time is required';
    if (!formData.createdAt) newErrors.createdAt = 'Created At date is required';
    if (!requesterData.firstName.trim()) newErrors.firstName = 'First Name is required';
    if (!requesterData.lastName.trim()) newErrors.lastName = 'Last Name is required';
    if (!requesterData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(requesterData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      onUpdate({ ...formData });
      const emailSent = await sendRecordUpdateEmail(formData, requesterData);
      alert('Record updated successfully!');
      navigate('/');
    }
  };

  return (
    <div>
      <div className='body-header'>
        <p className='gatepass-text'>Edit Record</p>
        <div className='body-header-right'>
          <i className="fa fa-dashboard" aria-hidden="true"></i>
          <p>Home &gt; Edit Record</p>
        </div>
      </div>

      <div className='form-container'>
        <form onSubmit={handleSubmit}>

          <div className='form-group'>
            <label>First Name <span className='required'>*</span></label>
            <input
              type='text'
              name='firstName'
              value={requesterData.firstName}
              onChange={handleRequesterChange}
              placeholder='Enter first name'
              className={errors.firstName ? 'error-field' : ''}
            />
            {errors.firstName && <span className='error-text'>{errors.firstName}</span>}
          </div>

          <div className='form-group'>
            <label>Last Name <span className='required'>*</span></label>
            <input
              type='text'
              name='lastName'
              value={requesterData.lastName}
              onChange={handleRequesterChange}
              placeholder='Enter last name'
              className={errors.lastName ? 'error-field' : ''}
            />
            {errors.lastName && <span className='error-text'>{errors.lastName}</span>}
          </div>

          <div className='form-group'>
            <label>Email <span className='required'>*</span></label>
            <input
              type='email'
              name='email'
              value={requesterData.email}
              onChange={handleRequesterChange}
              placeholder='Enter email address'
              className={errors.email ? 'error-field' : ''}
            />
            {errors.email && <span className='error-text'>{errors.email}</span>}
          </div>

          <div className='form-group'>
            <label>Registration No <span className='required'>*</span></label>
            <input
              type="text"
              name="registrationNo"
              value={formData.registrationNo}
              onChange={handleChange}
              placeholder="e.g. KD300663"
              className={errors.registrationNo ? 'error-field' : ''}
            />
            {errors.registrationNo && <span className='error-text'>{errors.registrationNo}</span>}
          </div>

          <div className='form-group'>
            <label>Date <span className='required'>*</span></label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={errors.date ? 'error-field' : ''}
            />
            {errors.date && <span className='error-text'>{errors.date}</span>}
          </div>

          <div className='form-group'>
            <label>Return Date <span className='required'>*</span></label>
            <input
              type="date"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleChange}
              className={errors.returnDate ? 'error-field' : ''}
            />
            {errors.returnDate && <span className='error-text'>{errors.returnDate}</span>}
          </div>

          <div className='form-group'>
            <label>Out Time <span className='required'>*</span></label>
            <input
              type="time"
              name="outTime"
              value={formData.outTime}
              onChange={handleChange}
              className={errors.outTime ? 'error-field' : ''}
            />
            {errors.outTime && <span className='error-text'>{errors.outTime}</span>}
          </div>

          <div className='form-group'>
            <label>In Time <span className='required'>*</span></label>
            <input
              type="time"
              name="inTime"
              value={formData.inTime}
              onChange={handleChange}
              className={errors.inTime ? 'error-field' : ''}
            />
            {errors.inTime && <span className='error-text'>{errors.inTime}</span>}
          </div>

          <div className='form-group'>
            <label>Created At <span className='required'>*</span></label>
            <input
              type="date"
              name="createdAt"
              value={formData.createdAt}
              onChange={handleChange}
              className={errors.createdAt ? 'error-field' : ''}
            />
            {errors.createdAt && <span className='error-text'>{errors.createdAt}</span>}
          </div>

          <div className='form-actions'>
            <button type="submit" className='submit-btn'>Save Changes</button>
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

export default EditRecord;
