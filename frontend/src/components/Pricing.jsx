import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

const pricingData = {
  allInOne: [
    {
      title: "Starter Package",
      price: "15K - 20K",
      description: "Perfect for establishing a premium digital footprint.",
      features: [
        "Custom Website Development",
        "Premium Hosting Setup",
        "SSL Security Implementation",
        "Basic SEO Foundation"
      ],
      isPopular: false
    },
    {
      title: "Business Package",
      price: "25K - 35K",
      description: "Complete ecosystem for scale-focused organizations.",
      features: [
        "Website Development",
        "Application Development",
        "Scalable Cloud Backend",
        "API Infrastructure",
        "Priority Support"
      ],
      isPopular: true
    },
    {
      title: "Enterprise / Custom",
      price: "Custom",
      description: "Bespoke engineering for massive scale operations.",
      features: [
        "Dedicated Engineering Team",
        "Custom SLA & Legal",
        "Architectural Consulting",
        "On-Premise Deployment"
      ],
      isPopular: false
    }
  ],
  single: [
    {
      title: "Application Development",
      price: "10K+",
      description: "Native and cross-platform mobile apps.",
      features: ["iOS & Android Support", "Native Performance", "Custom UI/UX", "App Store Deployment"],
      isPopular: true
    },
    {
      title: "Website Development",
      price: "6K+",
      description: "High-performance marketing & web applications.",
      features: ["Responsive Design", "SEO Optimized", "CMS Integration", "Global CDN Hosting"],
      isPopular: false
    },
    {
      title: "Cloud Services",
      price: "3K+",
      description: "Scalable infrastructure and security.",
      features: ["AWS/GCP Architecture", "Custom Domain via DNS", "SSL Certificates", "99.9% Uptime SLA"],
      isPopular: false
    },
    {
      title: "Social Media Handling",
      price: "4K+",
      description: "Growth-focused brand management.",
      features: ["Daily Content Posting", "Community Engagement", "Growth Analytics", "Brand Guidelines"],
      isPopular: false
    },
    {
      title: "Content Production",
      price: "5K+",
      description: "High-retention video production.",
      features: ["Professional Editing", "Trendy Concepts", "High-Resolution Output", "Platform Optimized"],
      isPopular: false
    }
  ],
  combo: [
    {
      title: "Website + Hosting",
      price: "8K+",
      description: "High performance digital presence.",
      features: ["Custom Web Portal", "Premium Hosting", "Free SSL", "Basic SEO Setup"],
      isPopular: false
    },
    {
      title: "Application + Backend",
      price: "12K+",
      description: "End-to-end mobile infrastructure.",
      features: ["Mobile App Interface", "Scalable Cloud Backend", "API Routing", "User Auth Pipeline"],
      isPopular: true
    },
    {
      title: "Website + Social Media",
      price: "9K+",
      description: "Engagement and conversion engine.",
      features: ["High-Conversion Website", "Social Media Management", "Content Strategy", "Monthly Analytics"],
      isPopular: false
    },
    {
      title: "Application + Cloud",
      price: "11K+",
      description: "Uninterrupted app operations at scale.",
      features: ["Native App Deployment", "Dedicated Cloud Compute", "Custom Load Balancing", "Daily Backups"],
      isPopular: false
    }
  ]
};

