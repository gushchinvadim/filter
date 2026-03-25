import { Component } from 'react';
import Toolbar from "../Toolbar/Toolbar";
import ProjectList from "../ProjectList/ProjectList";



const PROJECTS_DATA = [
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg", category: "Business Cards" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg", category: "Business Cards" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg", category: "Business Cards" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png", category: "Flayers" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg", category: "Business Cards" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg", category: "Business Cards" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png", category: "Flayers" }
];

class Portfolio extends Component {
  constructor(props) {
    super(props);
    // Инициализация состояния
    this.state = {
      projects: PROJECTS_DATA,
      selectedFilter: 'All'
    };
  }

  // Получение уникальных категорий + "All"
  getUniqueFilters = () => {
    const categories = [...new Set(this.state.projects.map(p => p.category))];
    return ['All', ...categories];
  };

  // Обработчик выбора фильтра
  handleFilterSelect = (filter) => {
    this.setState({ selectedFilter: filter });
  };

  // Фильтрация проектов
  getFilteredProjects = () => {
    const { projects, selectedFilter } = this.state;
    if (selectedFilter === 'All') {
      return projects;
    }
    return projects.filter(project => project.category === selectedFilter);
  };

  render() {
    const filters = this.getUniqueFilters();
    const filteredProjects = this.getFilteredProjects();

    return (
      <div className="portfolio">
   
        <Toolbar
          filters={filters}
          selected={this.state.selectedFilter}
          onSelectFilter={this.handleFilterSelect}
        />
        <ProjectList projects={filteredProjects} />
      </div>
    );
  }
}

export default Portfolio;