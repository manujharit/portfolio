import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./About.scss";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const About = () => {
  const { t } = useTranslation();
  const startDate = new Date('2021-07-12');
  const today = new Date();
  let totalMonths = (today.getFullYear() - startDate.getFullYear()) * 12 + today.getMonth() - startDate.getMonth();
  if (today.getDate() < startDate.getDate()) {
      totalMonths--;
  }
  const expYears = Math.floor(totalMonths / 12);
  const expMonths = totalMonths % 12;

  return (
    <div className="about-page">
      <header className="page-header">
        <h2 className="page-title">{t("about.aboutMe")}</h2>
        <div className="page-title-underline"></div>
      </header>

      <motion.section 
        className="about-text"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <p>
          {t("about.aboutMeText1")}
        </p>
        <p>
          {t("about.aboutMeText2", { expYears, expMonths })}
        </p>
      </motion.section>

      <motion.section 
        className="highlights"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h3 className="section-title">{t("about.highlights")}</h3>
        <ul className="stats-list">
          <li className="stats-item">
            <h4 className="stats-value">{expYears}+</h4>
            <p className="stats-text">{t("about.yearsExperience")}</p>
          </li>
          <li className="stats-item">
            <h4 className="stats-value">3+</h4>
            <p className="stats-text">{t("about.awards")}</p>
          </li>
          <li className="stats-item">
            <h4 className="stats-value">99%</h4>
            <p className="stats-text">{t("about.testCoverage")}</p>
          </li>
        </ul>
      </motion.section>

      <motion.section 
        className="about-skills"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h3 className="section-title">{t("about.skills")}</h3>
        <ul className="skills-badge-list">
          {['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Node.js', 'Redux', 'Express.js', 'Serverless Functions', 'Microsoft Azure', 'Tailwind CSS', 'Framer Motion', 'UI/UX Design', 'Figma', 'Responsive Design', 'AI Assisted Development', 'Generative AI', 'Prompt Engineering'].map(skill => (
            <li key={skill} className="skills-badge">{skill}</li>
          ))}
        </ul>
      </motion.section>

      <motion.section 
        className="tech-tradeoffs"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <h3 className="section-title">{t("about.techStack")}</h3>
        <p className="section-subtitle">{t("about.techStackSubtitle")}</p>
        
        <motion.div 
          className="tradeoffs-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="tradeoff-card" variants={fadeInUp}>
            <h4 className="tradeoff-title">React & Redux</h4>
            <div className="tradeoff-content">
              <p><strong>{t("about.primaryUseCase")}</strong> {t("about.reactReduxUseCase")}</p>
              <p><strong>{t("about.tradeoffs")}</strong> {t("about.reactReduxTradeoffs")}</p>
            </div>
          </motion.div>
          
          <motion.div className="tradeoff-card" variants={fadeInUp}>
            <h4 className="tradeoff-title">Node.js & Express</h4>
            <div className="tradeoff-content">
              <p><strong>{t("about.primaryUseCase")}</strong> {t("about.nodeExpressUseCase")}</p>
              <p><strong>{t("about.tradeoffs")}</strong> {t("about.nodeExpressTradeoffs")}</p>
            </div>
          </motion.div>

          <motion.div className="tradeoff-card" variants={fadeInUp}>
            <h4 className="tradeoff-title">Azure Serverless</h4>
            <div className="tradeoff-content">
              <p><strong>{t("about.primaryUseCase")}</strong> {t("about.azureUseCase")}</p>
              <p><strong>{t("about.tradeoffs")}</strong> {t("about.azureTradeoffs")}</p>
            </div>
          </motion.div>

          <motion.div className="tradeoff-card" variants={fadeInUp}>
            <h4 className="tradeoff-title">Tailwind CSS vs SCSS</h4>
            <div className="tradeoff-content">
              <p><strong>{t("about.primaryUseCase")}</strong> {t("about.tailwindUseCase")}</p>
              <p><strong>{t("about.tradeoffs")}</strong> {t("about.tailwindTradeoffs")}</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default About;