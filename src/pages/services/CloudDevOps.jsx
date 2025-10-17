import { useEffect } from 'react';
import './CommonServicesStyles.css';

const CloudDevOps = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const offerings = [
    {
      title: "Cloud Infrastructure Setup",
      description: "Design and implement scalable cloud architectures on AWS, Azure, or Google Cloud Platform.",
      icon: (
        <path d="M19 18H6a4 4 0 01-1.8-7.6A6 6 0 0116.5 6a4.5 4.5 0 013.3 7.5A4 4 0 0119 18z" 
          stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      )
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Streamline your development workflow with automated testing, building, and deployment pipelines.",
      icon: (
        <>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </>
      )
    },
    {
      title: "Container Orchestration",
      description: "Deploy and manage containerized applications using Kubernetes, Docker Swarm, or Amazon ECS.",
      icon: (
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      )
    },
    {
      title: "Infrastructure as Code",
      description: "Automate infrastructure provisioning with Terraform, CloudFormation, or Ansible for consistency.",
      icon: (
        <>
          <path d="M10 20l4-16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M6 16l-4-4 4-4M18 8l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </>
      )
    }
  ];

  const technologies = [
    { name: "AWS", category: "Cloud Platform" },
    { name: "Azure", category: "Cloud Platform" },
    { name: "Docker", category: "Containerization" },
    { name: "Kubernetes", category: "Orchestration" },
    { name: "Terraform", category: "IaC" },
    { name: "Jenkins", category: "CI/CD" },
    { name: "GitLab CI", category: "CI/CD" },
    { name: "Ansible", category: "Automation" }
  ];

  const process = [
    {
      step: "01",
      title: "Infrastructure Assessment",
      description: "Analyze your current infrastructure, identify bottlenecks, and define cloud migration strategy."
    },
    {
      step: "02",
      title: "Architecture Design",
      description: "Design scalable, cost-optimized cloud architecture with high availability and disaster recovery."
    },
    {
      step: "03",
      title: "Migration & Implementation",
      description: "Execute phased migration with minimal downtime, implementing infrastructure as code practices."
    },
    {
      step: "04",
      title: "Pipeline Automation",
      description: "Set up CI/CD pipelines with automated testing, security scanning, and deployment workflows."
    },
    {
      step: "05",
      title: "Monitoring & Optimization",
      description: "Implement comprehensive monitoring, logging, and continuous optimization for cost and performance."
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
          <span className="service-badge">CLOUD & DEVOPS</span>
          <h1 className="service-hero-title">Cloud Engineering & DevOps</h1>
          <p className="service-hero-description">
            Accelerate your digital transformation with modern cloud infrastructure, automated workflows, 
            and DevOps best practices that reduce deployment time and increase reliability.
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
          <h2 className="section-title">Our Implementation Process</h2>
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
          <h2 className="cta-title">Ready to Modernize Your Infrastructure?</h2>
          <p className="cta-description">
            Let's discuss how we can help you leverage cloud technologies and DevOps practices 
            to accelerate deployment and reduce operational costs.
          </p>
          <a href="/#contact" className="cta-button">
            <span>Get Started</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default CloudDevOps;