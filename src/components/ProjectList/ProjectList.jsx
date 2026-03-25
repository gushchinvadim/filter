
import './ProjectList.css';

const ProjectList = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return <p className="no-projects">Проекты не найдены</p>;
  }

  // Распределяем проекты по 3 колонкам
  const columns = [[], [], []];
  projects.forEach((project, index) => {
    columns[index % 3].push(project);
  });

  return (
    <div className="project-list">
      {columns.map((column, colIndex) => (
        <div key={colIndex} className="project-column">
          {column.map((project, index) => (
            <div key={index} className="project-card">
              <img 
                src={project.img.trim()} 
                alt={project.category} 
                className="project-image"
              />
              {/* <div className="project-category">{project.category}</div> */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProjectList;