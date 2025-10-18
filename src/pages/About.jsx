import AboutUs from '../components/AboutUs/AboutUs';
import './About.css';

const About = () => {
  const stats = [
    { value: "0", label: "Outsourcing" },
    { value: "99%", label: "Response within SLA" },
    { value: "<24h", label: "First Response" }
  ];

  const values = [
    {
      icon: (
        <>
          <path d="M12 2L2 7v10c0 5.5 3.8 10.7 10 12 6.2-1.3 10-6.5 10-12V7l-10-5z" 
            stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </>
      ),
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge solutions that drive business growth."
    },
    {
      icon: (
        <>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </>
      ),
      title: "Excellence",
      description: "Quality is at the heart of everything we do, ensuring exceptional results every time."
    },
    {
      icon: (
        <>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" 
            stroke="currentColor" strokeWidth="2"/>
        </>
      ),
      title: "Collaboration",
      description: "We work closely with our clients as partners, building lasting relationships based on trust."
    },
    {
      icon: (
        <>
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M3 9h18M9 3v18" stroke="currentColor" strokeWidth="2"/>
        </>
      ),
      title: "Integrity",
      description: "We operate with transparency and honesty, maintaining the highest ethical standards."
    }
  ];

  const team = [
    { name: "Dhawal Tora", role: "CEO", image: "/team/dhawal.jpg" },
    { name: "Shyam Gupta", role: "CGO", image: "/team/shyam.jpg" },
    { name: "Sadhna Dixit", role: "CMO" },
    { name: "Kunal Ayachit", role: "CTO", image: "/team/kunal.jpg" },
    { name: "Ankit Singh", role: "VP of Engineering", image: "/team/ankit.jpg" },
  ];

  return (
    <div className="about-page">
      <AboutUs 
        companyName="Xeviant"
        tagline="IT & Software Solutions"
        mission="We are a team of passionate technologists dedicated to transforming businesses through innovative software solutions. Our mission is to empower organizations with cutting-edge technology that drives growth and success."
        stats={stats}
        values={values}
        team={team}
      />
    </div>
  );
};

export default About;