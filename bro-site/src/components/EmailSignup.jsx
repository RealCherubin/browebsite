import { useState } from 'react';

function EmailSignup() {
  const [email, setEmail] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    try {
      // TODO: Replace with real mailing list endpoint
      await fetch('https://api.example.com/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
    } catch (err) {
      // Silently fail for now, still show confirmation modal
      console.error('Subscription failed', err);
    } finally {
      setModalOpen(true);
      setEmail('');
    }
  };

  return (
    <>
      <section className="signup">
        <h2>Broooooooooooooo.</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="signup-input"
            placeholder="How will bro help you today?"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="signup-button">
            Join
          </button>
        </form>
        <p className="signup-note">
          Accepting only 50 people a week. Selected on a random basis. If you need it urgently, email me at cherubinvanjinath@gmail.com
        </p>
      </section>

      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <p style={{ margin: 0 }}>
              You will receive your bro shortly.<br />
              Thanks for joining us
            </p>
            <button onClick={() => setModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default EmailSignup; 