import { useEffect } from 'react';
import './CommonServicesStyles.css';

const DataAnalyticsAI = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const offerings = [
    {
      title: "Machine Learning Models",
      description: "Custom ML models for predictive analytics, classification, regression, and recommendation systems.",
      icon: (
        <>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </>
      )
    },
    {
      title: "Data Visualization",
      description: "Interactive dashboards and visual analytics that transform complex data into actionable insights.",
      icon: (
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
          stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      )
    },
    {
      title: "Predictive Analytics",
      description: "Forecast trends, customer behavior, and business outcomes using advanced statistical models and AI.",
      icon: (
        <>
          <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill="currentColor"/>
        </>
      )
    },
    {
      title: "Business Intelligence",
      description: "Comprehensive BI solutions with data warehousing, ETL pipelines, and real-time reporting.",
      icon: (
        <>
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" 
            stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M9 12h6m-6 4h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </>
      )
    }
  ];

  const technologies = [
    { name: "Python", category: "Programming" },
    { name: "TensorFlow", category: "ML Framework" },
    { name: "PyTorch", category: "Deep Learning" },
    { name: "Scikit-learn", category: "ML Library" },
    { name: "Tableau", category: "Visualization" },
    { name: "Power BI", category: "BI Platform" },
    { name: "Apache Spark", category: "Big Data" },
    { name: "Snowflake", category: "Data Warehouse" }
  ];

  const process = [
    {
      step: "01",
      title: "Data Discovery & Assessment",
      description: "Analyze your data sources, quality, and business objectives to define the analytics strategy."
    },
    {
      step: "02",
      title: "Data Engineering",
      description: "Build robust data pipelines, clean and transform data, and establish data governance frameworks."
    },
    {
      step: "03",
      title: "Model Development",
      description: "Design, train, and validate machine learning models tailored to your specific business needs."
    },
    {
      step: "04",
      title: "Visualization & Insights",
      description: "Create interactive dashboards and reports that deliver actionable insights to stakeholders."
    },
    {
      step: "05",
      title: "Deployment & Monitoring",
      description: "Deploy models to production, monitor performance, and continuously improve accuracy over time."
    }
  ];

  return (
    <div className="service-detail-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="service-hero-container">
          <a href="/#services" className="back-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Back to Services
          </a>
          <span className="service-badge">DATA & AI</span>
          <h1 className="service-hero-title">Data Analytics & AI</h1>
          <p className="service-hero-description">
            Unlock the power of your data with advanced analytics and artificial intelligence. 
            From predictive models to interactive dashboards, we turn raw data into strategic business advantages.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="service-offerings">
        <div className="offerings-container">
          <h2 className="section-title">What We Offer</h2>
          <div className="offerings-grid">
            {offerings.map((offer, idx) => (
              <div key={idx} className="offering-card">
                <div className="offering-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    {offer.icon}
                  </svg>
                </div>
                <h3 className="offering-title">{offer.title}</h3>
                <p className="offering-description">{offer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="service-tech">
        <div className="tech-container">
          <h2 className="section-title">Technologies We Use</h2>
          <div className="tech-grid">
            {technologies.map((tech, idx) => (
              <div key={idx} className="tech-badge">
                <span className="tech-name">{tech.name}</span>
                <span className="tech-category">{tech.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="service-process">
        <div className="process-container">
          <h2 className="section-title">Our Analytics Process</h2>
          <div className="process-timeline">
            {process.map((item, idx) => (
              <div key={idx} className="process-step">
                <div className="step-number">{item.step}</div>
                <div className="step-content">
                  <h3 className="step-title">{item.title}</h3>
                  <p className="step-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Leverage Your Data?</h2>
          <p className="cta-description">
            Let's discuss how we can help you extract meaningful insights from your data 
            and build AI solutions that drive business growth.
          </p>
          <a href="/#contact" className="cta-button">
            <span>Start Your Analytics Journey</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default DataAnalyticsAI;