import React, { useEffect , useState , useContext }   from 'react';
import startDark                                      from './img/star_dark.png';
import starEmptyDark                                  from './img/star_empty_dark.png';
import startLight                                     from './img/star.png';
import starEmptyLight                                 from './img/star_empty.png';
import { Context }                                    from '../../Context';
import './Stars.css';

const Stars = ({ difficulty , text}) => {


  const [start      , setStart]       = useState(startLight);
  const [starEmpty  , setStartEmpty]  = useState(starEmptyLight);
  const { userTheme } = useContext(Context);

  useEffect(() => {

    if(userTheme === 'dark') {
      setStart(startDark);
      setStartEmpty(starEmptyDark);
    } else {
      setStart(startLight);
      setStartEmpty(starEmptyLight);
    };

  }, [userTheme]);

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