import React, { useState, useEffect, useContext }   from "react";
import axios                                        from "axios";
import RecipeCard                                   from "../RecipeCard/RecipeCard"; 
import Pagination                                   from "../../UI/Pagination/Pagination";
import { appConfig }                                from '../../config';
import { Context }                                  from "../../Context";
import './Library.css';

const Library = ({ 
    selectedOption,
    difficultyOption,
    clearFlag,
    selectedRandom
  }) => {
  
  const { setName } = useContext(Context);

  const [state, setState] = useState({
    recipes: [],
    loading: true,
    currentPage: 1,
    itemsPerPage: 6
  });

  // Загрузка рецептов
  const fetchRecipes = async (value) => {
    try {
      let urlGet = null;
      let filteredRecipes = null;
      let response = null;

      // Логика отображения карточек рецептов:
      switch(value) {
        case 1: // Выбран фильтр и/или сложность
          if (selectedOption?.length ?? 0) {
            urlGet = `${appConfig.apiEndpoint}/tag/${selectedOption}?limit=0`;
          } else {
            urlGet = `${appConfig.apiEndpoint}?limit=0`;
          };

          response = await axios.get(urlGet);

          if (difficultyOption === 'All') {
            filteredRecipes = response.data.recipes;
          } else {
            filteredRecipes = response.data.recipes.filter(recipe => recipe.difficulty === difficultyOption);
          };

          break;
        case 2: // Случайный рецепт

          urlGet = `${appConfig.apiEndpoint}?limit=0`;
          response = await axios.get(urlGet);
          filteredRecipes = response.data.recipes.filter(recipe => recipe.id === selectedRandom);

          break;
        case 3: // Сброс
          urlGet = `${appConfig.apiEndpoint}?limit=0`;
          response = await axios.get(urlGet);
          filteredRecipes = response.data.recipes;
          break;
        default:
          urlGet = `${appConfig.apiEndpoint}?limit=0`;
          response = await axios.get(urlGet);
          filteredRecipes = response.data.recipes;         
      }

      setState(prevState => ({
        ...prevState,
        recipes: filteredRecipes,
        currentPage: 1,
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

  // Обработка возврата от пагинации
  const handlePageNum = (value) => {
    setState(prevState => ({
      ...prevState,
      currentPage: value
    }));
  };

  // Обработка нажатия на карточку
  const handleClick = (value) => {
      setName(value); //-->Context
  }

  // Выбран рецепт
  useEffect(() => {
     fetchRecipes(1);
  }, [selectedOption , difficultyOption]);

  // Выбран случайный рецепт
  useEffect(() => {
    fetchRecipes(2);
}, [selectedRandom]);

 // Сброс рецептов
  useEffect(() => {
    fetchRecipes(3);
}, [clearFlag]);

  return (
    <div className="library-ui-component">
      <div className="library-ui-component-title">
        <div className="library-ui-component-title-text">Найденные рецепты</div>
        <div className="library-ui-component-title-num">{state.recipes.length}</div>
      </div>
      
      <div className="library-ui-component-recipe-group">
        {state.loading ? (
          <p>Загрузка рецептов...</p>
        ) : state.recipes.length === 0 ? (
          <p>Рецепты не найдены.</p>
        ) : (
          <div className="library-ui-component-recipe-grid">
            {state.recipes.slice((state.currentPage - 1) * state.itemsPerPage, state.currentPage * state.itemsPerPage).map((recipe, index) => (
              <RecipeCard key={index} {...recipe} 
                onClick={handleClick}
              />
            ))}
          </div>
        )}
      </div>

      <Pagination recipes={state.recipes} itemsPerPage={6} getPageNum={handlePageNum}></Pagination>
    </div>
  );
};

export default Library;