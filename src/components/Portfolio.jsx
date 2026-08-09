import { FaEye } from "react-icons/fa";
import "./Portfolio.scss";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Food Delivery App",
      category: "Full Stack Development (React, Redux, Node.js)",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop", 
      link: "https://food-delivery-app-view.vercel.app/"
    },
    {
      id: 2,
      title: "Roastery Platform (Infosys Client)",
      category: "Frontend Development (React, Redux, TS)",
      image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=600&auto=format&fit=crop", 
      link: "https://www.starbucksreserve.com/locations/empire-state-building"
    }
  ];

  return (
    <div className="portfolio-page">
      <header className="page-header">
        <h2 className="page-title">Portfolio</h2>
        <div className="page-title-underline"></div>
      </header>

      <ul className="project-list">
        {projects.map((project) => (
          <li className="project-item" key={project.id}>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <FaEye />
                </div>
                <img src={project.image} alt={project.title} loading="lazy" />
              </figure>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-category">{project.category}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
