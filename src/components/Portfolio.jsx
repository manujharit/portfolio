import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./Portfolio.scss";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Portfolio = () => {
  const { t } = useTranslation();
  const translatedStudies = t("portfolio.studies", { returnObjects: true }) || [];
  const baseStudies = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop", 
      link: "https://food-delivery-app-view.vercel.app/"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop", 
      link: "https://www.starbucksreserve.com/locations/empire-state-building"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
      link: "https://manujharitwal.vercel.app/"
    }
  ];

  const caseStudies = baseStudies.map((study, index) => ({
    ...study,
    ...(translatedStudies[index] || {})
  }));

  return (
    <div className="portfolio-page">
      <header className="page-header">
        <h2 className="page-title">{t("portfolio.caseStudies")}</h2>
        <div className="page-title-underline"></div>
        <p className="page-subtitle">{t("portfolio.caseStudiesSubtitle")}</p>
      </header>

      <div className="case-studies-list">
        {caseStudies.map((study, index) => (
          <motion.article 
            className="case-study-card" 
            key={study.id}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
          >
            <div className="case-study-image-wrapper">
              <img src={study.image} alt={study.title} loading="lazy" />
               <div className="case-study-links-overlay">
                 <a href={study.link} target="_blank" rel="noopener noreferrer" className="action-btn">
                   <FaExternalLinkAlt /> {t("portfolio.liveDemo")}
                 </a>
              </div>
            </div>
            
            <div className="case-study-content">
              <h3 className="case-study-title">{study.title}</h3>
              <p className="case-study-role">{study.role}</p>
              
              <div className="case-study-details">
                <div className="detail-section">
                  <h4><span className="bullet"></span> {t("portfolio.theProblem")}</h4>
                  <p>{study.problem}</p>
                </div>
                
                <div className="detail-section">
                  <h4><span className="bullet"></span> {t("portfolio.architecture")}</h4>
                  <p>{study.architecture}</p>
                </div>
                
                <div className="detail-section">
                  <h4><span className="bullet"></span> {t("portfolio.businessImpact")}</h4>
                  <p className="impact-text">{study.impact}</p>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
