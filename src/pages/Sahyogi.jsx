import ProductShowcase from '../components/ProductShowcase/ProductShowcase';
import './Sahyogi.css';

const Sahyogi = () => {
  const sahyogiFeatures = [
    {
      icon: (
        <>
          <path d="M12 2L2 7v10c0 5.5 3.8 10.7 10 12 6.2-1.3 10-6.5 10-12V7l-10-5z" 
            stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" 
            strokeLinecap="round" strokeLinejoin="round"/>
        </>
      ),
      title: "Instant emergency alerts",
      description: "Send SOS signals instantly to your trusted contacts with location tracking in critical situations."
    },
    {
      icon: (
        <>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </>
      ),
      title: "24/7 rapid response",
      description: "Connect with emergency services and support networks around the clock for immediate assistance."
    },
    {
      icon: (
        <>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </>
      ),
      title: "Trusted network",
      description: "Build your safety circle with family and friends who can respond when you need help most."
    },
    {
      icon: (
        <>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="12" cy="12" r="3" fill="currentColor"/>
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </>
      ),
      title: "Real-time location sharing",
      description: "Share your precise location with emergency contacts automatically during critical moments."
    }
  ];

  return (
    <div className="sahyogi-page">
      <ProductShowcase 
        badge="EMERGENCY ASSISTANCE"
        title="Your personal safety companion for emergencies"
        description="In critical moments, every second counts. Sahyogi provides instant access to emergency services and your trusted contacts, ensuring help is always within reach when you need it most."
        infoBox={{
          title: "Sahyogi Emergency Service",
          description: "enables users to quickly alert emergency services and trusted contacts during critical situations, providing real-time location tracking and instant communication for faster response times."
        }}
        features={sahyogiFeatures}
      />
    </div>
  );
};

export default Sahyogi;