import React from 'react'; // Import React to use JSX
import HowItWorksImages from '@/public/Image/howitworks/howitworks';

function RecommendScr () {
  return(
    <>
      <HowItWorksImages src='/Image4.png' alt='Recommend'/>
      <div className="we-recommend">
      <h4>We recommend ...</h4>
      <p>We send you a bespoke set of fireplace recommendations.</p>
      </div>
    </>
)
}

export default RecommendScr; // Export the component at the end
