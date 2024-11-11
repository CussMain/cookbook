import React, { Component }     from "react";
import axios                    from "axios";
import RecipeCard               from '../../../RecipeCard'; 

class Library extends Component {

    constructor(props) {
      super(props);
      this.state = {
        urlAPI:           props.urlAPI,
        urlAPItags:       props.urlAPItags,
        recipes: [],
        loading: true,
        currentPage: 1,
        itemsPerPage: 6
      };

      console.log('Library urlAPI:'      , this.state.urlAPI);
      console.log('Library urlAPItags:'  , this.state.urlAPItags);
    }

    componentDidMount() {
      this.fetchRecipes();
    };
  
    fetchRecipes = async () => {
      try {
        const {switchCase, selectedOption, difficultyOption, clearFlag, selectedRandom} = this.props;
        const {urlAPI, urlAPItags} = this.state;
        let urlGet = null;
        let filteredRecipes = null;
        let response = null;

        if (switchCase == 3) {
          urlGet = `${urlAPI}?limit=0`;
        } else if (switchCase == 1) {
          urlGet = `${urlAPItags}/${selectedOption}?limit=0`;
        } else {
          urlGet = `${urlAPI}?limit=0`;
        };

        response = await axios.get(urlGet); // Запрос к API
        console.log('GET:' , urlGet);

        if (switchCase == 4) {
          filteredRecipes = response.data.recipes.filter(recipe => recipe.id == selectedRandom);
        } 
        else if ((difficultyOption == 'Easy') || (difficultyOption == 'Medium')){
          filteredRecipes = response.data.recipes.filter(recipe => recipe.difficulty == difficultyOption);
        }else {
          filteredRecipes = response.data.recipes;
        };

        this.setState({
          recipes: filteredRecipes,
          loading: false
        });
        console.log(response.data.recipes);
      } catch (error) {
        console.error("Ошибка при загрузке рецептов:", error);
        this.setState({ loading: false });
      }
    };
  
    handlePreviousPage = () => {
      if (this.state.currentPage > 1) {
        this.setState(prevState => ({
          currentPage: prevState.currentPage - 1
        }));
      }
    };
  
    handleNextPage = () => {
      const { recipes } = this.state;
      const totalPages = Math.ceil(recipes.length / this.state.itemsPerPage);
      if (this.state.currentPage < totalPages) {
        this.setState(prevState => ({
          currentPage: prevState.currentPage + 1
        }));
      }
    };
  
    render() {

      const {switchCase, selectedOption, difficultyOption, clearFlag, selectedRandom} = this.props;
      console.log('Library switch:' , switchCase, ' data:', selectedOption, difficultyOption, clearFlag, selectedRandom);

      if ( switchCase !== this.state.switchCase) {
        this.setState({ switchCase: switchCase });
        if(switchCase == 1) {
          console.log(`ФИЛЬТРЫ: поиск по ${selectedOption}`);
        } else if (switchCase == 2) {
          console.log(`ФИЛЬТРЫ: сложность ${difficultyOption}`);
        } else if (switchCase == 3) {
          console.log(`ФИЛЬТРЫ: сброс`);
        } else if (switchCase == 4) {
          console.log(`ФИЛЬТРЫ: рандом: ${selectedRandom}`);
        } else {
          console.log(`ФИЛЬТРЫ: неизвестная команда`);
        }
        this.fetchRecipes();
      } 

      const { recipes, loading, currentPage, itemsPerPage } = this.state;
  
      return (
        <div className="library"> 

            <div className="library-title">
              <div className="library-title-text">Найденные рецепты</div>
              <div className="library-title-num">{recipes.length}</div>
            </div>
            
            <div className="recipe-group">
              {loading ? (
                <p>Загрузка рецептов...</p>
              ) : recipes.length === 0 ? (
                <p>Рецепты не найдены.</p>
              ) : (
                <div className="recipe-grid">
                  {recipes.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((recipe, index) => (
                    <RecipeCard key={index} {...recipe} />
                  ))}
                </div>
              )}
            </div>
            {/* Pagination controls */}
            <div className="pagination-controls">
              <button onClick={this.handlePreviousPage} disabled={currentPage === 1}>Назад</button>
              <span>{`${currentPage} of ${Math.ceil(recipes.length / itemsPerPage)}`}</span>
              <button onClick={this.handleNextPage} disabled={currentPage === Math.ceil(recipes.length / itemsPerPage)}>Вперед</button>
            </div>
        </div>
      );
    }
}
  
export default Library;