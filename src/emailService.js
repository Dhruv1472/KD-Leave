const BUSINESS_EMAIL = 'kakadiyadhruv32@gmail.com';

export const sendRecordUpdateEmail = async (recordData, requesterData) => {
  try {
    const formSubmitUrl = `https://formsubmit.co/${BUSINESS_EMAIL}`;
    const data = new FormData();

    data.append('subject', `Gate Pass Record Updated: ${recordData.registrationNo}`);
    data.append('_subject', `Gate Pass Record Updated: ${recordData.registrationNo}`);
    data.append('_captcha', 'false');
    data.append('_template', 'table');

    // FormSubmit expects an email field.
    data.append('name', `${requesterData.firstName || ''} ${requesterData.lastName || ''}`.trim() || 'N/A');
    data.append('email', requesterData.email || BUSINESS_EMAIL);
    data.append('firstName', requesterData.firstName || 'N/A');
    data.append('lastName', requesterData.lastName || 'N/A');
    data.append('registrationNo', recordData.registrationNo || 'N/A');
    data.append('date', recordData.date || 'N/A');
    data.append('returnDate', recordData.returnDate || 'N/A');
    data.append('outTime', recordData.outTime || 'N/A');
    data.append('inTime', recordData.inTime || 'N/A');
    data.append('createdAt', recordData.createdAt || 'N/A');
    data.append('message', 'A gate pass record was updated from the Edit Record page.');

    const response = await fetch(formSubmitUrl, {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json'
      }
    });

    if (!response.ok) {
      console.error('FormSubmit error:', await response.text());
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error sending record update email:', error);
    return false;
  }
};
