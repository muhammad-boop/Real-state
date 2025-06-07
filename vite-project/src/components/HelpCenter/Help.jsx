import React from "react";
import "./Help.css";

const HelpCenter = () => {
  return (
    <section className="help-center">
      <div className="help-container">
        <h2 className="help-title">Need Help?</h2>
        <p className="help-subtext">
          We're here to help you 24/7. Browse topics or contact our team.
        </p>

        <div className="help-options">
          <div className="help-card">
            <h3>📄 FAQs</h3>
            <p>Get answers to common property-related questions.</p>
            <a href="/faqs">Go to FAQs →</a>
          </div>

          <div className="help-card">
            <h3>💬 Live Chat</h3>
            <p>Chat with our team for instant help and guidance.</p>
            <a href="/chat">Start Chat →</a>
          </div>

          <div className="help-card">
            <h3>📞 Call Center</h3>
            <p>Talk directly with our support for urgent concerns.</p>
            <a href="/call">Call Now →</a>
          </div>

          <div className="help-card">
            <h3>📧 Email Support</h3>
            <p>Send detailed queries and we'll respond promptly.</p>
            <a href="mailto:support@privateproperty.com">Send Email →</a>
          </div>

          <div className="help-card">
            <h3>📍 Visit Office</h3>
            <p>Come meet us at our Islamabad branch for full support.</p>
            <a href="/visit">View Location →</a>
          </div>

          <div className="help-card">
            <h3>📝 Submit a Ticket</h3>
            <p>Report issues or requests via support tickets.</p>
            <a href="/ticket">Submit Ticket →</a>
          </div>

          <div className="help-card">
            <h3>🔐 Account Help</h3>
            <p>Need help with login, password, or account settings?</p>
            <a href="/account-help">Account Support →</a>
          </div>

          <div className="help-card">
            <h3>🏘️ Listing Help</h3>
            <p>Need guidance on creating or managing your property listings?</p>
            <a href="/listing-help">Listing Guide →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpCenter;
