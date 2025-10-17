import { useEffect } from 'react';
import './IndustryPages.css';

const EducationELearning = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const solutions = [
    {
      title: "Learning Management Systems",
      description: "SCORM/xAPI-ready LMS with courses, quizzes, grading, and analytics for institutions and enterprises.",
      graphic: (
        <svg viewBox="0 0 200 200" className="solution-graphic" fill="none">
          <path d="M40 70 L100 40 L160 70 V130 C160 145 135 155 100 155 C65 155 40 145 40 130 V70 Z" fill="#E8F1FF" stroke="#3b82f6" strokeWidth="2"/>
          <rect x="70" y="85" width="60" height="10" rx="4" fill="#3b82f6"/>
          <rect x="70" y="100" width="50" height="8" rx="4" fill="#93c5fd"/>
          <rect x="70" y="114" width="55" height="8" rx="4" fill="#60a5fa"/>
        </svg>
      )
    },
    {
      title: "Virtual Classrooms",
      description: "Live sessions, whiteboards, breakout rooms, recordings, and attendance integrated with your LMS.",
      graphic: (
        <svg viewBox="0 0 200 200" className="solution-graphic" fill="none">
          <rect x="30" y="55" width="140" height="90" rx="10" fill="#E8F1FF" stroke="#3b82f6" strokeWidth="2"/>
          <rect x="40" y="65" width="120" height="50" rx="6" fill="white" stroke="#60a5fa"/>
          <circle cx="70" cy="90" r="12" fill="#3b82f6"/>
          <path d="M60 105c0-5 7-8 10-8s10 3 10 8" stroke="#60a5fa" strokeWidth="2"/>
          <rect x="40" y="120" width="120" height="15" rx="6" fill="#93c5fd"/>
        </svg>
      )
    },
    {
      title: "Student Portals",
      description: "Secure portals for timetables, assignments, submissions, fees, and notifications across devices.",
      graphic: (
        <svg viewBox="0 0 200 200" className="solution-graphic" fill="none">
          <rect x="50" y="40" width="100" height="120" rx="8" fill="white" stroke="#3b82f6" strokeWidth="2"/>
          <rect x="60" y="55" width="80" height="14" rx="4" fill="#3b82f6"/>
          <rect x="60" y="80" width="40" height="25" rx="4" fill="#E8F1FF" stroke="#60a5fa"/>
          <rect x="105" y="80" width="35" height="25" rx="4" fill="#E8F1FF" stroke="#60a5fa"/>
          <rect x="60" y="112" width="80" height="10" rx="4" fill="#93c5fd"/>
          <rect x="60" y="128" width="55" height="10" rx="4" fill="#60a5fa"/>
        </svg>
      )
    },
    {
      title: "Assessment & Proctoring",
      description: "Question banks, anti-cheat, AI/remote proctoring, rubrics, and grading workflows with exports.",
      graphic: (
        <svg viewBox="0 0 200 200" className="solution-graphic" fill="none">
          <circle cx="100" cy="100" r="45" fill="#E8F1FF" stroke="#3b82f6" strokeWidth="2"/>
          <path d="M85 100 l12 12 22-28" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="60" y="130" width="80" height="10" rx="4" fill="#60a5fa"/>
        </svg>
      )
    }
  ];

  const benefits = [
    "WCAG-accessible, mobile-first experiences",
    "Single sign-on (SAML/OAuth) & role-based access",
    "Authoring tools with SCORM/xAPI packaging",
    "Engagement analytics & early risk alerts",
    "Integrations: SIS, HRIS, payment, email/SMS",
    "Elastic infrastructure for exam peaks"
  ];

  return (
    <div className="industry-page">
      <section className="industry-hero">
        <div className="industry-hero-container">
          <a href="/#industries" className="back-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            Back to Industries
          </a>
          <span className="industry-badge">EDUCATION & E-LEARNING</span>
          <h1 className="industry-hero-title">Engaging, Scalable Learning Platforms</h1>
          <p className="industry-hero-description">
            From LMS to live classrooms and assessments, we deliver modern learning experiences that scale.
          </p>
        </div>
      </section>

      <section className="industry-solutions">
        <div className="industry-container">
          <h2 className="section-heading">Our Education Solutions</h2>
          <div className="solutions-grid">
            {solutions.map((s, i) => (
              <div key={i} className="solution-item">
                <div className="solution-visual">{s.graphic}</div>
                <h3 className="solution-title">{s.title}</h3>
                <p className="solution-description">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="industry-benefits">
        <div className="industry-container">
          <h2 className="section-heading">Why Choose Us for Education</h2>
          <div className="benefits-list">
            {benefits.map((b, i) => (
              <div key={i} className="benefit-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#E8F1FF" stroke="#3b82f6" strokeWidth="2"/>
                  <path d="M8 12l3 3 5-6" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="industry-cta">
        <div className="industry-container">
          <h2 className="cta-heading">Upgrade Your Learning Stack</h2>
          <p className="cta-text">Let’s design an engaging learning journey for your learners and faculty.</p>
          <a href="/#contact" className="cta-button">
            <span>Talk to Us</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default EducationELearning;
