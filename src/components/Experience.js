import { Link } from "react-router"

const Experience = () => {
    const startDate = new Date('2021-07-12');
    const today = new Date();
    let totalMonths = (today.getFullYear() - startDate.getFullYear()) * 12 + today.getMonth() - startDate.getMonth();
    if (today.getDate() < startDate.getDate()) {
        totalMonths--;
    }
    const expYears = Math.floor(totalMonths / 12);
    const expMonths = totalMonths % 12;

    return (
        <div className="flex flex-col my-[5%] mx-auto max-w-4xl">
            <div className="flex flex-col items-center justify-center text-justify gap-6">
                <div className="bg-purple-400 p-2 w-[160px] h-28 flex items-center justify-center rounded-xl shadow-md mx-auto">
                    <div className="bg-purple-500 p-2 w-full h-full text-white font-bold rounded-lg flex flex-col justify-center items-center shadow-inner">
                        <div className="flex items-baseline justify-center gap-1">
                            <span className="text-3xl">{expYears}</span><span className="text-lg">Y</span>
                            <span className="text-3xl ml-1">{expMonths}</span><span className="text-lg">M</span>
                        </div>
                        <span className="text-xs text-center mt-1">of Experience</span>
                    </div>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto" >
                    During these years of Full-Stack Development Experience, I have developed strong problem-solving and critical thinking skills, delivering solutions across the development lifecycle. I have successfully contributed to projects ranging from responsive authentication UIs to automated Azure Serverless workflows and API management.
                </p>
                <span className="text-2xl font-bold text-blue-900 mt-2 text-center w-full">Development</span>
                <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    Utilizing my proficiency with React.js, Node.js, and Cloud Platforms (Azure), I craft robust web applications that prioritize intuitive navigation, system reliability, and user experience. My projects seamlessly combine aesthetic appeal with secure, efficient backend functionality, enhancing both operational efficiency and end-user satisfaction.
                </p>
                <p className="text-lg text-gray-600 mt-2 max-w-3xl mx-auto text-center">
                    That was a brief overview of my professional journey. While you're at it, have a look at a few chosen works that I have created.
                </p>
                <Link to="/work" className="mt-4 px-8 py-3 shadow-md hover:shadow-lg transition-all bg-white rounded-xl shadow-purple-200 border font-bold text-blue-700 hover:text-blue-800 mx-auto text-center block w-max">Projects</Link>
            </div>
        </div>
    )
}

export default Experience