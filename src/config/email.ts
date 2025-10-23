// Email configuration
// To set up EmailJS:
// 1. Sign up at https://www.emailjs.com/
// 2. Create a service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Get your public key, service ID, and template ID
// 5. Replace the values below

export const emailConfig = {
  // Replace these with your actual EmailJS configuration
  publicKey: 'YOUR_PUBLIC_KEY',
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID',
  
  // Template variables that will be sent to your email template
  templateParams: {
    to_email: 'jabez@aptitps.com',
    from_name: '{{from_name}}',
    from_email: '{{from_email}}',
    subject: '{{subject}}',
    message: '{{message}}'
  }
};

// Alternative: Simple form submission (without EmailJS)
// You can also create a simple PHP or Node.js backend to handle form submissions
export const submitFormAlternative = async (formData: any) => {
  // This would be a backup method if EmailJS is not set up
  // You would need to create an API endpoint to handle this
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to send message');
    }
    
    return { success: true };
  } catch (error) {
    console.error('Error submitting form:', error);
    return { success: false, error };
  }
};