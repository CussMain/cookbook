import React , { useState, useEffect }     from "react";
import axios                               from "axios";
import { appConfig }                       from "../../config";
import RecipeCard                          from "../RecipeCard/RecipeCard";
import './ModalContent.css';

const ModalContent = ({ cardNumber }) => {

    const [state, setState] = useState({
        recipes: [],
        loading: true
      });

    const fetchRecipes = async (value) => {
        try {
          let urlGet = null;
          let filteredRecipes = null;
          let response = null;
    
          urlGet = `${appConfig.apiEndpoint}?limit=0`;
          response = await axios.get(urlGet);
          filteredRecipes = response.data.recipes.filter(recipe => recipe.id === cardNumber);

          setState(prevState => ({
            ...prevState,
            recipes: filteredRecipes,
            loading: false
          }));

        } catch (error) {
          console.error("Ошибка при загрузке рецептов:", error);
          setState(prevState => ({
            ...prevState,
            loading: false
          }));
        }
    };

    useEffect(() => {
        fetchRecipes();
    }, [cardNumber]);

      // Обработка нажатия на карточку
    const handleClick = (value) => {
        
    };

    return (
      <div>
            {state.recipes.map((recipe, index) => (
            <RecipeCard key={index} {...recipe} 
                onClick={handleClick}
            />
            ))}
      </div>
    );
  };
  
  export default ModalContent;