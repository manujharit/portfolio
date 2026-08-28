import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./Portfolio.scss";

const Portfolio = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Food Delivery App",
      role: "Full Stack Engineer",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop", 
      link: "https://food-delivery-app-view.vercel.app/",
      problem: "I thought initially to build a basic application with mock data but then I thought of building a more complex and advanced application that uses user's location to fetch thier nearby stores to show them restaurant they are familiar with, so I built this app with real time restaurant data. I explored and found that I can use Swiggy's API where I can get all the data I need. It was a great learning experience for me and I learned a lot about full stack development.",
      architecture: "I build 2 microservices, one for the frontend and one for the backend that filters me the data I require from API and also acts as a proxy server to avoid CORS issues.",
      impact: "I learned a lot about Data, APIs, cookie management, and frontend and backend development."
    },
    {
      id: 2,
      title: "Roastery Platform (Infosys Client)",
      role: "Frontend Developer",
      image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop", 
      link: "https://www.starbucksreserve.com/locations/empire-state-building",
      problem: "A high-profile enterprise client needed a highly interactive, accessible, and performant web experience for their flagship location.",
      architecture: "Implemented TypeScript for type safety across team. Utilized custom React Hooks for complex filtering logic. Redesigned the themeing of the project and constantly was in touch with UX team related to designs and updates.",
      impact: "Increased user engagement duration for client's new roastery at Empire State Building. I got Client Recognition for the same."
    },
    {
      id: 3,
      title: "Developer Portfolio",
      role: "Sole Developer",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
      link: "https://manujharitwal.vercel.app/",
      problem: "Needed a digital footprint that accurately reflected my mid-senior level engineering skills, moving beyond basic templates to showcase architecture and design.",
      architecture: "React-based SPA with Framer Motion for page transitions. Implemented an AI-powered ChatBot using advanced prompt engineering to simulate interactive conversations. Styled entirely with custom SCSS using scalable BEM methodology.",
      impact: "Creates a memorable, interactive experience for recruiters and engineering managers, resulting in increased interview conversion rates."
    }
  ];

  return (
    <div className="portfolio-page">
      <header className="page-header">
        <h2 className="page-title">Case Studies</h2>
        <div className="page-title-underline"></div>
        <p className="page-subtitle">A deep dive into the architecture and business impact of my core projects.</p>
      </header>

      <div className="case-studies-list">
        {caseStudies.map((study) => (
          <article className="case-study-card" key={study.id}>
            <div className="case-study-image-wrapper">
              <img src={study.image} alt={study.title} loading="lazy" />
              <div className="case-study-links-overlay">
                 <a href={study.link} target="_blank" rel="noopener noreferrer" className="action-btn">
                   <FaExternalLinkAlt /> Live Demo
                 </a>
              </div>
            </div>
            
            <div className="case-study-content">
              <h3 className="case-study-title">{study.title}</h3>
              <p className="case-study-role">{study.role}</p>
              
              <div className="case-study-details">
                <div className="detail-section">
                  <h4><span className="bullet"></span> The Problem</h4>
                  <p>{study.problem}</p>
                </div>
                
                <div className="detail-section">
                  <h4><span className="bullet"></span> Architecture & Trade-offs</h4>
                  <p>{study.architecture}</p>
                </div>
                
                <div className="detail-section">
                  <h4><span className="bullet"></span> Business Impact</h4>
                  <p className="impact-text">{study.impact}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
