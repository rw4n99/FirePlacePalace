'use client'

import React, {useState, useEffect} from "react"
import styles from './reviews.module.css'

export default function Reviews () {
    const [reviews, setReviews] = useState([]);
    const [country, setCountry] = useState(null);

    useEffect(() => {
        fetch(`https://seal-app-336e8.ondigitalocean.app/reviews?country=${country}`)
            .then(response => response.json())
            .then(json => setReviews(json))        
    }, [country])

return (
    <div className={styles.reviewContainer}>
        <header className={styles.header}>Trusted.</header>
        <p1 className={styles.text}>
            We've got thousands of happy customers all over the UK. Choose your Country to see the latest review:
        </p1>
        <div className={styles.countryButtons}>
            <button
                onClick={() => setCountry('england')}
                className={`${ country === 'england' ? styles.selectedCountry : styles.countryButton}`}
            >
                England
            </button>
            <button
                onClick={() => setCountry('wales')}
                className={`${ country === 'wales' ? styles.selectedCountry : styles.countryButton}`}
            >
                Wales
            </button>
            <button
                onClick={() => setCountry('scotland')}
                className={`${ country === 'scotland' ? styles.selectedCountry : styles.countryButton}`}
            >
                Scotland
            </button>
        </div>
        <section className={`${ country === null ? styles.reviewWrapperFalse : styles.reviewWrapper}`}>
            {country !== null && (
                <>
                    <p>" {reviews.text} "</p>
                    <p>{reviews.author} - {reviews.location}</p>
                </>
            )}
            
        </section>
    </div>
);
}
