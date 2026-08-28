import "./About.scss";

const About = () => {
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
        <h2 className="page-title">About Me</h2>
        <div className="page-title-underline"></div>
      </header>

      <section className="about-text">
        <p>
          As a developer with a keen eye for design and a love for coding, I specialize in building cutting-edge web applications that prioritize reactivity and user-friendliness. Leveraging the latest technologies and AI-assisted development workflows, my goal is to create an optimal user interface that strikes a delicate balance between aesthetics and functionality. I firmly believe that a truly exceptional UI architecture seamlessly integrates the objectives and requirements of the end-users, resulting in an elegant, efficient, and robust design that enhances the overall user experience.
        </p>
        <p>
          Full-Stack Engineer with {expYears} years and {expMonths} months of experience in developing modern, reactive, and user-friendly web applications using the latest technologies. Specializing in creating a perfect blend of UI architecture that accounts for goals, needs, and design constraints. Proficient in React.js, Redux.js, JavaScript, TypeScript, Node.js, Tailwind CSS, and AI-assisted development. Experienced in building scalable web applications, Serverless computing with Azure, and responsive user interfaces.
        </p>
      </section>

      <section className="highlights">
        <h3 className="section-title">Highlights & Successes</h3>
        <ul className="stats-list">
          <li className="stats-item">
            <h4 className="stats-value">{expYears}+</h4>
            <p className="stats-text">YEARS OF EXPERIENCE</p>
          </li>
          <li className="stats-item">
            <h4 className="stats-value">3+</h4>
            <p className="stats-text">AWARDS & RECOGNITION</p>
          </li>
          <li className="stats-item">
            <h4 className="stats-value">99%</h4>
            <p className="stats-text">TEST COVERAGE</p>
          </li>
        </ul>
      </section>

      <section className="about-skills">
        <h3 className="section-title">Skills</h3>
        <ul className="skills-badge-list">
          {['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Node.js', 'Redux', 'Express.js', 'Serverless Functions', 'Microsoft Azure', 'Tailwind CSS', 'Framer Motion', 'UI/UX Design', 'Figma', 'Responsive Design', 'AI Assisted Development', 'Generative AI', 'Prompt Engineering'].map(skill => (
            <li key={skill} className="skills-badge">{skill}</li>
          ))}
        </ul>
      </section>

      <section className="tech-tradeoffs">
        <h3 className="section-title">Architecture & Tech Stack Choices</h3>
        <p className="section-subtitle">A look into how I choose the right tool for the job.</p>
        
        <div className="tradeoffs-grid">
          <div className="tradeoff-card">
            <h4 className="tradeoff-title">React & Redux</h4>
            <div className="tradeoff-content">
              <p><strong>Primary Use Case:</strong> Complex, state-heavy enterprise applications requiring strict data flow.</p>
              <p><strong>Trade-offs:</strong> Excellent ecosystem and debugging tools, but introduces boilerplate. For simpler apps or static content, I prefer Next.js or raw React Context API to avoid over-engineering.</p>
            </div>
          </div>
          
          <div className="tradeoff-card">
            <h4 className="tradeoff-title">Node.js & Express</h4>
            <div className="tradeoff-content">
              <p><strong>Primary Use Case:</strong> Fast, scalable microservices and APIs with high I/O operations.</p>
              <p><strong>Trade-offs:</strong> Great for real-time apps (WebSockets) due to the event loop. However, for heavily CPU-bound tasks (like image processing), I'd advocate for Go or delegating to serverless functions.</p>
            </div>
          </div>

          <div className="tradeoff-card">
            <h4 className="tradeoff-title">Azure Serverless</h4>
            <div className="tradeoff-content">
              <p><strong>Primary Use Case:</strong> Event-driven architecture and scaling specific endpoints without managing infrastructure.</p>
              <p><strong>Trade-offs:</strong> Highly cost-effective and infinitely scalable. The downside is potential cold starts and vendor lock-in. Mitigation strategies involve keeping functions warm and decoupling core logic.</p>
            </div>
          </div>

          <div className="tradeoff-card">
            <h4 className="tradeoff-title">Tailwind CSS vs SCSS</h4>
            <div className="tradeoff-content">
              <p><strong>Primary Use Case:</strong> Rapid prototyping and maintaining design systems across large teams.</p>
              <p><strong>Trade-offs:</strong> Tailwind speeds up development and prevents dead CSS. However, for highly custom, math-heavy animations or complex component libraries (like this portfolio), I still leverage the power of SCSS (BEM).</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;