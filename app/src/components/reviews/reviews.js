import React, { useState, useEffect } from 'react';
import styles from './Reviews.module.css';

function Reviews() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [review, setReview] = useState(null);

  const countries = ['England', 'Scotland', 'Wales'];

  useEffect(() => {
    if (selectedCountry) {
      fetchReview(selectedCountry);
    }
  }, [selectedCountry]);

  const fetchReview = async (country) => {
    try {
      const response = await fetch(`https://seal-app-336e8.ondigitalocean.app/reviews?country=${country}`);
      const data = await response.json();
      setReview(data);
    } catch (error) {
      console.error('Error fetching review:', error);
      setReview({ text: 'Sorry, we could not fetch the review at this time.', author: '', location: '', businessName: '' });
    }
  };

  import reviews from './src/components/Reviews/Reviews'; // Use the correct relative path

  return (
    <div className={styles.reviewsContainer}>
      <h2>What Our Customers Say</h2>
      <div>
        {countries.map((country) => (
          <button
            key={country}
            className={`${styles.countryButton} ${selectedCountry === country ? styles.selectedCountry : ''}`}
            onClick={() => setSelectedCountry(country)}
          >
            {country}
          </button>
        ))}
      </div>
      {review && (
        <div className={styles.reviewText}>
          <p>{review.text}</p>
          <div className={styles.reviewAuthor}>
            - {review.author}, {review.location}
          </div>
        </div>
      )}
    </div>
  );
}

export default Reviews;


import React, { useState } from 'react';
import styles from './reviews.module.css'; // Ensure this file exists and is correctly linked

const Reviews = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [review, setReview] = useState(null); // Add state to store the review data

    const handleCountryClick = async (country) => {
        setSelectedCountry(country);
        try {
            const response = await fetch(`https://seal-app-336e8.ondigitalocean.app/reviews?country=${country}`);
            const data = await response.json();
            setReview(data); // Save the fetched data in the state
        } catch (error) {
            console.error("Error fetching reviews:", error);
            // Handle the error state here
        }
    };

    return (
        <div className={styles.reviewContainer}>
            <div className={styles.countryButtons}>
                <button
                    className={`${styles.countryButton} ${selectedCountry === 'england' ? styles.selectedCountry : ''}`}
                    onClick={() => handleCountryClick('england')}
                >
                    England
                </button>
                <button
                    className={`${styles.countryButton} ${selectedCountry === 'wales' ? styles.selectedCountry : ''}`}
                    onClick={() => handleCountryClick('wales')}
                >
                    Wales
                </button>
                <button
                    className={`${styles.countryButton} ${selectedCountry === 'scotland' ? styles.selectedCountry : ''}`}
                    onClick={() => handleCountryClick('scotland')}
                >
                    Scotland
                </button>
            </div>
            {review && (
                <div className={styles.reviewDisplay}>
                    <p>{review.text}</p>
                    <p>- {review.author}, {review.location}</p>
                </div>
            )}
        </div>
    );
};

export default Reviews;
