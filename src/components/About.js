
import PageHeading from './PageHeading'
import Skills from './Skills'
import { GMAIL, LINKEDIN, TWITTER, CDN_URL, AVATAR } from '../configs/configs'


const About = () => {
  const skills = ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'ReactJS', 'Node.js', 'Redux.js', 'Express.js', 'Serverless Functions', 'Microsoft Azure']
  const startDate = new Date('2021-07-12');
  const today = new Date();
  let totalMonths = (today.getFullYear() - startDate.getFullYear()) * 12 + today.getMonth() - startDate.getMonth();
  if (today.getDate() < startDate.getDate()) {
      totalMonths--;
  }
  const expYears = Math.floor(totalMonths / 12);
  const expMonths = totalMonths % 12;

  return (
    <div className="mt-[15%] md:mt-[12%] flex flex-col justify-center items-center mx-[5%]">
      <PageHeading head="About" />
      <img src={CDN_URL + AVATAR} className='my-5 h-[20%] w-[20%]' alt="Manuj Haritwal" />
      <span className='text-gray-600 text-lg font-semibold pb-6 border-b-2 border-solid border-gray-300 w-[100%] text-center'>Little about me. Also, It's not that hard to find me.</span>
      <p className='text-justify my-[2%] text-gray-900 leading-relaxed max-w-4xl'>
        Full-Stack Engineer with {expYears} years and {expMonths} months of experience in developing modern, reactive, and user-friendly web applications using the latest technologies. Specializing in creating a perfect blend of UI architecture that accounts for goals, needs, and design constraints, resulting in an elegant, efficient, and robust user interface. Proficient in React.js, Redux.js, JavaScript, TypeScript, Node.js and Tailwind CSS. Experienced in building scalable web applications, Serverless computing with Azure, and responsive user interfaces.
      </p>
      <span className='text-gray-500 font-bold mt-5 text-2xl'>Skills</span>
      <div className='flex flex-wrap justify-center items-center'>
        {skills.map(skill => <Skills key={skill} skill={skill} />)}
      </div>
      <span className='text-gray-500 font-bold mt-5 text-2xl'>Contact</span>
      <p className='text-justify my-[2%] text-gray-700'>
        While I may not be a widely recognized figure, I am readily available for connection on my social media platforms.
        <br />
        You can contact me on the <a href={GMAIL} target='_blank'><span className='text-red-700 font-bold'>GMail</span> <span className='text-black font-semibold underline'>manuj.haritwal01@gmail.com</span></a> or you can DM me on <a href={LINKEDIN} target='_blank' className='font-bold'><span className='text-blue-700'>LinkedIn</span></a> or <a href={TWITTER} target='_blank' className='font-bold'><span className='text-blue-500'>Twitter</span></a>
      </p>
    </div>
  )
}

export default About