import React        from 'react';
import start        from './img/star.png';
import starEmpty    from './img/star_empty.png';
import './Stars.css';

const Stars = ({ difficulty , text}) => {
  const getStarImages = () => {
    switch(difficulty) {
      case 'Hard':
        return [start, start, start];
      case 'Medium':
        return [start, start, starEmpty];
      default:
        return [start, starEmpty, starEmpty];
    }
  };

  const renderStars = () => {
    return getStarImages().map((src, index) => (
      <img key={index} src={src} alt={`Star ${index + 1}`} />
    ));
  };

  return (
    <div className='stars-ui-component'>
      <label htmlFor={difficulty}>{text}</label>
      {renderStars()}
    </div>
  );
};

export default Stars;