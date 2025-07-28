import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Message sent!");
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <h3 className="mb-4 text-center">Contact Us</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input 
            type="text" 
            name="name" 
            className="form-control" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email ID</label>
          <input 
            type="email" 
            name="email" 
            className="form-control" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input 
            type="tel" 
            name="phone" 
            className="form-control" 
            value={formData.phone} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea 
            name="message" 
            className="form-control" 
            rows="4" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;

