import React from "react";
import Stars from "../../UI/Stars/Stars";
import Timer from "../../UI/Timer/Timer";
import './RecipeCard.css';

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
    <div className="recipecard-ui-component">  
        <label type = "title">{name}</label>
        <div className="recipecard-ui-component-card">
            <div className="recipecard-ui-component-left">
                <img src={image} alt={name} className="recipecard-ui-component-image" />
            </div>
            <div className="recipecard-ui-component-info">
                <p>{instructions}</p>
                <div className="recipecard-ui-component-details">    
                    <div className="recipecard-ui-component-time">
                      <Timer
                        name={name}
                        cookTimeMinutes={cookTimeMinutes}
                        metric='минут'
                      />
                    </div>
                    <div className="recipecard-ui-component-difficulty">
                      <Stars 
                        text = 'Сложность:'
                        difficulty={difficulty} 
                      />
                    </div>
                    <div className="recipecard-ui-component-cuisine">
                      <span>Кухня: {cuisine}</span>
                    </div>
                    <div className="recipecard-ui-component-mealType">
                      <span>Тип: {mealType.join(' ')}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default RecipeCard;