import React, { useState, useEffect, useCallback}   from "react";
import axios                                        from "axios";
import cook                                         from './img/cook.png';
import SimpleSelect                                 from '../../UI/SimpleSelect/SimpleSelect';
import RadioButton                                  from '../../UI/RadioButton/RadioButton';
import Button                                       from '../../UI/Button/Button';
import './Filters.css';
import { appConfig }                                from '../../config';

function Filters({ onChange , onSelectedRadioButton, onClickRandom, onClickClear,  filterNum}) {
  const [tags, setTags] = useState([]);
  const [cuisines, setCuisines] = useState([]);

  // Функция для загрузки тегов
  const fetchTags = useCallback(async () => {
    try {
      const response = await axios.get(`${appConfig.apiEndpoint}/tags`);
      const newTags = response.data.map(tag => ({
        value: tag.toLowerCase(),
        label: tag
      }));
      setTags(newTags);
    } catch (error) {
      console.error("Ошибка при загрузке тегов:", error);
    }
  }, []);

  // Функция для загрузки кухонь
  const fetchCuisines = useCallback(async () => {
    try {
      const response = await axios.get(`${appConfig.apiEndpoint}?limit=0&select=cuisine`);
      const newCuisines = response.data.recipes.map(recipe => ({
        value: recipe.cuisine.toLowerCase(),
        label: recipe.cuisine
      }));
      setCuisines(prevCuisines => [...prevCuisines, ...newCuisines]);
    } catch (error) {
      console.error("Ошибка при загрузке тегов:", error);
    }
  }, []);

  // Для инициализации данныхW
  useEffect(() => {
      fetchTags();
      fetchCuisines();
  }, [fetchTags, fetchCuisines]);

  // Обработчик изменения тегов
  const handleChange = (value) => {
    onChange(value);
  };

  // Обработчик изменения сложности
  const handleRadioButtonChange = (value) => {
    onSelectedRadioButton(value);
  };

  // Обработчик случайного выбора
  const handleClickRandom = () => {
    const randomValue = Math.floor(Math.random() * filterNum) + 1;
    onClickRandom(randomValue);
  };

  // Обработчик сброса
  const handleClickClear = () => {
    onClickClear(true);
  };

  // Массив уровней сложности
  const level = [
    { value: 'All'    , label: 'Любая' },
    { value: 'Easy'   , label: 'Низкая' },
    { value: 'Medium' , label: 'Средняя' },
    { value: 'Hard'   , label: 'Высокая' },
  ];

  return (
    <div className="filter-ui-component">
      {/* Верхняя часть */}
      <div className="filter-ui-component-top">
        <img src={cook} alt="Cook" className="filter-ui-component-image" style={{width: '320px', height: '320px'}} />
        <p>В нашей жизни, когда время становится все более ценным ресурсом, задача планирования приема пищи становится все более сложной.</p>
        <p>Часто мы сталкиваемся с дилеммой: что приготовить на завтрак, обед или ужин? Каким образом мы можем легко и быстро определиться с выбором блюда и не тратить много времени на принятие этого решения?</p>
        <p>Наш сервис поможет: выбирайте параметры - и вперед!</p>
      </div>

      {/* Нижняя часть */}
      <div className="filter-ui-component-footer">
        <SimpleSelect 
          title="Кухня:"
          options={tags}
          defaultValue={null}
          onChange={handleChange}
          placeholder="Выберите тег"
        />
        <SimpleSelect 
          title="Тип блюда:"
          options={cuisines}
          defaultValue={null}
          onChange={handleChange}
          placeholder="Выберите тип"
        />
        <RadioButton 
          title="Сложность приготовления:"
          options={level} 
          defaultValue={null} 
          onChange={handleRadioButtonChange}
        />
        <div className="filter-ui-component-clear-button">
          <Button
            onClick={handleClickClear}
          >Сбросить все фильтры
          </Button>
        </div>
        <div className="filter-ui-component-random-button">
          <div className="filter-ui-component-random-button-title">А еще можно попробовать на вкус удачу:</div>
          <Button
            onClick={handleClickRandom}
          >Мне повезет!
          </Button>
        </div>              
      </div>
    </div>
  );
}

export default Filters;
