import React from 'react'; // Import React to use JSX
import styles from './HowItWorksSection.module.css'; // Import your CSS module for styling

// Define the HowItWorksSection component

function HowItWorksSection () {
  return(
  <section className={styles.howitworks}>
            <div className="step">
            <h2 className={styles.HowItWorks}>How It Works</h2>
                <h4 className={styles.call}>
                Give us a call ...</h4>
                <p className={styles.text}>
                  Call us and book in a "Design Consultation" on a date and time to suit you.</p>
            </div>
</section>
)}

export default HowItWorksSection; // Export the component at the end