import React from 'react'; // Import React to use JSX
import styles from './HowItWorksSection.module.css'; // Import your CSS module for styling
import Article from './Article'; // Import the Article component if it's a separate file

// Define the HowItWorksSection component
const HowItWorksSection = () => {
  // Data for each article
  const articlesData = [
    {
      imageSrc: '/images/how-it-works-1.png',
      altText: 'Phone call illustration',
      title: 'Give us a call...',
      description: 'Call us and book in a "Design Consultation" on a date and time that suits you.',
    },
    // Add other articles here
  ];

  // Return JSX layout for the component
  return (
    <section className={styles.howItWorksSection}>
      <h2 className={styles.howItWorksText}>How It Works</h2>
      <div className={styles.tiles}>
        {articlesData.map((article, index) => (
          <Article
            key={index} // Use index as a key for each mapped item
            imageSrc={article.imageSrc}
            altText={article.altText}
            title={article.title}
            description={article.description}
          />
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection; // Export the component at the end