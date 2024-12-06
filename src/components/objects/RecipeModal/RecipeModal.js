import React from "react";
import ModalText from "../../UI/ModalText/ModalText";
import './RecipeModal.css';

const RecipeCard = ({
  image,
  name,
  tags,
  caloriesPerServing,
  cuisine,
  servings,
  ingredients,
  cookTimeMinutes,
  instructions
}) => {

  return (
    <div className="recipemodal-ui-component">
      <dev className="recipemodal-ui-component-header">
        <div type="title">{name}</div>
      </dev>
      <dev className="recipemodal-ui-component-main">
        <div className="recipemodal-ui-component-main-info">
          <div type="tags">
            <ModalText
                title='Кухня'
                text={cuisine}
            />
            <ModalText
                title='Теги'
                text={tags.join(', ')}
            />
            <ModalText
                title='Калорийность'
                text={`${caloriesPerServing} ккал`}
            />
            <ModalText
                title='Количество порций'
                text={servings}
            />
            <ModalText
                title='Описание'
                text={[null, ...ingredients].join(`\n\n◯ `).slice(2)}
            />
          </div>
          <div type="instructions">
            <ModalText
                title='Общее время приготовления'
                text={`${cookTimeMinutes} минут`}
            />
            <ModalText
                title='Инструкции по приготовлению'
                text={[null, ...instructions].join(`\n\n◯ `).slice(2)}
            />
          </div>
        </div>
        <div className="recipemodal-ui-component-main-img">
          <img src={image} alt={name} type="img" onClick={() => window.open(image)}/>
        </div>
      </dev>
    </div>
  );
};

export default RecipeCard;