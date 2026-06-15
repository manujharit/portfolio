import Contact from "./Contact"
import Experience from "./Experience"

import { CDN_URL, LINKEDIN, AVATAR } from '../configs/configs'

const Home = () => {
    return (
        <div className="flex flex-col mt-[15%] md:mt-[12%] text-black px-[2%] pt-[5%] font-serif">
            <div className="flex flex-row items-center mb-[8%] gap-6">
                <div>
                    <img src={CDN_URL + AVATAR} className="h-[100px] w-[100px] rounded-full object-cover shadow-md" alt="Manuj Haritwal" />
                </div>
                <div className="flex flex-col justify-center">
                    <span className="text-black font-bold text-3xl">
                        Manuj Haritwal
                    </span>
                    <a href={LINKEDIN} target='_blank' className="text-gray-600 hover:text-blue-600 hover:underline transition-colors mt-1">@manuj-haritwal</a>
                </div>
            </div>
            <p className="text-justify mb-[8%] text-lg text-gray-700 leading-relaxed">
                As a developer with a keen eye for design and a love for coding, I specialize in building cutting-edge web applications that prioritize reactivity and user-friendliness. Leveraging the latest technologies, my goal is to create an optimal user interface that strikes a delicate balance between aesthetics and functionality. I firmly believe that a truly exceptional UI architecture seamlessly integrates the objectives and requirements of the end-users, resulting in an elegant, efficient, and robust design that enhances the overall user experience.
            </p>
            <Experience />
            <Contact />
        </div>
    )
}

export default Home