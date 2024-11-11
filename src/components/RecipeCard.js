import React from "react";
import timer from '../img/timer.png'
import Stars from "./Stars";

const RecipeCard = ({
  image,
  name,
  instructions,
  cookTimeMinutes,
  difficulty,
  cuisine,
  mealType
}) => {
  return (
    <div className="recipe-card-group">  
        <h4>{name}</h4>
        <div className="recipe-card">
            <div className="recipe-card-left">
                <img src={image} alt={name} className="recipe-image" />
            </div>
            <div className="recipe-info">
                <p>{instructions}</p>
                <div className="recipe-details">    
                    <div className="recipe-cooking-time">
                      <img src={timer} alt={name} className="recipe-image-timer" />
                      <span>{cookTimeMinutes}</span>
                      <label htmlFor="cookTimeMinutes">минут</label>
                    </div>
                    <div className="recipe-difficulty">
                      <label htmlFor="difficulty">Сложность: </label>
                      <Stars difficulty={difficulty} />
                    </div>
                    <div className="recipe-cuisine">
                      <span>{cuisine}</span>
                    </div>
                    <div className="recipe-mealType">
                      <span>{mealType}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default RecipeCard;