const Pricing = ({ onSelectPlan }) => {
  const [activeTab, setActiveTab] = useState('allInOne');

  const tabs = [
    { id: 'allInOne', label: 'All-in-One Packages' },
    { id: 'single', label: 'Single Services' },
    { id: 'combo', label: 'Combo Packages' }
  ];

  return (
    <section id="pricing" className="section-container" style={{ backgroundColor: 'hsl(var(--bg-main))' }}>
      <div className="container">

        {/* Header Element */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="sub-heading" style={{ justifyContent: 'center', color: 'hsl(var(--text-secondary))' }}>Our Pricing</div>

          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '1.5rem', fontFamily: 'Outfit', color: 'hsl(var(--text-primary))' }}>
            Choose Your Right Plans
          </h2>
          <p style={{ color: 'hsl(var(--text-secondary))', maxWidth: '600px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.6 }}>
            Modern infrastructure built for scale. Access individual services, combined performance bundles, or holistic enterprise ecosystems.
          </p>
        </div>

        {/* Animated Segmented Control Pill */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-flex',
            background: 'hsl(var(--bg-main))',
            padding: '0.4rem',
            borderRadius: '50px',
            border: '1px solid hsl(var(--glass-border))',
            boxShadow: 'var(--glass-shadow)',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            {tabs.map(tab => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    position: 'relative',
                    padding: '12px 28px',
                    borderRadius: '50px',
                    border: 'none',
                    backgroundColor: 'transparent',
                    color: isActive ? 'hsl(var(--bg-main))' : 'hsl(var(--text-secondary))',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    zIndex: 1,
                    transition: 'color 0.3s ease',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'hsl(var(--text-primary))',
                        borderRadius: '50px',
                        zIndex: -1
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Grid Mapping Engine */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch'
          }}
        >
          <AnimatePresence mode="popLayout">
            {pricingData[activeTab].map((plan, idx) => (
              <motion.div
                key={`${activeTab}-${plan.title}`}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, type: "spring", bounce: 0.2 }}
                className="glass-panel"
                style={{
                  position: 'relative',
                  padding: '2.5rem',
                  borderRadius: 'var(--radius-card)',
                  border: plan.isPopular ? '2px solid hsl(var(--accent-primary))' : '1px solid hsl(var(--glass-border))',
                  backgroundColor: 'hsl(var(--bg-main) / 0.7)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  boxShadow: plan.isPopular ? '0 8px 32px hsl(var(--accent-primary) / 0.15)' : 'var(--glass-shadow)',
                  transform: plan.isPopular ? 'translateY(-8px)' : 'none',
                  zIndex: plan.isPopular ? 10 : 1
                }}
              >
                {/* Recommended Badge */}
                {plan.isPopular && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'hsl(var(--accent-primary))',
                    color: 'hsl(var(--bg-main))',
                    padding: '4px 16px',
                    borderRadius: '20px',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    boxShadow: '0 4px 12px hsl(var(--accent-primary) / 0.3)'
                  }}>
                    Recommended
                  </div>
                )}

                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.4rem', fontFamily: 'Outfit', color: 'hsl(var(--text-primary))', marginBottom: '0.5rem' }}>
                    {plan.title}
                  </h3>
                  <p style={{ color: 'hsl(var(--text-secondary))', fontSize: '0.85rem', marginBottom: '2rem', minHeight: '45px' }}>
                    {plan.description}
                  </p>

                  <div style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'flex-end', gap: '0.5rem' }}>
                    <span className="pricing-amount" style={{ fontSize: '2.5rem', fontWeight: 700, fontFamily: 'Outfit', color: 'hsl(var(--text-primary))', lineHeight: 1 }}>
                      {plan.price}
                    </span>
                    {plan.price !== 'Custom' && plan.price !== 'Variable' && (
                      <span style={{ color: 'hsl(var(--text-secondary))', fontSize: '0.85rem', paddingBottom: '0.3rem' }}>
                        starting
                      </span>
                    )}
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {plan.features.map((feat, i) => (
                      <li key={i} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start', color: 'hsl(var(--text-secondary))', fontSize: '0.85rem', lineHeight: 1.4 }}>
                        <span style={{ color: 'hsl(var(--accent-primary))', flexShrink: 0, marginTop: '2px' }}>
                          <Check size={18} />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button onClick={() => onSelectPlan(plan)} className="btn-primary" style={{ textAlign: 'center', width: '100%', marginTop: 'auto', display: 'block', boxSizing: 'border-box' }}>
                  {plan.price === 'Custom' ? 'Contact for Quote' : 'Get Started'}
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .glass-panel {
            padding: 1.8rem !important;
          }
          .pricing-amount {
            font-size: 1.8rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Pricing;
