import { useEffect, useRef } from 'react';
import './App.css'
import broText from '/figma/bro_text.png'
import EmailSignup from './components/EmailSignup';
import FeatureText from './components/FeatureText';

function App() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    let fadeTimeout;

    const handleMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      hero.style.setProperty('--x', `${x}%`);
      hero.style.setProperty('--y', `${y}%`);

      hero.classList.add('ripple-active');
      clearTimeout(fadeTimeout);
      fadeTimeout = setTimeout(() => {
        hero.classList.remove('ripple-active');
      }, 150);
    };

    hero.addEventListener('mousemove', handleMove);
    return () => hero.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <>
      <div className="hero" ref={heroRef}>
        <img src={broText} alt="bro" className="bro-text" />
      </div>
      <section className="feature">
        <div className="feature-left">
          <img src="/figma/feature_card.png" alt="Bro UI" className="feature-img" />
        </div>
        <div className="feature-right">
          <FeatureText />
        </div>
      </section>

      {/* Use Cases Table Section */}
      <section className="usecases">
        <table>
          <thead>
            <tr>
              <th>UseCase</th>
              <th>User</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Secured second hinge date</td>
              <td>Aaron</td>
            </tr>
            <tr>
              <td>Continuous Iteration (Figma)</td>
              <td>Abed Darwezah</td>
              <div className="video-preview">
                <video src="/assets/figma%20section%201.mp4" muted loop playsInline autoPlay />
              </div>
            </tr>
            <tr>
              <td>Helped fix Cursor's issue</td>
              <td>Cherubin</td>
            </tr>
            <tr>
              <td>Website Analysis</td>
              <td>Cherubin</td>
              <div className="video-preview">
                <video src="/assets/silence%20pelase%20demo.mp4" muted loop playsInline autoPlay />
              </div>
            </tr>
            <tr>
              <td>Contextual help</td>
              <td>Mansi</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Email Signup Section */}
      <EmailSignup />
    </>
  )
}

export default App
