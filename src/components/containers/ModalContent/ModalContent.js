import React , { useState, useEffect, useCallback }     from "react";
import axios                                            from "axios";
import { appConfig }                                    from "../../config";
import RecipeModal                                      from "../../objects/RecipeModal/RecipeModal";
import './ModalContent.css';

const ModalContent = ({ cardNumber }) => {

    const [state, setState] = useState({
        recipes: [],
        loading: true
      });

    const fetchRecipes = useCallback(async () => {
        try {
          let urlGet = null;
          let filteredRecipes = null;
          let response = null;
    
          urlGet = `${appConfig.apiEndpoint}?limit=0`;
          response = await axios.get(urlGet);
          filteredRecipes = response.data.recipes.filter(recipe => recipe.id === cardNumber);

          console.log(filteredRecipes);

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
    }, [cardNumber]);

    useEffect(() => {
        fetchRecipes();
    }, [cardNumber, fetchRecipes]);

    return (
      <div className="modal-content">
            {state.recipes.map((recipe, index) => (
            <RecipeModal key={index} {...recipe} 
                // onClick={handleClick}
            />
            ))}
      </div>
    );
  };
  
  export default ModalContent;