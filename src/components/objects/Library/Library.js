import React, { useState, useEffect }   from "react";
import axios                            from "axios";
import RecipeCard                       from "../RecipeCard/RecipeCard"; 
import Pagination                       from "../../UI/Pagination/Pagination";
import './Library.css';
import { appConfig }                    from '../../config';

const Library = ({ 
  switchCase,
  selectedOption,
  difficultyOption,
  clearFlag,
  selectedRandom
  }) => {
  

  const [state, setState] = useState({
    recipes: [],
    loading: true,
    currentPage: 1,
    itemsPerPage: 6
  });

  useEffect(() => {
    fetchRecipes();
  }, [switchCase]);

  const fetchRecipes = async () => {
    try {
      let urlGet = null;
      let filteredRecipes = null;

      if (switchCase === 3) {
        urlGet = `${appConfig.apiEndpoint}?limit=0`;
      } else if (switchCase === 1) {
        urlGet = `${appConfig.apiEndpoint}/tag/${selectedOption}?limit=0`;
      } else {
        urlGet = `${appConfig.apiEndpoint}?limit=0`;
      };

      const response = await axios.get(urlGet);

      if (switchCase === 4) {
        filteredRecipes = response.data.recipes.filter(recipe => recipe.id === selectedRandom);
      } else if ((difficultyOption === 'Easy' || difficultyOption === 'Medium')) {
        filteredRecipes = response.data.recipes.filter(recipe => recipe.difficulty === difficultyOption);
      } else {
        filteredRecipes = response.data.recipes;
      }

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

  const handlePageNum = (pageNum) => {
    setState(prevState => ({
      ...prevState,
      currentPage: pageNum
    }));
  };

  useEffect(() => {
    if(switchCase !== state.switchCase) {
      setState(prevState => ({
        ...prevState,
        switchCase: switchCase
      }));

      fetchRecipes();
    }
  }, [switchCase, selectedOption, difficultyOption, clearFlag, selectedRandom]);

  return (
    <div className="library">
      <div className="library-title">
        <div className="library-title-text">Найденные рецепты</div>
        <div className="library-title-num">{state.recipes.length}</div>
      </div>
      
      <div className="recipe-group">
        {state.loading ? (
          <p>Загрузка рецептов...</p>
        ) : state.recipes.length === 0 ? (
          <p>Рецепты не найдены.</p>
        ) : (
          <div className="recipe-grid">
            {state.recipes.slice((state.currentPage - 1) * state.itemsPerPage, state.currentPage * state.itemsPerPage).map((recipe, index) => (
              <RecipeCard key={index} {...recipe} />
            ))}
          </div>
        )}
      </div>

      <Pagination recipes={state.recipes} itemsPerPage={6} getPageNum={handlePageNum}></Pagination>
    </div>
  );
};

export default Library;