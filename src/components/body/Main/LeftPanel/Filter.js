import React        from "react";
import axios        from "axios";
import SimpleSelect from '../../../SimpleSelect';
import RadioButton  from '../../../RadioButton';
import Button       from '../../../Button';
import cook         from '../../../../img/cook.png';
import { click }    from "@testing-library/user-event/dist/click";



// Классовый компонент Filter
class Filter extends React.Component {
  constructor(props) {
    super(props);
    
    // Инициализация состояния
    this.state = {
      urlAPI:       props.urlAPI,
      urlAPItags:   props.urlAPItags,  
      selectedOption: null,
      selectedRadioButton: null,     
      tags: [],
      cuisines: []
    };

    console.log('Filter urlAPI:'      , this.state.urlAPI);
    console.log('Filter urlAPItags:'  , this.state.urlAPItags);

  }

  componentDidMount() {
    // Вызываем методы для загрузки тегов и кухонь при монтировании компонента
    this.fetchTags();
    this.fetchCuisines();
  }

  fetchTags = async () => {
    try {
      const response = await axios.get(`${this.state.urlAPI}/tags`);
      
      // Извлекаем данные из ответа
      const tags = response.data;
      
      // Создаем новый массив options
      const newTags = tags.map(tag => ({
        value: tag.toLowerCase(),
        label: tag
      }));
      
      // Обновляем состояние
      this.setState({
        tags: newTags,
        loading: false
      });
      console.log(this.state.tags);
    } catch (error) {
      console.error("Ошибка при загрузке тегов:", error);
      this.setState({ loading: false });
    }
  };

  fetchCuisines = async () => {
    try {
      const response = await axios.get(`${this.state.urlAPI}?limit=0&select=cuisine`);
      
      // Извлекаем массив рецептов
      const recipes = response.data.recipes;
      
      // Создаем новый массив тегов
      const cuisines = recipes.map(recipe => ({
        value: recipe.cuisine.toLowerCase(),
        label: recipe.cuisine
      }));
      // Обновляем состояние
      this.setState(prevState => ({
        cuisines: [...prevState.cuisines, ...cuisines],
        loading: false
      }), () => {
        console.log(this.state.cuisines);
      });
  
    } catch (error) {
      console.error("Ошибка при загрузке тегов:", error);
      this.setState({ loading: false });
    }
  };

  handleChange = (value) => {
    console.log('Выбраны фильтры:', value);
    this.setState({ selectedOption: value });
    this.props.onChange(value); //--->>onChange

  };

  handleRadioButtonChange = (value) => {
    console.log('Выбрана сложность:', value);
    this.setState({ selectedRadioButton: value });
    this.props.onRadioButtonChange(value); //--->>onRadioButtonChange
  };

  handleClickRandom = (value) => {
    const randomValue = Math.floor(Math.random() * 50) + 1;
    console.log('Случайное число:', randomValue);
    this.setState({ ClickRandom: randomValue });
    this.props.onClickRandom(randomValue); //--->>onClickRandom
  };

  handleClickClear = (value) => {
    console.log('Сбросить фильтры!');
    this.props.onClick(true); //--->>onClick
  };

  render() {
        //Уровень сложности:
        const level = [
          { value: 'All'    , label: 'Любая' },
          { value: 'Easy'   , label: 'Низкая' },
          { value: 'Medium' , label: 'Средняя' },
          { value: 'Hard'   , label: 'Высокая' },
        ];

    return (
      <div className="filter">
        {/* Содержимое filter-top */}
        <div className="filter-top">
          <img src={cook} alt="Cook" className="filter-image" style={{width: '320px', height: '320px'}} />
          <p >
            В нашей жизни, когда время становится все более ценным ресурсом, задача планирования приема пищи становится все более сложной.
          </p>
          <p>
            Часто мы сталкиваемся с дилеммой: что приготовить на завтрак, обед или ужин? Каким образом мы можем легко и быстро определиться с выбором блюда и не тратить много времени на принятие этого решения?
          </p>
          <p>
            Наш сервис поможет: выбирайте параметры - и вперед!
          </p>
        </div>

        {/* Содержимое filter-footer */}
        <div className="filter-footer">
            <SimpleSelect 
              title="Кухня:"
              options={this.state.tags}
              defaultValue={null}
              onChange={this.handleChange}
              placeholder="Выберите тег"
            />
            <SimpleSelect 
              title="Тип блюда:"
              options={this.state.cuisines}
              defaultValue={null}
              onChange={this.handleChange}
              placeholder="Выберите тип"
            />
            <RadioButton 
              title="Сложность приготовления:"
              options={level} 
              defaultValue={null} 
              onChange={this.handleRadioButtonChange}
            />
            <dev className="clear-group">
              <Button
                className="clear-button"
                onClick={this.handleClickClear}
              >Сбросить все фильтры
              </Button>
            </dev>
            <dev className="random-group">
              <dev className="random-group-title">А еще можно попробовать на вкус удачу</dev>
              <Button
                className="random-button"
                onClick={this.handleClickRandom}
              >Мне повезёт!
              </Button>
            </dev>              
        </div>
      </div>
    )
  }  
}

export default Filter;