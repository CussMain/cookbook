import React, { useState, useEffect, useCallback, useRef  }     from "react";
import axios                                                    from "axios";
import cook                                                     from './img/cook.png';
import SimpleSelect                                             from '../../UI/SimpleSelect/SimpleSelect';
import RadioButton                                              from '../../UI/RadioButton/RadioButton';
import Button                                                   from '../../UI/Button/Button';
import { appConfig }                                            from '../../config';
import './Filters.css';

function Filters({ onChange , onSelectedRadioButton, onClickRandom, onClickClear,  filterNum}) {
  const [tags                    , setTags]               = useState([]);
  const [cuisines                , setCuisines]           = useState([]);
  const [clickClearFlag          , setClickClearFlag]     = useState(false);

  let GetCuisinesRef = useRef(null);

  // Функция для загрузки тегов
  const fetchTags = useCallback(async () => {
    try {
      const response = await axios.get(`${appConfig.apiEndpoint}/tags`);
      const newTags = response.data.map(tag => ({
        value: tag.toLowerCase(),
        label: tag
      }));

      // Фильтруем tags, исключая значения из cuisines
      const filteredTags = newTags.filter(tag => {
        return !GetCuisinesRef.current.some(cuisine => cuisine.value === tag.value);
      });

      setTags(filteredTags);
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
      GetCuisinesRef.current = [...newCuisines];
      setCuisines(prevCuisines => [...prevCuisines, ...newCuisines]);
    } catch (error) {
      console.error("Ошибка при загрузке тегов:", error);
    }
  }, []);

  // Для инициализации данныхW
  useEffect(() => {
      fetchCuisines();
      fetchTags();
  }, [fetchTags, fetchCuisines]);

  // Обработчик изменения тегов
  const handleChange = (value) => {
    setClickClearFlag(false);
    onChange(value);
  };

  // Обработчик изменения сложности
  const handleRadioButtonChange = (value) => {
    setClickClearFlag(false);
    onSelectedRadioButton(value);
  };

  // Обработчик случайного выбора
  const handleClickRandom = () => {
    const randomValue = Math.floor(Math.random() * filterNum) + 1;
    onClickRandom(randomValue);
    setClickClearFlag(true);
  };

  // Обработчик сброса
  const handleClickClear = (value) => {
    onClickClear(value);
    setClickClearFlag(true);
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
        <img src={cook} alt="Cook" className="filter-ui-component-image"/>
        <p type="text">В нашей жизни, когда время становится все более ценным ресурсом, задача планирования приема пищи становится все более сложной.</p>
        <p type="text">Часто мы сталкиваемся с дилеммой: что приготовить на завтрак, обед или ужин? Каким образом мы можем легко и быстро определиться с выбором блюда и не тратить много времени на принятие этого решения?</p>
        <p type="text">Наш сервис поможет: выбирайте параметры - и вперед!</p>
      </div>

      {/* Нижняя часть */}
      <div className="filter-ui-component-footer">
        <SimpleSelect 
          title="Кухня:"
          options={cuisines}
          defaultValue={null}
          onChange={handleChange}
          placeholder="Выберите кухню"
          resetSelect={clickClearFlag}
        />
        <SimpleSelect 
          title="Тип блюда:"
          options={tags}
          defaultValue={null}
          onChange={handleChange}
          placeholder="Выберите тип"
          resetSelect={clickClearFlag}
        />
        <RadioButton 
          title="Сложность приготовления:"
          options={level} 
          defaultValue={'All'} 
          onChange={handleRadioButtonChange}
          resetButton={clickClearFlag}
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
