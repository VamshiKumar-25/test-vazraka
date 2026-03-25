import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import emailjs from "@emailjs/browser";

export default function Contact({ prefilledPlan }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [status, setStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  // Mount pre-filled data dynamically when user clicks Pricing card
  useEffect(() => {
    if (prefilledPlan) {
      setFormData(prev => ({
        ...prev,
        service: prefilledPlan.title,
        budget: prefilledPlan.price !== 'Custom' ? prefilledPlan.price : 'Flexible',
        message: `I am interested in the ${prefilledPlan.title}. Please contact me with more details.`
      }));
    }
  }, [prefilledPlan]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      package: prefilledPlan ? prefilledPlan.title : 'None',
      price: prefilledPlan ? prefilledPlan.price : 'N/A',
      budget: formData.budget,
      timeline: formData.timeline,
      message: formData.message
    };

    try {
      await emailjs.send(
        "service_qek98vc",      // your EmailJS service ID
        "template_642rvbh",       // your EmailJS template ID
        templateParams,
        "-6V684Gota7jTnZaA"       // your EmailJS public key
      );

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        timeline: '',
        message: ''
      });

    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const inputStyles = {
    padding: '1rem 1.25rem',
    backgroundColor: 'hsl(var(--bg-input))',
    border: '1px solid hsl(var(--glass-border))',
    borderRadius: '8px',
    color: 'hsl(var(--text-primary))',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'all 0.2s ease',
    fontFamily: 'Inter, sans-serif',
    width: '100%',
    boxShadow: 'none',
    appearance: 'none'
  };

  const getFocusStyle = (fieldName) => ({
    borderColor: focusedField === fieldName ? 'hsl(var(--accent-primary))' : 'hsl(var(--glass-border))',
    boxShadow: focusedField === fieldName ? '0 0 0 2px hsl(var(--accent-primary) / 0.1)' : 'none',
  });

  return (
    <section id="contact" className="section-container" style={{ backgroundColor: 'hsl(var(--bg-secondary))' }}>
      <div className="container" style={{ maxWidth: '850px' }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <div className="sub-heading" style={{ justifyContent: 'center' }}>Contact Us</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', margin: 0, color: 'hsl(var(--text-primary))' }}>
            Ready to Start?
          </h2>
          <p style={{ color: 'hsl(var(--text-secondary))', fontSize: '1.05rem', marginTop: '1.5rem', maxWidth: '600px', margin: '1.5rem auto 0' }}>
            Let's discuss how we can engineer your digital ecosystem.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            backgroundColor: 'hsl(var(--bg-main))',
            border: '1px solid hsl(var(--glass-border))',
            boxShadow: 'var(--glass-shadow)',
            borderRadius: 'var(--radius-card)',
            padding: 'clamp(2rem, 5vw, 3.5rem)',
            position: 'relative'
          }}
        >

          {/* Dynamic Highlight Banner */}
          <AnimatePresence>
            {prefilledPlan && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                animate={{ opacity: 1, height: 'auto', marginBottom: '2rem' }}
                style={{
                  backgroundColor: 'hsl(var(--accent-primary) / 0.1)',
                  border: '1px solid hsl(var(--accent-primary))',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  overFlow: 'hidden'
                }}
              >
                <div style={{ flexShrink: 0, width: '40px', height: '40px', backgroundColor: 'hsl(var(--accent-primary))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'hsl(var(--bg-main))' }}>
                  <Check size={20} strokeWidth={3} />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', color: 'hsl(var(--text-secondary))', marginBottom: '0.2rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    You selected
                  </div>
                  <div style={{ color: 'hsl(var(--text-primary))', fontSize: '1.2rem', fontFamily: 'Outfit', fontWeight: 600 }}>
                    {prefilledPlan.title} <span style={{ color: 'hsl(var(--accent-primary))', marginLeft: '0.5rem' }}>({prefilledPlan.price})</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.8rem' }}>
              <div>
                <label style={{ display: 'block', color: 'hsl(var(--text-primary))', fontSize: '0.85rem', marginBottom: '0.6rem', fontWeight: 500 }}>Full Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  placeholder='John Doe'
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  style={{ ...inputStyles, ...getFocusStyle('name') }}
                />
              </div>
              <div>
                <label style={{ display: 'block', color: 'hsl(var(--text-primary))', fontSize: '0.85rem', marginBottom: '0.6rem', fontWeight: 500 }}>Email Address *</label>
                <input
                  type="email"
                  value={formData.email}
                  placeholder='john@example.com'
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  style={{ ...inputStyles, ...getFocusStyle('email') }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.8rem' }}>
              <div>
                <label style={{ display: 'block', color: 'hsl(var(--text-primary))', fontSize: '0.85rem', marginBottom: '0.6rem', fontWeight: 500 }}>Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  placeholder='+91 98765 43210'
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  style={{ ...inputStyles, ...getFocusStyle('phone') }}
                />
              </div>
              <div style={{ position: 'relative' }}>
                <label style={{ display: 'block', color: 'hsl(var(--text-primary))', fontSize: '0.85rem', marginBottom: '0.6rem', fontWeight: 500 }}>Interested Service *</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  onFocus={() => setFocusedField('service')}
                  onBlur={() => setFocusedField(null)}
                  required
                  style={{ ...inputStyles, ...getFocusStyle('service'), color: formData.service ? 'hsl(var(--text-primary))' : 'hsl(var(--text-secondary))' }}
                >
                  <option value="" disabled>Select a service...</option>
                  <optgroup label="All-in-One Packages">
                    <option value="Starter Package">Starter Package</option>
                    <option value="Business Package">Business Package</option>
                    <option value="Enterprise / Custom">Enterprise / Custom</option>
                  </optgroup>
                  <optgroup label="Single Services">
                    <option value="Application Development">Application Development</option>
                    <option value="Website Development">Website Development</option>
                    <option value="Cloud Services">Cloud Services</option>
                    <option value="Social Media Handling">Social Media Handling</option>
                    <option value="Content Production">Content Production</option>
                  </optgroup>
                  <optgroup label="Combo Packages">
                    <option value="Website + Hosting">Website + Hosting</option>
                    <option value="Application + Backend">Application + Backend</option>
                    <option value="Website + Social Media">Website + Social Media</option>
                    <option value="Application + Cloud">Application + Cloud</option>
                  </optgroup>
                  <optgroup label="Other">
                    <option value="General Inquiry">General Inquiry</option>
                  </optgroup>
                </select>
                <div style={{ position: 'absolute', right: '1.25rem', top: '2.4rem', pointerEvents: 'none', color: 'hsl(var(--text-secondary))' }}>
                  ▼
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.8rem' }}>
              <div style={{ position: 'relative' }}>
                <label style={{ display: 'block', color: 'hsl(var(--text-primary))', fontSize: '0.85rem', marginBottom: '0.6rem', fontWeight: 500 }}>Est. Budget Range</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  onFocus={() => setFocusedField('budget')}
                  onBlur={() => setFocusedField(null)}
                  style={{ ...inputStyles, ...getFocusStyle('budget'), color: formData.budget ? 'hsl(var(--text-primary))' : 'hsl(var(--text-secondary))' }}
                >
                  <option value="" disabled>Select your budget...</option>
                  <option value="Under 5K">Under ₹5K</option>
                  <option value="5K - 10K">₹5K - ₹10K</option>
                  <option value="10K - 20K">₹10K - ₹20K</option>
                  <option value="20K - 35K">₹20K - ₹35K</option>
                  <option value="35K+">₹35K+</option>
                  <option value="Flexible">Pricing is Flexible</option>
                  {/* Keep dynamic prefill options valid */}
                  {prefilledPlan && !['Under 5K', '5K - 10K', '10K - 20K', '20K - 35K', '35K+', 'Flexible'].includes(prefilledPlan.price) && (
                    <option value={prefilledPlan.price}>{prefilledPlan.price}</option>
                  )}
                </select>
                <div style={{ position: 'absolute', right: '1.25rem', top: '2.4rem', pointerEvents: 'none', color: 'hsl(var(--text-secondary))' }}>
                  ▼
                </div>
              </div>

              <div style={{ position: 'relative' }}>
                <label style={{ display: 'block', color: 'hsl(var(--text-primary))', fontSize: '0.85rem', marginBottom: '0.6rem', fontWeight: 500 }}>Target Timeline</label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  onFocus={() => setFocusedField('timeline')}
                  onBlur={() => setFocusedField(null)}
                  style={{ ...inputStyles, ...getFocusStyle('timeline'), color: formData.timeline ? 'hsl(var(--text-primary))' : 'hsl(var(--text-secondary))' }}
                >
                  <option value="" disabled>Select a timeline...</option>
                  <option value="ASAP">ASAP (Urgent)</option>
                  <option value="1 - 3 Months">1 - 3 Months</option>
                  <option value="3 - 6 Months">3 - 6 Months</option>
                  <option value="Flexible">Flexible</option>
                </select>
                <div style={{ position: 'absolute', right: '1.25rem', top: '2.4rem', pointerEvents: 'none', color: 'hsl(var(--text-secondary))' }}>
                  ▼
                </div>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', color: 'hsl(var(--text-primary))', fontSize: '0.85rem', marginBottom: '0.6rem', fontWeight: 500 }}>Message *</label>
              <textarea
                value={formData.message}
                placeholder='Tell us about your project requirements or specific goals...'
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                required
                rows="5"
                style={{ ...inputStyles, ...getFocusStyle('message'), resize: 'vertical' }}
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
              disabled={status === 'submitting'}
              style={{
                alignSelf: 'flex-start',
                marginTop: '0.5rem',
                border: 'none',
                opacity: status === 'submitting' ? 0.7 : 1,
                cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                padding: '16px 36px'
              }}
            >
              <span>{status === 'submitting' ? 'Processing...' : 'Submit Inquiry'}</span>
            </button>

            <AnimatePresence>
              {status === 'success' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} style={{ padding: '1rem', backgroundColor: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)', borderRadius: '8px', color: '#4ade80', marginTop: '1rem', fontSize: '0.9rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <Check size={18} /> Thank you! Your inquiry has been securely routed to our engineering team.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} style={{ color: '#ef4444', marginTop: '1rem', fontSize: '0.9rem', fontWeight: 500 }}>
                  Network fault. Please try again later or email us directly.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
