export const validateForm = (formDetails) => {
    const errors = {};
  
    // Validate the email address.
    if (!formDetails.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formDetails.email)) {
      errors.email = 'Please enter a valid email address.';
    }
  
    // Validate the phone number.
    if (!formDetails.phone || !/^\d{10}$/.test(formDetails.phone)) {
      errors.phone = 'Please enter a valid phone number.';
    }
  
    // Validate the message.
    if (!formDetails.message || formDetails.message.length < 10) {
      errors.message = 'Please enter a message that is at least 10 characters long.';
    }
  
    return errors;
  };
  