import React from "react";
import './RecipeModal.css';

const RecipeCard = ({
  id,
  image,
  name,
  instructions,
  cookTimeMinutes,
  difficulty,
  cuisine,
  mealType,
  onClick
}) => {

  return (
    <div className="recipemodal-ui-component">
      <dev className="recipemodal-ui-component-header">
        <div type="title">{name}</div>
      </dev>
      <dev className="recipemodal-ui-component-main">
        <div className="recipemodal-ui-component-main-info">
          <div type="tags"></div>
          <div type="instructions"></div>
        </div>
        <div className="recipemodal-ui-component-main-img">
          <img src={image} alt={name} type="img" />
        </div>
      </dev>
    </div>
  );
};

export default RecipeCard;