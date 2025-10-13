import ContactForm from '../components/ContactForm/ContactForm';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: (
        <>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" 
            stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
        </>
      ),
      title: "Visit Us",
      detail: "Indore, Madhya Pradesh, 453771"
    },
    {
      icon: (
        <>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" 
            stroke="currentColor" strokeWidth="2" fill="none"/>
        </>
      ),
      title: "Call Us",
      detail: "+91-7838572383"
    },
    {
      icon: (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="m3 7 9 6 9-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </>
      ),
      title: "Email Us",
      detail: "contact@xeviant.com"
    },
    {
      icon: (
        <>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </>
      ),
      title: "Business Hours",
      detail: "Monday - Friday: 9:00 AM - 6:00 PM"
    }
  ];

  return (
    <div className="contact-page">
      <ContactForm 
        title="Get in Touch"
        subtitle="Have a question or want to work together? We'd love to hear from you. Our team is ready to help you with any inquiries."
        contactInfo={contactInfo}
      />
    </div>
  );
};

export default Contact;